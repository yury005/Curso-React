const Events = () => {
    const handleMyEvent = (e) => {
        console.log(e)

    }

    return (

        <div>
            <div>
                <button onClick={handleMyEvent}  >Clique aqui</button>
            </div>
            <div><button onClick = {() => console.log("Voce clicou no botao correto!!")}>
                Clique aqui também</button>
                </div>

        </div>
        

    );


}

export default Events