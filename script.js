const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A inteligencia artificial conhecida como IA veio para revolucionar o mundo, oque você acha disso?  ",
        alternativas: [
            {
                texto: "Isso é assustador!",
                afirmacao: "Interessante. "
            },
            {
                texto: "Isso é maravilhoso!",
                afirmacao: "Com a sua colaboração, a Ia avançara com melhorias."
            }
        ]
    },
    {
        enunciado: "Com a descoberta desta tecnologia, chamada Inteligência Artificial, descobertas de doenças raras são identificadas com maior agilidade. Você acha isso eficaz?",
        alternativas: [
            {
                texto: "É muito eficaz!.",
                afirmacao: "Muito obrigado por responder esssa pesquisa."
            },
            {
                texto: "Ainda tenho minhas dúvidas.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Após aderir o sistema IA, a policia tem maior facilidade para identificar suapeitos e vitimas em varios casos.",
        alternativas: [
            {
                texto: " Adorei.",
                afirmacao: ""
            },
            {
                texto: " Que avanço maravilhoso.",
                afirmacao: "Continue motivando no processo de criação da IA."
            }
        ]
    },
    {
        enunciado: " Com a IA muitos empregos surgem e se renovam. Claro presando pela ética dessa Inteligencia.",
        alternativas: [
            {
                texto: " Estou me sentindo mais seguro.",
                afirmacao: ""
            },
            {
                texto: " Gostei da IA.",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "Você com ajuda da IA. O mundo podera ser mais conectado? ",
        alternativas: [
            {
                texto: "Acho que sim.",
                afirmacao: ""
            },
            {
                texto: "Com certeza!.",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = " Chegou ao fim.";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
