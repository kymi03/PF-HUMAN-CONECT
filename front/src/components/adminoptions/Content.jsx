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
import { useDispatch, useSelector } from 'react-redux';
import {Link, useLocation, useNavigate} from 'react-router-dom'
import { ARTICLES , PROJECTS , DOCUMENTARYS } from '../../redux/actions-types';

import { getSearchPADByQuery } from '../../redux/actions';


function Content(props) {
const dispatch = useDispatch()
const [currentPage, setCurrentPage] = useState(1);
const usersPerPage = 5;
const [contentList, setContentList] = useState([]); 
const [searchTerm, setSearchTerm] = useState("");

const Articles     = useSelector(state => state.allArticles2)
const Projects     = useSelector(state => state.allProjects2)
const Documentarys = useSelector(state => state.allDocumentarys2)

const navigate = useNavigate()

// dispatch(getSearchPADByQuery( '' , '' , PROJECTS ))
// dispatch(getSearchPADByQuery( '' , '' , ARTICLES ))
// dispatch(getSearchPADByQuery( '' , '' , DOCUMENTARYS ))
useEffect(() => {
  const ArticlesUP = Articles.map((item) =>         ({ ...item, ContentType: ARTICLES    }));
  const ProjectsUP = Projects.map((item) =>         ({ ...item, ContentType: PROJECTS    }));
  const DocumentarysUP = Documentarys.map((item) => ({ ...item, ContentType: DOCUMENTARYS }));


  const combinedData = [...ArticlesUP, ...ProjectsUP, ...DocumentarysUP];




  setContentList(combinedData);

}, [ 
  // Articles, 
  // Projects, 
  // Documentarys  
]);







const indexOfLastUser = currentPage * usersPerPage;
const indexOfFirstUser = indexOfLastUser - usersPerPage; 

const filteredUsers = contentList.filter((user)=> 
user.name.toLowerCase().includes(searchTerm.toLowerCase())
)

const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser); 

const renderUsers = () => {
  if (currentUsers.length === 0) {
    return (
      <TableRow>
        <TableCell colSpan={5}>No users found.</TableCell>
      </TableRow>
    );
  }



  return currentUsers.map((user, index) => {
    const { name, author, date, location , active ,ContentType ,_id} = user;


    const isEvenRow = index % 2 === 0;
    const rowBackground = isEvenRow ? "#B1B9BF" : "#F3F3F7";
    let source = "";
    let ContentTypeName = "";

    switch (ContentType) {
      case PROJECTS:
        ContentTypeName = "Proyecto";
        break;
      case ARTICLES:
        ContentTypeName = "Articulo";
        break;
      case DOCUMENTARYS:
        ContentTypeName = "Documental";

        break;
      default:
        break;
    }


    const handleConfig =()=> {

      navigate(`/ContentDetail/${ContentType}=${_id}`)
    }
  
    return (
      <TableRow key={index} style={{ backgroundColor: rowBackground}}>

        <TableCell
        onClick={handleConfig}
        className=' text-6xl cursor-pointer'
        >🖉</TableCell>

        <TableCell style={{ color: "#111111", fontSize: "15px", backgroundColor: active ? '#2f8e37' : '#eec207' }}>
          {active ? "Activo" : "Inactivo"}
        </TableCell>
        
        <TableCell style={{ color: "#111111", fontSize: "15px"}}>
          {name}
        </TableCell>

        <TableCell style={{ color: "#111111", fontSize: "15px" }}>
          {author}
        </TableCell>
        
        <TableCell style={{ color: "#111111", fontSize: "15px" }}>
          {location}
        </TableCell>
        <TableCell style={{ color: "#111111", fontSize: "15px" }}>
          {date}
        </TableCell>

        <TableCell style={{ color: "#111111", fontSize: "15px" }}>
          {ContentTypeName }
  
        </TableCell>

      </TableRow>
    );
  });
};

const handlePageChange = (event, newPage) => {
  setCurrentPage(newPage);
};

const totalPages = Math.ceil(contentList.length / usersPerPage);



return (
  <div 
  style={{
    marginLeft: "15px",
    marginRight: "20px",
    marginTop: "40px",
    backgroundColor: "#B1B9BF",
    border: "2px solid",
    borderColor: "grey",
    borderRadius: "10px",
    
  }}>
    <TextField
      id="standard-basic"
      variant="standard"
      label="Buscar por Nombre"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
      style={{ marginBottom: "4px", marginLeft: "65%", display: 'flex', justifyContent: 'center'}}
    />
    <Table>
      <TableHead style={{marginTop:"15px", backgroundColor:"#FFFFFF"}}>
        <TableRow>
          <TableCell style={{ color: "#000000", fontSize: "15px"}}>
            Configurar
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px"}}>
            Estado
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            Nombre
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            Autor
          </TableCell >
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            Ubicacion
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            Fecha
          </TableCell>
          <TableCell style={{ color: "#000000", fontSize: "15px" }}>
            Tipo de contenido
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody >{renderUsers()}</TableBody>
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

export default Content;
