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
      "assets/img/news/Group 14016.svg",
      "assets/img/news/Group 14017.svg",
      "assets/img/news/Group 14018.svg",
      "assets/img/news/Group 14019.svg",
    ],
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
      "Start prioritise to form strategy",
      "Identify each personas",
      "Classify personas",
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
      `Client should be able to create 3 types of opportunities. And receive proposals will be able to accept/reject. Also send invitation
as public, private or exclusive.`,
      `Service Providers should be able to filter and look the opportunities. And also evaluate and submit candidate to the Proposal.`,
      `SquadGurus users able to create opportunity on behalf of client, and send proposal on behalf of service providers.`,
    ],
    prototypeTxt: [
      "Should we design mobile first?",
      "Do we have a brand identity/ visual design language?",
      "I did the Design System & SquagGurus logo &  brand identity",
      "Straight away jumped in to high-fidelity design",
      "Within a week, after couple of iterations the high-fidelity design was ready to test with real users",
    ],
    brandLogo: "assets/img/news/brandLogoSg.svg",
    handOver: [
      " Final MVP prototype design approval",
      "Hand over the MVP design to developers and QAs with references along with the design documents",
      "Daily sync-up with the team to make sure everything on-track",
    ],
    finalDesign: "assets/img/news/finalDesign.svg",
    finalDesignTxt: ` Finally, we successfully launched the MVP 3 months later, in
    December 2021. We celebrated over a team call with 300+ clients and
    service providers listed.`,
  },
];

const services = [
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
];

const knowledge = [
  { id: 1, text: "Dev Framework Understanding" },
  { id: 2, text: "Domain Understanding" },
  { id: 3, text: "UX Research & Persona Identifying" },
  { id: 4, text: "Wireframing/ Prototyping" },
  { id: 5, text: "High Fidelity Design (Web, Mobile & SaaS)" },
];
const interests = [
  { id: 1, text: "Brand Identity & Logo Desining" },
  { id: 2, text: "Explainer Video (Adobe Suite)" },
  { id: 3, text: "Website Designing (Webflow & Tailwind)" },
  { id: 4, text: "Search Engine Optimization (SEO)" },
  { id: 5, text: "Photography & Videography" },
];

