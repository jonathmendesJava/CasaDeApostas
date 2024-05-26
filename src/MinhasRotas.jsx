import React from "react";
import Home from "./components/Home";
import BettingForm from "./components/BettingForm";
import Results from "./components/Results";
import NotFound from "./components/notFound";
import { Route, Routes } from "react-router-dom";

const MinhasRotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bet" element={<BettingForm />} />
      <Route path="/results" element={<Results />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default MinhasRotas;
