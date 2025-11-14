function contar(){
    let inicio = document.getElementById('txti') // let é a mesma coisa que var
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp') // passo é pulando o número exemplo 2 em 2
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
         res.innerHTML = ' Impossivel contar!'
        window.alert('[ERRO] Faltam dados!')
       

    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert ('Passo inválido! considerando passo 1')
            p =1
        }

        if(i < f){
            // contagem crescente
        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c}  👉` // para colocar o emoji aperta a tecla windons +.
        }
    }else{
        //contagem regressiva
        for(let c = i; c >= f; c-= p){
            res.innerHTML += ` ${c}  👉`
        }
    }
     res.innerHTML += `🚩`
    }
}
