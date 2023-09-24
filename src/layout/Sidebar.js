import { useContext } from "react";
import { TokyoContext } from "../Context";
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { navChange, nav, menus } = useContext(TokyoContext);
  const router = useRouter()

  const isActiveLink = (href) => {

    if(href.includes('portfolio') && router.asPath.includes('portfolio')) return true
    return router.asPath === href
  }


  return (
    <div className="leftpart w-[450px] h-[100vh] fixed flex items-center z-[12] px-[100px] py-[0px] bg-white">
      <div className="leftpart_inner w-full h-auto">
        <div
          className="logo"
          data-type="image"
          onClick={() => navChange("home")}
        >
          {" "}
          {/* You can use image or text as logo. data-type values are: "image" and "text" */}
          
          <Link href="/">
            <img
              className="max-w-[150px] img-remake"
              src="/assets/img/svg/sidebartoggle.svg"
              alt="image"
            />
          </Link>
        </div>
        <div className="menu px-[0px] py-[50px] w-full float-left">
          <ul className="transition_link m-0 list-none">
            {menus
              .filter((el) => el.name !== "detailview")
              .map((menu) => (
                <li
                  className={`m-0 w-full float-left ${
                    menu.href == nav
                      ? "active"
                      : nav === "detailview" && menu.name === "portfolio"
                      ? "active"
                      : ""
                  }`}
                  key={menu.id}
                >

                  <Link href={menu.href} className={`capitalize inline-block font-medium font-montserrat transition-all duration-300 hover:text-black ${isActiveLink(menu.href)? 'tw-text-black':'tw-text-[#767676]'}`}>
                    {menu.name}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <div className="copyright w-full float-left">
          <p className="text-[15px] text-[#999] font-montserrat leading-[25px]">
            © {new Date().getFullYear()} itzmepvk
          </p>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
