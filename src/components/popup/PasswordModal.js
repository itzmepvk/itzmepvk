import { TokyoContext } from "@/src/Context";
import { useContext, useEffect, useState } from "react";
import ModalContainer from "./ModalContainer";
import axios from "axios";

const PasswordModal = () => {
  const [password, setPassword] = useState(null);
  const [exception, setException] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [isBusy, setIsBusy] = useState(false)
  const {
    passwordModal,
    setPasswordModal,
    setNewsModal,
    savePwdDetails,
  } = useContext(TokyoContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsBusy(true)
    
    try {
      const res = await axios.get(`/api/authorize?password=${password}`)

      setNewsModal(passwordModal);
      setPasswordModal(null);
      savePwdDetails(true);
    }
    catch(err) {
      setException(true);
    }
    setIsBusy(false)

  };

  

  
  return (
    <ModalContainer nullValue={setPasswordModal} type={"password"}>
      <form onSubmit={onSubmit}>
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
        <div style={{ maxHeight: "100px" }}>
          <input
            id="myInput"
            style={{
              marginTop: "56px",
              textAlign: "center",
              fontSize: "30px",
              color: "black",
            }}
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
          {empty && (
            <span style={{ color: "black", fontSize: "10px" }}>
              Please Enter Password
            </span>
          )}
          {exception && (
            <span style={{ color: "black", fontSize: "10px" }}>
              Wrong Password
            </span>
          )}
        </div>
        <button
          type="submit"
          className="button-submit bg-black "
          id="myBtn"
          disabled={isBusy}
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
            float: "right",
            marginTop: "56px",
          }}
        >
          {isBusy? 'Processing...': 'Submit'}
        </button>
      </form>
    </ModalContainer>
  );
};

export default PasswordModal;
