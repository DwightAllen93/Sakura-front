import { useState } from "react";
import { useNavigate } from "react-router";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

import {
  Edit2,
  Trash2,
  Plus,
  Briefcase,
  LogOut,
  Upload,
  X,
} from "lucide-react";
import { CherryBlossoms } from "../components/CherryBlossoms";

export function AdminServicesPage() {
const [deleteId, setDeleteId] = useState(null);
const { services, setServices } = useData();
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

    const url = editingId
  ? "https://ejeepthesis.site/backend/update-service.php"
  : "https://ejeepthesis.site/backend/add-service.php";

if (editingId) {
  formData.append("id", editingId); // 🔥 THIS WAS MISSING
}

const res = await fetch(url, {
  method: "POST",
  body: formData,
});

      const data = await res.json();

 if (data.success) {

toast.success(
  editingId
    ? "🌸 Service updated successfully!"
    : "🌸 Service added successfully!"
);

  if (editingId) {
    // ✅ UPDATE ONLY AFTER SUCCESS
    setServices(prev =>
      prev.map(s =>
        s.id === editingId
          ? { ...s, ...serviceForm }
          : s
      )
    );
  } else {
    // ✅ ADD
    const newService = {
      id: Date.now(),
      ...serviceForm,
      image: preview,
    };

    setServices(prev => [...prev, newService]);
  }

  // RESET
  setServiceForm({
    title: "",
    tagline: "",
    description: "",
    icon: "home",
    image: null,
  });

  setPreview(null);
  setEditingId(null);
}

    } catch (err) {
  console.log(err);
  toast.error("Something went wrong ❌");
}
  };

 const handleDelete = async () => {
  if (!deleteId) return;

  try {
    const res = await fetch(
      "https://ejeepthesis.site/backend/delete-service.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: deleteId }),
      }
    );

    const data = await res.json();

    if (data.success) {
      setServices(prev => prev.filter(s => s.id !== deleteId));
      toast.success("🗑️ Service deleted!");
    }

  } catch (err) {
    console.log(err);
    toast.error("Delete failed ❌");
  }

  setDeleteId(null); // close modal
};
  const [editingId, setEditingId] = useState(null);
 const handleEdit = (service) => {
  setServiceForm({
    title: service.title,
    tagline: service.tagline,
    description: service.description,
    icon: service.icon,
    image: null,
  });

  // ✅ SHOW EXISTING IMAGE
  if (service.image) {
    setPreview(
      "https://ejeepthesis.site/backend/uploads/" + service.image
    );
  }

  setEditingId(service.id);
};



  return (
    <div className="bg-background min-h-screen">
{deleteId && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white rounded-2xl p-6 w-[350px] text-center shadow-xl">

      <h2 className="text-xl font-semibold text-primary mb-3">
        🌸 Confirm Delete
      </h2>

      <p className="text-gray-600 mb-6">
        Are you sure you want to delete this service?
      </p>

      <div className="flex justify-center gap-4">

        {/* CANCEL */}
        <button
          onClick={() => setDeleteId(null)}
          className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
        >
          Cancel
        </button>

        {/* CONFIRM */}
        <button
          onClick={handleDelete}
          className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-pink-600"
        >
          Delete
        </button>

      </div>

    </div>

  </div>
)}
<Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#fce7f3",
      color: "#9d174d",
      border: "1px solid #f9a8d4",
      borderRadius: "12px",
      padding: "12px 16px",
      fontWeight: "500",
    },
    success: {
      iconTheme: {
        primary: "#ec4899",
        secondary: "#ffffff",
      },
    },
    error: {
      style: {
        background: "#ffe4e6",
        color: "#be123c",
      },
    },
  }}
/>
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



                <button className="bg-primary text-white px-6 py-2 rounded">
                  {editingId ? "Update Service" : "Add Service"}
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
                <div key={s.id} className="border p-3 mb-2 rounded flex justify-between items-center">

                 <div className="flex items-center gap-3">

  {/* IMAGE */}
  {s.image && (
    <img
      src={
        s.image.startsWith("http")
          ? s.image
          : "https://ejeepthesis.site/backend/uploads/" + s.image
      }
      className="w-12 h-12 object-cover rounded-lg"
    />
  )}

  <div>
    <b>{s.title}</b>
    <div className="text-sm text-gray-500">{s.tagline}</div>
  </div>

</div>

                  <div className="flex gap-2">

                    {/* EDIT ICON */}
                    <button
                      onClick={() => handleEdit(s)}
                      className="p-2 rounded hover:bg-blue-100 transition"
                      title="Edit"
                    >
                      <Edit2 className="w-4 h-4 text-blue-600" />
                    </button>

                    {/* DELETE ICON */}
                    <button
                      onClick={() => setDeleteId(s.id)}
                      className="p-2 rounded hover:bg-red-100 transition"
                      title="Delete"
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

    </div>
  );
}