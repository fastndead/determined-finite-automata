const idMachine = require("./src/id");
const kwMachine = require("./src/kw");
const Lexeme = require("./src/Lexeme");
const tokenize = require("./src/Analyzer");

const idLexeme = new Lexeme(idMachine, 1, "id");
const kwLexeme = new Lexeme(kwMachine, 2, "kw");

console.log(tokenize([idLexeme, kwLexeme], "hello"));
