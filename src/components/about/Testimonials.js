import { Swiper, SwiperSlide } from "swiper/react";
import { sliderProps } from "../../sliderProps";
const testimonialData = [
  {
    id: 1,
    text: `Vinoth, an outstanding UI/UX expert, led 1BT's
    track, mentored juniors, and contributed to
    successful product innovations.A humble
    team player, it was a pleasure working with
    him.Best wishes ahead.`,
    authorImage: "assets/img/testimonials/1.svg",
    authorName: "Crishantha Nanayakkara",
    authorDesignation: "Enterprise Architect • ICTA • Sri Lanka",
  },
  {
    id: 2,
    text: `Vinoth's UI/UX expertise helped build Kora's
    MVP for Cooks and Chefs. Impressed with his 
    forward-thinking and problem-solving skills,
    he was a fantastic team player, committed to
    our success. Grateful for his contributions.`,
    authorImage: "assets/img/testimonials/2.svg",
    authorName: "Deepa Sureka",
    authorDesignation: "CEO, Kora Life • Rakuten • San Francisco",
  },
  {
    id: 3,
    text: `Vinoth's UI/UX designs are of high quality, with
    well-thought-out UX aspects. He understands
    the business purpose by asking the right
    questions. A great team player, looking
    forward to future collaborations.`,
    authorImage: "assets/img/testimonials/3.svg",
    authorName: "Rohan Perera",
    authorDesignation: "EXcubed • CTO • United Kingdom",
  },
  {
    id: 4,
    text: `Vinoth, a well-versed designer, excels in both
    groundwork and crafting stunning designs
    for their purpose. His ability to take ownership
    and see projects through makes him truly
    exceptional.`,
    authorImage: "assets/img/testimonials/4.svg",
    authorName: "Azmina Rasheed",
    authorDesignation: "Client Success • Director • Australia",
  },
  {
    id: 5,
    text: `Vinoth's "can do" attitude fuels innovative
    solutions. He dedicates time to understand
    end users, crafting unique materials for
    guaranteed satisfaction. Working with him
    is a pleasure and a productivity boost!`,
    authorImage: "assets/img/testimonials/5.svg",
    authorName: "Sharya Unamboowe",
    authorDesignation: "Corporate Development • WSO2 • Sri Lanka",
  },
  {
    id: 6,
    text: `Vinoth is an exceptional talent. He redefined
    UI/UX from scratch, propelling our designs
    forward and infusing each product with his
    remarkable attention to detail and creativity.
    Undoubtedly a valuable asset.`,
    authorImage: "assets/img/testimonials/6.svg",
    authorName: "Shabina Mahuroof",
    authorDesignation: "Director • IdeaPoint • Canada",
  },
  {
    id: 7,
    text: `Vinoth's passion fuels his exceptional and
    creative work, going the extra mile for every
    task. He's a dedicated, deadline-driven
    professional who remains undeterred even in
    the face of challenges.`,
    authorImage: "assets/img/testimonials/7.svg",
    authorName: "Shazni Fazal",
    authorDesignation: "Entrepreneur • The Butlers & Mei&Co • Sri Lanka",
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
                    <p>{item.id === 4 ? <>{item.text}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</> :item.text}</p>
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
