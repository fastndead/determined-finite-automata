const DFA = require("./DFA");

class Lexeme {
  constructor(machine, priority, name) {
    this.machine = new DFA(machine);
    this.priority = priority;
    this.name = name;
  }
}

module.exports = Lexeme;