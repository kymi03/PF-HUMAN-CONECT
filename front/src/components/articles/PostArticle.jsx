import React, { useState } from "react";
import NavBarAle from "../NavBar/NavBar.ale";
import Swal from "sweetalert2"
import { useDispatch } from "react-redux";
import articleValidation from "../validations/articleValidation";
import { postNewArticle } from "../../redux/actions";

export const PostArticle = () => {
    const dispatch = useDispatch();
    const [errors, setErrors] = useState({});
    const [artData, setArtData] = useState({
        name: "",
        author: "",
        // media: {},
        body: "",
        breaf: "",
        date: "",
        location:""
    });

    const hdrPostArtSubmit = (event) => {
        event.preventDefault();
        if (
            artData?.name == "" ||
            artData?.author == "" ||
            artData?.body == "" ||
            artData?.breaf == "" ||
            artData?.date == "" ||
            artData?.location == "" 
        )
            return Swal.fire("Complete todos los campos");
        if (errors?.name) return Swal.fire(errors.name);
        if (errors?.author) return Swal.fire(errors.author);
        if (errors?.body) return Swal.fire(errors.body);
        if (errors?.breaf) return Swal.fire(errors.breaf);
        if (errors?.date) return Swal.fire(errors.date);
        if (errors?.location) return Swal.fire(errors.location);
        dispatch(postNewArticle(artData));
        Swal.fire("Post creado exitosamente");
        setArtData({
            name: "",
            author: "",
            // media: {},
            body: "",
            breaf: "",
            date: "",
            location:""
        });
    };

    const hdrChange = (event) => {
        setArtData({
            ...artData,
            [event.target.name]: event.target.value,
        });
        setErrors(
            articleValidation({
                ...artData,
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
                onSubmit={hdrPostArtSubmit}
                className=" rounded-md bg-gray-100 w-11/12 pt-2 place-items-center">
                    <h6 className=" text-xs font-semibold mb-1 font-poppins">Título</h6>
                    <input 
                    name="name"
                    value={artData.name}
                    onChange={(event) => hdrChange(event)}
                    className=" h-7 rounded-md border-gray-300 w-2/5" 
                    type="text" />
                    {errors.name && <p>{errors.name}</p>}
                    <div className=" flex flex-row justify-center">
                        <div className="mr-2 w-1/5">
                            <h6 className=" text-xs font-semibold my-1 font-poppins">Autor</h6>
                            <input 
                            name="author"
                            value={artData.author}
                            onChange={(event) => hdrChange(event)}
                            className=" h-7 rounded-md border-gray-300 w-11/12" 
                            type="text" />
                        </div>
                        <div className="ml-2 w-1/5">
                            <h6 className=" text-xs font-semibold my-1 font-poppins">Fecha de creacíon</h6>
                            <input 
                            name="date"
                            min="2000-01-01"
                            value={artData.date}
                            onChange={(event) => hdrChange(event)}
                            className=" h-7 rounded-md border-gray-300 w-11/12" 
                            type="date" />
                        </div>
                    </div>
                        {errors.author && <p>{errors.author}</p>}
                        {errors.date && <p>{errors.date}</p>}
                    {/* <h6 className=" text-xs font-semibold my-1 font-poppins">Media</h6>
                    <input 
                    name=""
                    value={artData.media}
                    onChange={(event) => hdrChange(event)}
                    className=" h-7 rounded-md border-gray-300 w-2/5" 
                    type="text" /> */}
                    <h6 className=" text-xs font-semibold my-1 font-poppins">Ubicación</h6>
                    <input 
                    name="location"
                    value={artData.location}
                    onChange={(event) => hdrChange(event)}
                    className=" h-7 rounded-md border-gray-300 w-2/5" 
                    type="text" />
                    {errors.location && <p>{errors.location}</p>}
                    <h6 className=" text-xs font-semibold my-1 font-poppins">Descripción</h6>
                    <textarea 
                    name="breaf"
                    value={artData.breaf}
                    onChange={(event) => hdrChange(event)}
                    className=" resize-none w-2/5 border-gray-300 rounded-md" 
                    type="text" />
                    {errors.breaf && <p>{errors.breaf}</p>}
                    <h6 className=" text-xs font-semibold my-1 font-poppins">Cuerpo del artículo</h6>
                    <textarea 
                    name="body"
                    value={artData.body}
                    onChange={(event) => hdrChange(event)}
                    className=" resize-none h-28 w-2/5 border-gray-300 rounded-md" 
                    type="text" />
                    {errors.body && <p>{errors.body}</p>}
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