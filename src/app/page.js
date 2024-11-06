
import Navbar from "@/components/Navbar";
import Intro from "@/components/Intro";
import AboutMe from "@/components/AboutMe";
import Projects from "@/components/Projects";
// import ThreeScene from "@/components/ThreeScene";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>

      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Projects/>
      {/* <ThreeScene/> */}
      {/* <ContactMe/> */}
      {/* <Footer/> */}
    </div>
  );
}
