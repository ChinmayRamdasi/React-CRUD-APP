
import Components from "./components/Components";
import Page1 from "./components/Page1";
import Basics from "./components/Basics";
import Props from "./components/Props";
import Events from "./components/Events";
import APIIntegration from "./components/APIIntegration";
import { Route, Routes } from "react-router-dom";
import  Layout  from "./components/Layout";

function App() {
  return (
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
  );
}

export default App;
