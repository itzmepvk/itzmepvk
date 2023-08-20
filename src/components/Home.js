import { useContext, useEffect } from "react";
import SectionContainer from "./SectionContainer";
import EducationExperience from "./about/EducationExperience";
import KnowledgeInterests from "./about/KnowledgeInterests";
import Testimonials from "./about/Testimonials";
import Typewriter from "typewriter-effect";
import { TokyoContext } from "../Context";
const socialIcon = [
  {
    id: 1,
    iconName: "assets/img/svg/social/linkdin.svg",
    link: "https://www.linkedin.com/in/itzmepvk/",
  },
  {
    id: 2,
    iconName: "assets/img/svg/social/youtube.svg",
    link: "https://www.youtube.com/@itzmepvk",
  },
  {
    id: 3,
    iconName: "assets/img/svg/social/mail.svg",
    link: "mailto:me@itzmepvk.com",
  },
  {
    id: 4,
    iconName: "assets/img/svg/social/contact.svg",
    link: "mailto:+94715124609",
  },
];
const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full  clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center pt-[100px] gap-x-20">
            <div
              className="avatar min-w-[300px] min-h-[300px]  "
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <img
                src="https://i.ibb.co/7zgQmBD/Vinoth-Kanna.png"
                alt="Vinoth-Kanna"
                className="  bg-no-repeat bg-center bg-cover img-remake w-full"
              />
              <hr />
            </div>
            <div className="details ">
              <h3 className="name text-[55px] font-extrabold mb-8">
                Vinoth K
                <span
                  style={{
                    color: "#767676",
                    fontSize: "13px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "32px" /* 246.154% */,
                    textTransform: "uppercase",
                  }}
                >
                  <Typewriter
                    options={{
                      strings: [
                        "UX DESIGN (WEB, MOBILE & SAAS)",
                        "USER CENTRIC DESIGN",
                        "BRAND IDENTITY",
                      ],
                      autoStart: true,
                      loop: true,
                      delay: 0,
                    }}
                  />
                </span>
              </h3>

              <p className="job font-montserrat font-normal mb-10  ">
                <strong className="text-black ">Product Designer</strong> who
                solves real UX problems and delight users. Currently working as
                a <strong className="text-black">Lead Designer</strong> in Sri
                Lankan based company. <br /> And having{" "}
                <strong className="text-black">9 years of experience</strong> in
                Product Designing.
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none ">
                  {socialIcon.map((item) => {
                    if (item.link.includes("youtube"))
                      return (
                        <li
                          className="mr-[8px] inline-block "
                          key={item.id}
                          onClick={() => window.open(item.link)}
                          style={{ cursor: "pointer" }}
                        >
                          <a className="text-black text-[25px] transition-all duration-300 hover:text-black rounded-md">
                            <img src={item.iconName} />
                          </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </li>
                      );
                    return (
                      <li className="mr-[8px] inline-block " key={item.id}>
                        <a
                          className="text-black text-[25px] transition-all duration-300 hover:text-black rounded-md"
                          href={item.link}
                          target="_blank"
                        >
                          <img src={item.iconName} />
                        </a>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <KnowledgeInterests />
      <EducationExperience />
      <Testimonials />
    </SectionContainer>
  );
};
export default Home;
