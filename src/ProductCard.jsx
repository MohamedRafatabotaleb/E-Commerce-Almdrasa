import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import ColorBtn from "./ColorBtn";
function ProductCard({ item }) {
  return (
    <div className="relative mx-auto w-[270px] rounded-lg border border-slate-950 shadow-lg">
      <div className="flex h-[250px] items-center justify-center bg-[#F5F5F5]">
        {/* Discount Badge */}
        {item.sale && (
          <div className="absolute left-3 top-3 rounded bg-red-500 px-2 py-1 text-xs text-white">
            -40%
          </div>
        )}

        {/* Image */}
        <img
          src="https://placehold.co/400"
          alt="HAVIT HV-G92 Gamepad"
          className="h-[180px] w-[190px] object-cover"
        />

        {/* Wishlist and View Icons */}
        <div className="absolute right-3 top-3 flex flex-col justify-center gap-2">
          <button className="flex h-[34px] w-[34px] items-center justify-center">
            <FaRegHeart />
          </button>
          <button className="flex h-[34px] w-[34px] items-center justify-center">
            <FiEye />
          </button>
        </div>
      </div>

      <div className="mt-4 h-[85px]">
        {/* Title */}
        <h3 className="text-lg font-semibold">{item.title}</h3>

        {/* Price */}
        <div className="mt-1 flex items-center gap-3 text-base">
          <span className="text-red-600">${item.priceNow}</span>
          <span className="text-gray-500 line-through">${item.priceOld}</span>
        </div>

        {/* Rating */}
        <div className="mt-2 flex h-5 items-center">
          <div className="flex items-center space-x-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <span key={i} className="text-yellow-500">
                  ★
                </span>
              ))}
          </div>
          <span className="ml-2 text-sm text-gray-500">(88)</span>
        </div>
      </div>

      <div className="mt-2">
        <ColorBtn />
      </div>
    </div>
  );
}

export default ProductCard;
