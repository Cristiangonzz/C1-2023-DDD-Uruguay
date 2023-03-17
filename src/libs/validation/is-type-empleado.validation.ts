export const IsTypeEmpleado = (type : string):boolean =>{
   

    if(
        type == "Entrenador" 
        || type == "Jugador" 
        || type == "SegundoEntrenador" 
        || type == "Negociador" 
        || type == "Directivo" 
        || type == "Reclutador" 
        || type == "Administrativo" 
        || type == "Medico" 
        ) {
            return true;
        }else{
            return false;
        }


 
}