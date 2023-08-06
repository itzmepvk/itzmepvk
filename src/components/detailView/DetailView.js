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
      "Current frustrations & pain points",
      "What did they really want?",
      "What did they really need?",
      "Interviewed with Clients",
      "Service Providers & Admin",
      "20+ user interviews",
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
const DetailView = () => {
  const { newsModal, setNewsModal } = useContext(TokyoContext);
  return (
    <SectionContainer name={"detailview"}>
      <div className="mt-6 ml-6">
        <img src="assets/img/news/back-arrow.svg" />
      </div>
      <div className="container">
        <div className="tokyo_tm_news w-full clear-both float-left h-auto pt-[45px] px-0 pb-[45px]">
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
          <div className="in w-full h-auto clear-both float-left flex">
           
            <div>
              <div>THE CONTEXT</div>
              <div>{data[newsModal?.id - 1]?.context}</div>
            </div>
            <div>
              <div>THE PROBLEM</div>
              <div>{data[newsModal?.id - 1]?.problem}</div>
            </div>
            <div>
              <div>SOLUTION</div>
              <div>{data[newsModal?.id - 1]?.solution}</div>
            </div>
            <div>
              <div>THE OBJECTIVE</div>
              <div>{data[newsModal?.id - 1]?.objective}</div>
            </div>
            <hr />
            <div>
              <div>TACKLING THE PROBLEM</div>
              <div>
                {data[newsModal?.id - 1]?.tackling.map((el) => (
                  <img src={el} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <img src="assets/img/news/competitive-analysis.svg" />
        <div>Research and analyze what the competitors are offering.</div>
        <img src={data[newsModal?.id - 1]?.offeringImg} />
      </div>
      <hr />
      <div>
        <img src="assets/img/news/interviews.svg" />
        <div>Questions focused on what each user expects to achieve.</div>
        <div>
          {data[newsModal?.id - 1]?.achivements.map((el) => (
            <p>● {el}</p>
          ))}
        </div>
        <div>Some Research Questions</div>
        <div>
          {data[newsModal?.id - 1]?.researchQuestions.map((el, index) => (
            <div>
              <span>
                0{index + 1} {el}
              </span>
            </div>
          ))}
        </div>
      </div>
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
