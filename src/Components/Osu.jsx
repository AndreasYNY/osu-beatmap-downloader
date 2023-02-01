import { useState, useEffect } from "react";
import axios from "axios";
import Mirror1 from "./Mirror1";

const Osu = () => {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    const getDataApi = async () => {
      const options = {
        method: "GET",
        url: "https://api.nerinyan.moe/search",
        headers: { "Content-Type": "application/json" },
      };
      const response = await axios.request(options);
      setDataApi(response.data);
    };
    getDataApi();
  }, []);

  console.log(dataApi);
  return (
    <>
      <Mirror1></Mirror1>
    </>
  );
};

export default Osu;
