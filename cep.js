const cep = document.querySelector("#cep")

cep.addEventListener("blur",(e)=>
{
    let search = cep.value.replace("-", "")
    const options = {
        method: 'GET',
        mode: 'cors',
        Cache: 'default'
    }

  fetch(`https://viacep.com.br/ws/${search}/json`,options)
  .then(Response => {Response.json()
    .then(data => mostrarDados(data))
  })
  .catch(e => console.log('Erro Inesperdo'+ e,message))
})

const mostrarDados = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
        }
    }
}