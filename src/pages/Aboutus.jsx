import CarAbout from "../assets/image8.png";

function Aboutus() {
  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* the first section */}
      <div className="absolute lg:w-[57%] w-full h-full bg-[#000000] origin-bottom skew-x-[-9deg]   z-[11] lg:block hidden"></div>
      <div className="absolute lg:w-[58%] w-full   origin-bottom skew-x-[-9deg] h-full bg-[#E04716]  opacity-[57%] z-[10] lg:block hidden"></div>
      <div className="text-white  bg-black lg:pl-20 pl-5 pr-5 py-5 lg:py-[30px] w-full lg:w-[55%] relative z-[12]">
        <h1 className="gradient-text text-[25px] lg:text-[35px] tracking-[2px] font-extrabold mb-[20px] lg:mb-[40px] mt-[10px] lg:mt-[20px]">
          Наши преимущества
        </h1>
        <p className="mb-[20px]">
          Just contact us, give us information about your car, we will help you:
        </p>
        <ul className="space-y-[10px]">
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            Весь спектр работ в одном месте.
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            Опыт работы более 10 лет.
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            Разные формы оплаты, возможна рассрочка, НДС.
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>
            Осуществление работ по договору и заказ наряду.
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            Охраняемая стоянка.
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            Весь спектр работ в одном месте.
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            Современное оборудование
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            Вежливый персонал.
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            Только дипломированные специалисты
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            Дилерское программное обеспечение
          </li>
          <li className="flex items-center hover:pl-3 transition-all duration-500 hover:text-[#E04716]">
            <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>{" "}
            1000м2 производственных помещений
          </li>
        </ul>
        <div className="mt-[30px] text-center lg:text-left">
          <button className="bg-[#E04716] py-[10px] px-[15px] rounded-md hover:bg-[#FF3F01]">
            <i className="fa-solid fa-headphones"></i> Contact us
          </button>
        </div>
      </div>
      {/* the second section */}
      <div className="relative z-[9] lg:w-[45%] w-full h-[300px] lg:h-auto">
        <img
          src={CarAbout}
          alt="CarAbout"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default Aboutus;
