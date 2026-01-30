
import Components from "./components/Components";
import Basics from "./components/Basics";
import Props from "./components/Props";
import Events from "./components/Events";
import APIIntegration from "./components/APIIntegration";
import { Route, Routes } from "react-router-dom";
import  Layout  from "./components/Layout";
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer style={{position:"center"}} closeOnClick={true} />
    <Routes>
      <Route element={<Layout />}>
         <Route path="/"/>
      <Route path="/basics" element={<Basics />} />
      <Route path="/components" element={<Components/>} />
      <Route path="/props" element={<Props />} />
      <Route path="/events" element={<Events />} />
      <Route path="/integration" element={<APIIntegration />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
