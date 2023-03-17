export const IsNacionalidad = (nacionalidad : string):boolean =>{


  if(
    nacionalidad == "Uruguay" || 
    nacionalidad == "Argentina" ||
    nacionalidad == "Brazil" ||
    nacionalidad == "Peru" ||
    nacionalidad == "Bolivia" ||
    nacionalidad == "Paraguay" ||
    nacionalidad == "Cuba" ||
    nacionalidad == "Chile" ||
    nacionalidad == "Colombia" ||
    nacionalidad == "Venezuela" 
    ){
      return true;
    }else{
      return false;
    }
}