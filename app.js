const {listarTarea, agregarTarea, filtrarTareas, buscarTarea} = require(`./funcionesDeTareas`);
const process = require(`process`);
const accion = process.argv[2];

//-----------------------------------------------------------------------    
switch (accion) {
    case "listar".toLowerCase():
       listarTarea();
       break;
    case "crear".toLowerCase():
        let titulo = process.argv[3];
        let nuevaTarea = {
            titulo,
            estado : 'pendiente'
        }
        agregarTarea(nuevaTarea)
    break;
    case "filtrar".toLowerCase():
        filtrarTareas(process.argv[3])
        break;
    case "buscar".toLowerCase():
        buscarTarea(process.argv[3])
        break;    
    case undefined :
        console.log(`Atención - Tienes que pasar una acción`);
        break;
    default:
        console.log(`No entiendo que quieres hacer`);
        break;
}

/* 
buscarTarea({
    titulo : `Comprar Cebolla`,    <-------------------- lo use como ensayo para confirmar que se leyeran ambos archivos
    estado : `en progreso`         <---------------------|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

}) */ 
