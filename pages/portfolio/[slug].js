import { TokyoContext } from "@/src/Context";
import DetailView from "@/src/components/detailView/DetailView";
import PasswordModal from "@/src/components/popup/PasswordModal";
import { useContext } from "react";

export default function(props) {

    const { setPasswordModal, setNewsModal, modalToggle, savePwd, navChange } = useContext(TokyoContext);

    if(!savePwd) return <PasswordModal />

    return <DetailView/>
}