// mapeia todos os campos necessários para o jogo
const vez = document.getElementById("vez");
const jogador = document.getElementById("jogador");

const campo1 = document.getElementById("campo1");
const campo2 = document.getElementById("campo2");
const campo3 = document.getElementById("campo3");
const campo4 = document.getElementById("campo4");
const campo5 = document.getElementById("campo5");
const campo6 = document.getElementById("campo6");
const campo7 = document.getElementById("campo7");
const campo8 = document.getElementById("campo8");
const campo9 = document.getElementById("campo9");
const campos = [
  campo1,
  campo2,
  campo3,
  campo4,
  campo5,
  campo6,
  campo7,
  campo8,
  campo9,
];

const botao = document.getElementById("start");

// controla a interface
botao.addEventListener("click", () => {
  vez.classList.remove("hide");
  botao.classList.add("hide");

  campos.forEach((campo) => {
    campo.classList.remove("disabled");
  });
});

// funções da lógica
const handleWinner = () => {
  let jogada1 = campo1.childNodes[0].src;
  let jogada2 = campo2.childNodes[0].src;
  let jogada3 = campo3.childNodes[0].src;
  let jogada4 = campo4.childNodes[0].src;
  let jogada5 = campo5.childNodes[0].src;
  let jogada6 = campo6.childNodes[0].src;
  let jogada7 = campo7.childNodes[0].src;
  let jogada8 = campo8.childNodes[0].src;
  let jogada9 = campo9.childNodes[0].src;

  if (jogada1 === jogada2 && jogada1 === jogada3 && jogada2 === jogada3) {
    if (
      jogada1 === "./assets/icons/o.svg" &&
      jogada2 === "./assets/icons/o.svg" &&
      jogada3 === "./assets/icons/o.svg"
    ) {
      window.alert("O jogador O venceu!");
    } else {
      window.alert("O jogador X venceu!");
    }
    vez.classList.add("hide");
  } else if (
    jogada1 === jogada4 &&
    jogada1 === jogada7 &&
    jogada4 === jogada7
  ) {
    if (
      jogada1 === "./assets/icons/o.svg" &&
      jogada4 === "./assets/icons/o.svg" &&
      jogada7 === "./assets/icons/o.svg"
    ) {
      window.alert("O jogador O venceu!");
    } else {
      window.alert("O jogador X venceu!");
    }
    vez.classList.add("hide");
  } else if (
    jogada1 === jogada5 &&
    jogada1 === jogada9 &&
    jogada5 === jogada9
  ) {
    if (
      jogada1 === "./assets/icons/o.svg" &&
      jogada5 === "./assets/icons/o.svg" &&
      jogada9 === "./assets/icons/o.svg"
    ) {
      window.alert("O jogador O venceu!");
    } else {
      window.alert("O jogador X venceu!");
    }
    vez.classList.add("hide");
  } else if (
    jogada2 === jogada5 &&
    jogada2 === jogada8 &&
    jogada5 === jogada8
  ) {
    if (
      jogada2 === "./assets/icons/o.svg" &&
      jogada5 === "./assets/icons/o.svg" &&
      jogada8 === "./assets/icons/o.svg"
    ) {
      window.alert("O jogador O venceu!");
    } else {
      window.alert("O jogador X venceu!");
    }
    vez.classList.add("hide");
  } else if (
    jogada3 === jogada6 &&
    jogada3 === jogada9 &&
    jogada6 === jogada9
  ) {
    if (
      jogada3 === "./assets/icons/o.svg" &&
      jogada6 === "./assets/icons/o.svg" &&
      jogada9 === "./assets/icons/o.svg"
    ) {
      window.alert("O jogador O venceu!");
    } else {
      window.alert("O jogador X venceu!");
    }
    vez.classList.add("hide");
  } else if (
    jogada3 === jogada5 &&
    jogada3 === jogada7 &&
    jogada5 === jogada7
  ) {
    if (
      jogada3 === "./assets/icons/o.svg" &&
      jogada5 === "./assets/icons/o.svg" &&
      jogada7 === "./assets/icons/o.svg"
    ) {
      window.alert("O jogador O venceu!");
    } else {
      window.alert("O jogador X venceu!");
    }
    vez.classList.add("hide");
  } else if (
    jogada4 === jogada5 &&
    jogada4 === jogada6 &&
    jogada5 === jogada6
  ) {
    if (
      jogada4 === "./assets/icons/o.svg" &&
      jogada5 === "./assets/icons/o.svg" &&
      jogada6 === "./assets/icons/o.svg"
    ) {
      window.alert("O jogador O venceu!");
    } else {
      window.alert("O jogador X venceu!");
    }
    vez.classList.add("hide");
  } else if (
    jogada7 === jogada8 &&
    jogada7 === jogada9 &&
    jogada8 === jogada9
  ) {
    if (
      jogada7 === "./assets/icons/o.svg" &&
      jogada8 === "./assets/icons/o.svg" &&
      jogada9 === "./assets/icons/o.svg"
    ) {
      window.alert("O jogador O venceu!");
    } else {
      window.alert("O jogador X venceu!");
    }
    vez.classList.add("hide");
  } else {
    window.alert("Deu velha!");
    vez.classList.add("hide");
  }
};

const handleJogada = (campo) => {

  return new Promise((resolve, reject) => {
    jogador.innerText === undefined || jogador.innerText === "O"
      ? (jogador.innerText = "X")
      : (jogador.innerText = "O");
  
    const jogada = document.createElement("img");
    if (jogador.innerText === "X") {
      jogada.src = "./assets/icons/o.svg";
    } else {
      jogada.src = "./assets/icons/x.svg";
    }
  
    resolve(campo.appendChild(jogada))
    reject("Erro inesperado")
  })
};

// lógica do jogo
campos.forEach((campo) => {
  campo.addEventListener("click", async () => {
    try {
      await handleJogada(campo)
    } catch (err) {
      console.log(err)
    }
    handleWinner();
    campo.classList.add("disabled");
  });
});
