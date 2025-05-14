import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "./Formularios/datos.css";
import "./home.css";
import "./index.css";
import "./navbar.css";
import "./vende.css";

import DatosPersonas from "./formularios/datospersonas";
import DatosProveedor from "./formularios/datosproveedor";

import Home from "./pages/home";
import Login from "./pages/login";
import Perfil from "./pages/perfil";
import Servicios from "./pages/servicios";
import Vende from "./pages/vende";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// Nuevo componente Layout
function Layout({ children }) {
  return (
    <>
      <Navbar>{children}</Navbar>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas con Navbar */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/home"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/servicios"
          element={
            <Layout>
              <Servicios />
            </Layout>
          }
        />
  
        <Route
          path="/vende"
          element={
            <Layout>
              <Vende />
            </Layout>
          }
        />
        <Route
          path="/perfil"
          element={
            <Layout>
              <Perfil />
            </Layout>
          }
        />

        {/* Rutas sin Navbar */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro/:plan" element={<DatosPersonas />} />
        <Route path="/registro/evento" element={<DatosProveedor />} />
      </Routes>
    </Router>
  );
}

export default App;
