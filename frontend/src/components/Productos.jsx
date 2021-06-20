import { useEffect, useState } from 'react';
import { CardProductos, PPrice, Img, CommonDiv, Icon } from './UI/basics';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyAdd } from '../toast/toastOptions';


const Productos = ({ productoAñadir }) => {

    const [respuestaAPI, setRespuestaAPI] = useState([]);
    const url = 'http://localhost:3000/items';

    useEffect(async () => {
        const result = await axios({ url });
        setRespuestaAPI(result.data);
    }, []);


    return (
        <>
            <Helmet>
                <title>Productos</title>
            </Helmet>
            <div className="text-center mb-3">
                <Tooltip title="Carrito" TransitionComponent={Zoom} arrow >
                    <Link to="/carrito" className="text-end"><Icon className="fas fa-shopping-cart"></Icon></Link>
                </Tooltip>
            </div>
            <CommonDiv className="productos" >
                <ToastContainer />
                {respuestaAPI.length ?
                    respuestaAPI.map((producto) =>
                        <Tooltip title="Agregar al Carrito" TransitionComponent={Zoom} arrow key={producto._id}>
                            <CardProductos key={producto.id} onClick={() => {
                                productoAñadir({ ...producto })
                                notifyAdd(producto.name);
                            }}>
                                <Img src={producto.image} alt={producto.name} />
                                <p>{producto.name}</p>
                                <PPrice>Precio: {producto.price}€</PPrice>
                            </CardProductos>
                        </Tooltip>
                    )
                    :
                    <Loader
                        type="Oval"
                        color="#2f4f4f"
                        height={300}
                        width={100}
                    />}
            </CommonDiv>
        </>
    );
}

export default Productos;