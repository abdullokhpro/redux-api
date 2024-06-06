import React from "react";
import ProductWrapper from "../../components/product-wrapper/ProductWrapper";
import { useGetProductsQuery } from "../../context/api/productApi";

const Manage = () => {
  const { data } = useGetProductsQuery();

  return (
    <div>
      <div className="manage">
        <h2 className="manage__title">Manage products</h2>
        <ProductWrapper title={"Mahsulotlar"} data={data} />
      </div>
    </div>
  );
};

export default Manage;
