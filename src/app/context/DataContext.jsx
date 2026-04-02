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

  const [services, setServices] =
    useState([]);

  const [locations, setLocations] =
    useState([]);

  const [inquiries, setInquiries] =
    useState([]);


  // ✅ fetch services
  useEffect(() => {

    fetch(
      "https://ejeepthesis.site/backend/get-services.php"
    )
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


  // ✅ fetch locations
  useEffect(() => {

    fetch(
      "https://ejeepthesis.site/backend/get-locations.php"
    )
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


  const value = {
    services,
    locations,
    setLocations,
    inquiries,
  };


  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}