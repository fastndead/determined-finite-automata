const DFA = require("./src/DFA");
const machineJson = require("./src/machine");

const dfa = new DFA(machineJson);
const input = "-+78+ee9e5-7.12e-29+4e8+3.9e-4";

const results = [];
for (let i = 0; i < input.length; i++) {
    const result = dfa.findString(input, i);
    results.push(result.substr);
}

const maxString = results.reduce((acc, current)=>{
    if(current.length > acc.length) {
        return current;
    } else {
        return acc;
    }
}, "");

console.log(maxString);
