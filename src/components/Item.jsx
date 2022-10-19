const Item = ({nombre, precio, stock}) => {
    return (<div className="card">
    <span className='card__name' >{nombre}</span>
    <p className='card__description' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore cumque veniam. Maiores, quos.</p>
    <span className='card__price' >{precio}</span>
    <span className='card__stock' >{stock}</span>
</div>)
}

export default Item