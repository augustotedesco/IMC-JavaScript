const botCalcular = document.querySelector('#calcular')
const inpPeso = document.querySelector('#peso')
const inpAltura = document.querySelector('#altura')
const resultado = document.querySelector('.resultado')

botCalcular.addEventListener('click', e => {
    e.preventDefault()

    const peso = Number(inpPeso.value.replace(',', '.'))
    const altura = Number(inpAltura.value.replace(',', '.'))

    if (!peso && !altura) {
        setMsg('<b>Peso</b> e <b>Altura</b> inválidos.')
        return
    }
    if (!peso) {
        setMsg('<b>Peso</b> inválido.')
        return
    }
    if (!altura) {
        setMsg('<b>Altura</b> inválida.')
        return
    }
    if (peso > 600 || peso < 2) {
        setMsg('<b>Peso</b> informado não corresponde aos limites humanos!')
        return
    }
    if (altura > 2.8 || altura < 0.5) {
        setMsg('<b>Altura</b> informada não corresponde aos limites humanos!')
        return
    }
    const imc = calculoIMC(peso, altura)
    const resIMC = resultIMC(imc)
    const msg = `Seu IMC é <b>${imc} (${resIMC[0]})</b>`
    setMsg(msg, resIMC[1])
})

function setMsg(msg, color) {
    resultado.innerHTML = ''
    const p = setP()

    p.classList.add('pResultado')

    if (color) {
        p.style.backgroundColor = color
    } else {
        p.style.backgroundColor = '#ff0000'
    }

    p.innerHTML = msg
    resultado.appendChild(p)
}

function setP() {
    const p = document.createElement('p')
    return p
}

function calculoIMC(peso, altura) {
    const imc = (peso / (altura * altura)).toFixed(2)
    return imc
}

function resultIMC(imc) {
    const res = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']
    if (imc > 39.9) {
        return [res[5],]
    }
    if (imc > 35 && imc < 39.9) {
        return [res[4], '#ff4141']
    }
    if (imc > 30 && imc < 34.9) {
        return [res[3], '#ff4b4b']
    }
    if (imc > 25 && imc < 29.9) {
        return [res[2], '#ff6464']
    }
    if (imc > 18.5 && imc < 24.9) {
        return [res[1], '#00ff00']
    }
    if (imc > 15.5 && imc < 18.5) {
        return [res[0], '#ff6464']
    }
    if (imc < 15.5) {
        return [res[0],]
    }
}