import React from "react";
import carContact from "../assets/image9.png";
import telegram from "../assets/telegram.png";
import whatsapp from "../assets/whatsup.png";
import insta from "../assets/insta.png";
import vk from "../assets/vk.png";

const Contactus = () => {
  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* Background skewed sections */}
      <div className="absolute lg:w-[57%] w-full h-full bg-[#000000] origin-bottom skew-x-[-9deg] z-[11] lg:block hidden"></div>
      <div className="absolute lg:w-[58%] w-full h-full bg-[#E04716] origin-bottom skew-x-[-9deg] opacity-[57%] z-[10] lg:block hidden"></div>

      {/* Contact details section */}
      <div className="text-white bg-black lg:pl-20 pl-5 pr-5 py-5 lg:py-[30px] w-full lg:w-[55%] relative z-[12]">
        <h1 className="gradient-text text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] tracking-[1px] md:tracking-[2px] font-extrabold mb-[15px] md:mb-[20px] lg:mb-[40px] mt-[5px] md:mt-[10px] lg:mt-[20px]">
          КОНТАКТЫ
        </h1>
        <div className="text-white">
          <p className="font-bold text-[18px] sm:text-[20px] md:text-[25px] lg:text-[28px] mb-[10px] sm:mb-[15px] md:mb-[20px] hover:text-[#E25A1D] transition-all duration-300">
            Звоните по телефону
          </p>
          <p className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] mb-[10px] sm:mb-[15px] md:mb-[20px] hover:text-[#E25A1D] transition-all duration-300 hover:cursor-pointer">
            <a
              href="tel:+79789990088"
              className="font-bold text-[24px] sm:text-[28px] md:text-[32px] lg:text-[38px] mb-[10px] sm:mb-[15px] md:mb-[20px] hover:text-[#E25A1D] transition-all duration-300 hover:cursor-pointer"
            >
              +7(978) 999-00-88
            </a>
          </p>
          <p className="font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] mb-[5px] sm:mb-[7px] md:mb-[10px] hover:text-[#E25A1D] transition-all duration-300 hover:cursor-pointer">
            <a
              href="https://yandex.com/maps/?text=Севастополь, ул.Стахановцев,3"
              target="_blank"
              className="font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] mb-[5px] sm:mb-[7px] md:mb-[10px] hover:text-[#E25A1D] transition-all duration-300 hover:cursor-pointer"
            >
              Севастополь, ул.Стахановцев,3
            </a>
          </p>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] mb-[15px] sm:mb-[20px] md:mb-[30px] hover:text-[#E25A1D] transition-all duration-300">
            Мы работаем с 10:00 до 21:00
          </p>
          <ul className="flex space-x-4">
            <a href="https://t.me/+79789990088" target="_blank">
              <li className="w-8 sm:w-14 cursor-pointer hover:transform hover:scale-125 transition-transform duration-300">
                <img src={telegram} alt="Telegram" />
              </li>
            </a>

            <a href="https://wa.me/79789990088" target="_blank">
              <li className="w-8 sm:w-14 cursor-pointer hover:transform hover:scale-125 transition-transform duration-300">
                <img src={whatsapp} alt="WhatsApp" />
              </li>
            </a>

            <li className="w-8 sm:w-14 cursor-pointer hover:transform hover:scale-125 transition-transform duration-300">
              <img src={insta} alt="Instagram" />
            </li>
            <a href="https://vk.com/avtoshow92" target="_blank">
              <li className="w-8 sm:w-14 cursor-pointer hover:transform hover:scale-125 transition-transform duration-300">
                <img src={vk} alt="VK" />
              </li>
            </a>
          </ul>
        </div>
      </div>

      {/* Image section */}
      <div className="relative z-[9] lg:w-[45%] w-full h-[300px] lg:h-auto">
        <img
          src={carContact}
          alt="CarContact"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Contactus;
