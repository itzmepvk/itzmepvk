const experiencesData = [
  {
    id: 1,
    date: "2018 - Now",
    designation: "Product Designer",
    company: "1 Billion Tech",
  },
  {
    id: 2,
    date: "2018 - Now",
    designation: "Product Designer",
    company: "MillionSpaces",
  },
  {
    id: 3,
    date: "2015 - 2018",
    designation: "UX Designer",
    company: "oDoc",
  },
];
const educationData = [
  {
    id: 1,
    date: "2023",
    degree: "UX design for AR, VR, MR & XR.",
    institute: "UXR Design",
  },
  {
    id: 2,
    date: "2021",
    degree: "Interaction Design Foundation member & certification",
    institute: "IxDF Certification",
  },
  {
    id: 3,
    date: "2017 - 2018",
    degree: "BSc (Hons) Business Information Systems & Management",
    institute: "BSc (Hons) BISM",
  },
];

const EducationExperience = () => {
  return (
    <div className="tokyo_tm_resumebox w-full h-auto clear-both float-left bg-white py-[93px] px-0">
      <div className="container">
        <div className="in w-full h-auto clear-both float-left flex">
          <div className="left w-1/2 pr-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Experience</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {experiencesData.map((exp, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == experiencesData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={exp.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {exp.date}
                        </span>
                      </div>
                      <div className="place w-1/2 pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {exp.company}
                        </h3>
                        <span className="text-[12px]">{exp.designation}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" right w-1/2 pl-[50px]">
            <div className="tokyo_section_title w-full h-auto clear-both float-left mb-[40px]">
              <h3 className="text-[20px] font-bold">Education</h3>
            </div>
            <div className="tokyo_tm_resume_list w-full h-auto clear-both float-left">
              <ul className="m-0 list-none relative inline-block pt-[10px]">
                {educationData.map((edu, i) => (
                  <li
                    className={`m-0 w-full float-left relative pl-[20px] ${
                      i == educationData.length - 1 ? "" : "pb-[45px]"
                    }`}
                    key={edu.id}
                  >
                    <div className="list_inner  w-full h-auto clear-both float-left relative flex">
                      <div className="time w-1/2 pr-[20px]">
                        <span className="inline-block py-[5px] px-[25px] bg-[rgba(0,0,0,.05)] rounded-[50px] text-[14px] whitespace-nowrap">
                          {edu.date.length === 4 ? <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{edu.date}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>:edu.date}
                        </span>
                      </div>
                      <div className="place w-full pl-[20px]">
                        <h3 className="text-[16px] mb-[2px] font-semibold">
                          {edu.institute}
                        </h3>
                        <span className="text-[12px] leading-3">{edu.degree}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EducationExperience;
