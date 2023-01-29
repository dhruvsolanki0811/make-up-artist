import "./App.css";

import CustomNavbar from "./Components/CustomNavbar";
import { Container} from "react-bootstrap";
import Footerpage from "./Components/FooterPage";


import CustomRoutes from "./CustomRoutes";
import SecondFooter from "./Components/SecondFooter";


function App() {
  return (
    <>
            <CustomNavbar />

      <Container fluid>
        {/* {window.location.pathname === "/" ? null : } */}
        <CustomRoutes/>
        {/* <Footerpage/> */}
        
      <SecondFooter/>
      </Container>
    </>
  );
}

export default App;
