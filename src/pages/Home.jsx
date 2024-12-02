import { dataList } from "../data";
import ProductSection from "../components/ProductSection";
import React from "react";
import Button from "@/components/Button";

const Home = () => {
  return (
    <div className="mt-12 flex min-h-screen flex-col items-center justify-center">
      <Button textBTN="Shop Now" intent="primary" />

      <Button textBTN="View All Products" intent="secondary" />
      <Button textBTN="Add To Cart" intent="third" />

      <ProductSection
        items={dataList}
        header="Toadys1111"
        title="Flash sales"
      />
      <ProductSection
        items={dataList}
        header="This Month"
        title="Best Selling Products"
      />
      <ProductSection
        items={dataList}
        header="Our Products"
        title="Explore Our Products"
      />
    </div>
  );
};

export default Home;
