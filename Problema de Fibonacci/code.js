function fibonacci(maxim) {
  const fib = [0, 1];
  for (let i = 2; i < maxim; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

const fibSerie = fibonacci(20);
const ul = document.getElementById("ul");
fibSerie.forEach((number) => {
  const li = document.createElement("li");
  li.innerHTML = number;
  ul.append(li);
});
