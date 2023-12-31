import { TokyoContext } from "@/src/Context";
import { useContext } from "react";
import SectionContainer from "../SectionContainer";
import SectionTitle from "../SectionTitle";

const data = [
  {
    id: 1,
    headerImg: "assets/img/news/sg.svg",
    headerTxt: `The SquadGurus Global Network has the marketplace for cloud & software development outsourcing.`,
    headerBodyImg: "assets/img/news/sg-body.svg",
    timelineAndClient: {
      time: "July 2021, Current",
      client: "United States, Boston",
    },
    myRole: ["User Research", "UX Design & Developer Hand-off"],
    tools: ["Miro", "Figma", "Adobe XD & Adobe Illustrator"],
    frameworks: ["Ant Design"],
    context: ` In July 2021, a Boston -based company wanted to develop a platform
    for finding global software development talent.`,
    problem: `It is time- and money-consuming to find the highest-quality technical talent and capabilities in the vast global market.`,
    solution: `Developing a platform that allows for a seamless experience in connecting service providers and clients.`,
    objective: `Conduct research, develop strategies, and design an end-to-end experience to increase the conversion rate of the platform.`,
    tackling: [
      {
        id: 1,
        name: "Competitive Analysis",
        text: [
          "Analyzing competitors such as GoCatalant, UpWork, Freelancer,and Zoho Recruite.",
        ],
        image: "assets/img/news/1.jpg",
      },
      {
        id: 2,
        name: "User Interview",
        text: [
          "Understanding the requirements, user journey, user needs, and pain points.",
        ],
        image: "assets/img/news/2.jpg",
      },
      {
        id: 3,
        name: "Persona Mapping",
        text: [
          "Mapping out the access and actions for each user (Client, and Service Provider).",
        ],
        image: "assets/img/news/3.jpg",
      },
      {
        id: 4,
        name: "Wireframe & Test",
        text: [
          "Create wireframes, turn into hi-fi prototypes, test with users, gather feedback, and iterate.",
        ],
        image: "assets/img/news/4.jpg",
      },
    ],

    step1: "assets/img/news/competitive-analysis.svg",
    step2: "assets/img/news/interviews.svg",
    step3: "assets/img/news/personal-mapping.svg",
    step4: "assets/img/news/final-design.svg",

    offeringImg: "assets/img/news/offering.svg",
    achivements: [
      { id: 1, text: "Current frustrations & pain points" },
      { id: 2, text: "What did they really want?" },
      { id: 3, text: "What did they really need?" },
      { id: 4, text: "Interviewed with Clients" },
      { id: 5, text: "Service Providers & Admin" },
      { id: 6, text: "20+ user interviews" },
      { id: 7, text: "Gathered the insights" },
    ],
    researchQuestions: [
      "What do SquadGurus admins expect to do in the platform and what are their permissions?",
      "How will clients and service providers be onboarded?",
      "What details do clients need to create an opportunity?",
      "How do service providers receive the opportunity?",
      "How does user management work?",
      "Is the app global? If so, how does region/location impact the system?",
    ],
    insights: [
      { id: 1, text: "Current frustrations & pain points" },
      { id: 2, text: "Identify each personas" },
      { id: 3, text: "Classify personas" },
    ],
    personaMappingSS: [
      "assets/img/news/Group 1000001905.svg",
      "assets/img/news/Group 1000001906.svg",
      "assets/img/news/Group 1000001904.svg",
      "assets/img/news/Group 1000001907.svg",
    ],
    personaIdentifyingSS: [
      "assets/img/news/Group 10193.svg",
      "assets/img/news/Group 10195.svg",
      "assets/img/news/Group 10196.svg",
    ],
    keyTakeaways: [
      {
        id: 1,
        text: `Client should be able to create 3 types of opportunities. And receive proposals will be able to accept/reject. Also send invitation
as public, private or exclusive.`,
      },
      {
        id: 2,
        text: `Service Providers should be able to filter and look the opportunities. And also evaluate and submit candidate to the Proposal.`,
      },
      {
        id: 3,
        text: `SquadGurus users able to create opportunity on behalf of client, and send proposal on behalf of service providers.`,
      },
    ],
    prototypeTxt: [
      {
        id: 1,
        text: "I did the Design System & SquagGurus logo &  brand identity",
      },
      { id: 2, text: "Straight away jumped in to high-fidelity design" },
      {
        id: 3,
        text: "Within a week, after couple of iterations the high-fidelity design was ready to test with real users",
      },
    ],
    brandLogo: "assets/img/news/brandLogoSg.svg",
    handOver: [
      { id: 1, text: " Final MVP prototype design approval" },
      {
        id: 2,
        text: "Hand over the MVP design to developers and QAs with references along with the design documents",
      },
      {
        id: 3,
        text: "Daily sync-up with the team to make sure everything on-track",
      },
    ],
    finalDesign: "assets/img/news/finalDesign.svg",
    finalDesignTxt: ` Finally, we successfully launched the MVP 3 months later, in
    December 2021. We celebrated over a team call with 300+ clients and
    service providers listed.`,
  },

  {
    id: 2,
    headerImg: "assets/img/news/million.svg",
    headerTxt: `The MillionSpaces enables users to book co-working spaces & space owners to list in the platform.`,
    headerBodyImg: "assets/img/news/million-bg.svg",
    timelineAndClient: {
      time: "May 2019 - June 2021",
      client: "Australia, Singapore, Sri Lanka",
    },
    myRole: ["User Research, UX Design, Dev Hand-off"],
    tools: ["Miro", " Figma", " Adobe XD & Adobe Illustrator"],
    frameworks: ["Ant Design"],
    context: ` In Mar 2018, MillionSpaces launched its start-up, allowing users to book co-working spaces.`,
    problem: `Users spend time and effort to find the coworking space, and there are many under-utilised spaces available.`,
    solution: `Developing a platform that allows for a seamless experience in connecting service providers and clients.`,
    objective: `Conduct research, develop strategies, and design an end-to-end experience to increase the conversion rate of the platform.`,
    tackling: [
      {
        id: 1,
        name: "Domain Understand",
        text: [
          "User research: Insights from interviews and surveys drive understanding.",
        ],
        image: "assets/img/news/1.jpg",
      },
      {
        id: 2,
        name: "Define Information",
        text: [
          "User persona, empathy map - Understand needs and frustrations deeply.",
        ],
        image: "assets/img/news/2.jpg",
      },
      {
        id: 3,
        name: "Design Ideation",
        text: [
          "Idea brainstorming, whiteboard sessions fuel creativity, innovative solutions.",
        ],
        image: "assets/img/news/3.jpg",
      },
      {
        id: 4,
        name: "Wireframe & Test",
        text: [
          "Create wireframes, turn into hi-fi prototypes, test with users, gather feedback, and iterate.",
        ],
        image: "assets/img/news/4.jpg",
      },
    ],

    step1: "assets/img/news/domain-understand.svg",
    step2: "assets/img/news/define-information.svg",
    step3: "assets/img/news/design-ideation.svg",
    step4: "assets/img/news/wireframe-test.svg",

    offeringImg: "assets/img/news/offering.svg",
    achivements: [
      { id: 1, text: "Current frustrations & pain points" },
      { id: 2, text: "What did they really want?" },
      { id: 3, text: "What did they really need?" },
      { id: 4, text: "Interviewed with Clients" },
      { id: 5, text: "Service Providers & Admin" },
      { id: 6, text: "20+ user interviews" },
      { id: 7, text: "Gathered the insights" },
    ],
    researchQuestions: [
      "What kind of work do you do? ",
      "How often do you use a co-working space?",
      "What convinced you to choose a co-working space over cafes/home/regular offices?",
      "What do you think of the concept of co-working?",
      "How did you find your current co-working space?",
      "Would you like to have all the solutions to your problems on a smartphone?",
    ],
    insights: [
      {
        id: 1,
        text: "We gathered all the possible stakeholders, including the marketing team, product team, development team, and CEO (basically everyone), to brainstorm ideas.",
      },
      {
        id: 2,
        text: "Regarding primary needs, users prioritized location, available space types or space categories, and the image of the space. As for secondary needs, users prioritized the type of spaces, ratings of common areas and lounges, pricing, current space availability, offers/discounts, and amenities.",
      },
    ],
    personaMappingSS: [
      "assets/img/news/Group 1000001905.svg",
      "assets/img/news/Group 1000001906.svg",
      "assets/img/news/Group 1000001904.svg",
      "assets/img/news/Group 1000001907.svg",
    ],
    personaIdentifyingSS: [
      "assets/img/news/ms-sahan.svg",
      "assets/img/news/ms-nimesha.svg",
      "assets/img/news/ms-vishnu.svg",
    ],
    keyTakeaways: [
      {
        id: 1,
        text: `Client should be able to create 3 types of opportunities. And receive proposals will be able to accept/reject. Also send invitation
as public, private or exclusive.`,
      },
      {
        id: 2,
        text: `Service Providers should be able to filter and look the opportunities. And also evaluate and submit candidate to the Proposal.`,
      },
      {
        id: 3,
        text: `SquadGurus users able to create opportunity on behalf of client, and send proposal on behalf of service providers.`,
      },
    ],
    prototypeTxt: [
      {
        id: 1,
        text: "I did the Design System & SquagGurus logo &  brand identity",
      },
      { id: 2, text: "Straight away jumped in to high-fidelity design" },
      {
        id: 3,
        text: "Within a week, after couple of iterations the high-fidelity design was ready to test with real users",
      },
    ],
    brandLogo: "assets/img/news/brandLogoSg.svg",
    handOver: [
      { id: 1, text: " Final MVP prototype design approval" },
      {
        id: 2,
        text: "Hand over the MVP design to developers and QAs with references along with the design documents",
      },
      {
        id: 3,
        text: "Daily sync-up with the team to make sure everything on-track",
      },
    ],
    finalDesign: "assets/img/news/ms-finalD.svg",
    finalDesignTxt: ` Finally, after a span of 4 months, we achieved a
    successful product launch in July 2021. To
    commemorate this milestone, we organized a
    celebration at a hotel, where over 35+ co-working
    hosts had been onboarded onto the platform.`,
  },
];

