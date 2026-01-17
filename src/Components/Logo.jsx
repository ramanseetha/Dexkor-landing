import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import logos2 from "../logo-1.png";

export default function TrustedBySection() {
  return (
    <section className="w-full bg-white py-8 sm:py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center">
        {/* Heading */}
        <h2 className="text-[20px] sm:text-[30px] font-semibold text-neutral-900">
          Trusted By Industry Leaders
        </h2>

        {/* Moving Logos Carousel */}
        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            slidesPerView="auto"
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={4000} // smooth continuous speed
            freeMode={true}
            allowTouchMove={false}
            className="w-full"
          >
            {[...Array(10)].map((_, i) => (
              <SwiperSlide key={i} className="!w-auto">
                <img
                  src={logos2}
                  alt={`Trusted brands row ${i + 1}`}
                  className="h-16 sm:h-20 object-contain mx-8"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
