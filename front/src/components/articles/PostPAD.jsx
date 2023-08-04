import React, { useState } from "react";
import NavBarAle from "../NavBar/NavBar.ale";
import Swal from "sweetalert2";
import PADValidation from "../validations/PADValidation";
import { useDropzone } from "react-dropzone";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from "axios";
import { app } from "../../Firebase/firebase-config";
import { useNavigate } from "react-router-dom";

export const PostPAD = () => {
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
    body2: "",
    body3: "",
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
        padData?.body2 == "" ||
        padData?.body3 == "" ||
        padData?.breaf == "" ||
        padData?.date == "" ||
        padData?.location == ""
      )
        return Swal.fire("Complete todos los campos");
      if (errors?.name) return Swal.fire(errors.name);
      if (errors?.title) return Swal.fire(errors.title);
      if (errors?.author) return Swal.fire(errors.author);
      if (errors?.body) return Swal.fire(errors.body);
      if (errors?.body2) return Swal.fire(errors.body2);
      if (errors?.body3) return Swal.fire(errors.body3);
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
        body2: padData.body2,
        body3: padData.body3,
        breaf: padData.breaf,
        date: padData.date,
        location: padData.location,
      };

      const response = await axios.post(
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
        body2: "",
        body3: "",
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
      <div className=" flex flex-col place-items-center ">
        <form
          action="submit"
          onSubmit={hdrPostPADSubmit}
          className=" rounded-md bg-gray-100 my-10  w-11/12 pt-2 place-items-center"
        >
          <h6 className=" text-xs font-semibold mb-2 font-poppins">
            Nombre del Proyecto, Artículo o Documental (PAD)
          </h6>
          <input
            name="name"
            value={padData.name}
            onChange={(event) => hdrChange(event)}
            className=" h-7 rounded-md mb-5 border-gray-300 w-2/5"
            type="text"
          />
          {errors.name && <p className="text-red-600">{errors.name}</p>}

          <h6 className=" text-xs font-semibold my-1 font-poppins">
            Ubicación
          </h6>
          <input
            name="location"
            value={padData.location}
            onChange={(event) => hdrChange(event)}
            className=" h-7 rounded-md mb-5 border-gray-300 w-2/5"
            type="text"
          />
          {errors.location && <p className="text-red-600">{errors.location}</p>}

          <h6 className=" text-xs font-semibold mb-2 font-poppins">
            Selecciona una opción
          </h6>
          <div>
            <select
              name="padType"
              onChange={handlePadTypeChange}
              className="rounded-md border mb-4"
            >
              <option value="articles">Artículos</option>
              <option value="documentaries">Documentales</option>
              <option value="projects">Proyectos</option>
            </select>
          </div>

          {/*autor y fecha de creacion*/}
          <div className=" flex flex-row justify-center">
            <div className="mr-2 w-1/5">
              <h6 className=" text-xs font-semibold my-1 font-poppins">
                Autor
              </h6>
              <input
                name="author"
                value={padData.author}
                onChange={(event) => hdrChange(event)}
                className=" h-7 rounded-md mb-2 border-gray-300 w-11/12"
                type="text"
              />
            </div>
            <div className="ml-2 w-1/5">
              <h6 className=" text-xs font-semibold my-1 font-poppins">
                Fecha de creación
              </h6>
              <input
                name="date"
                min="2000-01-01"
                value={padData.date}
                onChange={(event) => hdrChange(event)}
                className=" h-7 rounded-md mb-8 border-gray-300 w-11/12"
                type="date"
              />
            </div>
          </div>
          {errors.author && <p className="text-red-600">{errors.author}</p>}
          {errors.date && <p className="text-red-600">{errors.date}</p>}
          <h6 className=" text-xs font-semibold mb-2 my-1 font-poppins">
            Descripción
          </h6>
          <textarea
            name="breaf"
            value={padData.breaf}
            onChange={(event) => hdrChange(event)}
            className=" resize-none w-2/5 mb-5 border-gray-300 rounded-md"
            type="text"
          />
          {errors.breaf && <p className="text-red-600">{errors.breaf}</p>}

          {/*imagen pincipial y titulo*/}
          <div className="flex flex-row justify-center">
            {/* Encabezado de la Página */}
            <div className="flex flex-col w-1/5">
              <h6 className="text-xs font-semibold mb-5 my-2 font-poppins">
                Encabezado de la Página
              </h6>
              <textarea
                name="title"
                value={padData.title}
                onChange={(event) => hdrChange(event)}
                className="resize-none w-full h-20 mb-10 border-gray-300 rounded-md"
                type="text"
              />
              {errors.title && <p className="text-red-600">{errors.title}</p>}
            </div>

            {/* Main Image */}
            <div className="ml-2 w-1/5">
              <h6 className="text-xs font-semibold mb-1 my- font-poppins">
                Imagen Principal
              </h6>
              <div
                {...getMainImageRootProps()}
                style={{
                  minHeight: "100px",
                  border: "3px dashed #9A98FE",
                  padding: "1.2rem",
                  borderRadius: "3px",
                  cursor: "pointer",
                  margin: "1rem",
                  maxWidth: "30vw",
                  display: "flex",
                  overflow: "hidden",
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
                    Haga clic para seleccionar la primera imagen
                  </p>
                )}
              </div>
            </div>
          </div>

          {/*proximo componente imagen 2 y body*/}
          <div className="flex flex-row justify-center">
            {/* Body de la Página */}
            <div className="flex flex-col w-1/5">
              <h6 className="text-xs font-semibold mb-5 my-2 font-poppins">
                Resumen PAD 1
              </h6>
              <textarea
                name="body"
                value={padData.body}
                onChange={(event) => hdrChange(event)}
                className="resize-none w-full h-20 mb-10 border-gray-300 rounded-md"
                type="text"
              />
              {errors.body && <p className="text-red-600">{errors.body}</p>}
            </div>

            {/* Second Image */}
            <div className="ml-2 w-1/5">
              <h6 className="text-xs font-semibold my-1 font-poppins">
                Imagen 2
              </h6>
              <div
                {...getSecondImageRootProps()}
                style={{
                  minHeight: "100px",
                  border: "3px dashed #9A98FE",
                  padding: "1.2rem",
                  borderRadius: "3px",
                  cursor: "pointer",
                  margin: "1rem",
                  maxWidth: "30vw",
                  display: "flex",
                  overflow: "hidden",
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
                    Haga clic para seleccionar la segunda imagen
                  </p>
                )}
              </div>
            </div>
          </div>

          {/*proximo componente imagen 3 y body2*/}
          <div className="flex flex-row justify-center">
            {/* Body2 de la Página */}
            <div className="flex flex-col w-1/5">
              <h6 className="text-xs font-semibold mb-5 my-2 font-poppins">
                Resumen PAD 2
              </h6>
              <textarea
                name="body2"
                value={padData.body2}
                onChange={(event) => hdrChange(event)}
                className="resize-none w-full h-20 mb-8 border-gray-300 rounded-md"
                type="text"
              />
              {errors.body2 && <p className="text-red-600">{errors.body2}</p>}
            </div>

            {/* Second Image */}
            <div className="ml-2 w-1/5">
              <h6 className="text-xs font-semibold my-1 font-poppins">
                Imagen 3
              </h6>
              <div
                {...getThirdImageRootProps()}
                style={{
                  minHeight: "100px",
                  border: "3px dashed #9A98FE",
                  padding: "1.2rem",
                  borderRadius: "3px",
                  cursor: "pointer",
                  margin: "1rem",
                  maxWidth: "30vw",
                  display: "flex",
                  overflow: "hidden",
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
                    Haga clic para seleccionar la tercera imagen
                  </p>
                )}
              </div>
            </div>
          </div>

          {/*videos*/}
          <h6 className="text-xs font-semibold my-1 mb-2 font-poppins">
            Video 1
          </h6>
          {/* Campo de entrada para la URL del video */}
          <input
            value={mainVideoUrl}
            onChange={(e) => setMainVideoUrl(e.target.value)}
            className="h-7 rounded-md mb-5 border-gray-300 w-2/5"
            type="text"
            placeholder="Ingrese la URL del video"
          />
          <h6 className="text-xs font-semibold mb-2 my-1 font-poppins">
            Video 2
          </h6>
          {/* Campo de entrada para la URL del video */}
          <input
            value={secVideoUrl}
            onChange={(e) => setSecVideoUrl(e.target.value)}
            className="h-7 rounded-md mb-5 border-gray-300 w-2/5"
            type="text"
            placeholder="Ingrese la URL del video"
          />
          <h6 className=" text-xs font-semibold my-1 font-poppins">
            Resto del Resumen
          </h6>
          <textarea
            name="body3"
            value={padData.body3}
            onChange={(event) => hdrChange(event)}
            className=" resize-none h-28 w-2/5 mb-5 border-gray-300 rounded-md"
            type="text"
          />
          {errors.body3 && <p className="text-red-600">{errors.body3}</p>}
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
