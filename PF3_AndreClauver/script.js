const calcular = document.getElementById('calcular');


function imc () {
    const nome = document.getElementById('nome').value;
    const valor_aplicado = document.getElementById('valor_aplicado').value;
    const taxa = document.getElementById('taxa').value;
    const parcela = document.getElementById('parcela').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const taxa_juros = taxa/100;

        const VF = (valor_aplicado*((1+taxa_juros)**parcela + 1)/taxa_juros) ;
        

        resultado.textContent = `${nome}, se você aplicar R$ ${valor_aplicado}, à taxa de juros de ${taxa}% ao mês, durante ${parcela} meses, acumulará uma poupança
         de R$ ${VF}`;

    }else {
        resultado.textContent = 'Para calcular o sua poupança, preencha os campos.';
    }

}
calcular.addEventListener('click', imc);