const DetailView = () => {
  const { newsModal, setNewsModal, navChange } = useContext(TokyoContext);
  return (
    <SectionContainer name={"detailview"}>
      <div className="back-arrow">
        <img
          src="assets/img/news/back-arrow.svg"
          onClick={() => navChange("portfolio")}
        />
      </div>
      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[45px] px-0 ">
          <img src={data[newsModal?.id - 1]?.headerImg} className="" />
          <p
            className="date font-montserrat text-[13px] text-[#767676]"
            style={{ marginTop: "32px" }}
          >
            <a
              className="text-[#767676] transition-all duration-300 hover:text-black uppercase"
              href="#"
            >
              {newsModal?.author}
            </a>
          </p>
          <div
            className="title_flex w-full h-auto clear-both flex justify-between items-end"
            style={{ marginTop: "32px" }}
          >
            <SectionTitle title={data[newsModal?.id - 1]?.headerTxt} />
          </div>

          <img
            src={data[newsModal?.id - 1]?.headerBodyImg}
            className="img-remake  w-full"
            style={{ marginTop: "40px" }}
          />

          <div
            className="tokyo_tm_short_info w-full h-auto clear-both float-left flex  pb-[30px] mb-[40px]"
            style={{ marginTop: "40px" }}
          >
            <div className="left w-1/2 pr-[50px]">
              <div className="tokyo_tm_info w-full h-auto clear-both float-left">
                <ul className="m-0 list-none">
                  <li className="m-0 flex">
                    <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                      Client:
                    </span>
                    <span>
                      <div>
                        {data[newsModal?.id - 1]?.timelineAndClient.client}
                      </div>
                    </span>
                  </li>
                  <li className="m-0 flex">
                    <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                      Timeline:
                    </span>
                    <span>
                      <div>
                        {data[newsModal?.id - 1]?.timelineAndClient.time}
                      </div>
                    </span>
                  </li>
                  <li className="m-0 flex">
                    <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                      Framework:
                    </span>
                    <span>
                      {data[newsModal?.id - 1]?.frameworks.toLocaleString()}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="right w-1/2 pl-[50px]">
              <div className="tokyo_tm_info">
                <ul className="m-0 list-none">
                  <li className="m-0 flex">
                    <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                      My Role:
                    </span>
                    <span>
                      {data[newsModal?.id - 1]?.myRole.toLocaleString()}
                    </span>
                  </li>
                  <li className="m-0 flex">
                    <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                      Tools:
                    </span>
                    <span>{data[newsModal?.id - 1]?.tools.toString()}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0">
        <div className="container">
          <div className="in w-full h-auto clear-both float-left">
            <div>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "32px",
                  color: "#767676",
                }}
              >
                THE CONTEXT
              </div>
              <div
                style={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontWeight: "400",
                  color: "#000000",
                  marginTop: "32px",
                }}
              >
                {data[newsModal?.id - 1]?.context}
              </div>
              <hr style={{ marginTop: "40px" }} />
            </div>
            <div style={{ marginTop: "40px" }}>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "32px",
                  color: "#767676",
                }}
              >
                THE PROBLEM
              </div>
              <div
                style={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontWeight: "400",
                  color: "#000000",
                  marginTop: "32px",
                }}
              >
                {data[newsModal?.id - 1]?.problem}
              </div>
              <hr style={{ marginTop: "40px" }} />
            </div>
            <div style={{ marginTop: "40px" }}>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "32px",
                  color: "#767676",
                }}
              >
                SOLUTION
              </div>
              <div
                style={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontWeight: "400",
                  color: "#000000",
                  marginTop: "32px",
                }}
              >
                {data[newsModal?.id - 1]?.solution}
              </div>
              <hr style={{ marginTop: "40px" }} />
            </div>
            <div style={{ marginTop: "40px" }}>
              <div
                style={{
                  fontWeight: 500,
                  fontSize: "13px",
                  lineHeight: "32px",
                  color: "#767676",
                }}
              >
                THE OBJECTIVE
              </div>
              <div
                style={{
                  fontSize: "20px",
                  lineHeight: "30px",
                  fontWeight: "400",
                  color: "#000000",
                  marginTop: "32px",
                }}
              >
                {data[newsModal?.id - 1]?.objective}
              </div>
              <hr style={{ marginTop: "40px" }} />
            </div>
            <hr />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[100px] px-0 ">
          <div className="list w-full h-auto clear-both float-left">
            <div
              className="text-black text-xl font-semibold leading-loose"
              style={{ marginBottom: "32px" }}
            >
              Tackling the problem
            </div>
            <ul className="ml-[-40px] list-none flex flex-wrap">
              {data[newsModal?.id - 1]?.tackling.map((service) => (
                <li className="mb-[40px] w-1/4 pl-[40px]" key={service.id}>
                  <div className="list_inner w-full h-full clear-both float-left relative border-solid border-[rgba(0,0,0,.1)] border bg-white pt-[45px] pr-[20px] pb-[40px] pl-[20px] transition-all duration-300">
                    <span className="number inline-block mb-[25px] relative w-[60px] h-[60px] leading-[60px] text-center rounded-full bg-[rgba(0,0,0,.03)] font-bold text-black font-montserrat transition-all duration-300">
                      {service.id <= 9 ? `0${service.id}` : service.id}
                    </span>
                    <h3 className="title font-bold text-black text-[18px] mb-[15px]">
                      {service.name}
                    </h3>
                    <p className="text">{service.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <hr />
        </div>
      </div>

      <div className="tokyo_tm_skillbox w-full h-auto clear-both float-left pt-[90px] px-0 ">
        <div className="container">
          <hr style={{ marginBottom: "80px" }} />
          <div>
            <img src={data[newsModal?.id - 1]?.step1} />
            <div
              style={{
                marginTop: "40px",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
                color: "#000000",
              }}
            >
              {newsModal?.id === 1
                ? "Research and analyze what the competitors are offering."
                : newsModal?.id === 2
                ? "Understanding user needs through user research."
                : ""}
            </div>
            {newsModal?.id === 1 ? (
              <img
                src={data[newsModal?.id - 1]?.offeringImg}
                style={{ marginTop: "40px" }}
                className="img-remake"
              />
            ) : (
              <>
                {" "}
                <ul className="list-none" style={{ marginTop: "20px" }}>
                  <li className="m-0 pl-[25px] relative">
                    <span>
                      <img
                        className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      We investigated the target users from Singapore, Australia
                      and Sri Lanka to gather insights that would help us design
                      the process. The objective of the research was to
                      understand their needs, behaviour, attitude, and pain
                      points.
                    </span>
                  </li>
                </ul>
                <div
                  style={{
                    fontSize: "16px",
                    color: "black",
                    fontWeight: 600,
                    lineHeight: "32px",
                    marginTop: "40px",
                  }}
                >
                  Some Research Questions
                </div>
                <div>
                  {data[newsModal?.id - 1]?.researchQuestions.map(
                    (el, index) => (
                      <div style={{ marginTop: "16px" }} className="flex">
                        <span
                          style={{
                            width: "32px",
                            height: "32px",
                            background: "#DADADC",
                            borderRadius: 100,
                            padding: "2px 2px 2px 7px",
                            marginRight: "16px",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          0{index + 1}
                        </span>
                        {el}
                      </div>
                    )
                  )}
                </div>
                <img
                  src="assets/img/news/ms-pie.svg"
                  className="img-remake  w-full"
                  style={{ marginTop: "40px" }}
                />
              </>
            )}
          </div>
          <hr style={{ marginTop: "80px" }} />
          <div style={{ marginTop: "80px" }}>
            <img src={data[newsModal?.id - 1]?.step2} />
            <div
              style={{
                marginTop: "40px",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: 600,
                color: "#000000",
              }}
            >
              {newsModal?.id === 1
                ? "Questions focused on what each user expects to achieve."
                : newsModal?.id === 2
                ? "Understanding user needs through user research."
                : ""}
            </div>
            <div
              className="tokyo_tm_skillbox in w-full h-auto clear-both float-left flex"
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              {newsModal?.id === 1 ? (
                <>
                  <div className="left w-1/2 pr-[50px]">
                    <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                      <ul className="m-0 list-none">
                        {data[newsModal?.id - 1]?.achivements
                          ?.slice(
                            0,
                            data[newsModal?.id - 1]?.achivements?.length % 2 ===
                              0
                              ? data[newsModal?.id - 1]?.achivements?.length / 2
                              : data[newsModal?.id - 1]?.achivements?.length /
                                  2 +
                                  1
                          )
                          .map((item) => (
                            <li
                              className="m-0 pl-[25px] relative"
                              key={item.id}
                            >
                              <span>
                                <img
                                  className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                                  src="assets/img/svg/rightarrow.svg"
                                  alt="image"
                                />
                                {item.text}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                  <div className="right w-1/2 pl-[50px]">
                    <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                      <ul className="m-0 list-none">
                        {data[newsModal?.id - 1]?.achivements
                          ?.slice(
                            data[newsModal?.id - 1]?.achivements?.length % 2 ===
                              0
                              ? data[newsModal?.id - 1]?.achivements?.length / 2
                              : data[newsModal?.id - 1]?.achivements?.length /
                                  2 +
                                  1
                          )
                          .map((item) => (
                            <li
                              className="m-0 pl-[25px] relative"
                              key={item.id}
                            >
                              <span>
                                <img
                                  className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                                  src="assets/img/svg/rightarrow.svg"
                                  alt="image"
                                />
                                {item.text}
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : newsModal?.id === 2 ? (
                <>
                  <div className="list w-full h-auto clear-both float-left">
                    <ul className="ml-[-40px] list-none flex flex-wrap">
                      {[
                        "assets/img/news/ms-needs.svg",
                        "assets/img/news/ms-frus.svg",
                      ].map((el, index) => (
                        <li className="mb-[40px] w-1/2 pl-[40px]">
                          <img src={el} className="w-full img-remake" />
                        </li>
                      ))}
                      <div className="container">
                        <hr />
                        <div
                          style={{
                            fontSize: "16px",
                            lineHeight: "32px",
                            fontWeight: 600,
                            color: "#000000",
                            marginTop: "40px",
                          }}
                        >
                          Persona Identifying
                        </div>
                        <div className="list w-full h-auto clear-both float-left">
                          <ul className="ml-[-40px] list-none flex flex-wrap">
                            {data[newsModal?.id - 1]?.personaIdentifyingSS.map(
                              (el, index) => (
                                <li className="mb-[40px] w-1/3 pl-[40px]">
                                  <img src={el} className="w-full img-remake" />
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </ul>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
          {newsModal?.id === 1 ? (
            <div>
              <div
                style={{
                  fontSize: "16px",
                  color: "black",
                  fontWeight: 600,
                  lineHeight: "32px",
                }}
              >
                Some Research Questions
              </div>
              <div>
                {data[newsModal?.id - 1]?.researchQuestions.map((el, index) => (
                  <div style={{ marginTop: "16px" }} className="flex">
                    <span
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "#DADADC",
                        borderRadius: 100,
                        padding: "2px 2px 2px 7px",
                        marginRight: "16px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      0{index + 1}
                    </span>
                    {el}
                  </div>
                ))}
              </div>
            </div>
          ) : newsModal?.id === 2 ? (
            <>&nbsp;</>
          ) : (
            ""
          )}
          <hr style={{ marginTop: "80px" }} />{" "}
          <div style={{ marginTop: "80px" }}>
            <img src={data[newsModal?.id - 1]?.step3} />
            <div
              style={{
                marginTop: "40px",
                marginBottom: "40px",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: 600,
                color: "#000000",
              }}
            >
              {newsModal?.id === 1
                ? " Overwhelmed with insights, so we needed to…"
                : newsModal?.id === 2
                ? "Ideate solutions based on the knowledge gathered."
                : ""}
            </div>

            <div
              className="in w-full h-auto clear-both float-left"
              style={{ marginBottom: "80px" }}
            >
              <div className="left ">
                <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                  <ul className="m-0 list-none">
                    {data[newsModal?.id - 1]?.insights.map((item, index) => (
                      <>
                        {" "}
                        <li className="m-0 pl-[25px] relative" key={item.id}>
                          <span>
                            <img
                              className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                              src="assets/img/svg/rightarrow.svg"
                              alt="image"
                            />
                            {item.text}
                          </span>
                        </li>
                        <br />
                      </>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div style={{}}>
            <div
              style={{
                fontSize: "16px",
                lineHeight: "32px",
                fontWeight: 600,
                color: "#000000",
              }}
            >
              {newsModal?.id === 1
                ? "Persona Mapping (Screenshot from Miro)"
                : newsModal?.id === 2
                ? "White board session"
                : ""}
            </div>
            <div
              className="tokyo_tm_skillbox in w-full h-auto  float-left flex"
              style={{ columnGap: "20px" }}
            >
              {newsModal?.id === 1 ? (
                <>
                  <div className="left w-1/2 " style={{ marginBottom: "0px" }}>
                    {data[newsModal?.id - 1]?.personaMappingSS
                      ?.slice(
                        0,
                        data[newsModal?.id - 1]?.personaMappingSS?.length %
                          2 ===
                          0
                          ? data[newsModal?.id - 1]?.personaMappingSS?.length /
                              2
                          : data[newsModal?.id - 1]?.personaMappingSS?.length /
                              2 +
                              1
                      )
                      .map((el, index) => (
                        <img
                          src={el}
                          className="w-full img-remake"
                          style={{ paddingTop: "24px" }}
                        />
                      ))}
                  </div>
                  <div className="right w-1/2 ">
                    {data[newsModal?.id - 1]?.personaMappingSS
                      ?.slice(
                        data[newsModal?.id - 1]?.personaMappingSS?.length %
                          2 ===
                          0
                          ? data[newsModal?.id - 1]?.personaMappingSS?.length /
                              2
                          : data[newsModal?.id - 1]?.personaMappingSS?.length /
                              2 +
                              1
                      )
                      .map((el, index) => (
                        <img
                          src={el}
                          className="w-full img-remake"
                          style={{ paddingTop: "24px" }}
                        />
                      ))}
                  </div>
                </>
              ) : newsModal?.id === 2 ? (
                <>
                  <img
                    src="assets/img/news/ms-board.svg"
                    className="w-full img-remake"
                  />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>

      {newsModal?.id === 1 ? (
        <>
          {" "}
          <div className="container">
            <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[90px] px-0 ">
              <div className="list w-full h-auto clear-both float-left">
                <div>
                  <div
                    style={{
                      fontSize: "16px",
                      lineHeight: "32px",
                      fontWeight: 600,
                      color: "#000000",
                    }}
                  >
                    Persona Identifying
                  </div>
                  <div className="list w-full h-auto clear-both float-left">
                    <ul className="ml-[-40px] list-none flex flex-wrap">
                      {data[newsModal?.id - 1]?.personaIdentifyingSS.map(
                        (el, index) => (
                          <li className="mb-[40px] w-1/3 pl-[40px]">
                            <img src={el} className="w-full img-remake" />
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div
              className="tokyo_tm_skillbox w-full clear-both float-left h-auto px-0"
              style={{ marginTop: "40px" }}
            >
              <div
                className="in w-full h-auto clear-both float-left"
                style={{}}
              >
                <div className="left ">
                  <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                    <div
                      style={{
                        color: "black",
                        fontSize: 16,
                        fontFamily: "Poppins",
                        fontWeight: 600,
                        lineHeight: "32px",
                      }}
                    >
                      Key Takeaways
                    </div>
                    <ul className="m-0 list-none">
                      {data[newsModal?.id - 1]?.keyTakeaways.map(
                        (item, index) => (
                          <li
                            className="m-0 pl-[25px] relative"
                            key={item.id}
                            style={{ marginTop: "24px" }}
                          >
                            <span>
                              <img
                                className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                                src="assets/img/svg/rightarrow.svg"
                                alt="image"
                                style={{ top: "13px" }}
                              />
                              {item.text}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : newsModal?.id === 2 ? (
        <> </>
      ) : (
        <></>
      )}

      <div className="container">
        <div
          className="tokyo_tm_skillbox w-full clear-both float-left h-auto px-0"
          style={{ marginTop: "80px", marginBottom: "40px" }}
        >
          <div className="in w-full h-auto clear-both float-left" style={{}}>
            <div className="left ">
              <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                <hr style={{ marginBottom: "80px" }} />
                <div>
                  <img src={data[newsModal?.id - 1]?.step4} />
                  <div
                    style={{
                      marginTop: "40px",
                      color: "black",
                      fontSize: 20,
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      wordWrap: "break-word",
                    }}
                  >
                    {newsModal?.id === 1
                      ? "were on tight deadline, to prototype to test"
                      : newsModal?.id === 2
                      ? "Combining all the previous details to create a feasible, desirable, and viable prototype."
                      : ""}
                  </div>

                  {newsModal?.id === 1 ? (
                    <ul className="m-0 list-none" style={{ marginTop: "36px" }}>
                      {data[newsModal?.id - 1]?.prototypeTxt.map(
                        (item, index) => (
                          <li
                            className="m-0 pl-[25px] relative"
                            key={item.id}
                            style={{ marginTop: "4px" }}
                          >
                            <span>
                              <img
                                className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                                src="assets/img/svg/rightarrow.svg"
                                alt="image"
                                style={{ top: "13px" }}
                              />
                              {item.text}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  ) : newsModal?.id === 2 ? (
                    <></>
                  ) : (
                    ""
                  )}
                  {newsModal?.id === 1 ? (
                    <div style={{ marginTop: "80px" }}>
                      <div
                        style={{
                          color: "black",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          lineHeight: "px",
                          wordWrap: "break-word",
                        }}
                      >
                        Brand Identify & Logo
                      </div>
                      <img
                        src={data[newsModal?.id - 1]?.brandLogo}
                        style={{ marginTop: "24px" }}
                        className="w-full img-remake"
                      />
                    </div>
                  ) : newsModal?.id === 2 ? (
                    <>
                      <div
                        style={{
                          color: "black",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          lineHeight: "px",
                          wordWrap: "break-word",
                          marginTop: "40px",
                        }}
                      >
                        A/B Testing
                      </div>
                      <ul className="m-0 list-none">
                        {[
                          "As soon as the high-fidelity screens were completed, we conducted live user testing on people who use co-working spaces to get their feedback and suggestions. For example, we provided three options for each main set of screens, such as the home screen and booking screen. Users liked certain sections of each option, so we finally came up with the final design by mixing and matching the options.",
                        ].map((item, index) => (
                          <li
                            className="m-0 pl-[25px] relative"
                            key={item.id}
                            style={{ marginTop: "4px" }}
                          >
                            <span>
                              <img
                                className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                                src="assets/img/svg/rightarrow.svg"
                                alt="image"
                                style={{ top: "13px" }}
                              />
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <img
                        src="assets/img/news/ms-final0.svg"
                        className="img-remake"
                        style={{ marginTop: "20px" }}
                      />
                      <div
                        style={{
                          color: "black",
                          fontSize: 16,
                          fontFamily: "Poppins",
                          fontWeight: 600,
                          lineHeight: "px",
                          wordWrap: "break-word",
                          marginTop: "40px",
                        }}
                      >
                        Final Design
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                  {newsModal?.id === 1 ? (
                    <>
                      <hr style={{ marginTop: "80px", marginBottom: "80px" }} />{" "}
                      <div>
                        <div
                          style={{
                            color: "black",
                            fontSize: 20,
                            fontFamily: "Poppins",
                            fontWeight: "600",
                            wordWrap: "break-word",
                          }}
                        >
                          Stakeholder approval & developer handover
                        </div>
                        <ul
                          className="m-0 list-none"
                          style={{ marginTop: "36px" }}
                        >
                          {data[newsModal?.id - 1]?.handOver.map(
                            (item, index) => (
                              <li
                                className="m-0 pl-[25px] relative"
                                key={item.id}
                                style={{ marginTop: "4px" }}
                              >
                                <span>
                                  <img
                                    className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                                    src="assets/img/svg/rightarrow.svg"
                                    alt="image"
                                    style={{ top: "13px" }}
                                  />
                                  {item.text}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </>
                  ) : newsModal?.id === 2 ? (
                    <></>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <img
        src={data[newsModal?.id - 1]?.finalDesign}
        style={{ marginTop: "40px" }}
        className="img-remake"
      />

      {newsModal?.id === 1 ? (
        <></>
      ) : newsModal?.id === 2 ? (
        <>
          <div className="container">
            <div
              style={{
                color: "black",
                fontSize: 20,
                fontFamily: "Poppins",
                fontWeight: "600",
                wordWrap: "break-word",
                marginTop: "24px",
              }}
            >
              Test & Feedback
            </div>
            <div
              style={{
                color: "black",
                fontSize: 16,
                fontFamily: "Poppins",
                fontWeight: 600,
                lineHeight: "px",
                wordWrap: "break-word",
                marginTop: "40px",
              }}
            >
              The high-fidelity wireframe screens and flows were shown to many
              users. During this time, the following questions were encountered.
            </div>
            <ul className="m-0 list-none" style={{ marginTop: "10px" }}>
              {[
                "The high-fidelity wireframe screens and flows were shown to many users. During this time, the following questions were encountered.",
                "Users had a question about whether they could get in touch with the host if they ran out of available hot desks on a booked day. We addressed this concern by providing the 'Help' option in the hamburger menu.",
                "Users inquired about the possibility of making multiple bookings simultaneously. However, the current system only supports individual bookings to maintain a straightforward process for both users and hosts.",
                "Users inquired about the functioning of promo codes and offers, prompting us to elucidate the process by utilizing a screen.",
                "In addition, we implemented numerous minor enhancements, including smoother transitions, refined icons, optimized images, and engaging animations, all aimed at enhancing the overall user experience.",
              ].map((item, index) => (
                <li
                  className="m-0 pl-[25px] relative"
                  key={item.id}
                  style={{ marginTop: "4px" }}
                >
                  <span>
                    <img
                      className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                      src="assets/img/svg/rightarrow.svg"
                      alt="image"
                      style={{ top: "13px" }}
                    />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}
      <div className="container">
        <div
          className="tokyo_tm_skillbox w-full clear-both float-left h-auto px-0"
          style={{ marginTop: "40px" }}
        >
          <div className="in w-full h-auto clear-both float-left" style={{}}>
            <div className="left ">
              <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                <hr style={{ marginTop: "80px", marginBottom: "80px" }} />
                <div>
                  <div
                    style={{
                      color: "black",
                      fontSize: 32,
                      fontFamily: "Poppins",
                      fontWeight: "600",
                      wordWrap: "break-word",
                      lineHeight: "46px",
                    }}
                  >
                    {data[newsModal?.id - 1]?.finalDesignTxt}
                  </div>
                </div>

                {newsModal?.id === 1 ? (
                  <>
                    <hr style={{ marginTop: "80px", marginBottom: "80px" }} />
                    <div>
                      <div
                        style={{
                          color: "#767676",
                          fontSize: 13,
                          fontFamily: "Poppins",
                          fontWeight: "500",
                          textTransform: "uppercase",
                          lineHeight: "px",
                          wordWrap: "break-word",
                        }}
                      >
                        Take aways & Learning
                      </div>
                      <div
                        style={{
                          color: "black",
                          fontSize: 20,
                          fontFamily: "Poppins",
                          fontWeight: "600",
                          wordWrap: "break-word",
                          marginTop: "24px",
                        }}
                      >
                        What I would do better next time.
                      </div>
                      <ul
                        className="m-0 list-none"
                        style={{ marginTop: "36px" }}
                      >
                        <li
                          className="m-0 pl-[25px] relative"
                          style={{ marginTop: "4px" }}
                        >
                          <span>
                            <img
                              className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                              src="assets/img/svg/rightarrow.svg"
                              alt="image"
                              style={{ top: "13px" }}
                            />
                            <div
                              style={{
                                marginTop: "40px",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "32px",
                                color: "#000000",
                              }}
                            >
                              More focus on user feedback and do iterations
                            </div>
                            <div>
                              It is important to focus on users’ qualitative
                              research and how they are interacting with the
                              application.
                            </div>
                          </span>
                        </li>

                        <li
                          className="m-0 pl-[25px] relative"
                          style={{ marginTop: "4px" }}
                        >
                          <span>
                            <img
                              className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                              src="assets/img/svg/rightarrow.svg"
                              alt="image"
                              style={{ top: "13px" }}
                            />
                            <div
                              style={{
                                marginTop: "40px",
                                fontSize: "14px",
                                fontWeight: 600,
                                lineHeight: "32px",
                                color: "#000000",
                              }}
                            >
                              Make sure your assumptions are actually usable
                            </div>
                            <div>
                              During testing, I learned that some of my
                              assumptions were different from what the users
                              wanted, which was a valuable learning experience.
                            </div>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </>
                ) : newsModal?.id === 2 ? (
                  <></>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
        {newsModal?.id === 1 ? (
          <></>
        ) : newsModal?.id === 2 ? (
          <> 
            <hr />
          </>
        ) : (
          <></>
        )}
      </div>
    </SectionContainer>
  );
};
export default DetailView;
