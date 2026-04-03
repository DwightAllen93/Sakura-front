import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import { Upload, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

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
  const [deleteId, setDeleteId] = useState(null);
  const API =
    "https://ejeepthesis.site/backend/uploads/locations/";

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
  const [addresses, setAddresses] = useState({});
  const [localLocations, setLocalLocations] = useState(locations);
  useEffect(() => {
  setLocalLocations(locations);
}, [locations]);

  useEffect(() => {
  locations.forEach((loc) => {

    if (!loc.lat || !loc.lng) return;


    if (addresses[loc.id]) return;

    fetch(
  `https://nominatim.openstreetmap.org/reverse?format=json&lat=${loc.lat}&lon=${loc.lng}`,
  {
    headers: {
      "User-Agent": "sakuracare-app"
    }
  }
)
      .then((res) => res.json())
      .then((data) => {
        setAddresses((prev) => ({
          ...prev,
          [loc.id]: data.display_name,
        }));
      })
      .catch(() => {
        console.log("Failed to fetch address");
      });

  });
}, [locations]);
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

  formData.append("name", locationForm.name);
  formData.append("lat", locationForm.lat);
  formData.append("lng", locationForm.lng);
  formData.append("mapLink", locationForm.mapLink);

  locationForm.images.forEach((img) => {
    formData.append("images[]", img);
  });

  try {
    let res;

    if (editingLocationId) {
      formData.append("id", editingLocationId);

      res = await fetch(
        "https://ejeepthesis.site/backend/update-location.php",
        {
          method: "POST",
          body: formData,
        }
      );

      toast.success("🌸 Location updated!");
    } else {
      res = await fetch(
        "https://ejeepthesis.site/backend/add-location.php",
        {
          method: "POST",
          body: formData,
        }
      );

      toast.success("🌸 Location added!");
    }
setLocalLocations(prev => [
  ...prev,
  {
    id: Date.now(), // temporary id
    ...locationForm,
    images: previewImages
  }
]);
    // ✅ RESET FORM (instead of reload)
    setLocationForm({
      name: "",
      lat: "",
      lng: "",
      mapLink: "",
      images: [],
    });

    setPreviewImages([]);
    setEditImages([]);
    setEditingLocationId(null);

  } catch (error) {
    console.log(error);
    toast.error("Something went wrong ❌");
  }
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

const handleRemoveLocation = async () => {
  if (!deleteId) return;

  const formData = new FormData();
  formData.append("id", deleteId);

  try {
    await fetch(
      "https://ejeepthesis.site/backend/delete-location.php",
      {
        method: "POST",
        body: formData,
      }
    );

    toast.success("🗑️ Location deleted!");

    // ✅ THIS IS THE MAGIC LINE
    setLocalLocations(prev =>
      prev.filter(loc => loc.id !== deleteId)
    );

    setDeleteId(null);

  } catch (err) {
    console.log(err);
    toast.error("Delete failed ❌");
  }
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
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#fce7f3",
            color: "#9d174d",
            border: "1px solid #f9a8d4",
            borderRadius: "12px",
          },
        }}
      />
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
              <h2 className="text-xl font-semibold text-primary mb-4">
                📍 Location List
              </h2>
              {localLocations.map(location => (

                <div
                  key={location.id}
                  className="bg-pink-50 border border-pink-100 rounded-xl p-4 mb-4 shadow-sm hover:shadow-md transition-all duration-300 flex justify-between items-start"
                >

                  {/* LEFT CONTENT */}
                  <div className="space-y-2">

                    {/* TITLE */}
                    <div
                      className="flex items-center gap-2 cursor-pointer"
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowModal(true);
                        setCurrentImg(0);
                      }}
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>

                      <h3 className="font-semibold text-gray-800 text-lg">
                        {location.name}
                      </h3>
                    </div>

                    {/* COORDINATES */}
                    <p className="text-sm text-gray-500">
  {addresses[location.id] ? (
    addresses[location.id]
  ) : (
    <span className="animate-pulse text-pink-400">
      🌸 Loading address...
    </span>
  )}
</p>

                    {/* MAP LINK */}
                    {location.mapLink && (
                      <a
                        href={location.mapLink}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-sm text-primary hover:underline"
                      >
                        Open in Google Maps →
                      </a>
                    )}

                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex gap-2">

                    <button
                      onClick={() => handleEditLocation(location)}
                      className="p-2 rounded-lg bg-blue-100 hover:bg-blue-200 transition"
                    >
                      <Edit2 className="w-4 h-4 text-blue-600" />
                    </button>

                    <button
                      onClick={() => setDeleteId(location.id)}
                      className="p-2 rounded-lg bg-red-100 hover:bg-red-200 transition"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
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
      {deleteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white rounded-2xl p-6 w-[350px] text-center shadow-xl">

            <h2 className="text-xl font-semibold text-primary mb-3">
              🌸 Confirm Delete
            </h2>

            <p className="text-gray-600 mb-6">
              Are you sure you want to delete this location?
            </p>

            <div className="flex justify-center gap-4">

              <button
                onClick={() => setDeleteId(null)}
                className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
              >
                Cancel
              </button>

              <button
                onClick={handleRemoveLocation}
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-pink-600"
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      )}
    </div>

  );

}