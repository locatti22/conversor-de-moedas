const convertButton = document.querySelector('.convert-button')
const currencySelected = document.querySelector('.selected')
const actualCurrency = document.querySelector('.selection')
const currencyValue = document.querySelector('.input-value').value
const convertedValue = document.querySelector('.converted')

function convertValues() {
    const currencyValue = document.querySelector('.input-value').value
    const convertValue = document.querySelector('.convert')
    const convertedValue = document.querySelector('.converted')

    const dolarToday = 5.41
    const euroToday = 6.31
    const libraToday = 7.09
    const realToday = 1

    const dolarTodayd = 1
    const euroTodayd = 1.16
    const libraTodayd = 1.33
    const realTodayd = 0.18

    const dolarTodaye = 0.86
    const euroTodaye = 1
    const libraTodaye = 1.15
    const realTodaye = 0.16

    const dolarTodayl = 0.75
    const euroTodayl = 0.87
    const libraTodayl = 1
    const realTodayl = 0.14

    if (currencySelected.value == "dolar" && actualCurrency.value == "realConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currencyValue / dolarToday)
    }
    if (currencySelected.value == "euro" && actualCurrency.value == "realConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyValue / euroToday)
    }
    if (currencySelected.value == "libra" && actualCurrency.value == "realConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyValue / libraToday)
    }
    if (currencySelected.value == "real" && actualCurrency.value == "realConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(currencyValue / realToday)
    }
    if(actualCurrency.value == "realConvert"){
    convertValue.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: "currency",
        currency: "BRL"
    }).format(currencyValue)


    }
    if (currencySelected.value == "dolar" && actualCurrency.value == "dolarConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currencyValue / dolarTodayd)
    }
    if (currencySelected.value == "euro" && actualCurrency.value == "dolarConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyValue / euroTodayd)
    }
    if (currencySelected.value == "libra" && actualCurrency.value == "dolarConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyValue / libraTodayd)
    }
    if (currencySelected.value == "real" && actualCurrency.value == "dolarConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(currencyValue / realTodayd)
    }
    if(actualCurrency.value == "dolarConvert"){
    convertValue.innerHTML = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    }).format(currencyValue)
    }
    if(actualCurrency.value == "euroConvert"){
    convertValue.innerHTML = new Intl.NumberFormat('de-DE', {
        style: "currency",
        currency: "EUR"
    }).format(currencyValue)
    }
    
    if (currencySelected.value == "dolar" && actualCurrency.value == "euroConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currencyValue / dolarTodaye)
    }
    if (currencySelected.value == "euro" && actualCurrency.value == "euroConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyValue / euroTodaye)
    }
    if (currencySelected.value == "libra" && actualCurrency.value == "euroConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyValue / libraTodaye)
    }
    if (currencySelected.value == "real" && actualCurrency.value == "euroConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(currencyValue / realTodaye)
    }

    if(actualCurrency.value == "libraConvert"){
    convertValue.innerHTML = new Intl.NumberFormat('de-DE', {
        style: "currency",
        currency: "GBP"
    }).format(currencyValue)
    }

    if (currencySelected.value == "dolar" && actualCurrency.value == "libraConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(currencyValue / dolarTodayl)
    }
    if (currencySelected.value == "euro" && actualCurrency.value == "libraConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(currencyValue / euroTodayl)
    }
    if (currencySelected.value == "libra" && actualCurrency.value == "libraConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'GBP'
        }).format(currencyValue / libraTodayl)
    }
    if (currencySelected.value == "real" && actualCurrency.value == "libraConvert") {
        convertedValue.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(currencyValue / realTodayl)
    }

}


function changePic() {
    const currencyName = document.querySelector('.currency-name')
    const currencyPic = document.querySelector('.other-currency-photo')
    const actualName = document.querySelector('.actual-name')
    const actualPic = document.querySelector('.actual-photo')

    if (currencySelected.value == "dolar") {
        currencyName.innerHTML = 'Dólar Americano'
        currencyPic.src = './assets/estados-unidos (1) 1.png'
    }

    if (currencySelected.value == "euro") {
        currencyName.innerHTML = 'Euro'
        currencyPic.src = './assets/euro.png'
    }

    if (currencySelected.value == "libra") {
        currencyName.innerHTML = 'Libra'
        currencyPic.src = './assets/libra 1.png'
    }

    if (currencySelected.value == "real") {
        currencyName.innerHTML = 'Real'
        currencyPic.src = './assets/brasil 2.png'
    }

    if (actualCurrency.value == "dolarConvert") {
        actualName.innerHTML = 'Dólar Americano'
        actualPic.src = './assets/estados-unidos (1) 1.png'
    }

    if (actualCurrency.value == "realConvert") {
        actualName.innerHTML = 'Real'
        actualPic.src = './assets/brasil 2.png'
    }

    if (actualCurrency.value == "euroConvert") {
        actualName.innerHTML = 'Euro'
        actualPic.src = './assets/euro.png'
    }

    if (actualCurrency.value == "libraConvert") {
        actualName.innerHTML = 'Libra'
        actualPic.src = './assets/libra 1.png'
    }

    convertValues()

}

actualCurrency.addEventListener('change', changePic)
currencySelected.addEventListener('change', changePic)
convertButton.addEventListener('click', convertValues)