import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Thank } from "./components";

// Main page component to keep existing layout
const MainPage = () => (
  <div className='relative z-0 bg-[#0c0042]'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
      <Navbar />
      <Hero />
    </div>
    <About />
    <Experience />
    <Tech />
    <Works />
    <Feedbacks />
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
  </div>
);

export default MainPage;