import React, { useEffect, useState } from "react";
import axios from "../../api";
import ProductWrapper from "../../components/product-wrapper/ProductWrapper";
import { useGetProductsQuery } from "../../context/api/productApi";

const Home = () => {
  const { data } = useGetProductsQuery();
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   axios
  //     .get("/products")
  //     .then((res) => setData(res.data.products))
  //     .catch((err) => console.log(err));
  // }, []);

  return (
    <div>
      <ProductWrapper title={"Mahsulotlar"} data={data} />
    </div>
  );
};

export default Home;
