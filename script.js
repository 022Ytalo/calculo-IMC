function classificarIMC(imc) {

    if (imc < 18.5) {
        return "Abaixo do peso";
    }

    if (imc < 24.9) {
        return "Peso normal";
    }

    if (imc < 29.9) {
        return "Sobrepeso";
    }

    if (imc < 34.9) {
        return "Obesidade Grau I";
    }

    if (imc < 39.9) {
        return "Obesidade Grau II";
    }

    return "Obesidade Grau III";
}

function calcularIMC() {

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    if (!nome || !telefone || !peso || !altura) {
        alert("Preencha todos os campos.");
        return;
    }

    const imc = peso / (altura * altura);
    const classificacao = classificarIMC(imc);

    document.getElementById("resultado").style.display = "block";

    document.getElementById("imcTexto").innerText =
        `Seu IMC é ${imc.toFixed(2)}`;

    document.getElementById("classificacao").innerText =
        `Classificação: ${classificacao}`;

    const mensagem = `
Olá ${nome}!

Resultado do seu IMC:

Peso: ${peso} kg
Altura: ${altura} m
IMC: ${imc.toFixed(2)}
Classificação: ${classificacao}
`;

    const whatsappURL =
        `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

    window.open(whatsappURL, "_blank");
}