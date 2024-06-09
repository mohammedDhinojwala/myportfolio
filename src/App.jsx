import {React} from "react";
import { redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About1 from "./components/About1";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";


function App() {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen text-white bg-white overflow-hidden">
      <Navbar />
      <Landing />
      <Marquee />
      <About1 />
      <Eyes />
      <Featured />
      <Footer />
    </div>
  );
}

export default App;
