import React, { useState } from "react";
import NavBarAle from "../NavBar/NavBar.ale";
import Swal from "sweetalert2";
//import { useDispatch } from "react-redux";
import PADValidation from "../validations/PADValidation";
import { useDropzone } from "react-dropzone";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { app } from "../../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";

export const PostPAD = () => {
  //const dispatch = useDispatch();
  const [padType, setPadType] = useState("articles");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [mainImage, setMainImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);
  const [firstVideo, setFirstVideo] = useState(null);
  const [secondVideo, setSecondVideo] = useState(null);
  const [mainVideoUrl, setMainVideoUrl] = useState("");
  const [secVideoUrl, setSecVideoUrl] = useState("");
  const handlePadTypeChange = (e) => {
    setPadType(e.target.value);
  };

  const [padData, setPADData] = useState({
    name: "",
    title: "",
    author: "",
    media: {
      images: [
        {
          imageName: "",
          imageUrl: null,
        },
        {
          imageName: "",
          imageUrl: null,
        },
        {
          imageName: "",
          imageUrl: null,
        },
      ],
      videos: [
        {
          videoName: "",
          videoUrl: null,
        },
        {
          videoName: "",
          videoUrl: null,
        },
      ],
    },
    body: "",
    breaf: "",
    date: "",
    location: "",
  });

  const storage = getStorage(app);

  const uploadImage = async (file) => {
    const storageRef = ref(storage, file.name);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;
  };

  const onDropMainImage = (acceptedFiles) => {
    setMainImage(acceptedFiles[0]);
  };

  const onDropSecondImage = (acceptedFiles) => {
    setSecondImage(acceptedFiles[0]);
  };

  const onDropThirdImage = (acceptedFiles) => {
    setThirdImage(acceptedFiles[0]);
  };

  const onDropFirstVideo = (acceptedFiles) => {
    setFirstVideo(acceptedFiles[0]);
  };

  const onDropSecondVideo = (acceptedFiles) => {
    setSecondVideo(acceptedFiles[0]);
  };

  const {
    getRootProps: getMainImageRootProps,
    getInputProps: getMainImageInputProps,
  } = useDropzone({ onDrop: onDropMainImage });

  const {
    getRootProps: getSecondImageRootProps,
    getInputProps: getSecondImageInputProps,
  } = useDropzone({ onDrop: onDropSecondImage });

  const {
    getRootProps: getThirdImageRootProps,
    getInputProps: getThirdImageInputProps,
  } = useDropzone({ onDrop: onDropThirdImage });

  const {
    getRootProps: getFirstVideoRootProps,
    getInputProps: getFirstVideoInputProps,
  } = useDropzone({ onDrop: onDropFirstVideo });

  const {
    getRootProps: getSecondVideoRootProps,
    getInputProps: getSecondVideoInputProps,
  } = useDropzone({ onDrop: onDropSecondVideo });

  const hdrPostPADSubmit = async (event) => {
    event.preventDefault();

    try {
      // Sube las imágenes seleccionadas a Firebase Storage y obtén las URL de descarga
      const mainImageUrl = mainImage ? await uploadImage(mainImage) : null;
      const secondImageUrl = secondImage
        ? await uploadImage(secondImage)
        : null;
      const thirdImageUrl = thirdImage ? await uploadImage(thirdImage) : null;
      const firstVideoUrl =
        mainVideoUrl.trim() !== ""
          ? mainVideoUrl
          : firstVideo
          ? await uploadImage(firstVideo)
          : null;
      const secondVideoUrl =
        secVideoUrl.trim() !== ""
          ? secVideoUrl
          : secondVideo
          ? await uploadImage(secondVideo)
          : null;

      if (
        padData?.name == "" ||
        padData?.title == "" ||
        padData?.author == "" ||
        padData?.body == "" ||
        padData?.breaf == "" ||
        padData?.date == "" ||
        padData?.location == ""
      )
        return Swal.fire("Complete todos los campos");
      if (errors?.name) return Swal.fire(errors.name);
      if (errors?.title) return Swal.fire(errors.name);
      if (errors?.author) return Swal.fire(errors.author);
      if (errors?.body) return Swal.fire(errors.body);
      if (errors?.breaf) return Swal.fire(errors.breaf);
      if (errors?.date) return Swal.fire(errors.date);
      if (errors?.location) return Swal.fire(errors.location);

      // Lógica para enviar los datos del formulario al backend:

      const requestData = {
        name: padData.name,
        title: padData.title,
        author: padData.author,
        media: {
          images: [
            {
              imageName: "",
              imageUrl: mainImageUrl,
            },
            {
              imageName: "",
              imageUrl: secondImageUrl,
            },
            {
              imageName: "",
              imageUrl: thirdImageUrl,
            },
          ],
          videos: [
            {
              videoName: "",
              videoUrl: firstVideoUrl,
            },
            {
              videoName: "",
              videoUrl: secondVideoUrl,
            },
          ],
        },
        body: padData.body,
        breaf: padData.breaf,
        date: padData.date,
        location: padData.location,
      };

      const response = axios.post(
        `http://localhost:3001/${padType}`,
        requestData
      );
      console.log("Respuesta del servidor:", response.data);

      navigate(`/${padType}`);

      // dispatch(postNewPAD(requestData)); //<----Maka, aquí ese articles varia en funcion de lo que le pase el usario por medio de un selector (que se debe crear), asi el usuario controla a donde esta posteando sin necesidad de crear un nuevo form para cada PAD ;)

      Swal.fire("Post creado exitosamente");
      setPADData({
        name: "",
        title: "",
        author: "",
        media: {
          images: [
            {
              imageName: "",
              imageUrl: null,
            },
            {
              imageName: "",
              imageUrl: null,
            },
            {
              imageName: "",
              imageUrl: null,
            },
          ],
          videos: [
            {
              videoName: "",
              videoUrl: null,
            },
            {
              videoName: "",
              videoUrl: null,
            },
          ],
        },
        body: "",
        breaf: "",
        date: "",
        location: "",
      });
      setMainVideoUrl("");
      setSecVideoUrl("");
    } catch (error) {
      console.log("Error al realizar la solicitud:", error);
    }
  };

  const hdrChange = (event) => {
    setPADData({
      ...padData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      PADValidation({
        ...padData,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <div className=" flex flex-col">
      <NavBarAle />
      <div className=" flex flex-col place-items-center">
        <form
          action="submit"
          onSubmit={hdrPostPADSubmit}
          className=" rounded-md bg-gray-100 w-11/12 pt-2 place-items-center"
        >
          <h6 className=" text-xs font-semibold mb-1 font-poppins">
            Nombre del artículo, proyecto o documental
          </h6>
          <input
            name="name"
            value={padData.name}
            onChange={(event) => hdrChange(event)}
            className=" h-7 rounded-md border-gray-300 w-2/5"
            type="text"
          />
          {errors.name && <p>{errors.name}</p>}
          <h6 className=" text-xs font-semibold my-1 font-poppins">
            Encabezado de la Página
          </h6>
          <textarea
            name="title"
            value={padData.title}
            onChange={(event) => hdrChange(event)}
            className=" resize-none w-2/5 border-gray-300 rounded-md"
            type="text"
          />
          {errors.title && <p>{errors.title}</p>}
          <div className=" flex flex-row justify-center">
            <div className="mr-2 w-1/5">
              <h6 className=" text-xs font-semibold my-1 font-poppins">
                Autor
              </h6>
              <input
                name="author"
                value={padData.author}
                onChange={(event) => hdrChange(event)}
                className=" h-7 rounded-md border-gray-300 w-11/12"
                type="text"
              />
            </div>
            <div className="ml-2 w-1/5">
              <h6 className=" text-xs font-semibold my-1 font-poppins">
                Fecha de creacíon
              </h6>
              <input
                name="date"
                min="2000-01-01"
                value={padData.date}
                onChange={(event) => hdrChange(event)}
                className=" h-7 rounded-md border-gray-300 w-11/12"
                type="date"
              />
            </div>
          </div>
          {errors.author && <p>{errors.author}</p>}
          {errors.date && <p>{errors.date}</p>}
          <div className="flex flex-row justify-center">
            <div className="mr-2 w-1/5">
              <h6 className="text-xs font-semibold my-1 font-poppins">
                Imagen Principal
              </h6>
              <div
                {...getMainImageRootProps()}
                style={{
                  minHeight: "50px",
                  border: "3px dashed #9A98FE",
                  padding: "0.5rem",
                  borderRadius: "2px",
                  cursor: "pointer",
                  margin: "0.5rem",
                  maxWidth: "15vw",
                  display: "flex", // Asegura que la imagen ocupa todo el espacio
                  overflow: "hidden", // Oculta cualquier parte de la imagen que se extienda fuera del marco
                }}
              >
                <input {...getMainImageInputProps()} />
                {mainImage ? (
                  <img
                    src={URL.createObjectURL(mainImage)}
                    alt="mainImage"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : (
                  <p style={{ margin: 0 }}>
                    Haga clic para seleccionar la imagen
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="mr-2 w-1/5">
              <h6 className="text-xs font-semibold my-1 font-poppins">
                Imagen 2
              </h6>
              <div
                {...getSecondImageRootProps()}
                style={{
                  minHeight: "50px",
                  border: "2px dashed #9A98FE",
                  padding: "0.5rem",
                  borderRadius: "2px",
                  cursor: "pointer",
                  margin: "0.5rem",
                  maxWidth: "15vw",
                  display: "flex", // Asegura que la imagen ocupa todo el espacio
                  overflow: "hidden", // Oculta cualquier parte de la imagen que se extienda fuera del marco
                }}
              >
                <input {...getSecondImageInputProps()} />
                {secondImage ? (
                  <img
                    src={URL.createObjectURL(secondImage)}
                    alt="secondImage"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : (
                  <p style={{ margin: 0 }}>
                    Haga clic para seleccionar la imagen
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center">
            <div className="mr-2 w-1/5">
              <h6 className="text-xs font-semibold my-1 font-poppins">
                Imagen 3
              </h6>
              <div
                {...getThirdImageRootProps()}
                style={{
                  minHeight: "50px",
                  border: "2px dashed #9A98FE",
                  padding: "0.5rem",
                  borderRadius: "2px",
                  cursor: "pointer",
                  margin: "0.5rem",
                  maxWidth: "15vw",
                  display: "flex", // Asegura que la imagen ocupa todo el espacio
                  overflow: "hidden", // Oculta cualquier parte de la imagen que se extienda fuera del marco
                }}
              >
                <input {...getThirdImageInputProps()} />
                {thirdImage ? (
                  <img
                    src={URL.createObjectURL(thirdImage)}
                    alt="thirdImage"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                ) : (
                  <p style={{ margin: 0 }}>
                    Haga clic para seleccionar la imagen
                  </p>
                )}
              </div>
            </div>
          </div>
          <h6 className="text-xs font-semibold my-1 font-poppins">
            Video (subir o URL)
          </h6>
          {/* Campo de entrada para la URL del video */}
          <input
            value={mainVideoUrl}
            onChange={(e) => setMainVideoUrl(e.target.value)}
            className="h-7 rounded-md border-gray-300 w-2/5"
            type="text"
            placeholder="Ingrese la URL del video"
          />
          <h6 className="text-xs font-semibold my-1 font-poppins">
            Video (subir o URL)
          </h6>
          {/* Campo de entrada para la URL del video */}
          <input
            value={secVideoUrl}
            onChange={(e) => setSecVideoUrl(e.target.value)}
            className="h-7 rounded-md border-gray-300 w-2/5"
            type="text"
            placeholder="Ingrese la URL del video"
          />

          <h6 className=" text-xs font-semibold my-1 font-poppins">
            Ubicación
          </h6>
          <input
            name="location"
            value={padData.location}
            onChange={(event) => hdrChange(event)}
            className=" h-7 rounded-md border-gray-300 w-2/5"
            type="text"
          />
          {errors.location && <p>{errors.location}</p>}
          <h6 className=" text-xs font-semibold my-1 font-poppins">
            Descripción
          </h6>
          <textarea
            name="breaf"
            value={padData.breaf}
            onChange={(event) => hdrChange(event)}
            className=" resize-none w-2/5 border-gray-300 rounded-md"
            type="text"
          />
          {errors.breaf && <p>{errors.breaf}</p>}
          <h6 className=" text-xs font-semibold my-1 font-poppins">
            Cuerpo del artículo
          </h6>
          <textarea
            name="body"
            value={padData.body}
            onChange={(event) => hdrChange(event)}
            className=" resize-none h-28 w-2/5 border-gray-300 rounded-md"
            type="text"
          />
          {errors.body && <p>{errors.body}</p>}
          <div>
            <select name="padType" onChange={handlePadTypeChange}>
              <option value="articles">Artículos</option>
              <option value="documentaries">Documentales</option>
              <option value="projects">Proyectos</option>
            </select>
          </div>
          <div>
            <button className=" text-sm font-poppins font-semibold p-1 m-1 bg-vividGreen text-white w-2/5 rounded-md">
              Publicar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
