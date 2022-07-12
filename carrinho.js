
function addfilme1(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma1",soma)
    window.location.replace("home.html");
}

function addfilme2(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma2",soma)
    window.location.replace("home.html");
}

function addfilme3(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma3",soma)
    window.location.replace("home.html");
}

function addfilme4(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma4",soma)
    window.location.replace("home.html");
}

function addfilme5(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma5",soma)
    window.location.replace("home.html");
}

function addfilme6(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma6",soma)
    window.location.replace("home.html");
}

function addfilme7(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma7",soma)
    window.location.replace("home.html");
}

function addfilme8(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma8",soma)
    window.location.replace("home.html");
}

function addfilme9(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma9",soma)
    window.location.replace("home.html");
}

function addfilme10(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma10",soma)
    window.location.replace("home.html");
}

function addfilme11(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma11",soma)
    window.location.replace("home.html");
}

function addfilme12(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma12",soma)
    window.location.replace("home.html");
}

function addfilme13(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma13",soma)
    window.location.replace("home.html");
}

function addfilme14(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma14",soma)
    window.location.replace("home.html");
}

function addfilme15(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma15",soma)
    window.location.replace("home.html");
}

function addfilme16(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma16",soma)
    window.location.replace("home.html");
}

function addfilme17(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma17",soma)
    window.location.replace("home.html");
}

function addfilme18(){
    let preço = 10;
    let quantidade = document.getElementById("qt").value;
    let soma = preço * quantidade;
    sessionStorage.setItem("soma18",soma)
    window.location.replace("home.html");
}


function session(){
    sessionStorage.setItem("soma1", 0);
    sessionStorage.setItem("soma2", 0);
    sessionStorage.setItem("soma3", 0);
    sessionStorage.setItem("soma4", 0);
    sessionStorage.setItem("soma5", 0);
    sessionStorage.setItem("soma6", 0);
    sessionStorage.setItem("soma7", 0);
    sessionStorage.setItem("soma8", 0);
    sessionStorage.setItem("soma9", 0);
    sessionStorage.setItem("soma10", 0);
    sessionStorage.setItem("soma11", 0);
    sessionStorage.setItem("soma12", 0);
    sessionStorage.setItem("soma13", 0);
    sessionStorage.setItem("soma14", 0);
    sessionStorage.setItem("soma15", 0);
    sessionStorage.setItem("soma16", 0);
    sessionStorage.setItem("soma17", 0);
    sessionStorage.setItem("soma18", 0);
    alert(sessionStorage.getItem("soma1"));

}



function getCard(){
    let totalCard = parseFloat(sessionStorage.getItem("soma1"))+
                    parseFloat(sessionStorage.getItem("soma2"))+
                    parseFloat(sessionStorage.getItem("soma3"))+
                    parseFloat(sessionStorage.getItem("soma4"))+
                    parseFloat(sessionStorage.getItem("soma5"))+
                    parseFloat(sessionStorage.getItem("soma6"))+
                    parseFloat(sessionStorage.getItem("soma7"))+
                    parseFloat(sessionStorage.getItem("soma8"))+
                    parseFloat(sessionStorage.getItem("soma9"))+
                    parseFloat(sessionStorage.getItem("soma10"))+
                    parseFloat(sessionStorage.getItem("soma12"))+
                    parseFloat(sessionStorage.getItem("soma13"))+
                    parseFloat(sessionStorage.getItem("soma14"))+
                    parseFloat(sessionStorage.getItem("soma15"))+
                    parseFloat(sessionStorage.getItem("soma16"))+
                    parseFloat(sessionStorage.getItem("soma17"))+
                    parseFloat(sessionStorage.getItem("soma18"));

                    document.getElementById("avista").value = "R$"+totalCard;
                    console.log( document.getElementById("avista").value = "R$"+totalCard);

    let parcela = document.getElementById("parcela");

    parcela.addEventListener("click", (e) =>{
        switch(parcela.value){
            case"1":
            document.getElementById("valor").value = "RS "+(totalCard).toFixed(2);
            break;
            case"2":
            document.getElementById("valor").value = "RS "+(totalCard/2).toFixed(2);
            break;
            case"3":
            document.getElementById("valor").value = "RS "+(totalCard/3).toFixed(2);
            break;
            case"4":
            document.getElementById("valor").value = "RS "+(totalCard/4).toFixed(2);
            break;
        }
    }
    )
}




//     let parcela = document.getElementById("parcela");
// parcela.addEventListener("click", (e)=>{
   
//     switch(parcela.value){
        
//         case "1":
//         document.getElementById("cartão").value = "parcelas";
//         break;
//         case "2":
//         document.getElementById("cartão").value = "R$ " + (resu6/2).toFixed(2)
//         break;
//         case "3":
//         document.getElementById("cartão").value = "R$ " + (resu6/3).toFixed(2)
//         break;
//         case "4":
//         document.getElementById("cartão").value = "R$ " + (resu6/4).toFixed(2)
//         break;

//     }




// function getCard(){
    

//     let  totalCard= parseFloat(sessionStorage.getItem("soma1"))+
//                     parseFloat(sessionStorage.getItem("soma2"))+
//                     parseFloat(sessionStorage.getItem("soma3"))+
//                     parseFloat(sessionStorage.getItem("soma4"));

//     document.getElementById("totalCarrinho").value = "R$" +totalCard+",80";


//     console.log(sessionStorage.getItem("soma1"));
//     console.log(sessionStorage.getItem("soma2"));
//     console.log(sessionStorage.getItem("soma3"));
//     console.log(sessionStorage.getItem("soma4"));


// }