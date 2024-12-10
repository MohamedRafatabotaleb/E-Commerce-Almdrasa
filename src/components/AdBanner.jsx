import React from "react";

const AdBanner = () => {
  return (
    <div className="relative flex h-64 w-full items-center justify-center bg-black px-6 text-white">
      {/* Apple Logo and Text */}
      <div className="absolute left-8 top-8">
        <img
          src="/src/assets/AdBanner/Phone.jpg"
          alt="Apple"
          className="mb-2 h-6 w-6"
        />
        <p className="text-sm">iPhone 14 Series</p>
      </div>

      {/* Main Ad Content */}
      <div className="text-center">
        <p className="text-4xl font-semibold">Up to 10% off Voucher</p>
        <button className="text-sm hover:bg-gray-200 mt-4 rounded-full bg-white px-6 py-2 font-medium text-black">
          Shop Now →
        </button>
      </div>

      {/* iPhone Image */}
      <img
        src="/src/assets/AdBanner/Phone.jpg"
        alt="iPhone 14"
        className="absolute right-8 top-10 h-auto w-44"
      />
    </div>
  );
};

export default AdBanner;
