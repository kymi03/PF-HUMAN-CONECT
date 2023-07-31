import React, { useState } from "react";
import NavBarAle from "../../components/NavBar/NavBar.ale";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import styles from "./Donar.module.css";

function Donar() {
  const [unitPrice, setUnitPrice] = useState(500);
  const [chart, setChart] = useState([]);

  const sendChart = async (chart) => {
    if (unitPrice < 500) return;
    try {
      const data = await axios
        .post("http://localhost:3001/payments", { items: chart })
        .then((res) => {
          return res.data;
        });
      const URL = data.result.body.sandbox_init_point;
      window.open(URL, "_blank");
    } catch (error) {
      alert(`No se pudo generar el link de pago. Error: ${error.message}`);
    }
  };

  const handleChange = (e) => {
    console.log(chart);
    const amount = parseFloat(e.target.value);
    const unitPrice = amount / chart.length;
    setUnitPrice(unitPrice);

    console.log(unitPrice);
    setChart([
      {
        title: "Yurumanguí resiste",
        unit_price: unitPrice,
        currency_id: "ARS",
        quantity: 1,
      },
      {
        title: "Anchicayá resiste",
        unit_price: unitPrice,
        currency_id: "ARS",
        quantity: 1,
      },
      {
        title: "Yukpa resiste",
        unit_price: unitPrice,
        currency_id: "ARS",
        quantity: 1,
      },
    ]);
  };

  return (
    <>
      <NavBarAle />

      <div>
        <h2>Aqui puedes donar , y saber cuanto acada causa</h2>
      </div>

      <div className={styles["form-donativo"]}>
        <form>
          <h1>Realiza tu donativo.</h1>

          <label> Voy a donar: $</label>
          <input
            type="number"
            min={1500}
            placeholder="1500"
            onChange={handleChange}
          />
        </form>
        <button onClick={() => sendChart(chart)}> DONAR ♥ </button>
      </div>
      <Footer />
    </>
  );
}

export default Donar;
