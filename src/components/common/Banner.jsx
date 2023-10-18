import staticImages from "../../utils/images";
import Slider from "react-slick";
import { CustomNextArrow, CustomPrevArrow } from "../";
import { Link } from "react-router-dom";
import { bannerclip } from "../../utils/videos";

const Banner = () => {
  return (
    <div className="min-h-screen flex">
      <div className="banner-slider-item relative">
        <video autoPlay muted loop className="w-full h-full object-cover">
          <source src={bannerclip} type="video/mp4" />
          {/* Add additional source elements for different formats if needed */}
          {/* <source src={bannerclipWebM} type="video/webm" /> */}
          {/* <source src={bannerclipOgg} type="video/ogg" /> */}
          Your browser does not support the video tag.
        </video>
        <div className="text-white flex items-center justify-center pt-[80px] absolute top-0 bottom-0 left-5 right-5">
          <div className="container py-12">
            <h1 className="uppercase text-center xxl:text-7xl lg:6xl text-5xl font-semibold drop-shadow-lg">
              Welcome to Our{" "}
            </h1>
            <h3 className="xxl:text-5xl lg:text-4xl text-3xl drop-shadow-lg mt-4 uppercase font-medium mb-10 text-center">
              House of Worship
            </h3>
            <p className="text-xl max-w-[620px] text-center opacity-90 mx-auto drop-shadow">
              We gather each Saturday at 11:30 at our church and would love for
              you to join us!
            </p>
            <div className="flex items-center justify-center">
              <Link to="" className="btn btn-lg bg-red mt-8">
                learn more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Banner = () => {
//   const settings = {
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 10000,
//   };
//   return (
//     <div className="min-h-screen">
//       <Slider
//         {...settings}
//         nextArrow={<CustomNextArrow />}
//         prevArrow={<CustomPrevArrow />}
//       >
//         <div className="banner-slider-item">
//           <div
//             className="min-h-screen text-white flex items-center justify-center pt-[80px]"
//             style={{
//               background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.banner2}) center/cover no-repeat fixed`,
//             }}
//           >
//             <div className="container">
//               <h1 className="uppercase text-center xxl:text-7xl lg:6xl text-5xl font-semibold drop-shadow-lg">
//                 Welcome to Our{" "}
//               </h1>
//               <h3 className="xxl:text-5xl lg:text-4xl text-3xl drop-shadow-lg mt-4 uppercase font-medium mb-10 text-center">
//                 House of Worship
//               </h3>
//               <p className="text-xl max-w-[620px] text-center opacity-90 mx-auto">
//                 We gather each Saturday at 11:30 at our church and would love
//                 for you to join us!
//               </p>
//               <div className="flex items-center justify-center">
//                 <Link to="" className="btn btn-lg bg-red mt-8">
//                   learn more
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="banner-slider-item">
//           <div
//             className="min-h-screen text-white flex items-center justify-center pt-[80px]"
//             style={{
//               background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.banner1}) center/cover no-repeat fixed`,
//             }}
//           >
//             <div className="container">
//               <h1 className="uppercase text-center xxl:text-7xl lg:6xl text-5xl font-semibold drop-shadow-lg">
//                 Love God. Love people.{" "}
//               </h1>
//               <h3 className="xxl:text-5xl lg:text-4xl text-3xl drop-shadow-lg mt-4 uppercase font-medium mb-10 text-center">
//                 Make disciples of Jesus Christ.
//               </h3>
//               <p className="text-xl max-w-[620px] text-center opacity-90 mx-auto">
//                 We gather each Saturday at 11:30 at our church and would love
//                 for you to join us!
//               </p>
//               <div className="flex items-center justify-center">
//                 <Link to="" className="btn btn-lg bg-red mt-8">
//                   join us
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="banner-slider-item">
//           <div
//             className="min-h-screen text-white flex items-center justify-center pt-[80px]"
//             style={{
//               background: `linear-gradient(rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.6)), url(${staticImages.banner3}) center/cover no-repeat fixed`,
//             }}
//           >
//             <div className="container">
//               <h1 className="uppercase text-center xxl:text-7xl lg:6xl text-5xl font-semibold drop-shadow-lg">
//                 Discover the Holy Flame{" "}
//               </h1>
//               <h3 className="xxl:text-5xl lg:text-4xl text-3xl drop-shadow-lg mt-4 uppercase font-medium mb-10 text-center">
//                 Spirit-Filled Worship
//               </h3>
//               <p className="text-xl max-w-[620px] text-center opacity-90 mx-auto">
//                 We gather each Saturday at 11:30 at our church and would love
//                 for you to join us!
//               </p>
//               <div className="flex items-center justify-center">
//                 <Link to="" className="btn btn-lg bg-red mt-8">
//                   visit us
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Slider>
//     </div>
//   );
// };

export default Banner;
