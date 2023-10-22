

const addLoading = () =>{
    //muda o conteudo do botão pra imagem de loading
    const button = document.querySelector('button[class=enviar]');
    button.innerHTML = '<img src="assets/images/loading1.png" class="loading "></img>';
}




const handleSubmit = (event) => {
  
    event.preventDefault(); //Não atualizar a pagina ao enviar o form
    addLoading(); 

    const placa = document.querySelector('input[name=placa]').value;
    const descricao = document.querySelector('input[name=descricao]').value;
    const data = document.querySelector('input[name=data]').value;
    const valor = document.querySelector('input[name=valor]').value;


    fetch('https://api.sheetmonkey.io/form/us8XVRwUqfpieQ6uRiKZ4S' ,{
        method: 'post',
        headers: { 
            'Accept': 'application/json',
            'Content-type' : 'application/json'
        },
        body: JSON.stringify({placa,descricao,data,valor})

    });
}

document.querySelector('form').addEventListener('submit',handleSubmit);
