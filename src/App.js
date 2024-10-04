import "./App.css";
// import Lottie from "react-lottie";
// import animationData from "./lotties/newgodzilla";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import LandingPage from "./pages/Landing";
import AboutPage from "./pages/About";
import OurMission from "./pages/OurMessage";
import Story from "./pages/Story";
import MyTeams from "./pages/MyTeams";

function App() {
  // new MetaMaskSDK({
  //   useDeeplink: false,
  //   communicationLayerPreference: "socket",
  // });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/more" element={<OurMission />} />
        <Route path="/story" element={<Story />} />
        <Route path="/team" element={<MyTeams />} />
      </>
    )
  );

  return (
    <div className="App">
      {/* <Lottie options={defaultOptions} speed={0.2} /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
