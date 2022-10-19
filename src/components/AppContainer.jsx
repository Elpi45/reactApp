import Item from "./Item"
import Stock from "./Stock"
const precio = 87;

const AppContainer = () => {
    //TODO logica de peticiones
    return <div className="products">

        <div className="card">
            <span className='card__name' >Zapatos Deportivos</span>
            <p className='card__description' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore cumque veniam. Maiores, quos.</p>
            <span className='card__price' >{precio}</span>
            <Stock caracteristica="4 en Stock"/>
        </div>


        <Item 
        nombre="Tenis Ultra" 
        precio={24000}
        stock= "8 en stock"
         />

        <Item 
        nombre="Zapas Mega" 
        precio={110000}
        stock= "2 en stock"
         />

        <div className="card">
            <span className='card__name' >Zapatos Deportivos 2</span>
            <p className='card__description' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore cumque veniam. Maiores, quos.</p>
            <span className='card__price' >$45</span>
            <span className='card__stock' >quedan 1</span>
        </div>

        <div className="card">
            <span className='card__name' >Zapatos Deportivos 3</span>
            <p className='card__description' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore cumque veniam. Maiores, quos.</p>
            <span className='card__price' >$79</span>
            <span className='card__stock' >quedan 6</span>
        </div>

      </div>
}

export default AppContainer;