let Tareas = require(`./tareas.json`);

function listarTarea() {

    const element =[];

    for (let i = 0; i < Tareas.length; i++) {
        console.log(`${i + 1} - Tarea: ${Tareas[i].titulo} - Estado: ${Tareas[i].estado}`);
        element.push(Tareas[i]);

    }
    return null;
}

module.exports = listarTarea;