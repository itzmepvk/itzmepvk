import { createContext, useCallback, useReducer } from "react";

// Create Context
const TokyoContext = createContext();

// Type
const type = {
  NAV: "NAV",
  ANIMATION: "ANIMATION",
  MODAL: "MODAL",
  SERVICEMODAL: "SERVICEMODAL",
  NEWSMODAL: "NEWSMODAL",
  PORTFOLIODETAILSMODAL: "PORTFOLIODETAILSMODAL",
  SAVE_PWD: "SAVE_PWD",
};
const {
  NAV,
  ANIMATION,
  MODAL,
  SERVICEMODAL,
  NEWSMODAL,
  PASSWORDMODAL,
  PORTFOLIODETAILSMODAL,
  SAVE_PWD,
} = type;

// Initial Value
const initialState = {
  nav: "home",
  animation: "fadeInLeft",
  modal: false,
  serviceModal: null,
  newsModal: null,
  portfolioDetailsModal: null,
  passwordModal: null,
  savePwd: null,
  menus: [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Portfolio", href: "/portfolio" },
    { id: 3, name: "Contact", href: "/contact" },
    { id: 4, name: "detailview", href: "/detailview" },
  ],
};

// Reducer
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case NAV:
      return {
        ...state,
        nav: payload,
      };
    case ANIMATION:
      return {
        ...state,
        animation: payload,
      };
    case MODAL:
      return {
        ...state,
        modal: payload,
      };
    case SERVICEMODAL:
      return {
        ...state,
        serviceModal: payload,
      };
    case NEWSMODAL:
      return {
        ...state,
        newsModal: payload,
      };
    case PASSWORDMODAL:
      return {
        ...state,
        passwordModal: payload,
      };
    case PORTFOLIODETAILSMODAL:
      return {
        ...state,
        portfolioDetailsModal: payload,
      };
    case SAVE_PWD:
      return {
        ...state,
        savePwd: payload,
      };
    default:
      return state;
  }
};

// Watson State
const TokyoState = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const navChange = useCallback((value) => {
    dispatch({
      type: NAV,
      payload: value,
    });
  }, []);

  const animationChnage = useCallback((value) => {
    dispatch({
      type: ANIMATION,
      payload: value,
    });
  }, []);

  const modalToggle = useCallback((value) => {
    dispatch({
      type: MODAL,
      payload: value,
    });
  }, []);

  const setServiceModal = useCallback((value) => {
    dispatch({
      type: SERVICEMODAL,
      payload: value,
    });
  }, []);
  const setNewsModal = useCallback((value) => {
    dispatch({
      type: NEWSMODAL,
      payload: value,
    });
  }, []);
  const setPasswordModal = useCallback((value) => {
    dispatch({
      type: PASSWORDMODAL,
      payload: value,
    });
  }, []);
  const setPortfolioDetailsModal = useCallback((value) => {
    dispatch({
      type: PORTFOLIODETAILSMODAL,
      payload: value,
    });
  }, []);
  const savePwdDetails = useCallback((value) => {
    dispatch({
      type: SAVE_PWD,
      payload: value,
    });
  }, []);

  const {
    nav,
    animation,
    modal,
    serviceModal,
    newsModal,
    passwordModal,
    portfolioDetailsModal,
    savePwd,
    menus,
  } = state;
  return (
    <TokyoContext.Provider
      value={{
        menus,
        nav,
        navChange,
        animation,
        animationChnage,
        modal,
        modalToggle,
        serviceModal,
        setServiceModal,
        newsModal,
        setNewsModal,
        passwordModal,
        setPasswordModal,
        portfolioDetailsModal,
        setPortfolioDetailsModal,
        savePwd,
        savePwdDetails,
      }}
    >
      {children}
    </TokyoContext.Provider>
  );
};

export default TokyoState;
export { TokyoContext };
