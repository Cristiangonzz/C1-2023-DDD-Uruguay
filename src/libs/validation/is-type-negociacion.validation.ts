export const IsTypeNegociacion = (type : string):boolean =>{
    
    
    if(
        type == "Cesion" 
        || type == "Traspaso" 
        || type == "Contrato" 
     
        ) {
            return true;
        }else{
            return false;
        }
   
}