import "./App.css";
import Countdown from "./Countdown.jsx";
import Register from "./Register.jsx";
import SocialMedia from "./SocialMedia.jsx";
import NavBar from "./NavBar.jsx";

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <NavBar />
      <div className="text-center my-8">
        <h1 className="text-3xl font-bold mb-2">A Global CTF Summit</h1>
        <p className="text-gray-300">
          CTFs will never be the same again. Are you Ready ?
        </p>
      </div>
      <Countdown />
      <Register />
      <SocialMedia />
    </div>
  );
}

export default App;
