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
