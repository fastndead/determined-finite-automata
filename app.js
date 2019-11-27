function initializeDFA() {
    const classDfa = require("./src/DFA"), DFA = classDfa.dfa;
    return new DFA("./input.json")
}

const dfa = initializeDFA();
console.log(dfa.maxString("hhvhvhvh",0));
