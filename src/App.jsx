import Navbar from "./components/Navbar";

// SECTIONS
import MainSection from "./Pages/MainSection";
import SobreMiSection from "./Pages/SobreMiSection";
import PortafolioSection from "./Pages/PortafolioSection";
import ServiciosSection from "./Pages/ServiciosSection";
import ContactoSection from "./Pages/ContactoSection";



function App() {
  return (<>
    <Navbar/>
    <div className="container">
      <MainSection/>
      <SobreMiSection/>
      <PortafolioSection/>
      <ServiciosSection/>
      <ContactoSection/>
    </div>
  </>
  );
}

export default App;