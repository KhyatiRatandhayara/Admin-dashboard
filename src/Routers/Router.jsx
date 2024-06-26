import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Sales from "../pages/Sales";
import Products from "../pages/Products";
import Stores from "../pages/Stores";
import Campaign from "../pages/Campaign";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";
import NotFoundComponent from "../components/NotFoundComponent";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/products" element={<Products />} />
      <Route path="/stores" element={<Stores />} />
      <Route path="/campaign" element={<Campaign />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<NotFoundComponent />} />
    </Routes>
  );
};

export default Router;
