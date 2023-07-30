import { useContext, useState } from "react";
import { TokyoContext } from "../Context";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

const news = [
  {
    id: 1,
    title: "Platform to find global talent & quality service providers",
    image: "assets/img/news/1.svg",
    author: "prototype • UX Design • branding",
    date: "22 Oct 2022",
    colorCode: "#FEEDED",
  },
  {
    id: 2,
    title: "Platform to find global talent & quality service providers",
    image: "assets/img/news/2.svg",
    author: "prototype • UX Design • branding",
    date: "15 Oct 2022",
    colorCode: "#DFF2FB",
  },
  {
    id: 3,
    title: "Platform to find global talent & quality service providers",
    image: "assets/img/news/3.svg",
    author: "prototype • UX Design • branding",
    date: "07 Oct 2022",
    colorCode: "#E5F1FA",
  },
  {
    id: 4,
    title: "Platform to find global talent & quality service providers",
    image: "assets/img/news/4.svg",
    author: "prototype • UX Design • branding",
    date: "25 Sep 2022",
    colorCode: "white",
  },
];

const Portfolio = () => {
  const [enter, setEnter] = useState({ id: null, visible: false });
  const { setPasswordModal, modalToggle } = useContext(TokyoContext);
  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
  };
  return (
    <SectionContainer name={"portfolio"}>
      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[100px] px-0 pb-[45px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[62px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Portfolio"}
                title={"Selected Portfolios"}
              />
              <div className="portfolio_filter">
                <ul className="list-none">
                  <li className="mr-[25px] inline-block">
                    <a
                      href="#"
                      className="current text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      onClick={handleFilterKeyChange("*")}
                    >
                      All
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("UX Design")}
                    >
                      UX Design
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("Branding")}
                    >
                      Branding
                    </a>
                  </li>
                  {/* <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("soundcloud")}
                    >
                      Soundcloud
                    </a>
                  </li>
                  <li className="mr-[25px] inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("image")}
                    >
                      Image
                    </a>
                  </li>
                  <li className="inline-block">
                    <a
                      className="text-[#767676] inline-block font-medium font-montserrat transition-all duration-300 hover:text-black"
                      href="#"
                      onClick={handleFilterKeyChange("detail")}
                    >
                      Detail
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <ul className="ml-[-50px] list-none">
            {news.map((item, index) => (
              <li
                className="mb-[50px] float-left w-1/2 pl-[50px]"
                key={item.id}
              >
                <div className="list_inner w-full clear-both float-left h-auto relative">
                  <div
                    className="image relative overflow-hidden"
                    style={{
                      backgroundColor:
                        enter.visible && item.id === enter.id
                          ? item.colorCode
                          : "",
                    }}
                    onMouseOver={() =>
                      setEnter({ id: index + 1, visible: true })
                    }
                    onMouseLeave={() => setEnter({ id: null, visible: false })}
                  >
                    <img
                      className="min-w-full opacity-0"
                      src="assets/img/thumbs/40-25.jpg"
                      alt="image"
                    />
                    <div
                      className="main absolute inset-0 bg-no-repeat  bg-center transition-all duration-300"
                      data-img-url={item.image}
                      style={{ backgroundImage: `url(${item.image})` }}
                    />
                    <a
                      className="tokyo_tm_full_link"
                      href="#"
                      onClick={() => {
                        modalToggle(true);
                        setPasswordModal(item);
                      }}
                    />
                  </div>
                  <div className="details w-full float-left px-[40px] pt-[30px] pb-[25px] bg-white transition-all duration-300">
                    <div className="extra flex items-center justify-between mb-[25px] relative">
                      <div className="short">
                        <p className="date font-montserrat text-[13px] text-[#767676]">
                          {/* By{" "} */}
                          <a
                            className="text-[#767676] transition-all duration-300 hover:text-black uppercase"
                            href="#"
                            onClick={() => {
                              modalToggle(true);
                              setPasswordModal(item);
                            }}
                          >
                            {item.author}
                          </a>{" "}
                          {/* <span className="relative">{item.date}</span> */}
                        </p>
                      </div>
                    </div>
                    <h3 className="title mb-[10px] leading-[1.4]">
                      <a
                        className="text-black text-[18px] font-semibold inline-block transition-all duration-300 hover:text-black"
                        href="#"
                        onClick={() => {
                          modalToggle(true);
                          setPasswordModal(item);
                        }}
                      >
                        {item.title}
                      </a>
                    </h3>
                    <div className="tokyo_tm_read_more">
                      <a
                        href="#"
                        onClick={() => {
                          modalToggle(true);
                          setPasswordModal(item);
                        }}
                      >
                        <span>Read More</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionContainer>
  );
};
export default Portfolio;
