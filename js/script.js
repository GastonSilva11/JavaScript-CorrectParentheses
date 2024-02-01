function correctParentheses(parentheses) {

    for (let i = 0; i < parentheses.length; i++) {
if (parentheses[i] === "(" && parentheses[i + 1] === ")") {
            parentheses = parentheses.slice(0 , i) + parentheses.slice(i + 2);
            i = -1;
            console.log(parentheses);
}
        
    }
    
return parentheses=== "";

}

console.log(correctParentheses("(((()))()()"));
console.log(correctParentheses("(())((()())())"))



//Ejercicio 14

function encrypt13(str) {

for (let i = 0; i < str.length; i++) {
    if (condition) {
        
    }
    
}
    
}