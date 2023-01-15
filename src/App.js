import "./App.css";
import Homepage from "./Pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomNavbar from "./Components/CustomNavbar";
import { Container, Row } from "react-bootstrap";
import Footerpage from "./Components/FooterPage";
import Gallery from "./Pages/Gallery";
import ErrorPage from "./Pages/ErrorPage";
import CustomFooter from "./Components/CustomFooter";
import CustomRoutes from "./CustomRoutes";

function App() {
  return (
    <>
      <Container fluid>
        {/* {window.location.pathname === "/" ? null : } */}
        <CustomNavbar />
        <CustomRoutes/>
        <Footerpage/>
        

      </Container>
    </>
  );
}

export default App;
