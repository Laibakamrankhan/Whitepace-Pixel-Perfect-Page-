import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Management from "./components/Managment";
import Extension from "./components/Extension";
import Customize from "./components/Customize";
import Work from "./components/Work";
import Sponser from "./components/Sponcer";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div >
     <NavBar />
     <Hero />
     <Management />
     <Extension />
     <Customize />
     <Work />
     <Sponser />
     <Footer />
    </div>
  );
}
