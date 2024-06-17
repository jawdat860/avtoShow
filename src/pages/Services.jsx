import React from 'react';
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";

const Services = () => {
  return (
    <div className="bg-black text-white px-5 sm:px-10 md:px-20 lg:px-[80px] py-10 md:py-[100px]">
      <h1 className="gradient-text text-[25px] lg:text-[35px] tracking-[2px] font-extrabold mb-[20px] lg:mb-[40px] mt-[10px] lg:mt-[20px] text-center lg:text-left">
        Наши преимущества
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 font-bold gap-5 md:gap-[40px]">
        {[
          { image: image1, text: "ремонт легковых автомобилей" },
          { image: image2, text: "ремонт двигателя" },
          { image: image3, text: "ремонт коробки передач" },
          { image: image4, text: "ремонт легковых автомобилей" },
          { image: image5, text: "ремонт кондиционеров" },
          { image: image6, text: "малярные работы" },
        ].map((item, index) => (
          <div key={index} className="cursor-pointer hover:text-[#E04716]">
            <div className="relative group">
              <img src={item.image} alt={`image${index + 1}`} className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-center text-white px-2">{item.text}</p>
              </div>
            </div>
            <p className="text-center mt-[10px]">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
