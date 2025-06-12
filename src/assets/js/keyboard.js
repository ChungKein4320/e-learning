const MQ = MathQuill.getInterface(2);
const mathFieldSpan = document.getElementById("math-field");
const inputBox = document.getElementById("input");

const mathField = MQ.MathField(mathFieldSpan, {
    spaceBehavesLikeTab: true,
    handlers: {
        edit: function () {
            const latex = mathField.latex(); // Lấy công thức ở dạng LaTeX
            inputBox.value = latex; // Hiển thị vào ô input
        },
    },
});

function openLevelOne() {
    mathField.write("(");
    mathField.focus();
}

function closeLevelOne() {
    mathField.write(")");
    mathField.focus();
}

function openLevelTwo() {
    mathField.write("[");
    mathField.focus();
}

function closeLevelTwo() {
    mathField.write("]");
    mathField.focus();
}

function pipe() {
    mathField.write("|");
    mathField.focus();
}

function fraction() {
    mathField.write("\\frac{}{}");
    mathField.focus();
}

function sqrtTypeOne() {
    mathField.write("\\sqrt{}");
    mathField.focus();
}

function sqrtTypeTwo() {
    mathField.write("\\sqrt[ ]{ }");
    mathField.focus();
}

function geq() {
    mathField.write("\\geq");
    mathField.focus();
}

function sigma() {
    mathField.write("\\sum_{}^{}");
    mathField.focus();
}

function power() {
    mathField.write("^{}");
    mathField.focus();
}

function less() {
    mathField.write("<");
    mathField.focus();
}

function sin() {
    mathField.write("\\sin{}");
    mathField.focus();
}

function cos() {
    mathField.write("\\cos{}");
    mathField.focus();
}

function tan() {
    mathField.write("\\tan{}");
    mathField.focus();
}

function derivative() {
    mathField.write("\\frac{d}{dx}{}");
    mathField.focus();
}

function infinity() {
    mathField.write("\\infty");
    mathField.focus();
}

function bacspace() {
    mathField.keystroke("Backspace");
    mathField.focus();
}

function clearMathField() {
    mathField.latex(""); // Xóa toàn bộ nội dung
    mathField.focus();
}

function abs() {
    mathField.write("\\left| \\right|");
    mathField.focus();
}

function leq() {
    mathField.write("\\leq");
    mathField.focus();
}

function csc() {
    mathField.write("\\csc{}");
    mathField.focus();
}

function sec() {
    mathField.write("\\sec{}");
    mathField.focus();
}

function cot() {
    mathField.write("\\cot{}");
    mathField.focus();
}

function limit() {
    mathField.write("\\lim_{ \\to } ");
    mathField.focus();
}

function pi() {
    mathField.write("\\pi");
    mathField.focus();
}

function fx() {
    mathField.write("f(x)");
    mathField.focus();
}

function seven() {
    mathField.write("7");
    mathField.focus();
}

function eight() {
    mathField.write("8");
    mathField.focus();
}

function nine() {
    mathField.write("9");
    mathField.focus();
}

function div() {
    mathField.write("\\div");
    mathField.focus();
}

function log() {
    mathField.write("\\log_{}{}");
    mathField.focus();
}

function facorial() {
    mathField.write("!");
    mathField.focus();
}

function than() {
    mathField.write(">");
    mathField.focus();
}

function arcsin() {
    mathField.write("\\arcsin{}");
    mathField.focus();
}

function arccos() {
    mathField.write("\\arccos{}");
    mathField.focus();
}

function arctan() {
    mathField.write("\\arctan{}");
    mathField.focus();
}

function sum() {
    mathField.write("\\sum_{}^{}");
    mathField.focus();
}

function integral() {
    mathField.write("\\int_{}^{}");
    mathField.focus();
}

function e() {
    mathField.write("e");
    mathField.focus();
}

function four() {
    mathField.write("4");
    mathField.focus();
}

function five() {
    mathField.write("5");
    mathField.focus();
}

function six() {
    mathField.write("6");
    mathField.focus();
}

function mul() {
    mathField.write("\\times");
    mathField.focus();
}

function i() {
    mathField.write("i");
    mathField.focus();
}

function remainder() {
    mathField.write("\\bmod");
    mathField.focus();
}

function geq() {
    mathField.write("\\geq");
    mathField.focus();
}

function degree() {
    mathField.write("^{\\circ}");
    mathField.focus();
}

function ln() {
    mathField.write("\\ln{}");
    mathField.focus();
}

function theta() {
    mathField.write("\\theta");
    mathField.focus();
}

function x() {
    mathField.write("x");
    mathField.focus();
}

function y() {
    mathField.write("y");
    mathField.focus();
}

function z() {
    mathField.write("z");
    mathField.focus();
}

function one() {
    mathField.write("1");
    mathField.focus();
}

function two() {
    mathField.write("2");
    mathField.focus();
}

function three() {
    mathField.write("3");
    mathField.focus();
}

function sub() {
    mathField.write("-");
    mathField.focus();
}

function dot() {
    mathField.write(".");
    mathField.focus();
}

function comma() {
    mathField.write(",");
    mathField.focus();
}

function equal() {
    mathField.write("=");
    mathField.focus();
}

function alpha() {
    mathField.write("\\alpha");
    mathField.focus();
}

function beta() {
    mathField.write("\\beta");
    mathField.focus();
}

function gamma() {
    mathField.write("\\gamma");
    mathField.focus();
}

function space() {
    mathField.write(" ");
    mathField.focus();
}

function zero() {
    mathField.write("0");
    mathField.focus();
}

function left() {
    mathField.keystroke("Left");
    mathField.focus();
}

function right() {
    mathField.keystroke("Right");
    mathField.focus();
}


function add() {
    mathField.write("+");
    mathField.focus();
}