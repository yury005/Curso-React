
import { useState } from 'react'
function ManageData() {

    let someData = 10;
    const [number, setNumber] = useState(15);
    console.log(number)
    return (
        <div>
            <div>
                <p>valor = {someData}</p>
                <button onClick={() => (someData = 15)}> Change variable</button>
            </div>
            <div>
                <p>Valor: {number}</p>
                <button onClick ={() => setNumber(25)}>Change State</button>
            </div>
      

        </div>
    )
}

export default ManageData