const loopsQuest = a => Array(++a).fill().map((el, i, arr) => arr[i] = i).reduce((sum, el) => sum + el)
