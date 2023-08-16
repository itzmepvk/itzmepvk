import { TokyoContext } from "@/src/Context";
import DetailsModal from "@/src/components/popup/DetailsModal";
import Cursor from "@/src/layout/Cursor";
import Mobile from "@/src/layout/Mobile";
import Sidebar from "@/src/layout/Sidebar";
import { tokyo } from "@/src/utils";
import ImageView from "components/popup/ImageView";
import MediaPopup from "components/popup/MediaPopup";
import ServiceModal from "components/popup/ServiceModal";
import dynamic from "next/dynamic";
import { Fragment, useContext, useEffect } from "react";
import PasswordModal from "../components/popup/PasswordModal";

const Layout = ({ children }) => {
  useEffect(() => {
    tokyo.dataImage();
    tokyo.imageToSvg();
    tokyo.customCursor();
  }, []);
  const {
    modal,
    serviceModal,
    newsModal,
    passwordModal,
    portfolioDetailsModal,
  } = useContext(TokyoContext);
  return (
    <Fragment>
      <MediaPopup />
      <ImageView />
      {modal && serviceModal && <ServiceModal />}
      {modal && portfolioDetailsModal && <DetailsModal />}
      {modal && passwordModal && <PasswordModal />}
      {/* WRAPPER ALL */}
      <div className="tokyo_tm_all_wrap">
        {/* PRELOADER */}
        {/* <div id="preloader">
          <div className="loader_line" />
        </div> */}
        {/* /PRELOADER */}
        {/* MOBILE MENU */}
        <Mobile />
        {/* /MOBILE MENU */}
        {/* LEFTPART */}
        <Sidebar />
        {/* /LEFTPART */}
        {/* RIGHTPART */}
        <div className="rightpart w-full min-h-[100vh] float-left relative bg-[#f8f8f8] pl-[450px]">
          <div className="rightpart_in relative w-full float-left clear-both border-solid border-[#ebebeb] border-l min-h-[100vh]">
            {children}
          </div>
        </div>
        {/* /RIGHTPART */}
        {/* CURSOR */}
        <Cursor />
        {/* /CURSOR */}
      </div>
    </Fragment>
  );
};
export default Layout;