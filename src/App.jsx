import "./App.css";
import Countdown from "./Countdown.jsx";
import Character from "./Character.jsx";
import About from "./About.jsx";
import Stats from "./Stats.jsx";
import Register from "./Register.jsx";
import SocialMedia from "./SocialMedia.jsx";
import NavBar from "./NavBar.jsx";
import Footer from "./Footer.jsx";
import RollingText from "./RollingText.jsx";
import GlitchRevealText from "./GlitchRevealText.jsx";
import Sponsors from "./Sponsors.jsx"; // ⬅️ Import Sponsors

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 h-screen opacity-15"
        style={{ backgroundImage: "url('/Map_Bg.webp')" }}
      ></div>
      {/* NavBar absolute */}
      <div className="absolute top-0 left-0 w-full z-20">
        <NavBar />
      </div>
      {/* Main Grid */}
      <div
        className="
          relative z-10 supply-regular 
          grid grid-cols-1 gap-6 px-4 md:grid-cols-[0.1fr_0.7fr_1fr] 
          md:grid-rows-[0.7fr_auto_auto] md:gap-0 md:px-0 md:pt-0
          min-h-screen
        "
      >
        {/* Row 1 */}
        <div className="hidden md:block border-e border-neutral-800 p-4"></div>

        <div className="p-6 mt-25 md:p-12 text-left flex items-start border-neutral-800 ">
          <div className="w-10 h-10 md:w-12 md:h-12 mt-3 md:mt-4 rotate-45 bg-sky-500 flex items-center animate-glitch-flash justify-center">
            <img
              src="/Flag.svg"
              alt="Flag Icon"
              className="w-5 h-5 md:w-8 md:h-8 text-black -rotate-45"
            />
          </div>
          <div className="ms-3">
            <h1 className="text-lg md:text-xl w-fit tracking-wide uppercase">
              <GlitchRevealText
                text="A Global CTF Summit"
                bg="bg-black"
                textColor="text-white"
                delay={1000}
              />
            </h1>
            <div className="supply-medium ">
              <p className="text-sm w-fit">
                <GlitchRevealText
                  text="CTFs will Never be the Same again."
                  bg="bg-white"
                  textColor="text-black"
                  delay={1000}
                />
              </p>
              <p className="text-sm w-fit">
                <GlitchRevealText
                  text="Are you Ready?"
                  bg="bg-white"
                  textColor="text-black"
                  delay={1000}
                />
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:block border-x border-neutral-800 p-4"></div>

        {/* Row 2 */}
        <div className="hidden md:block border-y border-neutral-800 p-4"></div>

        <div className="border border-neutral-800">
          <Register />
        </div>

        <div className="flex items-center justify-center p-4 md:border-y md:border-neutral-800">
          <Countdown />
        </div>

        {/* Row 3 */}
        <div className="hidden md:block p-4 mb-45"></div>

        <div className="border-x-0 md:border-x border-b border-neutral-800 p-4 md:p-6">
          <SocialMedia />
        </div>

        <div className="p-4 md:p-6 flex mt-5 justify-center">
          <p className="text-white text-xs md:text-sm text-center uppercase">
            Your Data Stays Safe. No Spam, Only Mission Update.
          </p>
        </div>
      </div>
      <div className="absolute top-145 left-0 w-full z-50">
        <RollingText />
      </div>
      <About />
      <Character />
      <Stats />
      <Sponsors />
      <Footer />
    </div>
  );
}

export default App;
