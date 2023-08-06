import { TokyoContext } from "@/src/Context";
import { useContext, useState } from "react";
import ModalContainer from "./ModalContainer";
import axios from "axios";

const PasswordModal = () => {
  const [password, setPassword] = useState(null);
  const [exception, setException] = useState(false);
  const [empty, setEmpty] = useState(false);
  const { passwordModal, setPasswordModal, setNewsModal, savePwdDetails } =
    useContext(TokyoContext);

  const onSubmit = async () => {
    await axios.get("/api/password").then((res) => {
      if (res?.data?.[0]?.password == password) {
        setNewsModal(passwordModal);
        setPasswordModal(null);
        savePwdDetails(true);
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
      <div>Enter Password</div>
      <br />
      <br />
      <input
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
      <br />
      <br />
      <br />
      <button
        type="button"
        className="button-submit bg-black "
        onClick={() => onSubmit()}
      >
        SUBMIT
      </button>
    </ModalContainer>
  );
};

export default PasswordModal;
