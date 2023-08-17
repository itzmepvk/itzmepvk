import { TokyoContext } from "@/src/Context";
import { useContext, useEffect, useState } from "react";
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
  {
    id: 3,
    headerImg: "assets/img/news/lg.svg",
    headerTxt: `LGIM is one of Europe’s largest asset managers, offering investment solutions to a broad range of clients globally.`,
    headerBodyImg: "assets/img/news/lg-body.svg",
    timelineAndClient: {
      time: "Jan 2019 - Current",
      client: "UK & Global",
    },
    myRole: ["User Research", "UX Design", "Dev Hand-off"],
    tools: ["Miro", " Figma", " Adobe XD & Adobe Illustrator"],
    frameworks: ["React Native", "Ant Design"],
    context: ` In Mar 2019, LGIM wanted to create a Cloud-based Pension Investment Platform that enables institutional fund managers and advisors to digitize their services.`,
    problem: `Until 2019, this intricate process was handled manually. However, as time passed, the process grew increasingly challenging.`,
    solution: `Developing a platform that enables trustees, advisors, sponsors, and other users to enhance their processes and actions.`,
    objective: `Conduct research, develop strategies, and design an end-to-end experience to increase the conversion rate of the platform.`,
    tackling: [
      {
        id: 1,
        name: "Domain Understand",
        text: [
          "Client interaction: Understanding users, effective communication for successful outcomes.",
        ],
        image: "assets/img/news/1.jpg",
      },
      {
        id: 2,
        name: "Define the Problem",
        text: [
          "Task enumeration: Organizing information architecture for improved user experience.",
        ],
        image: "assets/img/news/2.jpg",
      },
      {
        id: 3,
        name: "Wireframe & Test",
        text: [
          "Idea brainstorming, whiteboard sessions fuel creativity, innovative solutions.",
        ],
        image: "assets/img/news/3.jpg",
      },
    ],

    step1: "assets/img/news/domain-understand3.svg",
    step2: "assets/img/news/define-problem.svg",
    step3: "assets/img/news/wireframe-test3.svg",

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
      "How would you define this process?",
      "What is the scope of this project?",
      "How many steps are involved in each scheme?",
      "What difficulties do you experience when performing this process manually?",
      "How many distinct users are engaged in this process, and what roles do they have?",
      "What key actions must users take initially? (This will help us consolidate everything in the Dashboard.)",
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
    finalDesignTxt: ` In April 2019, after 4 months, we achieved a successful product MVP launch. Working on a complex fintech platform expanded my understanding of international pension investments.`,
  },
  {
    id: 4,
    headerImg: "assets/img/news/kora.svg",
    headerTxt: `Kora brings skilled cooks to the homes of people who appreciate the flavors and benefits of a home cooked meal.`,
    headerBodyImg: "assets/img/news/kora-bg.svg",
    timelineAndClient: {
      time: "Oct 2019 - May 2020",
      client: "US",
    },
    myRole: ["User Research", "UX Design", "Dev Hand-off"],
    tools: ["Miro", " Adobe XD & Adobe Illustrator"],
    frameworks: ["Ant Design"],
    context: ` In March 2019, Kora aimed to connect hosts with skilled cooks. Users book or become cooks via onboarding, and hosts search using date and cuisine filters.`,
    problem: `High demand for homemade food, lacking time and skills. Kora's solution: skilled cooks deliver to food enthusiasts' homes.`,
    solution: `The solution involves skilled cooks creating profiles showcasing their expertise, enabling hosts to easily find them.`,
    objective: `Conduct research, develop strategies, and design an end-to-end experience to increase the conversion rate of the platform.`,
    tackling: [
      {
        id: 1,
        name: "Domain Understand",
        text: [
          "Client interaction: Understanding users, effective communication for successful outcomes.",
        ],
        image: "assets/img/news/1.jpg",
      },
      {
        id: 2,
        name: "Define the Problem",
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
        image: "assets/img/news/2.jpg",
      },
      {
        id: 4,
        name: "Wireframe & Test",
        text: [
          "Create wireframes, turn into hi-fi prototypes, test with users, gather feedback, and iterate.",
        ],
        image: "assets/img/news/3.jpg",
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
      "How does one become a cook? Is certification necessary for the background check? ",
      "What's the expected chef duration at the host's place? How is payment handled, including any overtime compensation?",
      "How far in advance can a host make a booking? What's the protocol for cancellations?",
      "What if the host isn't present when the cook arrives? What's the process for both in-house and out-of-house scenarios?",
      "Can hosts provide specific location, contact details, or notes?",
      "Who is responsible for groceries, equipment, etc.?",
    ],
    insights: [
      {
        id: 1,
        text: "We brought together all relevant stakeholders, including the client, development team, business analyst, and others, to brainstorm ideas. We dedicated one week to a whiteboard session for ideation and reaching a consensus on the user journey.",
      },
    ],
    personaMappingSS: [
      "assets/img/news/Group 1000001905.svg",
      "assets/img/news/Group 1000001906.svg",
      "assets/img/news/Group 1000001904.svg",
      "assets/img/news/Group 1000001907.svg",
    ],
    personaIdentifyingSS: [
      "assets/img/news/kora-cook.svg",
      "assets/img/news/kora-host.svg",
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
    finalDesignTxt: ` In February 2020, after 4 months, we successfully launched the product MVP—a small yet captivating concept to work on. This experience provided insights into the workings of new product concepts through design thinking and brainstorming.`,
  },
];

const DetailView = () => {
  const { newsModal, setNewsModal, navChange } = useContext(TokyoContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <SectionContainer name={"detailview"}>
      {loading ? (
        <>
          <center>
            <img
              src="assets/img/news/loading.gif"
              style={{ marginTop: "100px", width: "10%" }}
            />
          </center>
        </>
      ) : (
        <>
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
                    <li
                      className={`mb-[40px] w-${
                        newsModal?.id === 1 || newsModal?.id === 2
                          ? "1/4"
                          : newsModal?.id === 3
                          ? "1/3"
                          : "1/4"
                      } pl-[40px]`}
                      key={service.id}
                    >
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
                    : newsModal?.id === 3
                    ? "Gaining insight by conversing with the client to comprehend the issue."
                    : newsModal?.id === 4
                    ? "Understanding the hosts and cooks"
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
                          {newsModal?.id === 2
                            ? `We investigated the target users from Singapore, Australia
                      and Sri Lanka to gather insights that would help us design
                      the process. The objective of the research was to
                      understand their needs, behaviour, attitude, and pain
                      points.`
                            : newsModal?.id === 3
                            ? "The client presently employs a system where numerous intricate workflows occur manually. Consequently, they intimately know the pains of this manual effort and possess a comprehensive process understanding."
                            : newsModal?.id === 4
                            ? "To build this platform, understanding each persona is an important factor. Empathizing with hosts and cooks, and understanding their pain points and motives, helps to provide a better experience."
                            : ""}
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
                    {newsModal?.id === 2 ? (
                      <img
                        src="assets/img/news/ms-pie.svg"
                        className="img-remake  w-full"
                        style={{ marginTop: "40px" }}
                      />
                    ) : (
                      <></>
                    )}
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
                    : newsModal?.id === 3
                    ? "Creating requirement and user story in a simplified manner."
                    : newsModal?.id === 4
                    ? "Defining problems through empathy with cooks and hosts."
                    : ""}
                </div>
                <div
                  className={`tokyo_tm_skillbox in w-full h-auto clear-both ${
                    newsModal?.id === 3 || newsModal?.id === 4
                      ? ""
                      : "float-left flex"
                  }`}
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
                                data[newsModal?.id - 1]?.achivements?.length %
                                  2 ===
                                  0
                                  ? data[newsModal?.id - 1]?.achivements
                                      ?.length / 2
                                  : data[newsModal?.id - 1]?.achivements
                                      ?.length /
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
                                data[newsModal?.id - 1]?.achivements?.length %
                                  2 ===
                                  0
                                  ? data[newsModal?.id - 1]?.achivements
                                      ?.length / 2
                                  : data[newsModal?.id - 1]?.achivements
                                      ?.length /
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
                                {data[
                                  newsModal?.id - 1
                                ]?.personaIdentifyingSS.map((el, index) => (
                                  <li className="mb-[40px] w-1/3 pl-[40px]">
                                    <img
                                      src={el}
                                      className="w-full img-remake"
                                    />
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </>
                  ) : newsModal?.id === 3 ? (
                    <>
                      <ul className="list-none">
                        <li className="m-0 pl-[25px] relative">
                          <span>
                            <img
                              className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                              src="assets/img/svg/rightarrow.svg"
                              alt="image"
                            />
                            I managed to extract the requirement and user story
                            definitions from the client using an effective,
                            straightforward approach. I've compiled a task list
                            that includes the associated users, necessary input
                            types, character limits, and more.
                          </span>
                        </li>
                      </ul>
                      <img
                        src={"assets/img/news/lg-test.svg"}
                        className="img-remake"
                        style={{ marginTop: "20px" }}
                      />
                    </>
                  ) : newsModal?.id === 4 ? (
                    <>
                      <ul className="list-none">
                        <li className="m-0 pl-[25px] relative">
                          <span>
                            <img
                              className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                              src="assets/img/svg/rightarrow.svg"
                              alt="image"
                            />
                            I managed to extract the requirement and user story
                            definitions from the client using an effective,
                            straightforward approach. I've compiled a task list
                            that includes the associated users, necessary input
                            types, character limits, and more.Based on the
                            questions we clarified with the client, we developed
                            insights and persona mapping to define their goals,
                            needs, and challenges.
                          </span>
                        </li>
                      </ul>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-around",
                        }}
                      >
                        <div className="left w-1/2 pr-[50px]">
                          <div className="tokyo_tm_skill_list w-full h-auto clear-both ">
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
                              Major insights from Cooks
                            </div>
                            <ul className="m-0 list-none">
                              {data[newsModal?.id - 1]?.achivements
                                ?.slice(
                                  0,
                                  data[newsModal?.id - 1]?.achivements?.length %
                                    2 ===
                                    0
                                    ? data[newsModal?.id - 1]?.achivements
                                        ?.length / 2
                                    : data[newsModal?.id - 1]?.achivements
                                        ?.length /
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
                          <div className="tokyo_tm_skill_list w-full h-auto clear-both">
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
                              Major insights from Hosts
                            </div>
                            <ul className="m-0 list-none">
                              {data[newsModal?.id - 1]?.achivements
                                ?.slice(
                                  data[newsModal?.id - 1]?.achivements?.length %
                                    2 ===
                                    0
                                    ? data[newsModal?.id - 1]?.achivements
                                        ?.length / 2
                                    : data[newsModal?.id - 1]?.achivements
                                        ?.length /
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
                      </div>
                      <div className="container" style={{ marginTop: "40px" }}>
                        <div className="tokyo_tm_news w-full clear-both float-left h-auto  px-0 ">
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
                                  {data[
                                    newsModal?.id - 1
                                  ]?.personaIdentifyingSS.map((el, index) => (
                                    <li className="mb-[40px] w-1/3 pl-[40px]">
                                      <img
                                        src={el}
                                        className="w-full img-remake"
                                      />
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr style={{ marginTop: "300px" }} />
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
                    : newsModal?.id === 3
                    ? "Creating the design using the information provided on the sheet."
                    : newsModal?.id === 4
                    ? "Generate solutions based on the gathered knowledge."
                    : ""}
                </div>

                {newsModal?.id === 3 ? (
                  <>
                    <img
                      src={"assets/img/news/lg-test0.svg"}
                      className="img-remake"
                      style={{ marginTop: "20px" }}
                    />
                    <hr style={{ marginTop: "40px" }} />
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
                      The client provided the branding and style guide.
                    </div>
                    <img
                      src={"assets/img/news/lg-guide.svg"}
                      className="img-remake"
                      style={{ marginTop: "20px" }}
                    />
                  </>
                ) : (
                  <>
                    <div
                      className="in w-full h-auto clear-both float-left"
                      style={{ marginBottom: "80px" }}
                    >
                      <>
                        <div className="left ">
                          <div className="tokyo_tm_skill_list w-full h-auto clear-both float-left">
                            <ul className="m-0 list-none">
                              {data[newsModal?.id - 1]?.insights.map(
                                (item, index) => (
                                  <>
                                    {" "}
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
                                    <br />
                                  </>
                                )
                              )}
                            </ul>
                          </div>
                        </div>
                        {newsModal?.id === 4 ? (
                          <>
                            <img
                              src="assets/img/news/lg-mock.svg"
                              className="img-remake"
                            />
                          </>
                        ) : (
                          <></>
                        )}
                      </>
                    </div>
                  </>
                )}
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
                      <div
                        className="left w-1/2 "
                        style={{ marginBottom: "0px" }}
                      >
                        {data[newsModal?.id - 1]?.personaMappingSS
                          ?.slice(
                            0,
                            data[newsModal?.id - 1]?.personaMappingSS?.length %
                              2 ===
                              0
                              ? data[newsModal?.id - 1]?.personaMappingSS
                                  ?.length / 2
                              : data[newsModal?.id - 1]?.personaMappingSS
                                  ?.length /
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
                              ? data[newsModal?.id - 1]?.personaMappingSS
                                  ?.length / 2
                              : data[newsModal?.id - 1]?.personaMappingSS
                                  ?.length /
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
              <div
                className="in w-full h-auto clear-both float-left"
                style={{}}
              >
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
                          : newsModal?.id === 4
                          ? "Creating the design based on the information and details gathered in the earlier stage."
                          : ""}
                      </div>

                      {newsModal?.id === 1 ? (
                        <ul
                          className="m-0 list-none"
                          style={{ marginTop: "36px" }}
                        >
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
                      ) : newsModal?.id === 4 ? (
                        <>
                          <img
                            src="assets/img/news/lg-wiretest.svg"
                            alt="image"
                            className="img-remake"
                            style={{ marginTop: "40px" }}
                          />
                          <img
                            src="assets/img/news/kora-colour.svg"
                            alt="image"
                            className="img-remake"
                            style={{ marginTop: "40px" }}
                          />
                          <hr style={{ marginTop: "40px" }} />
                        </>
                      ) : (
                        <></>
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
                          <hr
                            style={{ marginTop: "80px", marginBottom: "80px" }}
                          />{" "}
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

          {newsModal?.id === 3 || newsModal?.id === 4 ? (
            <></>
          ) : (
            <img
              src={data[newsModal?.id - 1]?.finalDesign}
              style={{ marginTop: "40px" }}
              className="img-remake"
            />
          )}

          {newsModal?.id === 1 ? (
            <></>
          ) : newsModal?.id === 2 || newsModal?.id === 4 ? (
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
                  {newsModal?.id === 2
                    ? `The high-fidelity wireframe screens and flows were shown to many
              users. During this time, the following questions were encountered.`
                    : ""}
                </div>
                <ul className="m-0 list-none" style={{ marginTop: "10px" }}>
                  {[
                    "We created the high-fidelity design, and the client conducted a test run with both cooks and hosts. We received valuable feedback. After a couple of design iterations, we developed the product and deployed it to the production environment. As it's an iterative process, we continued to receive feedback over time and updated it sprint by sprint.",
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
          ) : newsModal?.id === 3 ? (
            <>
              <div className="container">
                <div
                  style={{
                    color: "black",
                    fontSize: 20,
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  Test & Feedback
                </div>
                <ul className="list-none" style={{ marginTop: "20px" }}>
                  <li className="m-0 pl-[25px] relative">
                    <span>
                      <img
                        className=" text-black w-[10px] h-[10px] absolute left-0 top-1/2 translate-y-[-50%]"
                        src="assets/img/svg/rightarrow.svg"
                        alt="image"
                      />
                      We presented the high-fidelity wireframe screens and flows
                      to multiple users, and during this phase, we encountered
                      the following questions.
                    </span>
                  </li>
                </ul>
                {[
                  "As expected, we received plenty of user feedback and suggestions during the initial round of user testing. ",
                  "The feedback led to optimization of most workflow steps.",
                  "Additional workflow steps were introduced later to accommodate necessary data capture.",
                  "What difficulties do you experience when performing this process manually?The platform's language should be British English, and we received assistance from the client in this regard.",
                  "Despite its suboptimal usability, the client wanted the product sooner to escape manual work. As a result, we're implementing both minor and major changes on a sprint basis.",
                ].map((el, index) => (
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
            </>
          ) : (
            <></>
          )}
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
                        <hr
                          style={{ marginTop: "80px", marginBottom: "80px" }}
                        />
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
                                  wanted, which was a valuable learning
                                  experience.
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
        </>
      )}
    </SectionContainer>
  );
};
export default DetailView;
