import { dataList } from "../data/data";
import ProductSection from "../components/ProductSection";
import React from "react";
import Button from "@/components/Button";
import SwiperComp from "@/components/SwiperComp";
import { DataExplore, DataCategory, DataSales } from "@/data/dataSwiper";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import FlashSaleTimer from "@/components/FlashSaleTimer";
import PhotoSlider from "@/components/PhotoSlider";
import AdBanner from "@/components/AdBanner";

// import required modules

const Home = () => {
  return (
    <div>
      <div className="mt-12 flex min-h-screen flex-col items-center">
        {/*    <Button textBTN="Shop Now" intent="primary" />

        <Button textBTN="View All Products" intent="secondary" />

        <Button textBTN="Add To Cart" intent="third" /> */}

        <AdBanner />

        <SwiperComp nameList={DataSales} listName="DataSales" />

        <FlashSaleTimer />
        {/* 
        <SwiperComp nameList={DataCategory} listName="DataCategory" />

        <SwiperComp nameList={DataExplore} listName="DataExplore" /> */}

        {/*     <ProductSection
          items={dataList}
          header="Toadys1111"
          title="Flash sales"
        />
        <ProductSection
          items={dataList}
          header="This Month"
          title="Best Selling Products"
        /> */}
        {/*   <ProductSection
          items={dataList}
          header="Our Products"
          title="Explore Our Products"
        />  */}
      </div>
    </div>
  );
};

export default Home;
