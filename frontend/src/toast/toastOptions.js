import { toast } from 'react-toastify';

export const notifyAdd = (name) => toast(`✔ Añadido al carrito: ${name}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: toast.TYPE.SUCCESS,

});

export const notifyRemove = (name) => toast(`❌ Eliminado del carrito: ${name}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    type: toast.TYPE.ERROR,

});