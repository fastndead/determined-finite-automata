function tokenize(lexemes, text) {
  const result = [];

  let index = 0;
  while (index < text.length) {
    let currentLexeme = "";
    let currentPriority = 0;
    let maxLength = 0;
    lexemes.map((current) => {
      const temp = current.machine.findString(text, index);
      if (temp.flag) {
        if ((maxLength < temp.maxLen) || (maxLength === temp.maxLen && currentPriority < current.priority)) {
          currentLexeme = current.name;
          currentPriority = current.priority;
          maxLength = temp.maxLen;
        }
      }
      return current;
    });


    if (maxLength > 0) {
      result.push({lexeme: currentLexeme, text: text.slice(index, maxLength)});
      index += maxLength;
    } else {
      result.push({error: "ERROR at " + index + " index"});
      index++;
    }
  }
  return result
}

module.exports = tokenize;