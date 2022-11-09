window.addEventListener("load", inicio, true);

function inicio(){
    document.getElementById("mensaje").addEventListener("keyup", function(){
        this.value = this.value.toUpperCase()
    }, true)
    document.getElementById("cifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = cifrar(texto,desplazamiento);
    }, true);

    document.getElementById("descifrar").addEventListener("click", function(){
        let texto = document.getElementById("mensaje").value;
        let desplazamiento = document.getElementById("desplazamiento").value;
        document.getElementById("mensaje2").value = descifrar(texto,desplazamiento);
    }, true);
}


function cifrar(texto, desplazamiento){

    eliminar_value() // eliminamos el value en el input de mensaje

    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    desplazamiento = (desplazamiento % 26 + 26) % 26;

    if(texto){
        for (let i = 0; i<texto.length; i++){
            if(letras.indexOf(texto[i])!=-1){
                let posicion = ((letras.indexOf(texto[i])+desplazamiento)%26);

                resultado += letras[posicion];
            }
            else{
                resultado += texto[i];
            }
                
        }
    }
    return resultado;

}

function cifrar2 (texto,desplazamiento){
    eliminar_value()
    if(!texto)
        return "";
    
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 + 26) % 26;

    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);

}

function descifrar (texto,desplazamiento){
    eliminar_value()
    if(!texto)
        return "";
    
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    desplazamiento = (desplazamiento % 26 - 26) % 26;

    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-desplazamiento)%26]);

}





let m = document.getElementById("mensaje")

function eliminar_value(){
    
    time = 90
    if(m.value.length > 6) time = 30
    if(m.value.length > 30) time = 8
    if(m.value.length > 50) time = 5



        setTimeout(()=>{
        if(m.value == "") return 
    
        m.value = m.value.slice(0,-1)
        eliminar_value()

    },time)
  
}









///////////////////////////
// setear output de input range 

let desplazamiento = document.getElementById("desplazamiento");

desplazamiento.addEventListener("input", output)


function output(){

    document.getElementById("output-range").innerText = desplazamiento.value
}