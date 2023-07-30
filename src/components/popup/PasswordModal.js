import { TokyoContext } from "@/src/Context";
import { useContext, useState } from "react";
import ModalContainer from "./ModalContainer";

const PasswordModal = () => {
  const [password, setPassword] = useState(null);
  const [exception, setException] = useState(false);
  const [empty, setEmpty] = useState(false);
  const { passwordModal, setPasswordModal, setNewsModal } =
    useContext(TokyoContext);

  const onSubmit = () => {
    if (password == 1234) {
      setNewsModal(passwordModal);
      setPasswordModal(null);
    } else if (!password) {
      setEmpty(true);
      setException(false);
    } else {
      setException(true);
      setEmpty(false);
    }
  };
  return (
    <ModalContainer nullValue={setPasswordModal} type={"password"}>
      <div>Enter Password</div>
      <br />
      <br />
      <input
        type="password"
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
      {empty && <span className="span-warning">Please Enter Password</span>}
      {exception && <span className="span-warning">Wrong Password</span>}
      <br />
      <br />
      <br />
      <button
        type="button"
        className="button-submit"
        onClick={() => onSubmit()}
      >
        SUBMIT
      </button>
    </ModalContainer>
  );
};

export default PasswordModal;
