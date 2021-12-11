import React from "react";
import { Routes, Route } from "react-router-dom";

// components
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import AddInstagramPage from "pages/AddInstagramPage";
import ConfirmInstagramPage from "pages/VerifyInstagramPage";
import Dashboard from "pages/Dashboard";
import SelectCategory from "pages/SelectCategory";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/add-instagram-page" element={<AddInstagramPage />} />
      <Route
        path="/confirm-instagram-page"
        element={<ConfirmInstagramPage />}
      />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/select-category" element={<SelectCategory />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteList;
