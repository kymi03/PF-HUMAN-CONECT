import React from 'react';
import  {useState, useEffect}  from 'react';
import axios from 'axios';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@mui/material"
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";


function AdminDonations(props) {

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;
  const [donationList, setDonationList] = useState([]); 
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    const donationsData = async () => {
      try {
        const response = await axios.get("/donations");
        const donations = response.data;
        setDonationList(donations); // Actualizar el estado userList con los datos obtenidos
      } catch (error) {
        // Manejo de errores (opcional)
        console.error('Error al obtener las donaciones:', error);
      }
    };
  
    donationsData();
  }, []);
  

  
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage; 
  
  const filteredDonations = donationList.filter((donation)=> 
  donation._id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  
  
  const currentDonations = filteredDonations.slice(indexOfFirstUser, indexOfLastUser); 

  
  const renderDonations = () => {
    if (currentDonations.length === 0) {
      return (
        <TableRow>
          <TableCell colSpan={5}>No donation found.</TableCell>
        </TableRow>
      );
    }
   
   
    return currentDonations.map((donation, index) => {
      const { _id, owner, amounts, date } = donation;
  
      const isEvenRow = index % 2 === 0;
      const rowBackground = isEvenRow ? "#E7DDC7" : "#F3F3F7";
  
      return (
        <TableRow key={index} style={{ backgroundColor: rowBackground}}>
          
    
         
          <TableCell style={{ color: "#111111", fontSize: "15px"}}>
            {_id}
          </TableCell>
  
          {/* <TableCell style={{ color: "#111111", fontSize: "15px" }}>
            {paymentID}
          </TableCell> */}
          
          <TableCell style={{ color: "#111111", fontSize: "15px" }}>
            {owner}
          </TableCell>

          <TableCell style={{ color: "#111111", fontSize: "15px" }}>
            {Object.keys(amounts).map((cause) => (
              <div key={cause}>
                <p style={{fontWeight:"bold"}}>{cause}</p>
                <p>${amounts[cause]}</p>
              </div>
            ))}
          </TableCell>

          <TableCell style={{ color: "#111111", fontSize: "15px" }}>
            {date}
          </TableCell>

        </TableRow>
      );
    });
  };
  
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };
  
  const totalPages = Math.ceil(donationList.length / usersPerPage);
  
  
  
  return (
    <div style={{marginLeft:"200px", marginTop:"40px", marginBottom:"250px", backgroundColor:"#A29F83", border:"2px solid", borderColor:"grey", borderRadius:"5px"}}>
      <TextField
        id="standard-basic"
        variant="standard"
        label="Buscar por id de donación"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search/>
            </InputAdornment>
          ), 
        }}
        style={{ marginBottom: "4px", marginLeft: "65%", display: 'flex', justifyContent: 'center'}}
      />
      <Table>
        <TableHead style={{marginTop:"15px", backgroundColor:"#B2AE8C"}}>
          <TableRow>
            <TableCell style={{ color: "#000000", fontSize: "15px" }}>
              ID Donación
            </TableCell>
            {/* <TableCell style={{ color: "#000000", fontSize: "15px" }}>
              ID Pago
            </TableCell> */}
            <TableCell style={{ color: "#000000", fontSize: "15px" }}>
              Donador
            </TableCell>
            <TableCell style={{ color: "#000000", fontSize: "15px" }}>
              Causas y Montos
            </TableCell>

            <TableCell style={{ color: "#000000", fontSize: "15px" }}>
              Fecha de la Donación
            </TableCell>

          </TableRow>
        </TableHead>
        <TableBody >{renderDonations()}</TableBody>
      </Table>
  
      <div>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
  };

export default AdminDonations;
