import { useState } from "react";
import { useNavigate } from "react-router";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import {
  Plus,
  Briefcase,
  LogOut,
  Upload,
  X,
} from "lucide-react";
import { CherryBlossoms } from "../components/CherryBlossoms";

export function AdminServicesPage() {

  const { services } = useData();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const [serviceForm, setServiceForm] = useState({
    title: "",
    tagline: "",
    description: "",
    icon: "home",
    image: null,
  });

  const [preview, setPreview] = useState(null);


  // IMAGE CHANGE
  const handleImageChange = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setServiceForm({
      ...serviceForm,
      image: file,
    });

    setPreview(URL.createObjectURL(file));
  };


  // SUBMIT
  const handleServiceSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", serviceForm.title);
    formData.append("tagline", serviceForm.tagline);
    formData.append("description", serviceForm.description);
    formData.append("icon", serviceForm.icon);
    formData.append("image", serviceForm.image);

    try {

      const res = await fetch(
        "https://ejeepthesis.site/backend/add-service.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success) {

        alert("Service added");

        setServiceForm({
          title: "",
          tagline: "",
          description: "",
          icon: "home",
          image: null,
        });

        setPreview(null);
      }

    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="bg-background min-h-screen">


      {/* HEADER */}
      <section
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(/background.png)` }}
      >

        <CherryBlossoms />

        <button
          onClick={() => {
            if (window.confirm("Logout?")) {
              logout();
              navigate("/login");
            }
          }}
          className="absolute top-6 right-6 bg-white px-4 py-2 rounded"
        >
          Logout
        </button>

        <div className="text-center">
          <h1 className="text-4xl text-primary">
            Manage Services
          </h1>
        </div>

      </section>



      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-7xl mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-8">


            {/* FORM */}
            <div className="bg-white p-8 rounded-2xl shadow">

              <h2 className="text-2xl mb-4 flex gap-2">
                <Plus /> Add Service
              </h2>


              <form
                onSubmit={handleServiceSubmit}
                className="space-y-4"
              >


                {/* TITLE */}
                <input
                  className="w-full border p-3 rounded"
                  placeholder="Title"
                  value={serviceForm.title}
                  onChange={(e) =>
                    setServiceForm({
                      ...serviceForm,
                      title: e.target.value,
                    })
                  }
                />


                {/* TAGLINE */}
                <input
                  className="w-full border p-3 rounded"
                  placeholder="Tagline"
                  value={serviceForm.tagline}
                  onChange={(e) =>
                    setServiceForm({
                      ...serviceForm,
                      tagline: e.target.value,
                    })
                  }
                />


                {/* DESCRIPTION */}
                <textarea
                  className="w-full border p-3 rounded"
                  placeholder="Description"
                  value={serviceForm.description}
                  onChange={(e) =>
                    setServiceForm({
                      ...serviceForm,
                      description: e.target.value,
                    })
                  }
                />


                {/* ICON */}
                <select
                  className="w-full border p-3 rounded"
                  value={serviceForm.icon}
                  onChange={(e) =>
                    setServiceForm({
                      ...serviceForm,
                      icon: e.target.value,
                    })
                  }
                >
                  <option value="home">Home</option>
                  <option value="users">Users</option>
                  <option value="heart">Heart</option>
                  <option value="briefcase">Briefcase</option>
                </select>



                {/* IMAGE UPLOAD BOX */}
                <div>

                  <label className="block mb-2">
                    Image Upload
                  </label>

                  <div className="border-2 border-dashed rounded-lg p-6 text-center">

                    {!preview && (

                      <label className="cursor-pointer flex flex-col items-center gap-2">

                        <Upload className="w-8 h-8 text-gray-500" />

                        <span className="text-sm text-gray-500">
                          Click to upload image
                        </span>

                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                        />

                      </label>

                    )}


                    {preview && (

                      <div className="relative inline-block">

                        <img
                          src={preview}
                          alt="preview"
                          className="w-40 h-40 object-cover rounded-lg"
                        />

                        <button
                          type="button"
                          onClick={() => {
                            setPreview(null);
                            setServiceForm({
                              ...serviceForm,
                              image: null,
                            });
                          }}
                          className="absolute top-1 right-1 bg-black/70 text-white rounded-full p-1"
                        >
                          <X size={14} />
                        </button>

                      </div>

                    )}

                  </div>

                </div>



                <button
                  className="bg-primary text-white px-6 py-2 rounded"
                >
                  Add Service
                </button>

              </form>

            </div>



            {/* LIST */}
            <div className="bg-white p-8 rounded-2xl shadow">

              <h2 className="text-2xl flex gap-2 mb-4">
                <Briefcase />
                All Services
              </h2>

              {services.map((s) => (
                <div
                  key={s.id}
                  className="border p-3 mb-2 rounded"
                >
                  <b>{s.title}</b>
                  <div>{s.tagline}</div>
                </div>
              ))}

            </div>


          </div>

        </div>

      </section>

    </div>
  );
}