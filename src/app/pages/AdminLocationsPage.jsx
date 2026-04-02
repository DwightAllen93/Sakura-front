import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import { Upload, X } from "lucide-react";
import {
  Plus,
  Trash2,
  MapPin,
  Edit2,
  LogOut,
} from "lucide-react";
import { CherryBlossoms } from "../components/CherryBlossoms";

export function AdminLocationsPage() {

  const {
    locations,
  } = useData();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const API =
    "http://localhost/sakuracare-api/uploads/locations/";

  const [editImages, setEditImages] =
    useState([]);

  const [previewImages, setPreviewImages] =
    useState([]);

  const [editingLocationId, setEditingLocationId] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  const [selectedLocation,
    setSelectedLocation] =
    useState(null);

  const [currentImg,
    setCurrentImg] =
    useState(0);

  const [locationForm, setLocationForm] =
    useState({
      name: "",
      lat: "",
      lng: "",
      mapLink: "",
      images: [],
    });


  // ===================== SUBMIT

  const handleLocationSubmit = async (e) => {

    e.preventDefault();

    const formData = new FormData();

    formData.append(
      "name",
      locationForm.name
    );

    formData.append(
      "lat",
      locationForm.lat
    );

    formData.append(
      "lng",
      locationForm.lng
    );

    formData.append(
      "mapLink",
      locationForm.mapLink
    );
    locationForm.images.forEach(
      img => {
        formData.append(
          "images[]",
          img
        );
      }
    );

    if (editingLocationId) {

      formData.append(
        "id",
        editingLocationId
      );

      await fetch(
        "https://ejeepthesis.site/backend/update-location.php",
        {
          method: "POST",
          body: formData,
        }
      );

    } else {

      await fetch(
        "https://ejeepthesis.site/backend/add-location.php",
        {
          method: "POST",
          body: formData,
        }
      );

    }

    window.location.reload();

  };


  // ===================== EDIT

  const handleEditLocation = (location) => {

    setLocationForm({
      name: location.name,
      lat: location.lat,
      lng: location.lng,
      mapLink: location.mapLink || "",
      images: [],
    });

    setEditImages(
      location.images || []
    );

    setEditingLocationId(
      location.id
    );

  };


  // ===================== DELETE

  const handleRemoveLocation = async (id) => {

    if (!window.confirm("Delete?"))
      return;

    const formData =
      new FormData();

    formData.append("id", id);

    await fetch(
      "https://ejeepthesis.site/backend/delete-location.php",
      {
        method: "POST",
        body: formData,
      }
    );

    window.location.reload();

  };


  // ===================== IMAGE

  const handleImageChange = (e) => {

    const files =
      Array.from(e.target.files);

    setLocationForm(prev => ({
      ...prev,
      images: [
        ...prev.images,
        ...files,
      ],
    }));

    const previews =
      files.map(file =>
        URL.createObjectURL(file)
      );

    setPreviewImages(prev => [
      ...prev,
      ...previews,
    ]);

  };


  const removeImage = (index) => {

    setPreviewImages(prev =>
      prev.filter((_, i) => i !== index)
    );

    setLocationForm(prev => ({
      ...prev,
      images:
        prev.images.filter(
          (_, i) => i !== index
        ),
    }));

  };


  // ===================== MAP

  useEffect(() => {

    if (!window.google) return;

    const mapDiv =
      document.getElementById("map");

    if (!mapDiv) return;

    const map =
      new window.google.maps.Map(
        mapDiv,
        {
          center: {
            lat: -25.2744,
            lng: 133.7751,
          },
          zoom: 6,
        }
      );

    let marker = null;

    map.addListener("click", e => {

      const lat =
        e.latLng.lat();

      const lng =
        e.latLng.lng();

      if (marker)
        marker.setMap(null);

      marker =
        new window.google.maps.Marker({
          position: { lat, lng },
          map,
        });

      setLocationForm(prev => ({
        ...prev,
        lat,
        lng,
      }));

    });

  }, []);


  // ===================== UI

  return (

    <div className="bg-background min-h-screen">

      <section
        className="py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(/background.png)`
        }}
      >

        <CherryBlossoms />

        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="absolute top-6 right-6 bg-white px-4 py-2 rounded"
        >
          <LogOut />
        </button>

        <h1 className="text-center text-4xl text-primary">
          Manage Locations
        </h1>

      </section>


      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-8">


            {/* FORM */}

            <div className="bg-white p-8 rounded-2xl shadow">

<form
  onSubmit={handleLocationSubmit}
  className="space-y-4"
