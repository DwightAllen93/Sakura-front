import { useNavigate } from "react-router";
import { useData } from "../context/DataContext";
import { useAuth } from "../context/AuthContext";
import {
  Mail,
  Phone,
  Calendar,
  Trash2,
  CheckCircle,
  LogOut,
} from "lucide-react";
import { CherryBlossoms } from "../components/CherryBlossoms";

export function AdminInquiriesPage() {
  const {
    inquiries,
    removeInquiry,
    updateInquiryStatus,
  } = useData();

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleRemoveInquiry = (id) => {
    if (window.confirm("Are you sure you want to delete this inquiry?")) {
      removeInquiry(id);
    }
  };

  const handleStatusChange = (id, newStatus) => {
    updateInquiryStatus(id, newStatus);
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
            View Inquiries
          </h1>
        </div>
      </section>


      {/* CONTENT */}
      <section className="py-16">

        <div className="max-w-4xl mx-auto px-4">

          <div className="bg-white rounded-2xl p-8 shadow-lg">

            <h2 className="text-2xl text-primary mb-6 flex items-center gap-2">
              <Mail className="w-6 h-6" />
              All Inquiries
            </h2>


            {inquiries.length === 0 && (
              <p className="text-muted-foreground text-center py-8">
                No inquiries available
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
                        {formatDate(inquiry.date)}
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
                        {inquiry.status}
                      </span>

                    </div>

                  </div>


                  <div className="flex flex-col gap-2">

                    {inquiry.status !== "Resolved" && (
                      <button
                        onClick={() =>
                          handleStatusChange(
                            inquiry.id,
                            "Resolved"
                          )
                        }
                        className="bg-green-100 p-2 rounded"
                      >
                        <CheckCircle className="w-5 h-5" />
                      </button>
                    )}

                    <button
                      onClick={() =>
                        handleRemoveInquiry(
                          inquiry.id
                        )
                      }
                      className="bg-red-100 p-2 rounded"
                    >
                      <Trash2 className="w-5 h-5" />
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