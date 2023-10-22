

const button = document.querySelector('button[class=enviar]');

const addLoading = () => {
    //muda o conteudo do botão pra imagem de loading
    button.innerHTML = '<img src="assets/images/loading1.png" class="loading ">';
}

const removeLoading = () => {
    //muda o conteudo da imagem pra palavra
    button.innerHTML = 'Enviar';
}

const clearInputs = () => {
    document.getElementById('placa').value = '';
    document.getElementById('descricao').value = '';
    document.getElementById('data').value = '';
    document.getElementById('valor').value = '';
}

const handleSubmit = (event) => {

    event.preventDefault(); //Não atualizar a pagina ao enviar o form
    addLoading();

    const placa = document.querySelector('input[name=placa]').value;
    const descricao = document.querySelector('input[name=descricao]').value;
    const data = document.querySelector('input[name=data]').value;
    const valor = document.querySelector('input[name=valor]').value;

    fetch('https://api.sheetmonkey.io/form/us8XVRwUqfpieQ6uRiKZ4S', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ placa, descricao, data, valor })

    }).then(() => {
        removeLoading(),
        clearInputs();
    });
}

document.querySelector('form').addEventListener('submit', handleSubmit);
