
import HomePage from "./HomePage/page";
import About from "./About/page";
import Skills from "./Skills/page";
// import Education from "./Education/page"
import Contact from "./Contact/page"
import Footer from "./Footer/footer"

export default function Home() {
  return (
  <>
  <HomePage/>
  <About/>
  <Skills/>
  {/* <Education/> */}
  <Contact/>
  <Footer/>
  </>
  );
}
