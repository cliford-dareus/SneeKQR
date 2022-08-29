const form = document.getElementById('input_form');


function onSubmit(e){
    e.preventDefault();

    let URl = document.getElementById('url_input').value;
    let size = document.getElementById('size_input').value;

    if(URl === ''){
        console.log('enter a url')
    }else{
        clearHtml();
        showSpinner();

        setTimeout(() =>{
            hideSpinner();
            generateQR(URl,size);
            resetForm();
            
            setTimeout(() => {
                const saveUrl = document.querySelector('#qr img').src;
                createSaveUrl(saveUrl);
            },50)
        }, 1000)
    }
    
}

function resetForm(){
    document.getElementById('url_input').value = '';
    document.getElementById('size_input').value = '';
}

function generateQR(url, size){
    const qrcode = new QRCode(document.getElementById("qr"), {
        text: url,
        width: size,
        height: size,
    });
}

function clearHtml(){
    const html = document.querySelector('#qr')
    html.innerHTML = '';
}

function showSpinner(){
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'block'
}

function hideSpinner(){
    const spinner = document.querySelector('.spinner');
    spinner.style.display = 'none'
}

function createSaveUrl(saveUrl){
    const link = document.createElement('a');
    link.id = 'save_link';
    link.classList = 'btn save_btn';
    link.href = saveUrl;
    link.download = 'qrcode';
    link.innerHTML = 'Save Qr'
    document.querySelector('.save_btn').appendChild(link);
}

form.addEventListener('submit', onSubmit);