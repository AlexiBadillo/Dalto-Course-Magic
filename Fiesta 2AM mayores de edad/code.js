let free = false;
const validarCliente = (time) => {
  let edad = prompt("Cuál es tu edad?");
  if (edad >= 18) {
    if (time >= 2 && time < 7 && free == false) {
      alert(
        "Puedes pasar gratis porque eres la primera persona en entrar después de las 2 am, MAQUINOLO"
      );
      free = true;
    } else {
      alert(
        `Puedes pasar pero tienes que pagar torombolo ya que son las ${time}`
      );
    }
  } else {
    alert("No vas a pasar por ser menor de edad, MAQUINOLA!");
  }
};
validarCliente(23);
validarCliente(24);
validarCliente(1);
validarCliente(1.5);
validarCliente(2);
validarCliente(2.5);
