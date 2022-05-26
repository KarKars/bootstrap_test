import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Showcase from "./components/Showcase";
import NavBar from "./components/NavBar";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Learn from "./components/Learn";
import Accordion from "./components/Accordion";
import Instructors from "./components/Instructors";
import Footer from "./components/Footer";
import Informations from "./components/Informations";

function App() {
  return (
    <>
      <main>
        <NavBar />
        <Showcase />
        <NewsLetter />
        <Cards />
        <Learn />
        <Accordion />
        <Instructors />
        <Informations />
        <Footer />
      </main>
    </>
  );
}

export default App;
