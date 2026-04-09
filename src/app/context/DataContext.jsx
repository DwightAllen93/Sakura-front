import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

const DataContext = createContext(null);

export function useData() {
  const context = useContext(DataContext);

  if (!context) {
    throw new Error(
      "useData must be used within a DataProvider"
    );
  }

  return context;
}

export function DataProvider({ children }) {

  const [services, setServices] = useState([]);
  const [locations, setLocations] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  // ===================== SERVICES =====================
  useEffect(() => {

    fetch("https://ejeepthesis.site/backend/get-services.php")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setServices(data);
        } else {
          setServices([]);
        }
      })
      .catch(() => {
        setServices([]);
      });

  }, []);

  // ===================== LOCATIONS =====================
  useEffect(() => {

    fetch("https://ejeepthesis.site/backend/get-locations.php")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setLocations(data);
        } else {
          setLocations([]);
        }
      })
      .catch(() => {
        setLocations([]);
      });

  }, []);

  // ===================== INQUIRIES =====================
  useEffect(() => {

    fetch("https://ejeepthesis.site/backend/get-inquiries.php")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setInquiries(data);
        } else {
          setInquiries([]);
        }
      })
      .catch(() => {
        setInquiries([]);
      });

  }, []);

  // ===================== MANUAL REFRESH =====================
  const fetchInquiries = async () => {
    try {
      const res = await fetch("https://ejeepthesis.site/backend/get-inquiries.php");
      const data = await res.json();

      if (Array.isArray(data)) {
        setInquiries(data);
      } else {
        setInquiries([]);
      }

    } catch (error) {
      console.log("Failed to fetch inquiries");
      setInquiries([]);
    }
  };

  // ===================== PROVIDER =====================
  const value = {
    services,
    setServices,
    locations,
    setLocations,
    inquiries,
    setInquiries,
    fetchInquiries, // 🔥 important for real-time update
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}