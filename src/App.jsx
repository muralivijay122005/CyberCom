import "./App.css";
import Countdown from "./Countdown.jsx";
import Register from "./Register.jsx";
import SocialMedia from "./SocialMedia.jsx";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 opacity-15"
        style={{ backgroundImage: "url('/Map_Bg.jpg')" }}
      ></div>

      {/* NavBar absolute */}
      <div className="absolute top-0 left-0 w-full z-20">
        <NavBar />
      </div>

      {/* Main 3x3 Grid */}
      <div className="relative z-10 supply-regular grid grid-cols-[0.1fr_0.7fr_1fr] grid-rows-[0.5fr_auto_auto] min-h-screen">
        {/* Row 1 */}

        <div className="border-x border-neutral-800 p-4"></div>
        <div className="p-10 mt-20 text-left flex items-start border-neutral-800">
          <div className="w-12 h-12 mt-5 rotate-45 bg-sky-500 flex items-center justify-center">
            <img
              src="/Lock.svg"
              alt="Lock Icon"
              className="w-6 h-6 text-black -rotate-45"
            />
          </div>
          <div className="ms-3">
            <h1 className="text-lg w-fit tracking-wide bg-black px-2 py-1 uppercase">
              A Global CTF Summit
            </h1>
            <div>
              <p className="text-black text-sm bg-white px-2">
                CTFs will Never be the Same again.
              </p>
              <p className="text-black text-sm bg-white px-2">
                Are you Ready ?
              </p>
            </div>
          </div>
        </div>
        <div className="border-x border-neutral-800 p-4"></div>

        {/* Row 2 */}
        <div className="border-y border-neutral-800 p-4"></div>
        <div className="border border-neutral-800">
          <Register />
        </div>
        <div className="border-y border-neutral-800 flex items-center justify-center p-6">
          <Countdown />
        </div>

        {/* Row 3 */}
        <div className="p-4 "></div>
        <div className="border-x border-neutral-800 p-6">
          <SocialMedia />
        </div>
        <div className="p-6 flex items-center justify-center">
          <p className="text-white text-sm text-center uppercase">
            Your Data Stays Safe. No Spam, Only Mission Update.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
