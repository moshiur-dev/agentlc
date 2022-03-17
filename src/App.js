import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Components/Pages/Admin/Admin";
import SubAdmin from "./Components/Pages/Admin/SubAdmin";
import COMPLAIN1 from "./Components/Pages/COMPLAIN1/COMPLAIN1";
import Complain2 from "./Components/Pages/COMPLAIN1/Complain2";
import CustomerService from "./Components/Pages/CustomerService/CustomerService";
import Home from "./Components/Pages/Home/Home";
import MasterAgent from "./Components/Pages/MasterAgent/MasterAgent";
import Footer from "./Components/Pages/Shered/Header/Footer";
import Header from "./Components/Pages/Shered/Header/Header";
import SuperAgent from "./Components/Pages/SuperAgent/SuperAgent";
import Playlist1 from "./Components/Pages/Tutorial/Playlist1";
import Playlist2 from "./Components/Pages/Tutorial/Playlist2";
import Tutorial from "./Components/Pages/Tutorial/Tutorial";

function App() {
  //  right clike disable
  document.oncontextmenu = document.body.oncontextmenu = function () {
    return false;
  };
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cs" element={<CustomerService />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/subadmin" element={<SubAdmin />} />
        <Route path="/as" element={<SuperAgent />} />
        <Route path="/mg" element={<MasterAgent />} />
        <Route path="/cp1" element={<COMPLAIN1 />} />
        <Route path="/cp2" element={<Complain2 />} />

        <Route path="tutorial" element={<Tutorial />}>
          <Route path="/tutorial" element={<Playlist1 />} />
          <Route path="/tutorial/playlist1" element={<Playlist1 />} />
          <Route path="/tutorial/playlist2" element={<Playlist2 />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
