import { Routes, Route } from "react-router-dom";

// components
import UserAccount from "../pages/UserAccount";
import NotFound from "../pages/NotFound";

const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<UserAccount />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RouteList;
