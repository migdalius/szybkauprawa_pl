import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import GrowKit from "./pages/growkit/GrowKit";
import Instruction from "./pages/instruction/Instruction";
import Contact from "./pages/contact/Contact";
import Login from "./pages/login/Login";

import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import AdminIndex from "./pages/admin/AdminIndex/AdminIndex";
import AddInstruction from "./pages/admin/AdminIndex/AddInstruction/AddInstruction";
import ProductDetails from "./pages/product/ProductDetails";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import ListInstruction from "./pages/admin/AdminIndex/ListInstruction/ListInstruction";
import EditProduct from "./pages/admin/AdminIndex/EditProduct/EditProduct";
function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/b2b/login" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/b2b/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/zestawy-do-uprawy" element={<GrowKit />} />
        <Route path="/instrukcje" element={<Instruction />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
          path="/admin/dodaj-instrukcje"
          element={
            <RequireAuth>
              <AddInstruction />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/lista-instrukcji"
          element={
            <RequireAuth>
              <ListInstruction />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/panel-glowny"
          element={
            <RequireAuth>
              <AdminIndex />
            </RequireAuth>
          }
        />
        <Route
          path="/admin/edytuj-produkt/:id"
          element={
            <RequireAuth>
              <EditProduct />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
