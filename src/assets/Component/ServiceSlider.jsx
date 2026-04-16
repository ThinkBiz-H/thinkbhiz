// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// export default function ServiceSlider({ title, data = [] }) {
//   // 🔥 safety check (empty data fix)
//   if (!data || data.length === 0) {
//     return <p className="text-gray-500">No services available</p>;
//   }

//   return (
//     <div className="py-6">
//       <h2 className="text-xl font-bold mb-4">{title}</h2>

//       <Swiper
//         modules={[Navigation, Pagination]}
//         navigation
//         pagination={{ clickable: true }}
//         spaceBetween={20}
//         slidesPerView={Math.min(3, data.length)}
//         loop={data.length >= 4}
//         style={{ paddingBottom: "40px" }} // 🔥 important fix
//         breakpoints={{
//           320: { slidesPerView: 1 },
//           640: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//         }}
//       >
//         {data.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div className="bg-white border rounded-xl p-6 h-[180px] flex flex-col justify-center text-center shadow-sm hover:shadow-md transition">
//               <div className="text-3xl mb-2">📊</div>

//               <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

//               <p className="text-gray-600 text-sm">{item.desc}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ServiceSlider({ title, data }) {
  return (
    <div className="w-full">
     <Swiper
  modules={[Navigation, Pagination]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={16}
  slidesPerView={1}
  loop={data.length > 3}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  className="!pb-10"
>
        {data.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-5 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition">
              {/* ICON */}
              <div className="text-3xl mb-3">📊</div>

              {/* TITLE */}
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>

              {/* DESC */}
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
