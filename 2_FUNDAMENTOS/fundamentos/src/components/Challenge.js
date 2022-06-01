const Challenge = () => {

    const num1 = 73
    const num2 = 65
    const resultado = num1 + num2


    return (

        < div >
        <h1>A soma de {num1} e {num2} é: </h1>        
        <button onClick ={() => console.log(resultado)}>Resultado</button>

        </div >



    )
}

export default Challenge