import { useEffect, useState } from "react";

export const PropertiesApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await fetch("http://localhost:8080/api/properties");
      const data = await response.json();
      setData(data);
    }
    getData();
  }, []);
  return data;
};
