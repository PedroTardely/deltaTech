// Elementos
const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

//Novas funcionalidades
const openCloseGeneratorButton = document.querySelector(
  "#open-generate-password"
);
const generatePasswordContainer = document.querySelector("#generate-options");
const lengthInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");


// Funções

// Redirecionar
const redirectBtn = () => {
  const page = "https://pedrotardely.github.io/DeltaTech/";
  window.location.href = page;
}

// Letras, números e símbolos
const getLetterLowerCase = () => {
  // letra minuscula aleatoria
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  // letra maiuscula aleatoria
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  // Número Aleatório
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  // Simbolo Aleatorio
  const symbols = "(){}[]=<>!@#$%&*+-/.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymbol
) => {
  let password = "";

  const passwordLength = +lengthInput.value;

  const generators = [];

  if (lettersInput.checked) {
    generators.push(getLetterLowerCase, getLetterUpperCase);
  }

  if (numbersInput.checked) {
    generators.push(getNumber);
  }

  if (symbolsInput.checked) {
    generators.push(getSymbol);
  }

  console.log(generators.length)

  if (generators.length === 0) {
    return;
  }

  for (i = 0; i < passwordLength; i = i + generators.length) {
    generators.forEach(() => {
      const randomValue =
        //   tem que ter os parenteses no final ja que "generators" é uma lista de funções e ele vai executar as funções:
        generators[Math.floor(Math.random() * generators.length)]();

      password += randomValue;
    });
  }
  //   até esse momento a senha está com dois numeros a mais devido ao incremento do loop
  // vamos tirar esses dois número
  password = password.slice(0, passwordLength);

  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
};

// Eventos
generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol
  );
});

openCloseGeneratorButton.addEventListener("click", () => {
  generatePasswordContainer.classList.toggle("hide");
});

// copiando a senha
copyPasswordButton.addEventListener("click", (e) => {
    e.preventDefault()

    const password = generatedPasswordElement.querySelector("h4").innerText

    navigator.clipboard.writeText(password).then(() => {
        copyPasswordButton.innerText = "Senha Copiada!"

        setTimeout(() => {

            copyPasswordButton.innerText = "Copiar"

        }, 1000)
    })
})