
import { useState } from 'react';

const ListRender = () => {
    const [list] = useState(["Matheus", "Paulo", "José"]);

    const [users, setUsers] = useState([
        { id: 1, name: "Matheus", age: "31" },
        { id: 2, name: "Paulo", age: "25" },
        { id: 3, name: "Cinthia", age: "45" },])

    const deleteRandom = () => {
        const  randomNumber = Math.floor(Math.random() * 4);


        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)

        })


    };


    

    return (

        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>))}

            </ul>
            <ul>

                {users.map((user) => 
                <li key = {user.id}>{user.name} {user.age}                    

                </li>
                
                )}

            </ul>
            <button onClick= {deleteRandom}>Delete Random User</button>
        </div>

    )




}
export default ListRender