const listarTarea = require(`./funcionesDeTareas`);

const process = require(`process`);

const accion = process.argv[2];

switch (accion) {
    case "listar":
       listarTarea()

       break;
    case undefined :
        console.log(`Atención - Tienes que pasar una acción`);
        break;
    default:
        console.log(`No entiendo que quieres hacer`);
        break;
}