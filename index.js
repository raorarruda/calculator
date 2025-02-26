let display = document.querySelector("#display");
let buttons = document.querySelectorAll("button");
let expression = "";

const operators = {
    "+": "+",
    "÷": "/",
    "X": "*",
    "-": "-",
    "%": "%",
    "√": "Math.sqrt",
    "x²": "**2",
    "¹/x": "1/",
    "±": "negate",
    ",": "."
};

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const key = btn.innerText;

        switch(key){

            case "C":
                expression = "";
                break;
            case "CE":
                expression = expression.slice(0, -1);
                break;
            case "=":
                try {
                    expression = eval(expression);
                } catch {
                    expression = "Erro"; }
                break;
            case "√":
                expression = Math.sqrt(parseFloat(expression));
                break;
            case "x²":
                expression = parseFloat(expression) ** 2;
                break;
            case "¹/x":
                expression = 1 / parseFloat(expression);
                break;
            case "±":
                expression = -parseFloat(expression);
                break;
            case "%":
                expression = parseFloat(expression) / 100;
                break
            default:
                expression += operators[key] || key;
                break
            };

            display.innerText = expression;
        })
});





// let display = document.querySelector("#display");
// let buttons = document.querySelectorAll("button");

// let expression = ""; // Armazena toda a expressão

// const operators = {
//     "+": "+",
//     "÷": "/",
//     "X": "*",
//     "-": "-",
//     "%": "%",
//     "√": "Math.sqrt",
//     "x²": "**2",
//     "¹/x": "1/",
//     "±": "negate",
//     ",": "."
// };

// buttons.forEach((btn) => {
//     btn.addEventListener("click", (e) => {
//         const key = btn.innerText;
//         const calc = {
//             "C": () => { 
//                 expression = "";
//             },
//             "CE": () => { 
//                 expression = expression.slice(0, -1);
//             },
//             "=": () => { 
//                 try {
//                     expression = eval(expression).toString(); // Avalia a expressão e converte para string
//                 } catch {
//                     expression = "Erro"; // Tratamento de erro
//                 }
//             },
//             "√": () => { 
//                 expression = Math.sqrt(parseFloat(expression)).toString();
//             },
//             "x²": () => { 
//                 expression = (parseFloat(expression) ** 2).toString();
//             }, 
//             "¹/x": () => { 
//                 expression = (1 / parseFloat(expression)).toString();
//             }, 
//             "±": () => { 
//                 expression = (-parseFloat(expression)).toString();
//             }, 
//             "%": () => { 
//                 expression = expression.slice(0, -1) + `*${key}/100`;
//             },
//             default: () => {
//                 expression += operators[key] || key;
//             }
//         };

//         const dynamicFunction = calc[key] ?? calc.default;
//         dynamicFunction();
//         display.innerText = expression; // Atualiza o display
//     });
// });