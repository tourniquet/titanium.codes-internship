const autocomplete = (str, arr) => arr.filter(el => (el.toLowerCase().slice(0, str.length) === str))
