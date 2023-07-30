import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../sliderProps";
const testimonialData = [
  {
    id: 1,
    text: "Vinoth, an outstanding UI/UX expert, led 1BT's track, mentored juniors, and contributed to successful product innovations. A humble team player, it was a pleasure working with him. Best wishes ahead.",
    authorImage: "assets/img/testimonials/1.svg",
    authorName: "Crishantha Nanayakkara",
    authorDesignation: "ICTA, Enterprise Architect",
  },
  {
    id: 2,
    text: "Vinoth's UI/UX expertise helped build Kora's MVP for Cooks and Chefs. Impressed with his forward-thinking and problem-solving skills, he was a fantastic team player, committed to our success. Grateful for his contributions.",
    authorImage: "assets/img/testimonials/2.svg",
    authorName: "Deepa Sureka",
    authorDesignation: "CEO, Kora Life",
  },
  {
    id: 3,
    text: "Vinoth's UI/UX designs are of high quality, with well-thought-out UX aspects. He understands the business purpose by asking the right questions. A great team player, looking forward to future collaborations.",
    authorImage: "assets/img/testimonials/3.svg",
    authorName: "Baraka Clinton",
    authorDesignation: "English Teacher",
  },
];
const Testimonials = () => {
  return (
    <div className="tokyo_tm_testimonials w-full h-auto clear-both float-left py-[100px] px-0">
      <div className="container">
        <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
          <h3 className="text-[20px] font-bold">Testimonials</h3>
        </div>
        <div className="list w-full h-auto clear-both float-left overflow-hidden">
          <Swiper
            {...sliderProps.testimonial}
            className="m-0 list-none cursor-e-resize"
          >
            {testimonialData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="list_inner w-full h-auto clear-both float-left relative">
                  <div className="text w-full h-auto clear-both float-left border-solid border-[#E5EDF4] border-2 p-[40px] mb-[30px] relative">
                    <p>{item.text}</p>
                  </div>
                  <div className="details w-full h-auto clear-both float-left flex items-center pl-[20px]">
                    <div className="image relative w-[60px] h-[60px]">
                      <div
                        className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-full img-remake"
                        data-img-url={item.authorImage}
                        style={{ backgroundImage: `url(${item.authorImage})` }}
                      />
                    </div>
                    <div className="info pl-[20px]">
                      <h3 className="text-[16px] mb-[2px] font-semibold">
                        {item.authorName}
                      </h3>
                      <span className="text-[14px]">
                        {item.authorDesignation}
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
