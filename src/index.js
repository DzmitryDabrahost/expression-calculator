function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {

    function checkToBracket(expr) {
        let openBracket = 0;
        let closeBracket = 0;
        for(let i = 0; i < expr.length; i++) {
            if(expr[i] === '(') openBracket += 1;
            else if(expr[i] === ')') closeBracket += 1;
        }
        if(openBracket === closeBracket) return true;
        else return false;
    }

    if (!checkToBracket(expr)) throw new Error ("ExpressionError: Brackets must be paired"); 
    if (expr.indexOf('/0') != -1 || expr.indexOf('/ 0') != -1) throw new Error ('TypeError: Division by zero.');
    expr = expr.replace(/ /g, '') && new Function(`return ${expr}`);
    return expr();
}

module.exports = {
    expressionCalculator
}