>

  <input
    className="w-full border p-3 rounded"
    placeholder="Name"
    value={locationForm.name}
    onChange={(e) =>
      setLocationForm({
        ...locationForm,
        name: e.target.value,
      })
    }
  />

  <input
    className="w-full border p-3"
    value={locationForm.lat}
    readOnly
  />

  <input
    className="w-full border p-3"
    value={locationForm.lng}
    readOnly
  />

  {/* MAP LINK INPUT */}

  <input
    className="w-full border p-3 rounded"
    placeholder="Paste Google Map link"
    value={locationForm.mapLink}
    onChange={(e) => {

      const link = e.target.value;

      let lat = locationForm.lat;
      let lng = locationForm.lng;

      // @lat,lng
      let match = link.match(/@(-?\d+\.\d+),(-?\d+\.\d+)/);

      if (match) {
        lat = match[1];
        lng = match[2];
      }

      // !3dlat!4dlng
      let match2 = link.match(/!3d(-?\d+\.\d+)!4d(-?\d+\.\d+)/);

      if (match2) {
        lat = match2[1];
        lng = match2[2];
      }

      // q=lat,lng
      let match3 = link.match(/q=(-?\d+\.\d+),(-?\d+\.\d+)/);

      if (match3) {
        lat = match3[1];
        lng = match3[2];
      }

      setLocationForm({
        ...locationForm,
        mapLink: link,
        lat,
        lng,
      });

    }}
  />

  {/* ✅ ALWAYS VISIBLE BUTTON */}

  <a
    href={
      locationForm.mapLink
        ? locationForm.mapLink
        : "https://maps.google.com"
    }
    target="_blank"
    rel="noreferrer"
    className="inline-block bg-blue-500 text-white px-3 py-1 rounded text-sm"
  >
    Open Google Map
  </a>

  {/* MAP UI */}

  <div
    id="map"
    style={{
      width: "100%",
      height: "300px",
    }}
  ></div>


                {/* upload */}

                <label className="flex gap-2 border p-3 cursor-pointer">

                  <Upload />

                  Upload images

                  <input
                    type="file"
                    multiple
                    hidden
                    onChange={handleImageChange}
                  />

                </label>


                {/* preview */}

                <div className="flex gap-2 flex-wrap">

                  {previewImages.map((img, i) => (

                    <div key={i} className="relative">

                      <img
                        src={img}
                        className="w-20 h-20"
                      />

                      <button
                        type="button"
                        onClick={() =>
                          removeImage(i)
                        }
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>

                    </div>

                  ))}

                </div>


                {/* stored images */}

                <div className="flex gap-2 flex-wrap">

                  {editImages.map((img, i) => (

                    <div key={i} className="relative">

                      <img
                        src={API + img}
                        className="w-20 h-20"
                      />

                      <button
                        type="button"
                        onClick={async () => {

                          const fd =
                            new FormData();

                          fd.append(
                            "image",
                            img
                          );

                          await fetch(
                            "https://ejeepthesis.site/backend/delete-location-image.php",
                            {
                              method: "POST",
                              body: fd,
                            }
                          );
                          // remove from editImages
                          setEditImages(prev =>
                            prev.filter(imgName => imgName !== img)
                          );

                          // remove from modal
                          if (selectedLocation) {
                            setSelectedLocation(prev => ({
                              ...prev,
                              images: prev.images.filter(
                                imgName => imgName !== img
                              ),
                            }));
                          }



                        }}
                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                      >
                        <X className="w-4 h-4" />
                      </button>

                    </div>

                  ))}

                </div>


                <button
                  className="inline-block bg-[#f89d64] text-white px-4 py-2 rounded-lg text-sm hover:bg-primary transition-all duration-300 "
                >
                  Save
                </button>

              </form>

            </div>


            {/* LIST */}

            <div className="bg-white p-8 rounded-2xl shadow">

              {locations.map(location => (

                <div
                  key={location.id}
                  className="border p-3 mb-2 flex justify-between"
                >

                  <div>

                    <b
                      className="cursor-pointer"
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowModal(true);
                        setCurrentImg(0);
                      }}
                    >
                      {location.name}
                    </b>

                    <div>
                      {location.lat}, {location.lng}
                    </div>
                      {location.mapLink && (
 <a
  href={
    locationForm.mapLink
      ? locationForm.mapLink
      : "https://maps.google.com"
  }
  target="_blank"
  rel="noreferrer"
  className="inline-block bg-blue-500 text-white px-3 py-1 rounded text-sm"
>
  Open Google Map
</a>
)}
                  </div>

                  <div>

                    <button
                      onClick={() =>
                        handleEditLocation(location)
                      }
                    >
                      <Edit2 />
                    </button>

                    <button
                      onClick={() =>
                        handleRemoveLocation(location.id)
                      }
                    >
                      <Trash2 />
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* MODAL */}

      {showModal && selectedLocation && (

        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">

          <div className="bg-white p-6 w-[600px]">

            <img
              src={
                API +
                selectedLocation.images[currentImg]
              }
              className="w-full h-64"
            />

            <div className="flex gap-2 flex-wrap">

              {selectedLocation.images.map(
                (img, i) => (

                  <div key={i} className="relative">

                    <img
                      src={API + img}
                      className="w-16"
                      onClick={() =>
                        setCurrentImg(i)
                      }
                    />


                  </div>

                )
              )}

            </div>

            <button
              className="inline-block bg-[#f89d64] text-white px-4 py-2 rounded-lg text-sm hover:bg-primary transition-all duration-300 mt-1"
              onClick={() =>
                setShowModal(false)
              }
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>

  );

}