const fs = require(`fs`);
const tareas = require(`./tareas.json`);
const mostrarTareas = (tareas) => {
    tareas.forEach((tarea,index) => {
        console.log(`${index + 1} - ${tarea.titulo} - estado: ${tarea.estado}`);
    });
}

//-------------------------------------------------------------------------------------
module.exports = {

agregarTarea : (tarea) =>{
    tareas.push(tarea);
    fs.writeFileSync(`./tareas.json`, JSON.stringify(tareas,null,3))
    return console.log(`Tarea Agregada Exitosamente !`);
},
//----------------------------------------------------------------------------//
filtrarTareas : (estado) => {

    let estadosValidos = ['terminado','en progreso', 'pendiente'];

    if(!estadosValidos.includes(estado)){
        return console.log('Estado no válido', estadosValidos);
    }

    let tareasFiltradas = tareas.filter((tarea) => {
        return tarea.estado === estado
    });

    mostrarTareas(tareasFiltradas)
    return null
},
//-----------------------------------------------------------------------------//
buscarTarea : (keyword) => {

    let resultado = tareas.filter(tarea => {
        return tarea.titulo.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())
    })

    mostrarTareas(resultado);
    return null
},
//------------------------------------------------------------------------------//
listarTarea() {

    const element =[];

    for (let i = 0; i < tareas.length; i++) {
        console.log(`${i + 1} - Tarea: ${tareas[i].titulo} - Estado: ${tareas[i].estado}`);
        element.push(tareas[i]);

    }
    return null;
}
}
