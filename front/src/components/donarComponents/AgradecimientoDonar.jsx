import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

function AgradecimientoDonar() {
  return (
    <>
      <div
        className="h-screen max-w-md mx-auto mt-10 overflow-auto"
        style={{
          maxHeight: "800px",
          fontFamily: "Gobold, sans-serif",
          fontSize: "30px",
          lineHeight: "1.5",
          background: "linear-gradient(135deg, #f9f9f9, #e6e6e6)",
          padding: "120px",
          borderRadius: "30px",
          textAlign: "center",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{marginBottom: "15px"}}>
          <h1>
            Gracias, ¡Su donativo fue realizado con exito! 
          </h1>
        </div>
        <div>
          <Link
            to="/home"
            style={{ marginTop: "100px" }}
            className="bg-keppel600 shadow-lg hover:animate-bounce hover:bg-amber-200 rounded-full px-6 py-3 text-white text-lg font-semibold transition-colors duration-300"
          >
            Volver
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default AgradecimientoDonar;