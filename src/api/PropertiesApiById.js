import { useEffect, useState } from "react";

export const PropertiesApiById = (id) => {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        "http://localhost:8080/api/properties/" + id
      );
      const data = await response.json();
      if (data !== "Not found") {
        setData(data);
      } else {
        setData(null);
      }
    }
    getData();
  }, [id]);
  return data;
};
