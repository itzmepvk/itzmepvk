import { TokyoContext } from "@/src/Context";
import { useContext, useState } from "react";
import ModalContainer from "./ModalContainer";
import axios from "axios";

const PasswordModal = () => {
  const [password, setPassword] = useState(null);
  const [exception, setException] = useState(false);
  const [empty, setEmpty] = useState(false);
  const {
    passwordModal,
    setPasswordModal,
    setNewsModal,
    savePwdDetails,
    savePwd,
    navChange,
  } = useContext(TokyoContext);

  const onSubmit = async () => {
    await axios.get("/api/password").then((res) => {
      if (res?.data?.[0]?.password == password) {
        setNewsModal(passwordModal);
        setPasswordModal(null);
        savePwdDetails(true);
        navChange("detailview");
      } else if (!password) {
        setEmpty(true);
        setException(false);
      } else {
        setException(true);
        setEmpty(false);
      }
    });
  };
  return (
    <ModalContainer nullValue={setPasswordModal} type={"password"}>
      <div
        style={{
          color: "black",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
          lineHeight: "32px",
          wordWrap: "break-word",
        }}
      >
        Enter Password
      </div>
      <input
        style={{ marginBottom: "56px", marginTop: "56px" }}
        type="password"
        className="w-full"
        onChange={(e) => {
          if (!e.target.value) {
            setEmpty(true);
            setException(false);
          } else {
            setPassword(e.target.value);
            setEmpty(false);
            setException(false);
          }
        }}
      />{" "}
      <br />
      {empty && <span className="span-warning">Please Enter Password</span>}
      {exception && <span className="span-warning">Wrong Password</span>}
      <button
        type="button"
        className="button-submit bg-black "
        onClick={() => onSubmit()}
        style={{
          position: "relative",
          background: "#000000",
          width: "181px",
          height: "56px",
          color: "white",
          fontSize: 16,
          fontFamily: "Poppins",
          fontWeight: 500,
          lineHeight: "40px",
          wordWrap: "break-word",
          float:"right"
        }}
      >
        Submit
      </button>
    </ModalContainer>
  );
};

export default PasswordModal;
