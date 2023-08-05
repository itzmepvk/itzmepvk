import { TokyoContext } from "@/src/Context";
import { useContext } from "react";
import ModalContainer from "./ModalContainer";

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
    myRole: ["User Research", "UX Design", "Developer Hand-off"],
    tools: ["Miro", "Figma & Adobe XD", "Adobe Illustrator"],
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
      "Current frustrations & pain points",
      "Interviewed with Clients, Service Providers & Admin",
      "What did they really want?",
      "20+ user interviews",
      "What did they really need?",
      "Gathered the insights",
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
const NewsModal = () => {
  const { newsModal, setNewsModal } = useContext(TokyoContext);
  return (
    <ModalContainer nullValue={setNewsModal} type={"news"}>
      <div className="pb-20">
        <img src={data[newsModal.id - 1].headerImg} />
        <p className="date text-neutral-500 text-base font-normal uppercase leading-loose mt-5 md:mt-10">
          <a className="transition-all duration-300 hover:text-black" href="#">
            {newsModal.author}
          </a>
        </p>
        <h1 className="text-gray-800 md:text-5xl text-xl font-normal md:leading-[60px] md:w-[1120px] w-full mt-5 md:mt-10">
          {data[newsModal.id - 1].headerTxt}
        </h1>
        <div className=" bg-rose-50 md:py-14 md:px-28 p-4 grayscale hover:grayscale-0 mt-10 ">
          <img
            src={data[newsModal.id - 1].headerBodyImg}
            className="justify-center mx-auto"
          />
        </div>

        <div className="md:flex flex-wrap md:mt-10 mt-7">
          <div className="md:w-1/4 ">
            <div className="text-gray-800 text-base font-semibold leading-loose">
              Timeline & Client
            </div>
            <div className="text-neutral-500 text-base font-normal leading-loose">
              <span className=" text-xs">●</span>{" "}
              {data[newsModal.id - 1].timelineAndClient.time}
            </div>
            <div className="text-neutral-500 text-base font-normal leading-loose">
              <span className=" text-xs">●</span> &nbsp;
              {data[newsModal.id - 1].timelineAndClient.client}
            </div>
          </div>
          <div className="md:w-1/4 mt-3 md:mt-0">
            <div className="text-gray-800 text-base font-semibold leading-loose">
              My Role
            </div>
            <div>
              {data[newsModal.id - 1].myRole.map((el) => (
                <p className="text-neutral-500 text-base font-normal leading-loose">
                  <span className=" text-xs">●</span>&nbsp; {el}
                </p>
              ))}
            </div>
          </div>
          <div className="md:w-1/4 mt-3 md:mt-0">
            <div className="text-gray-800 text-base font-semibold leading-loose">
              Tools
            </div>
            <div>
              {data[newsModal.id - 1].tools.map((el) => (
                <p className="text-neutral-500 text-base font-normal leading-loose">
                  <span className=" text-xs">●</span> &nbsp;{el}
                </p>
              ))}
            </div>
          </div>
          <div className="md:w-1/4 mt-3 md:mt-0">
            <div className="text-gray-800 text-base font-semibold leading-loose">
              Framework
            </div>
            <div>
              {data[newsModal.id - 1].frameworks.map((el) => (
                <p className="text-neutral-500 text-base font-normal leading-loose">
                  <span className=" text-xs">●</span> &nbsp; {el}
                </p>
              ))}
            </div>
          </div>
        </div>
        <hr className="mt-10 bg-neutral-200" />
        <div className=" md:mt-20 mt-10">
          <div className="text-neutral-500 md:text-base text-sm font-normal uppercase leading-loose ">
            THE CONTEXT
          </div>
          <div className="md:mt-4 mt-3 text-gray-800 md:text-[32px] text-lg font-normal leading-snug">
            {data[newsModal.id - 1].context}
          </div>
        </div>
        <div className="md:mt-20 mt-10">
          <div className="text-neutral-500 md:text-base text-sm font-normal uppercase leading-loose ">
            THE PROBLEM
          </div>
          <div className="md:mt-4 mt-3 text-gray-800 md:text-[32px] text-lg font-normal leading-snug">
            {data[newsModal.id - 1].problem}
          </div>
        </div>
        <div className="md:mt-20 mt-10">
          <div className="text-neutral-500 md:text-base text-sm font-normal uppercase leading-loose ">
            SOLUTION
          </div>
          <div className="md:mt-4 mt-3 text-gray-800 md:text-[32px] text-lg font-normal leading-snug">
            {data[newsModal.id - 1].solution}
          </div>
        </div>
        <div className="md:mt-20 mt-10">
          <div className="text-neutral-500 md:text-base text-sm font-normal uppercase leading-loose ">
            THE OBJECTIVE
          </div>
          <div className="md:mt-4 mt-3 text-gray-800 md:text-[32px] text-lg font-normal leading-snug">
            {data[newsModal.id - 1].objective}
          </div>
        </div>
        <hr className="md:mt-20 mt-10 bg-neutral-200" />
        <div className="text-neutral-500 text-base font-normal uppercase leading-loose mt-10 md:mt-20">
          <div>TACKLING THE PROBLEM</div>
          <div className=" md:flex md:flex-wrap ">
            {data[newsModal.id - 1].tackling.map((el) => (
              <div className="md:w-1/4 w-full mr-0 mt-10">
                <img src={el} className="w-full md:w-auto" />
              </div>
            ))}
          </div>
        </div>
        <hr className="md:mt-20 mt-10 bg-neutral-200" />
        <div>
          <img
            src="assets/img/news/competitive-analysis.svg"
            className="md:mt-20 mt-10 "
          />
          <div className="text-gray-800 md:text-[32px] font-normal mt-10 text-xl">
            Research and analyze what the competitors are offering.
          </div>
          <div className="bg-opacity-10 bg-rose-400 border p-5 grayscale hover:grayscale-0 mt-10">
            <img src={data[newsModal.id - 1].offeringImg} className="mx-auto" />
          </div>
        </div>
        <hr className="md:mt-20 mt-10 bg-neutral-200" />
        <div className="md:mt-20 mt-10">
          <img src="assets/img/news/interviews.svg" />
          <div className="mt-10 text-gray-800 md:text-[32px] text-lg font-normal ">
            Questions focused on what each user expects to achieve.
          </div>
          <div className="mt-10 md:mt-20 md:flex flex-wrap">
            {data[newsModal.id - 1].achivements.map((el) => (
              <p className="md:w-1/2 text-neutral-500 text-base font-normal leading-loose">
                <span className=" text-xs">●</span> &nbsp; {el}
              </p>
            ))}
          </div>
          <div className="text-gray-800 text-base font-bold leading-[30px] mt-10 md:mt-20">
            Some Research Questions
          </div>
          <div>
            {data[newsModal.id - 1].researchQuestions.map((el, index) => (
              <div className="mt-4">
                <span className="bg-zinc-300 rounded-[100px]  border w-10 h-10 text-center text-gray-800 text-sm font-medium leading-[30px] p-1">
                  0{index + 1}{" "}
                </span>{" "}
                &nbsp;&nbsp; {el}
              </div>
            ))}
          </div>
        </div>
        <hr className="md:mt-20 mt-10 bg-neutral-200" />
        <div className="md:mt-20 mt-10">
          <img src="assets/img/news/personal-mapping.svg" />
          <div className="mt-10 text-gray-800 md:text-[32px] font-normal text-xl">
            Overwhelmed with insights, so we needed to…
          </div>
          <div className="mt-10 text-neutral-500 text-base font-normal leading-loose">
            {data[newsModal.id - 1].insights.map((el, index) => (
              <p>
                <span className=" text-xs">●</span> &nbsp; {el}
              </p>
            ))}
          </div>
          <div className="md:mt-20 mt-10 text-gray-800 text-base font-bold leading-[30px]">
            Persona Mapping (Screenshot from Miro)
          </div>
          <div className=" md:grid grid-cols-2 gap-6 mt-5">
            {data[newsModal.id - 1].personaMappingSS.map((el, index) => (
              <div className=" mt-5 md:mt-0">
                <img src={el} className="w-full " />
              </div>
            ))}
          </div>
          <div className="mt-16 text-gray-800 text-base font-bold leading-[30px]">
            Persona Identifying
          </div>
          <div className="md:grid grid-cols-3 gap-8 mt-12">
            {data[newsModal.id - 1].personaIdentifyingSS.map((el, index) => (
              <div className=" mt-5 md:mt-0">
                <img src={el} className="w-full" />
              </div>
            ))}
          </div>
          <div className="text-gray-800 text-base font-bold leading-[30px] mt-10 md:mt-20">
            Key Takeaways
          </div>
          <div className="mt-4 text-neutral-500 md:text-base text-sm font-normal leading-loose">
            {data[newsModal.id - 1].keyTakeaways.map((el, index) => (
              <p className="md:mt-0 mt-5">
                <span className=" text-xs">●</span> &nbsp; {el}
              </p>
            ))}
          </div>
        </div>
        <hr className="mt-10 md:mt-20 bg-neutral-200" />
        <div className="mt-10">
          <img src="assets/img/news/final-design.svg" />
          <div className="mt-10 text-gray-800 md:text-[32px] text-xl font-normal">
            We were on tight deadline, to prototype to test
          </div>
          <div className="mt-10 text-neutral-500 md:text-base text-sm font-normal leading-loose">
            {data[newsModal.id - 1].prototypeTxt.map((el, index) => (
              <p className="mt-3">
                <span className=" text-xs">●</span> &nbsp; {el}
              </p>
            ))}
          </div>
          <div className="text-gray-800 text-base font-bold leading-[30px] mt-10 md:mt-20">
            Brand Identify & Logo
          </div>
          <div className="bg-opacity-10 bg-rose-400 border md:p-16 p-6 mt-10">
            <img src={data[newsModal.id - 1].brandLogo} className="mx-auto" />
          </div>
        </div>
        <hr className="mt-10 md:mt-20 bg-neutral-200" />
        <div className="mt-10 md:mt-20">
          <img src="assets/img/news/final-design.svg" />
          <div className="text-gray-800 md:text-[32px] text-xl font-normal mt-10">
            Stakeholder approval & developer handover
          </div>
          <div className="text-neutral-500 text-base font-normal leading-loose mt-10">
            {data[newsModal.id - 1].handOver.map((el, index) => (
              <p className="mt-5 md:mt-0">
                <span className=" text-xs">●</span> &nbsp; {el}
              </p>
            ))}
          </div>
          <div className="mt-10 md:mt-20">
            <img src={data[newsModal.id - 1].finalDesign} />
          </div>
          <div>
            <div className="md:w-[1120px]  text-gray-800 md:text-5xl text-lg font-normal md:leading-[60px] mt-10 md:mt-20">
              {data[newsModal.id - 1].finalDesignTxt}
            </div>
          </div>
        </div>
        <hr className="mt-10 md:mt-20 bg-neutral-200" />
        <div className="text-red-500 text-sm font-medium uppercase mt-10 md:mt-20">
          Take aways & Learning
        </div>
        <div className="text-gray-800 md:text-[25px] text-lg font-semibold md:mt-8 mt-5">
          What I would do better next time.
        </div>
        <div className="text-gray-800 text-base font-bold md:leading-[30px] leading-normal mt-5 md:mt-8 ml-2">
          <span className=" text-xs">●</span> &nbsp; More focus on user feedback
          and do iterations
        </div>
        <div className="text-gray-800 text-base font-normal leading-[30px] mt-3 md:mt-0">
          It is important to focus on users’ qualitative research and how they
          are interacting with the application.
        </div>
        <div className="text-gray-800 text-base font-bold leading-[30px] mt-5 md:mt-8 ml-2">
          <span className=" text-xs">●</span> &nbsp; Make sure your assumptions
          are actually usable
        </div>
        <div className="text-gray-800 text-base font-normal leading-[30px] mt-3 md:mt-0">
          During testing, I learned that some of my assumptions were different
          from what the users wanted, which was a valuable learning experience.
        </div>
      </div>
    </ModalContainer>
  );
};
export default NewsModal;
