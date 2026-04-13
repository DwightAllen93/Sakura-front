import { useNavigate } from "react-router";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import {
  Mail,
  Phone,
  Calendar,
  Trash2,
  CheckCircle,
  LogOut,
  Eye,Reply 
} from "lucide-react";
import { CherryBlossoms } from "../components/CherryBlossoms";

export function AdminInquiriesPage() {
 const {
  inquiries,
  fetchInquiries, // ✅ ADD THIS
} = useData();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleRemoveInquiry = async (id) => {
  try {
    const formData = new FormData();
    formData.append("id", id);

    await fetch("https://ejeepthesis.site/backend/delete-inquiry.php", {
      method: "POST",
      body: formData,
    });

    toast.success("🗑️ Inquiry deleted");

    fetchInquiries(); // 🔥 no reload

  } catch (err) {
    toast.error("Delete failed ❌");
  }
};
const handleReply = (inquiry) => {
  const subject = encodeURIComponent("Re: Your inquiry to Sakura Care");

  const body = encodeURIComponent(
`Hi ${inquiry.name},

Thank you for contacting Sakura Care 🌸

Regarding your message:
"${inquiry.message}"

We would like to assist you further.

Best regards,
Sakura Care Team
`
  );

  window.location.href = `mailto:${inquiry.email}?subject=${subject}&body=${body}`;
};
  const handleStatusChange = async (id, status) => {
  try {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("status", status);

    await fetch("https://ejeepthesis.site/backend/update-inquiry-status.php", {
      method: "POST",
      body: formData,
    });

    toast.success("🌸 Status updated!");

    fetchInquiries(); // 🔥 refresh UI

  } catch (error) {
    toast.error("Failed to update ❌");
  }
};
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    return date.toLocaleDateString("en-AU", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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
      {/* HERO */}
      <section
        className="py-20 bg-cover bg-center"
        style={{ backgroundImage: `url(/background.png)` }}
      >
        <CherryBlossoms />

        {/* logout */}
        <button
          onClick={() => {
            logout();
            navigate("/login");
          }}
          className="absolute top-6 right-6 bg-white/90 px-4 py-2 rounded-lg shadow"
        >
          <LogOut className="w-5 h-5" />
        </button>

        <div className="text-center">
          <h1 className="text-4xl text-primary">
            View Enquiries
          </h1>
        </div>
      </section>


      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-4xl mx-auto px-4">

          <div className="bg-white rounded-2xl p-8 shadow-lg">

            <h2 className="text-2xl text-primary mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              All Enquiries
            </h2>


            {inquiries.length === 0 && (
              <p className="text-muted-foreground text-center py-8">
                No Enquiries available
              </p>
            )}


            {inquiries.map((inquiry) => (

              <div
                key={inquiry.id}
                className="p-6 border border-gray-200 rounded-lg mb-4"
              >

                <div className="flex justify-between gap-4">

                  <div className="flex-1">

                    <h3 className="font-semibold text-lg mb-2">
                      {inquiry.name}
                    </h3>


                    <div className="space-y-1 mb-3">

                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4" />
                        {inquiry.email}
                      </div>

                      {inquiry.phone && (
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="w-4 h-4" />
                          {inquiry.phone}
                        </div>
                      )}

                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4" />
                        {formatDate(inquiry.created_at)}
                      </div>

                    </div>


                    <div className="bg-gray-50 p-4 rounded mb-3">
                      {inquiry.message}
                    </div>


                    <div className="flex items-center gap-2">

                      <CheckCircle
                        className={
                          inquiry.status === "Resolved"
                            ? "text-green-500"
                            : "text-gray-400"
                        }
                      />

                      <span>
                       {inquiry.status || "New"}
                      </span>

                    </div>

                  </div>


                 <div className="flex flex-col gap-2">

  {/* MARK AS READ */}
  {inquiry.status === "New" && (
   <button
  onClick={() => handleStatusChange(inquiry.id, "Read")}
  className="bg-blue-100 hover:bg-blue-200 p-2 rounded-lg transition"
>
  <Eye className="w-5 h-5 text-blue-600" />
</button>
  )}
<button
  onClick={() => handleReply(inquiry)}
  className="bg-pink-100 hover:bg-pink-200 p-2 rounded-lg transition"
  title="Reply"
>
  <Reply className="w-5 h-5 text-pink-600" />
</button>
  {/* MARK AS REPLIED */}
  {inquiry.status !== "Replied" && (
    <button
      onClick={() => handleStatusChange(inquiry.id, "Replied")}
      className="bg-green-100 hover:bg-green-200 p-2 rounded"
    >
      <CheckCircle className="w-5 h-5 text-green-600" />
    </button>
  )}

  {/* DELETE */}
  <button
    onClick={() => handleRemoveInquiry(inquiry.id)}
    className="bg-red-100 hover:bg-red-200 p-2 rounded"
  >
    <Trash2 className="w-5 h-5 text-red-600" />
  </button>

</div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}