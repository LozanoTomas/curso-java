console.log("operadores avanzados II");

let persona = {
    nombre: "pepe",
    edad: 22, 
}

let persona2 = {...persona, email: "fulanito@gmail.con"}



console.log(persona2);

// spread operator  

// rest operator 

const sumar = (...varios)=>{
    let total = varios.reduce((acc, elemento)=>,
        acc + elemento,
        return total
    )
    console.log(acc);
}

sumar(5, 2, 5,)