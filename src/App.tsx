import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Layout } from './Layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { QuestionDashboard } from './QuestionDashboard';


function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<QuestionDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
