import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./views/landing/Landing";
import Home from "./views/home/Home";
import FormJoin from "./components/form/FormJoin";
import Projects from "./components/projects/Projects";
import Articles from "./components/articles/Articles";
import Documentarys from "./components/documentarys/Documentarys";
import Detail from "./views/detail/Detail";
import AboutUs from "./views/about/AboutUs.jsx";
import Donar from "./views/donar/Donar";
import { PostPAD } from "./components/articles/PostPAD";
import FormLogin from "./components/form/FormLogin";
import backimg from "./assets/BACKGOUDN_IMAGE_LANDING.png";
import UserOptions from "./views/userOptions/UserOptions";
import AdminOptions from "./views/adminOptions/adminOptions";
import ErrorPage from "./components/errorPage/ErrorPage";
import ContentDetail from "./components/contentDetail/ContentDetail";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmailAuth,
  setDonationItems,
  getGoogleAuth,
  getAuth,
} from "./redux/actions";
import FailureDonar from "./components/donarComponents/FailureDonar";
import AgradecimientoDonar from "./components/donarComponents/AgradecimientoDonar";

function App() {
  const dispatch = useDispatch();

  const Items = useSelector((state) => state.ItemsDonation);
  const User = useSelector((state) => state.userAuth);

  useEffect(() => {
    const data = window.localStorage.getItem("DONATION_CART");

    dispatch(setDonationItems(JSON.parse(data)));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("DONATION_CART", JSON.stringify(Items));
  }, [Items]);

  useEffect(() => {
    // Obtener la información del usuario desde el almacenamiento local
    const data = window.localStorage.getItem("userInfo");

    if (data) {
      const userInfo = JSON.parse(data);
      dispatch(getAuth(userInfo));
    }
  }, []);

  useEffect(() => {
    // Guardar la información del usuario en el almacenamiento local después de una autenticación exitosa
    if (User && User.name) {
      window.localStorage.setItem("userInfo", JSON.stringify(User));
    } else {
      // Si no hay usuario autenticado, eliminar la información del usuario del almacenamiento local
      window.localStorage.removeItem("userInfo");
    }
  }, [User]);

  return (
    <div
      style={{
        backgroundImage: `url(${backimg})`,

        backgroundSize: "cover",
      }}
    >
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/formjoin" element={<FormJoin />} />
        <Route path="/formlogin" element={<FormLogin />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/documentaries" element={<Documentarys />} />
        <Route path="/PAD/post" element={<PostPAD />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/donar" element={<Donar />} />
        <Route path="/useroptions" element={<UserOptions />} />
        <Route path="/adminoptions" element={<AdminOptions />} />
        <Route path="/ContentDetail/:id" element={<ContentDetail />} />
        <Route path="/rechazado" element={<FailureDonar />} />
        <Route path="/agradecimiento" element={<AgradecimientoDonar />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
