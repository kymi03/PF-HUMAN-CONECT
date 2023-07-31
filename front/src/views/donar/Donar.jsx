import React, { useState } from "react";
import NavBarAle from "../../components/NavBar/NavBar.ale";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import styles from "./Donar.module.css";
import Cards from "../../components/cards/Cards";
import { useSelector } from "react-redux";
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

 const donerItems = useSelector(state => state.ItemsDonation )


 function splitString(inputString) {
  const [key, value] = inputString.split("=");
  return { key, value };
}

async function fetchData(array) {
  const resultArray = [];

  for (const item of array) {
    const { key, value } = splitString(item);
    let source = "";

    switch (key) {
      case "PROJECTS":
        source = "projects";
        break;
      case "ARTICLES":
        source = "articles";
        break;
      case "DOCUMENTARYS":
        source = "documentaries";
        break;
      default:
        break;
    }

    try {
      const response = await axios.get(`/${source}?id=${value}`);
      resultArray.push(response.data);
    } catch (error) {
      console.error(`Error fetching data for ${item}:`, error);
    }
  }

  return resultArray;
}

// const dataArray = ["PROJECTS=64b9813b8facd1b25669435b","PROJECTS=64b9813b8facd1b25669435c","DOCUMENTARYS=64c473438330e8fb52102bd0","DOCUMENTARYS=64bf6a35f2755740d3db5899","ARTICLES=64bc2c77b0a5f74dde62c65e"];

fetchData(donerItems)
  .then((result) => {
    console.log("Data fetched successfully:", result);
    // You can work with the result array here
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });











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
      {/* <Cards
            // currentPAD={currentPAD} 
            // PAD =  {PROJECTS} //<-- puede que no lo necesite aun 
      ></Cards> */}
      <Footer />
    </>
  );
}

export default Donar;
