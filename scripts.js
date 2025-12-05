const convertButton = document.querySelector('.convert-button')
const currencySelected = document.querySelector('.selected')


function convertValues() {
    const currencyValue = document.querySelector('.input-value').value
    const convertValue = document.querySelector('.convert')
    const convertedValue = document.querySelector('.converted')

    const dolarToday = 5.41
    const euroToday = 6.31
    const libraToday = 7.09
    
    if(currencySelected.value == "dolar"){
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(currencyValue / dolarToday)
    }
    if(currencySelected.value == "euro"){
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyValue / euroToday)
    }
    if(currencySelected.value == "libra"){
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyValue / libraToday)
    }

    convertValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(currencyValue)

}

function changePic() {
    const currencyName = document.querySelector('.currency-name')
    const currencyPic = document.querySelector('.other-currency-photo')

    if(currencySelected.value == "dolar"){
        currencyName.innerHTML = 'Dólar Americano'
        currencyPic.src = './assets/estados-unidos (1) 1.png'
    }

    if(currencySelected.value == "euro"){
        currencyName.innerHTML = 'Euro'
        currencyPic.src = './assets/euro.png'
    }

    if(currencySelected.value == "libra"){
        currencyName.innerHTML = 'Libra'
        currencyPic.src = './assets/libra 1.png'
    }

    convertValues()

}

currencySelected.addEventListener('change', changePic)
convertButton.addEventListener('click', convertValues)