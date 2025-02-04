const MyCard =({id, tittel,kategori, ingredienser, pris})=>{
    return (
        <div className="border-2 border-solid">
            <p className="text-xs">Rett nummer {id}.</p>
            <h2>{tittel}</h2>
            <p>{pris}</p>
            <p className="text-xs">{ingredienser}</p>
            <p className="text-xs">{kategori}</p>
        </div>
    )
}
export default MyCard






































