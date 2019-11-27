class DFA {
    constructor(dfa) {
        this.alphabet = new Set(dfa.Alphabet);
        this.states = dfa.States;
        this.initialStates = new Set(dfa.InitialStates);
        this.finalStates = new Set(dfa.FinalStates);
        this.actions = dfa.Actions;
    }

    findString(str, start) {
        let flag = false;
        let maxLen = 0;

        let curStates = [...this.initialStates];

        const intersection = new Set([...this.initialStates].filter(
            x => this.finalStates.has(x)
        ));

        if (intersection.size > 0) {
            flag = true;
        }

        for (let i = start; i < str.length; i++) {
            const curChar = str[i];

            if (this.alphabet.has(curChar)) {
                let count = curStates.length;
                for (let j = 0; j < count; j++) {
                    curStates.push(...this.actions[curChar][curStates[j]])
                }


                curStates = curStates.slice(count);

                const curStatesSet = new Set(curStates);
                if (new Set([...curStatesSet].filter(
                    x => this.finalStates.has(x)
                )).size > 0) {
                    flag = true;
                    maxLen = i + 1 - start;
                }
            } else {
                return [flag, maxLen]
            }
        }
        return {flag, maxLen, substr: str.substr(start, maxLen)};
    }
}

module.exports = DFA;


