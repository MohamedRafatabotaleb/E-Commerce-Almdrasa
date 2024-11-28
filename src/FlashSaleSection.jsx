import React from "react";
import ProductCard from "./ProductCard";
const FlashSaleSection = ({ items, header, title }) => {
  return (
    <div className="border border-slate-950">
      <h4>{title}</h4>
      <h2>{header}</h2>

      {items.map((item) => {
        return <ProductCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default FlashSaleSection;