const DetailView = () => {
  const { newsModal, setNewsModal } = useContext(TokyoContext);
  return (
    <SectionContainer name={"detailview"}>
      <div className="back-arrow">
        <img src="assets/img/news/back-arrow.svg" />
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
                  <li className="m-0">
                    <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                      Client:
                    </span>
                    <span>
                      <div>
                        {data[newsModal?.id - 1]?.timelineAndClient.client}
                      </div>
                    </span>
                  </li>
                  <li className="m-0">
                    <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                      Timeline:
                    </span>
                    <span>
                      <div>
                        {data[newsModal?.id - 1]?.timelineAndClient.time}
                      </div>
                    </span>
                  </li>
                  <li className="m-0">
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
                  <li className="m-0">
                    <span className="min-w-[100px] float-left mr-[10px] font-bold text-black">
                      My Role:
                    </span>
                    <span>
                      {data[newsModal?.id - 1]?.myRole.toLocaleString()}
                    </span>
                  </li>
                  <li className="m-0">
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
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[100px] px-0 pb-[45px]">
          <div className="list w-full h-auto clear-both float-left">
            <div
              className="text-black text-xl font-semibold leading-loose"
              style={{ marginBottom: "32px" }}
            >
              Tackling the problem
            </div>
            <ul className="ml-[-40px] list-none flex flex-wrap">
              {services.map((service) => (
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

      <div className="container">
        <div
          className="tokyo_tm_news w-full clear-both float-left h-auto pt-[100px] px-0 pb-[45px]"
          style={{ paddingTop: "0px" }}
        >
          <hr style={{ marginBottom: "80px" }} />
          <div>
            <img
              src="assets/img/news/competitive-analysis.svg"
              className="img-remake"
            />
            <div
              style={{
                marginTop: "40px",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: "30px",
                color: "#000000",
              }}
            >
              Research and analyze what the competitors are offering.
            </div>
            <img
              src={data[newsModal?.id - 1]?.offeringImg}
              style={{ marginTop: "40px" }}
              className="img-remake"
            />
          </div>
          <hr style={{ marginTop: "80px" }} />
          <div style={{ marginTop: "80px" }}>
            <img src="assets/img/news/interviews.svg" className="img-remake" />
            <div
              style={{
                marginTop: "40px",
                fontSize: "20px",
                lineHeight: "30px",
                fontWeight: 600,
                color: "#000000",
              }}
            >
              Questions focused on what each user expects to achieve.
            </div>

            <div className="in w-full h-auto clear-both float-left flex">
              <div className="left w-1/2 pr-[50px]">
                <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                  <ul className="m-0 list-none">
                    {data[newsModal?.id - 1]?.achivements
                      ?.slice(
                        0,
                        data[newsModal?.id - 1]?.achivements?.length % 2 === 0
                          ? data[newsModal?.id - 1]?.achivements?.length / 2
                          : data[newsModal?.id - 1]?.achivements?.length / 2 + 1
                      )
                      .map((item) => (
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
                      ))}
                  </ul>
                </div>
              </div>
              <div className="right w-1/2 pl-[50px]">
                <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                  <ul className="m-0 list-none">
                    {data[newsModal?.id - 1]?.achivements
                      ?.slice(
                        data[newsModal?.id - 1]?.achivements?.length % 2 === 0
                          ? data[newsModal?.id - 1]?.achivements?.length / 2
                          : data[newsModal?.id - 1]?.achivements?.length / 2 + 1
                      )
                      .map((item) => (
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
                      ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
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
                    padding: "6px",
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
      </div>

      <hr />

      <hr />
      <div>
        <img src="assets/img/news/personal-mapping.svg" />
        <div>Overwhelmed with insights, so we needed to…</div>
        <div>
          {data[newsModal?.id - 1]?.insights.map((el, index) => (
            <p>● {el}</p>
          ))}
        </div>
        <div>Persona Mapping (Screenshot from Miro)</div>
        <div>
          {data[newsModal?.id - 1]?.personaMappingSS.map((el, index) => (
            <img src={el} />
          ))}
        </div>
        <div>Persona Identifying</div>
        <div>
          {data[newsModal?.id - 1]?.personaIdentifyingSS.map((el, index) => (
            <img src={el} />
          ))}
        </div>
        <div>Key Takeaways</div>
        <div>
          {data[newsModal?.id - 1]?.keyTakeaways.map((el, index) => (
            <p>● {el}</p>
          ))}
        </div>
      </div>
      <hr />
      <div>
        <img src="assets/img/news/final-design.svg" />
        <div>We were on tight deadline, to prototype to test</div>
        <div>
          {data[newsModal?.id - 1]?.prototypeTxt.map((el, index) => (
            <p>● {el}</p>
          ))}
        </div>
        <div>Brand Identify & Logo</div>
        <img src={data[newsModal?.id - 1]?.brandLogo} />
      </div>
      <div>
        <img src="assets/img/news/final-design.svg" />
        <div>Stakeholder approval & developer handover</div>
        <div>
          {data[newsModal?.id - 1]?.handOver.map((el, index) => (
            <p>● {el}</p>
          ))}
        </div>
        <img src={data[newsModal?.id - 1]?.finalDesign} />
        <div>
          <div>{data[newsModal?.id - 1]?.finalDesignTxt}</div>
        </div>
      </div>

      <hr />
      <div>Take aways & Learning</div>
      <div>What I would do better next time.</div>
      <div>● Always focus on user feedback and do iterations</div>
      <div>
        It is important to focus on users’ qualitative research and how they are
        interacting with the application.
      </div>
      <div>● Make sure your assumptions are actually usable</div>
      <div>
        During testing, I learned that some of my assumptions were different
        from what the users wanted, which was a valuable learning experience.
      </div>
    </SectionContainer>
  );
};
export default DetailView;
