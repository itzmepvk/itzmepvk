import SectionContainer from "./SectionContainer";
import SectionTitle from "./SectionTitle";
import ContactForm from "./contact/ContactForm";
import Map from "./contact/Map";
const Contact = () => {
  return (
    <SectionContainer name={"contact"}>
      <div className="container">
        <div className="tokyo_tm_contact w-full float-left clear-both h-auto py-[100px] px-[0px]">
          <div className="tokyo_tm_title w-full h-auto clear-both float-left mb-[20px]">
            <div className="title_flex w-full h-auto clear-both flex justify-between items-end">
              <SectionTitle
                pageName={"Contact"}
                title={"Let’s work together!"}
              />
            </div>
          </div>
          <div className="mb-16">
            <div>
              <span className ="text-neutral-500 text-base font-normal leading-loose">
                It all starts with a discussion, please feel free to contact me
                through
                <br />
              </span>
              <strong className ="text-black text-base font-semibold underline leading-loose">
                me@itzmepvk.com
              </strong>
              <span className ="text-neutral-500 text-base font-medium leading-loose">
                {" "}
              </span>
              <span className ="text-neutral-500 text-base font-normal leading-loose">
                or
              </span>
              <span className ="text-neutral-500 text-base font-medium leading-loose">
                {" "}
              </span>
              <strong className ="text-black text-base font-semibold underline leading-loose">
                itzmepvk@gmail.com
              </strong>
              <span className ="text-neutral-500 text-base font-medium leading-loose">
                {" "}
              </span>
              <span className ="text-neutral-500 text-base font-normal leading-loose">
                or
              </span>
              <span className ="text-neutral-500 text-base font-medium leading-loose">
                {" "}
              </span>
              <strong className ="text-black text-base font-semibold underline leading-loose">
                LinkedIn
              </strong>
              <span className ="text-neutral-500 text-base font-medium leading-loose">
                {" "}
              </span>
              <span className ="text-neutral-500 text-base font-normal leading-loose">
                or
              </span>
              <span className ="text-neutral-500 text-base font-medium leading-loose">
                {" "}
              </span>
              <strong className ="text-black text-base font-semibold underline leading-loose">
                +94715124609
              </strong>
              <span className ="text-neutral-500 text-base font-semibold leading-loose">
                {" "}
              </span>
              <span className ="text-neutral-500 text-base font-normal leading-loose">
                or send a message here.
              </span>
            </div>
          </div>
          {/* <Map /> */}
          <ContactForm />
        </div>
      </div>
    </SectionContainer>
  );
};
export default Contact;
