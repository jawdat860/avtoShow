import React from "react";
import a from "../assets/a.jpg";
import b from "../assets/b.jpg";
import c from "../assets/c.jpg";
import d from "../assets/d.jpg";
import e from "../assets/e.jpg";
import f from "../assets/f.jpg";
import "../App.css";

const testimonials = [
  {
    img: a,
    text: "Все отлично, заказал прокладку на выпуск, отправили сдеком очень оперативно! Спасибо",
    name: "Олег Викторович",
  },
  {
    img: b,
    text: "Всё отлично, адекватный владелец.",
    name: "Герман",
  },
  {
    img: c,
    text: "Все пришло, как заказывал. Отличная работа. Спасибо!",
    name: "Влад Гриценко",
  },
  {
    img: d,
    text: "Всё прислали, как и договаривались.",
    name: "Алексей",
  },
  {
    img: e,
    text: "Всё нормально, цена и наличие соответствует.",
    name: "evvit",
  },
  {
    img: f,
    text: "Товар пришёл, всё хорошо. Рекомендую!",
    name: "Андрей Владимирович",
  },
];

const User = () => {
  return (
    <div className="bg-black px-8 py-16">
      <h1 className=" gradient-text text-3xl font-extrabold mb-10 text-center gradient-text">
        Отзывы наших клиентов
      </h1>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-black border-2 border-[#E04716] text-white p-6 rounded-lg shadow-lg relative"
          >
            <img
              src={testimonial.img}
              alt={testimonial.name}
              className="w-14 h-14 rounded-full mx-auto absolute -top-7 left-0 right-0"
            />
            <div className="mt-8 text-center">
              <p className="text-sm leading-relaxed">{testimonial.text}</p>
              <div className="flex justify-center mt-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 fill-[#facc15]"
                    viewBox="0 0 14 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                  </svg>
                ))}
              </div>
              <h4 className="mt-6 text-sm font-bold">{testimonial.name}</h4>
            </div>
          </div>
        ))}
      </div>
      <div className="text-white flex justify-end items-center mt-[40px] text-[18px] hover:text-[#E04716] ">
        <p className="mr-[5px]"> <a
          href="https://m.avito.ru/brands/i306235779/all?gdlkerfdnwq=101&page_from=from_item_card_icon&iid=3873252111&sellerId=e4fa0e2b296c5b70693dccb635e552cd#open-reviews-list"
        
        >  все oтзывы</a></p>

        <a
          href="https://m.avito.ru/brands/i306235779/all?gdlkerfdnwq=101&page_from=from_item_card_icon&iid=3873252111&sellerId=e4fa0e2b296c5b70693dccb635e552cd#open-reviews-list"
          className="fa-solid fa-arrow-right  block  animate-move-right "
        ></a>
      </div>
    </div>
  );
};

export default User;
