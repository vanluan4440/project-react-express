// import React, {lazy} from 'react';
// import logo from './logo.svg';

import "./App.css";
import Layout from "./pages/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { lazy, Suspense } from "react";
const NoPage = lazy(() => import("./pages/no-page/NoPage"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Login = lazy(() => import("./pages/login/Login"));
const Home = lazy(() => import("./pages/home/Home"));
function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
