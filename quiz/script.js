const questions = [
    {
        question: "Meus cantores preferidos:",
        image: "imagens/theweeknd.jpg",
        options: ["The Weeknd e Bruno Mars", "Bruno Mars e Travis Scoot", "The Weeknd e Elvis", "The Weeknd e Travis"],
        answer: 2
    },
    {
        question: "Minha melhor amiga:",
        image: "imagens/bff.jpg",
        options: ["Luiza", "LU", "Você que está lendo", "Rainha Elizabeth"],
        answer: [0, 1, 2]
    },
    {
        question: "Minha fruta preferida:",
        image: "imagens/frutas.jpg",
        options: ["Pera", "Goiaba", "Maçã", "Morango"],
        answer: 1
    },
    {
        question: "Verdadeiro ou Falso: Eu escrevo poemas?",
        image: "imagens/poema.jpg",
        options: ["Sim", "Não"],
        answer: 0
    },
    {
        question: "Meu livro preferido:",
        image: "imagens/livros.jpg",
        options: ["Pequeno Príncipe", "Memórias Póstumas de Brás Cubas", "Harry Potter: Saga", "Homem Aranha"],
        answer: 2
    },
    {
        question: "Minha música preferida:",
        image: "imagens/elvis.jpg",
        options: ["Always on My Mind - Elvis", "Fein - Travis Scott", "Talking to the Moon - Bruno Mars", "Call Out My Name - The Weeknd"],
        answer: 3
    },
    {
        question: "Meu time:",
        image: "imagens/lindo.jpg",
        options: ["Corinthians", "Palmeiras", "Flamengo", "Santos"],
        answer: 2
    },
    {
        question: "Meu Sonho:",
        image: "imagens/pai.jpg",
        options: ["Ser Jogador", "Ter filhos", "Morar na Asia", "Virar amigo do Will Smith"],
        answer: 1
    },
    {
        question: "Dia do meu aniversário:",
        image: "imagens/niver.jpg",
        options: ["20 de Maio", "22 de Maio", "25 de Maio", "23 de Maio"],
        answer: 3
    },
    {
        question: "Meu passatempo preferido com a Luiza:",
        image: "imagens/passatempo.jpg",
        options: ["Ficar perto da Luiza", "Ouvir a Luiza", "Conversar com a Luiza", "Todas as alternativas"],
        answer: 3
    }
];

let currentQuestion = 0;
const questionText = document.getElementById("question-text");
const questionImage = document.getElementById("question-image");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const message = document.getElementById("message");
const finalMessage = document.getElementById("final-message");
const finalGif = document.getElementById("final-gif");
const finalAudio = document.getElementById("final-audio");
const finalText = document.getElementById("final-text");

function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.question;
    questionImage.src = q.image;
    optionsContainer.innerHTML = ""; // Limpar as opções anteriores
    message.textContent = "";

    q.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.classList.add("option");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index, q.answer);
        optionsContainer.appendChild(btn);
    });

    nextButton.classList.add("hidden");
}

function checkAnswer(index, correctAnswer) {
    // Verificar se a resposta está certa ou errada
    if (Array.isArray(correctAnswer)) {
        if (correctAnswer.includes(index)) {
            message.textContent = "Resposta certa! 😊";
        } else {
            message.textContent = "Resposta errada! 😞 Tente novamente.";
            nextButton.classList.add("hidden");
            return; // Não avançar para a próxima pergunta
        }
    } else if (index === correctAnswer) {
        message.textContent = "Resposta certa! 😊";
    } else {
        message.textContent = "Resposta errada! 😞 Tente novamente.";
        nextButton.classList.add("hidden");
        return; // Não avançar para a próxima pergunta
    }

    nextButton.classList.remove("hidden");
}

nextButton.onclick = () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        finalMessage.classList.remove("hidden");
        finalGif.classList.remove("hidden");
        finalAudio.classList.remove("hidden");
        nextButton.classList.add("hidden");
    }
};







loadQuestion();
