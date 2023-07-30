import SectionContainer from "./SectionContainer";
import EducationExperience from "./about/EducationExperience";
import KnowledgeInterests from "./about/KnowledgeInterests";
import Testimonials from "./about/Testimonials";
const socialIcon = [
  {
    id: 1,
    iconName: "assets/img/svg/social/linkdin.svg",
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    iconName: "assets/img/svg/social/youtube.svg",
    link: "https://twitter.com/",
  },
  {
    id: 3,
    iconName: "assets/img/svg/social/mail.svg",
    link: "https://www.behance.net/",
  },
  {
    id: 4,
    iconName: "assets/img/svg/social/contact.svg",
    link: "https://www.linkedin.com/",
  },
];
const Home = () => {
  return (
    <SectionContainer name={"home"}>
      <div className="container">
        <div className="tokyo_tm_home w-full  clear-both flex items-center justify-center relative">
          <div className="home_content flex items-center pt-[100px]">
            <div
              className="avatar min-w-[300px] min-h-[300px]  "
              data-type="wave"
            >
              {" "}
              {/* data-type values are: "wave", "circle", "square"*/}
              <img
                className="  bg-no-repeat bg-center bg-cover img-remake"
                src="assets/img/svg/vinoth.svg"
              />
              <hr />
            </div>
            <div className="details " >
              <h3 className="name text-[55px] font-extrabold mb-[14px]">
                Vinoth K
              </h3>
              <p className="job font-montserrat font-medium  mb-[25px]">
              <strong className="text-black">Product Designer</strong> who solves real UX problems and delight users. Currently working as a <strong className="text-black">Lead Designer</strong> in Sri Lankan based company. <br /> And having <strong className="text-black">9 years of experience</strong> in Product Designing.
              </p>
              <div className="social w-full float-left">
                <ul className="m-0 list-none ">
                  {socialIcon.map((item) => (
                    <li className="mr-[8px] inline-block " key={item.id}>
                      <a
                        className="text-black text-[25px] transition-all duration-300 hover:text-black rounded-md"
                        href={item.link}
                        target="_blank"
                      >
                        <img src={item.iconName} />
                      </a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </li>
                  ))}
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
