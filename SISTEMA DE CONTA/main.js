function calcContaHamburgueria() {
    const qtdHamburguer = parseInt(document.getElementById('qtdHamburguer').value);
    const qtdRefrigerante = parseInt(document.getElementById('qtdRefrigerante').value);
    const qtdBatata = parseInt(document.getElementById('qtdBatata').value);
    const qtdPessoas = parseInt(document.getElementById('qtdPessoas').value);
    const precoHamburguer = 19.00;
    const precoRefrigerante = 6.50;
    const precoBatata = 8.00;
    const total = (qtdHamburguer * precoHamburguer +
                   qtdRefrigerante * precoRefrigerante +
                   qtdBatata * precoBatata);
    const totalPorPessoa = total / qtdPessoas;
    document.getElementById('resultado').innerHTML = `
        Total da Conta: R$ ${total.toFixed(2)}<br>
        Total por Pessoa (dividido por ${qtdPessoas}): R$ ${totalPorPessoa.toFixed(2)}
    `;
}
