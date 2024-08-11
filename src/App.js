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
import MetaMaskSDK from "@metamask/sdk";
import { useEffect, useState } from "react";

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
