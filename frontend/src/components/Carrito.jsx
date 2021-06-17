import { CommonDiv, CommonDiv2, CarritoDivVacio, TotalPrice, TitlePrice, PPrice, Img, CardCarrito, Icon } from './UI/basics';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import { Link } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notifyRemove } from '../toast/toastOptions';

const Carrito = ({ productos, productosEditados, deleteProducts }) => {

    // Suma precios
    let precioTotal = 0;
    for (let producto of productos) { precioTotal += producto.price };

    return (
        <>
            <div className="text-center mb-3">
                <Tooltip title="Volver" TransitionComponent={Zoom} arrow >
                    <Link to="/" ><Icon className="fas fa-home"></Icon></Link>
                </Tooltip>
            </div>
            <CommonDiv2>
                <ToastContainer />
            </CommonDiv2>
            {productos.length ?
                <CommonDiv>
                    <button onClick={deleteProducts} className="btn btn-outline-dark btn-sm">Vaciar Carrito</button>
                    <TotalPrice>Total: {precioTotal}€</TotalPrice>
                    {productos.map((producto) => (
                        <Tooltip title="Eliminar del Carrito" TransitionComponent={Zoom} arrow key={producto.idLS}>
                            <CardCarrito key={producto.idLS} onClick={() => {
                                productosEditados(producto.idLS);
                                notifyRemove(producto.name);
                            }} >
                                <Img src={producto.image} alt={producto.name} />
                                <p>{producto.name}</p>
                                <PPrice>Precio: {producto.price}€</PPrice>
                            </CardCarrito>
                        </Tooltip>
                    ))}
                </CommonDiv> :

                <CarritoDivVacio><TitlePrice>Carrito Vacio</TitlePrice></CarritoDivVacio>}
        </>
    );
}

export default Carrito;