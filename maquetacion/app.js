const divSelect = document.getElementById('div-selects');

const existingElements = document.querySelectorAll(".container");

const chapters = Array.from(existingElements).filter(chapter => chapter.classList.contains("container"));
const chapters1 = Array.from(existingElements).filter(chapter => !chapter.classList.contains("bañera"))
const chapters2 = Array.from(existingElements).filter(chapter => !chapter.classList.contains("plato"));

const chaptersRemove1 = Array.from(existingElements).filter(chapter => chapter.classList.contains("bañera"));
const chaptersRemove2 = Array.from(existingElements).filter(chapter => chapter.classList.contains("plato"));

const selectDiv = `
    <select name="selectProductos" id="select-products">
        <option selected="selected">
                Productos (${chapters.length})
            </option>
            <option>
                Bañera (${chaptersRemove1.length})
            </option>
            <option>
                Plato ducha (${chaptersRemove2.length})
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

divSelect.innerHTML = selectDiv;

const select = document.getElementById('select-products');

select.addEventListener('change', e => {
    filterSelection(e.target.value);

    function filterSelection(nameClass) {
        switch (nameClass) {
            case `Productos (${chapters.length})`:
                for (const chapter of chapters) {
                    chapter.classList.add('show');
                    chapter.classList.replace('hide', 'show');
                }
                break;
            case `Bañera (${chaptersRemove1.length})`:
                for (const chapter of chapters1) chapter.classList.replace('show', 'hide');

                for (const chapter of chaptersRemove1) {
                    chapter.classList.remove('hide');
                    chapter.classList.add('show');
                }
                break;
            case `Plato ducha (${chaptersRemove2.length})`:
                for (const chapter of chapters2) chapter.classList.replace('show', 'hide');

                for (const chapter of chaptersRemove2) {
                    chapter.classList.remove('hide');
                    chapter.classList.add('show');
                }
                break;
            default: return;
        }
    }
});