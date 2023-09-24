import { useContext, useEffect, useState } from "react";
import { TokyoContext } from "../Context";
import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";

import { useRouter } from "next/router";
import Link from "next/link";

const data = [
  {
    id: 1,
    title: "Platform to find global talent & quality service providers",
    image: "/assets/img/news/1.svg",
    author: "prototype • UX Design • branding",
    date: "22 Oct 2022",
    colorCode: "#FEEDED",
  },
  {
    id: 2,
    title: "The platform enables users to book and lists spaces",
    image: "/assets/img/news/2.svg",
    author: "prototype • UX Research • UX Design",
    date: "15 Oct 2022",
    colorCode: "#DFF2FB",
  },
  {
    id: 3,
    title: "Europe’s largest asset management system",
    image: "/assets/img/news/3.svg",
    author: "prototype • UX research • UX Design",
    date: "07 Oct 2022",
    colorCode: "#E5F1FA",
  },
  {
    id: 4,
    title: "The platform brings skilled cooks to the homes",
    image: "/assets/img/news/4.svg",
    author: "prototype • UX research • UX Design",
    date: "25 Sep 2022",
    colorCode: "#E6F7F4",
  },
  {
    id: 5,
    title: "Real-time video consultation with doctors.",
    image: "/assets/img/news/5.png",
    author: "prototype • UX research • UX Design",
    date: "25 Sep 2022",
    colorCode: "#E9F6F8",
  },
];

const Portfolio = () => {

  const router = useRouter()

  const [enter, setEnter] = useState({ id: null, visible: false });
  const { setPasswordModal, setNewsModal, modalToggle, savePwd, navChange, passwordModal } =
    useContext(TokyoContext);
  // const [news, setNews] = useState(data);
  const [loader, setLoader] = useState(false);
  const [key, setKey] = useState("*");
  const [clickedItem, setClickedItem] = useState(null)

  const navigateTo = (link) => {
    router.push(`/portfolio/${link}`, null, {scroll: false})
  }

  const categoryMapping = {
    'ux-design': 'UX Design',
    'branding': 'branding'
  }

  const isActiveLink = (href) => {
    return router.asPath === href
  }

  const category = router.query.category ?? 'all'
  const keyword = categoryMapping[category]?? null

  const news = category === 'all'? data: keyword? data.filter(el =>  el.author.toLowerCase().includes(keyword.toLowerCase())): []

  useEffect(() => {
    if(savePwd && clickedItem?.id) {
      router.push(`/portfolio/${clickedItem?.id}`)
    }
  }, [clickedItem?.id, savePwd])


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
                    <Link href="/portfolio" className={`current inline-block font-medium font-montserrat transition-all duration-300 hover:text-black ${isActiveLink('/portfolio')? 'tw-text-black':'tw-text-[#767676]'}`}>All</Link>

                  </li>
                  <li className="mr-[25px] inline-block">
                    <Link href="/portfolio?category=ux-design" className={`current inline-block font-medium font-montserrat transition-all duration-300 hover:text-black ${isActiveLink('/portfolio?category=ux-design')? 'tw-text-black':'tw-text-[#767676]'}`}>UX Design</Link>

                  </li>
                  <li className="mr-[25px] inline-block">
                    <Link href="/portfolio?category=branding" className={`current inline-block font-medium font-montserrat transition-all duration-300 hover:text-black ${isActiveLink('/portfolio?category=branding')? 'tw-text-black':'tw-text-[#767676]'}`}>Branding</Link>

                
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="ml-[-50px] list-none">
            {!loader &&
              news.map((item, index) => (
                <li
                  className="mb-[50px] float-left w-1/2 pl-[50px]"
                  key={item.id}
                >
                  <div className="list_inner w-full clear-both float-left h-auto relative img-remake">
                    <div
                      className="image relative overflow-hidden"
                      style={{
                        backgroundColor:
                          enter.visible && item.id === enter.id
                            ? item.colorCode
                            : "unset",
                      }}
                      onMouseOver={() =>
                        setEnter({ id: index + 1, visible: true })
                      }
                      onMouseLeave={() =>
                        setEnter({ id: null, visible: false })
                      }
                    >
                      <img
                        className="min-w-full opacity-0 "
                        src="/assets/img/thumbs/40-25.jpg"
                        alt="image"
                      />
                      <div
                        className="main absolute inset-0 bg-no-repeat  bg-center transition-all duration-300"
                        data-img-url={item.image}
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <a
                        className="tokyo_tm_full_link"
                        role="button"
                        onClick={() => {
                          modalToggle(true);
                          if (savePwd) {
                            setNewsModal(item);
                            navigateTo(item.id);
                          } else { 
                              setPasswordModal(item);
                              setClickedItem(item)
                          }
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
                              role="button"
                              onClick={() => {
                                modalToggle(true);
                                if (savePwd) {
                                  setNewsModal(item);
                                  navigateTo(item.id);
                                } else { 
                                    setPasswordModal(item);
                                    setClickedItem(item)
                                }
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
                          role="button"
                          onClick={() => {
                            modalToggle(true);
                            if (savePwd) {
                              setNewsModal(item);
                              navigateTo(item.id)
                            } else { 
                                setPasswordModal(item);
                                setClickedItem(item)
                            }
                          }}
                        >
                          {item.title}
                        </a>
                      </h3>
                      <div className="tokyo_tm_read_more">
                        <a
                          role="button"
                          onClick={() => {
                            modalToggle(true);
                            if (savePwd) {
                              setNewsModal(item);
                              navigateTo(item.id);
                            } else { 
                                setPasswordModal(item);
                                setClickedItem(item)
                            }
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
