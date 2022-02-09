let candidateStatus = "reprovada";

switch (candidateStatus) {
    case "aprovada":
        console.log("Parabéns, você foi aprovado(o)!");
        break;

    case "lista":
        console.log("Você está na nossa lista de espera");
        break;

    case "reprovada":
        console.log("Você foi reprovado");
        break;

    default:
        console.log("Não se aplica")
}