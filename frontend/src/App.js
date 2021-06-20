import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Carrito from './components/Carrito';
import Productos from './components/Productos';
import { useLocalStorage } from './components/customHook/localStorage';
import { notifyEmptyCart } from './toast/toastOptions';


function App() {

  const [valueIdLS, setValueIdLS] = useLocalStorage('maxidls', 0);
  const [products, setProducts] = useLocalStorage('products', []);

  const onProductoAñadir = (productoNuevo) => {
    productoNuevo.idLS = valueIdLS;

    setValueIdLS(valueIdLS + 1);

    setProducts([
      ...products,
      productoNuevo
    ]);
  }

  const onProductosEditados = (idProductDelete) => {
    const result = products.filter(producto => producto.idLS !== idProductDelete);
    setProducts(result);
    if (products.length > 1) setValueIdLS(result[result.length - 1].idLS + 1)
    if (products.length === 1) setValueIdLS(0);
  }

  const deleteProducts = () => {
    setProducts([]);
    setValueIdLS(0);
    notifyEmptyCart();
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <BrowserRouter>
            <div className="col-12">
              <Route path="/" exact>
                <Productos productoAñadir={onProductoAñadir} />
              </Route>
            </div>
            <div className="col-12 mb-5">
              <Route path="/carrito">
                <Carrito productosEditados={onProductosEditados} productos={products} deleteProducts={deleteProducts} />
              </Route>
            </div>
          </BrowserRouter>
        </div>
      </div>
    </>
  )
}

export default App;