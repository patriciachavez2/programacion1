//dos silos uno de soja y otro de cereal 
//tiene que tener capacidad maxima y stock actual 

//creacion de objetos de silos


const silos1 = {
    nombre: 'Maiz',
    capacidadMaxima: 100000,
    stockSilo: 100,
    mostrarDatos: function() {
        console.log(`La capacidad maxima del silo de ${silos1.nombre} es: ${silos1.capacidadMaxima} y el stock actual es: ${silos1.stockSilo}`);
     
    },
}


  const silos2 = {
    nombre: 'Soja',
    capacidadMaxima: 100000,
    stockSilo: 2000,
    mostrarDatos: function() {
      console.log(`La capacidad maxima del silo de ${silos2.nombre} es: ${silos2.capacidadMaxima} y el stock en silo es: ${silos2.stockSilo}`);
    },
}

//Recordatorio : ver como usar la funcion en el innerText del case
    console.log("hasta aca llego")
    //LLAMADA A LA FUNCION DEL OBJETO QUE MUESTRA EL MENSAJE
    let mensajeFuncion = silos2.mostrarDatos()
    
    //SE DECLARA LA VARIABLE PARA GUARDAR EL TIPO DE CARGA QUE TRAE EL CAMION  / y se usa el toLowerCase para convertir todo el texto a minusculas
    let camionCarga = prompt("Ingrese tipo de carga del camion").toLowerCase();


    //SWITCH PARA ELEGIR LA OPCION DESEADA
    switch (camionCarga) {
        case  "maiz":
            document.getElementById("tipoDeCereal").innerText= `El TIPO DE CEREAL QUE DESEA INGRESAR ES: "${silos1.nombre}, 
            La capacidad maxima del silo de ${silos1.nombre} es: ${silos1.capacidadMaxima} 
             Y la capacidad utilizada en el silo es: ${silos1.stockSilo}`;
            console.log("La carga que trae es Maiz");
            console.log(mensajeFuncion)

            //ingreso de carga, bloque de comparacion con if mas resultado de carga actualizado
                let capacidadMaxima= 100000

                let ingresoCarga = parseInt(prompt("Cual es la cantidad de carga que desea ingresar?"));
                let stockActualizado = silos1.stockSilo + ingresoCarga

                if(ingresoCarga>0 && ingresoCarga + silos1.stockSilo <= capacidadMaxima ){
                   
                    console.log(stockActualizado)
                    document.getElementById("capacidadCarga").innerText=`La carga que ha ingresado mas el stock en Silo son de : ${stockActualizado}`;
                
                
                }else if (ingresoCarga < 0 || isNaN(ingresoCarga)){   //condicion si ingreso carga es menor que 0 y ingreso carga no es un valor numerico
                    document.getElementById("capacidadCarga").innerText=`La cantidad ingresada no corresponde a un valor valido, revise la cantidad que desea ingresar ${ingresoCarga}`;
            
                
                
                
                }else {
                    console.log("Carga maxima superada")
                    document.getElementById("capacidadCarga").innerText=`Carga maxima superada, la cantidad permitida maxima es de :${capacidadMaxima}, revise la cantidad que desea ingresar`;
                }
                
           
          
        break; 


        case "soja" :
            document.getElementById("tipoDeCereal").innerText= `El TIPO DE CEREAL QUE DESEA INGRESAR ES: "${silos2.nombre},
             La capacidad maxima del silo de ${silos2.nombre} es: ${silos2.capacidadMaxima} 
             Y la capacidad utilizada del silo es: ${silos2.stockSilo}`;
            console.log("La carga que trae es soja");

            //ingreso de carga, bloque de comparacion con if mas resultado de carga actualizado
                let capacidadMaxima1= 100000;

                let ingresoCarga1 = parseInt(prompt("Cual es la cantidad de carga que desea ingresar?"));
                let stockActualizado1 = silos2.stockSilo + ingresoCarga1;

                if(ingresoCarga1>0 && ingresoCarga1 + silos2.stockSilo <= capacidadMaxima1){
                   
                    console.log(stockActualizado1)
                    document.getElementById("capacidadCarga").innerText=`La carga que ha ingresado mas el stock en Silo son de : ${stockActualizado1}`;
               
               
                }else if (ingresoCarga1 < 0 || isNaN(ingresoCarga1)){   //condicion si ingreso carga es menor que 0 y ingreso carga no es un valor numerico
                    document.getElementById("capacidadCarga").innerText=`La cantidad ingresada no corresponde a un valor valido, revise la cantidad que desea ingresar ${ingresoCarga1}`;
            
                
                }else {
                    console.log("Carga maxima superada")
                    document.getElementById("capacidadCarga").innerText=`Carga maxima superada, la cantidad permitida maxima es de :${capacidadMaxima1}, revise la cantidad que desea ingresar`;
                }
                
          
        break;


        default: 
        if((camionCarga !== "Maiz " )&& (camionCarga !== "Soja")){
            document.getElementById("tipoDeCereal").innerText= `El TIPO DE CEREAL QUE DESEA INGRESAR NO COINCIDE CON NINGUNO DE NUESTROS SILOS`;
            console.log("La carga que desea ingresar no es valida");

        }
        break;
    }

  // PREGUNTAR CANTIDAD DE KILOS QUE SE DESEA INGRESAR AL SILO
/*let stockSilo= 10000;
let capacidadMaxima= 100000

let ingresoCarga = parseInt(prompt("Cual es la cantidad de carga que desea ingresar?"));
let stockActualizado = stockSilo + ingresoCarga

if(ingresoCarga>0 && ingresoCarga + stockSilo <= capacidadMaxima){
    console.log(stockActualizado)

}else {
    console.log("Carga maxima superada")
}
*/

