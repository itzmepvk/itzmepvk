import { TokyoContext } from "@/src/Context";
import useClickOutside from "@/src/useClickOutside";
import { useContext } from "react";
const ModalContainer = ({ children, nullValue, type }) => {
  const { modalToggle } = useContext(TokyoContext);
  let domNode = useClickOutside(() => {
    modalToggle(false);
    nullValue(null);
  });
  return (
    <div className="tokyo_tm_modalbox opened">
      <div
        className={type === "password" ? "password" : " box_inner"}
        ref={domNode}
      >
        {type === "password" && (
          <div className="close">
            <a
              href="#"
              onClick={() => {
                modalToggle(false);
                nullValue(null);
              }}
            >
              <i className="icon-cancel" />
            </a>
          </div>
        )}

        <div className="description_wrap">
          {type === "news" && (
            <a
              href="#"
              onClick={() => {
                modalToggle(false);
                nullValue(null);
              }}
              style={{
                float: "right",
                position: "-webkit-sticky",
                position: "sticky",
                top: 0,
              }}
            >
              
              <img src="assets/img/news/close.svg" className="" />
            </a>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};
export default ModalContainer;
