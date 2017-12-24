const randomColor = () => {
  const rgb = () => (Math.random() * 255).toFixed()

  return `rgb(${rgb()},${rgb()},${rgb()})`
}
