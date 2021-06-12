document.addEventListener("DOMContentLoaded", function (event) {

    const botao = document.getElementById('botao');
    botao.addEventListener('click', RetornaInput);

    let contas_valor = ""

    function shuffle(array) {
        var m = array.length, t, i;

        while (m) {

            i = Math.floor(Math.random() * m--);

            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }

        return array;
    }

    function DevolveNumero(n) {
        let dezenas = 10 ** n
        let min = dezenas / 10
        let max = dezenas
        let n1 = Math.floor(Math.random()*(max-min+1)+min);
        let n2 = Math.floor(Math.random()*(max-min+1)+min);
        return [n1, n2]
    }

    function DevolveContaCerto(numeros) {
        return [numeros[0], numeros[1], numeros[0] + numeros[1]]
    }

    function DevolveContaErrado(numeros) {
        return [numeros[0], numeros[1], numeros[0] + numeros[1] + Math.floor(Math.random()*(numeros[0]-1+1)+1)]
    }

    function ContasRetornaRandom(n) {
        let lista_contas = []
        lista_contas.push(DevolveContaErrado(DevolveNumero(n)))
        lista_contas.push(DevolveContaErrado(DevolveNumero(n)))
        lista_contas.push(DevolveContaCerto(DevolveNumero(n)))
        return shuffle(lista_contas)
    }

    function Contas(n) {
        let acc = 0
        let resultado = 0
        for (let i of ContasRetornaRandom(n)) {
            acc++
            contas_valor += "[" + acc + "] " + i[0] + " + " + i[1] + " = " + i[2] + "\n"
            if (i[0] + i[1] === i[2]) {
                resultado = acc
            }
        }
        return resultado
    }

    function RetornaInput() {
        let valor = document.getElementById('entrada').value
        Contas(parseInt(valor))
        document.getElementById('contas').innerText = contas_valor
        contas_valor = ""
    }

});





