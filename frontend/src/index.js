import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

// ✅ AG Grid Module Registration
import { ModuleRegistry } from "ag-grid-community";
import { AllCommunityModule } from "ag-grid-community";
import App from './App';
import { BrowserRouter } from 'react-router-dom';


ModuleRegistry.registerModules([AllCommunityModule]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  //     <Browser
  // Router>
  //   <Routes>
  //     <Route path="/" element={<Page1 />} />
  //     <Route path="/basics" element={<Basics />} />
  //     <Route path="/components" element={<Components/>} />
  //     <Route path="/props" element={<Props />} />
  //     <Route path="/events" element={<Events />} />
  //     <Route path="/integration" element={<APIIntegration />} />
  //   </Routes>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
