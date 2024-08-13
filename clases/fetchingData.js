
// CRUD - ABM 

// obtener TO DOS 

//fetch(endpoint, configuracion)
let todos = []
let getTodos = fetch("https://jsonplaceholder.typicode.com/todos") // get 

getTodos
.then((res) => res.json())
.then((res)=>todos = res)
.catch((res)=>console.log(res))

console.log(todos);
const obtenerTodo = (id)=>{
    let getTodo = fetch(`https://jsonplaceholder.typicode.com/todos${id}`) 
    getTodo
    .then((res)=> res.json())
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
}



// obtener to do 
// crear 
// actualizar 
// borrar