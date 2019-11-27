public KeyValuePair<bool, int> MaxString(string text, int startIndex)
        {
            bool flag = false;
            int maxLength = 0;

            List<string> currentStates = new List<string>();
            currentStates.AddRange(this.InitialStates);

            if (currentStates.Intersect(this.FinalStates).ToList().Count != 0)
            {
                flag = true;
            }

            for (int i = startIndex; i < text.Length; i++)
            {
                if (this.Alphabet.Contains(text[i].ToString()))
                {
                    int count = currentStates.Count;
                    for (int j = 0; j < count; j++)
                    {
                        currentStates.AddRange(this.StateTransitionFunction[text[i].ToString()][currentStates[j]]);
                    }

                    currentStates.RemoveRange(0, count);
                    currentStates = currentStates.Distinct().ToList();
                    if (currentStates.Intersect(this.FinalStates).ToList().Count != 0)
                    {
                        flag = true;
                        maxLength = i + 1 - startIndex;
                    }
                }
                else
                {
                    return new KeyValuePair<bool, int>(flag, maxLength);
                }
            }

            return new KeyValuePair<bool, int>(flag, maxLength);
        }
