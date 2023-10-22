
const handleSubmit = (event) => {
  
    event.preventDefault(); //Não atualizar a pagina ao enviar o form

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
