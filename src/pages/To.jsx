import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from "../assets/logo.png";

const To = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_menh46s",
        "template_i4frilb",
        form.current,
        "wrDIPevOREovKV0f_"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="bg-black text-white px-5 sm:px-10 md:px-20 lg:px-[80px] py-10 md:py-[100px]">
      <h1 className="gradient-text text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] tracking-[1px] md:tracking-[2px] font-extrabold mb-[15px] md:mb-[20px] lg:mb-[40px] mt-[5px] md:mt-[10px] lg:mt-[20px] text-center lg:text-left">
        Online запись на ТО
      </h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-[60%] mb-5 lg:mb-0 text-center lg:text-left">
          <h2 className="text-[20px] sm:text-[25px] font-bold max-w-full lg:max-w-[400px] mx-auto lg:mx-0">
            Запишитесь на ТО прямо сейчас и получите точный расчет стоимости
          </h2>
          <p className="text-[15px] font-bold max-w-full lg:max-w-[400px] mt-[15px] mx-auto lg:mx-0">
            Вы сможете избежать ненужного износа и увеличить продолжительность
            службы вашего автомобиля.
          </p>
          <div className="mt-5 lg:mt-10">
            <img src={logo} className="mx-auto lg:mx-0 w-[200px] md:w-[300px] lg:w-[400px]" alt="Logo" />
          </div>
        </div>
        {/* form */}
        <div className="bg-white text-black p-[20px] md:p-[30px] rounded-[10px] w-full lg:w-[60%] shadow-lg">
          <h2 className="text-[20px] sm:text-[25px] font-semibold w-full mb-4 text-center lg:text-left">
            Заполните форму ниже для консультации и записи на ТО
          </h2>
          <ul className="font-semibold grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li className="flex items-center transition-all duration-500 hover:text-[#E04716]">
              <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>
              Ответим на вопросы
            </li>
            <li className="flex items-center transition-all duration-500 hover:text-[#E04716]">
              <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>
              Запишем на удобную дату и время
            </li>
            <li className="flex items-center transition-all duration-500 hover:text-[#E04716]">
              <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>
              Назовем стоимость деталей и работы
            </li>
            <li className="flex items-center transition-all duration-500 hover:text-[#E04716]">
              <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>
              Расскажем о типах ТО, подскажем какой выбрать
            </li>
            <li className="flex items-center transition-all duration-500 hover:text-[#E04716] sm:col-span-2">
              <i className="fa-regular fa-circle-check text-[#47FF4F] mr-2"></i>
              Сформируем точную смету по каждой проблеме
            </li>
          </ul>

          <form className="mt-[20px]" ref={form} onSubmit={sendEmail}>
            <label className="block mb-2 font-semibold" htmlFor="phone">
              Введите номер телефона
            </label>
            <input
              type="tel"
              id="phone"
              name="from_name"
              className="w-full md:w-[300px] p-2 mb-[20px] border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#E04716]"
              placeholder="Ваш номер телефона"
              required
            />
            <label className="block mb-2 font-semibold" htmlFor="message">
              Ваше сообщение
            </label>
            <input
              type="text"
              id="message"
              name="message"
              className="w-full md:w-[300px] p-2 mb-[20px] border border-gray-300 rounded-[30px] focus:outline-none focus:ring-2 focus:ring-[#E04716]"
              placeholder="Ваше сообщение"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-[#E04716] text-white font-semibold rounded hover:bg-[#c04013] transition-colors"
            >
              Оставить заявку
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default To;
