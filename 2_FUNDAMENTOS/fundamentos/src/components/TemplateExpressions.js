const TemplateExpressions  = () =>{

    const name = "Yury Fonseca"
    const data = {
        Age : "31",
        job : "Programmer",


    }

    return (

        <div>

            <h1>Hello {name}, how are you??</h1>
            <p>You has: {data.Age} years old</p>
            <p> Works as a {data.job}</p>
        </div>


    )

}
export default TemplateExpressions