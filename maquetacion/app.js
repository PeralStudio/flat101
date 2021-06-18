const divSelect = document.getElementById('selects');

const select = `
    <select name="selectProductos" id="select-products">
        <option selected="selected">
                Productos (53)
            </option>
            <option>
                Bañeras (25)
            </option>
            <option>
                Plato ducha (28)
            </option>
    </select>
    <select name="selectOrdenar" id="selectOrdenar">
        <option selected="selected">
            ORDENAR POR
        </option>
        <option>
            Nombre
        </option>
        <option>
            Precio
        </option>
    </select>`;

divSelect.innerHTML = select;