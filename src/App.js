import "./App.css";

import CustomNavbar from "./Components/CustomNavbar";
import { Container} from "react-bootstrap";
import Footerpage from "./Components/FooterPage";


import CustomRoutes from "./CustomRoutes";


function App() {
  return (
    <>
            <CustomNavbar />

      <Container fluid>
        {/* {window.location.pathname === "/" ? null : } */}
        <CustomRoutes/>
        <Footerpage/>
        

      </Container>
    </>
  );
}

export default App;
