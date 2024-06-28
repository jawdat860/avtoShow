// import React from "react";
// import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

// const MapPage = () => {
//   const placemarkGeometry = [44.563633, 33.507475]; // Placemark coordinates
//   const placemarkProperties = {
//     balloonContent: "This is a placemark",
//     hintContent: "Hint content",
//     avtoShow: "avtoShow", // Custom property for the name
//   };

//   return (
//     <div
//       style={{ width: "100%", height: "100vh", position: "relative" }}
//       className="bg-black text-white px-5 sm:px-10 md:px-20 lg:px-[80px] py-10 md:py-[100px]"
//     >
//       <h1 className="gradient-text text-[25px] lg:text-[35px] tracking-[2px] font-extrabold mb-[20px] lg:mb-[40px] mt-[10px] lg:mt-[20px] text-center lg:text-left">
//         наша карта
//       </h1>
//       <YMaps>
//         <Map
//           defaultState={{ center: placemarkGeometry, zoom: 15 }}
//           style={{ width: "100%", height: "100%" }}
//         >
//           <Placemark
//             geometry={placemarkGeometry}
//             properties={placemarkProperties}
//           />
//         </Map>
//       </YMaps>
//     </div>
//   );
// };

// export default MapPage;
