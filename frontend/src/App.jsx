import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Membership from "./pages/Membership";
import ContactUs from "./pages/ContactUs";
import AppBar from "./components/AppBar";
import UpcomingEvents from "./pages/UpcomingEvents";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<Landing />} />
          {/* <Route path="/about" element={<AboutUs/>} />
        <Route path="/event" element={<Events/>} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/contactus" element={<ContactUs />} /> */}
        </Routes>
      </BrowserRouter>
      <AboutUs />
      <UpcomingEvents />
    </>
  );
};

export default App;
