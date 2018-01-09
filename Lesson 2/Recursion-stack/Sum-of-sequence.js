const sequenceSum = (begin, end, step) => {
  const n = Math.floor((end - begin + step) / step);
	return (n / 2) * (2 * begin + (n - 1) * step);
};
