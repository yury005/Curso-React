import { useState } from 'react'


const ConditionalRender = () => {
    const [x] = useState(false);

    const [name, setName] = useState("Yury");

    
    return (

        <div><h1>Isso será exibido?</h1>
            {x && <p> Se x for true, sim!</p>}
            {!x && <p>Agora ele é falso</p>}
            {name === "Yury" ? (
                <div><p>Esse nome é Yury</p></div>
            ) : (<div><p>Nome não encontrado</p></div>)}
             <button onClick={() => setName("Pedro")}>Clique aqui!</button>
        </div>
       
        
    )



}
export default ConditionalRender;