import About from "./components/About/About";
import Companies from "./components/Companies/Companies";
import Footer from "./components/Footer/Footer";
import LandingSection from "./components/LandingSection/LandingSection";
import Reads from "./components/Reads/Reads";
import Services from "./components/Services/Services";
import Statistics from "./components/Statistics/Statistics";
import Testmonials from "./components/Testmonials/Testmonials";
import Header from "./components/header/Header";

function App() {

  return (
    <>
      <Header />
      <LandingSection />
      <Services />
      <Statistics />
      <Companies />
      <Testmonials />
      <About />
      <Reads />
      <Footer />
    </>
  );
}

export default App;
