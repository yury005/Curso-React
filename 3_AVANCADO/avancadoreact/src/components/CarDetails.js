const CarDetails = ({brand, km, color, newCar}) => {

    return (

        <div><h1><p>Detalhes do carro</p></h1>
            <ul>
               <li>Marca: {brand}</li>
               <li>Kilometragem: {km}</li>
               <li>Cor: {color}</li>
               {newCar && <p>Automóvel novo!</p>}
               {!newCar && <p>Automóvel seminovo!</p>}
            </ul>
        </div>

    )


}

export default CarDetails;