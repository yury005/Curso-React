import './App.css';
import City from './assets/city.jpg'
import ListRender from './components/ListRender';
import ManageData from './components/ManageData';
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName';
import { useState } from 'react'
import CarDetails from './components/CarDetails'
function App() {

  const [userName] = useState("Yury")

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imgem em public*/}
      <div>
        <img src="/img1.jpg" alt="Praia" />
      </div>
      <div>
        {/* Imagem em src*/}
        <img src={City} alt="Cidade" />

      </div>

      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* props*/}
      <ShowUserName name= {userName} middleName= "Fonseca"/>
      {/*descrututing*/}
      <CarDetails  brand = "Toyota" km={20000} color= "Preto" newCar ={false}/>
      <CarDetails  brand = "Fiat" km={0} color= "Preto" newCar ={true}/>
      <CarDetails  brand = "Hyundai" km={20000} color= "Preto" newCar ={false}/>
      <CarDetails  brand = "Hyundai" km={0} color= "Preto" newCar ={true}/>

    </div>
  );
}

export default App;
