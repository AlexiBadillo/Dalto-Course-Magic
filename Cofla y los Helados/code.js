let dineroRoberto = parseInt(prompt("Roberto, cuánto dinero tienes?"));
let dineroPedro = parseInt(prompt("Pedro, cuánto dinero tienes?"));
let dineroCofla = parseInt(prompt("Cofla, cuánto dinero tienes?"));

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
  alert("Roberto, comprate el palito de awa");
} else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
  alert("Roberto, comprate el palito de crema");
} else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
  alert("Roberto, comprate el heladix");
} else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
  alert("Roberto, comprate el heladovich");
} else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
  alert("Roberto, comprate el helardo");
} else if (dineroRoberto >= 2.9) {
  alert("Roberto, puedes comprarte el helado con confites o el pote de 1/4");
} else {
  alert("No te alcanza ni pal de awa pobre sarnoso");
}

if (dineroPedro >= 0.6 && dineroPedro < 1) {
  alert("Pedro, comprate el palito de awa");
} else if (dineroPedro >= 1 && dineroPedro < 1.6) {
  alert("Pedro, comprate el palito de crema");
} else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
  alert("Pedro, comprate el heladix");
} else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
  alert("Pedro, comprate el heladovich");
} else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
  alert("Pedro, comprate el helardo");
} else if (dineroPedro >= 2.9) {
  alert("Pedro, puedes comprarte el helado con confites o el pote de 1/4");
} else {
  alert("No te alcanza ni pal de awa pobre sarnoso");
}

if (dineroCofla >= 0.6 && dineroCofla < 1) {
  alert("Cofla, comprate el palito de awa");
  alert("Y te sobran " + (dineroCofla - 0.6));
} else if (dineroCofla >= 1 && dineroCofla < 1.6) {
  alert("Cofla, comprate el palito de crema");
  alert("Y te sobran " + (dineroCofla - 1));
} else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
  alert("Cofla, comprate el heladix");
  alert("Y te sobran " + (dineroCofla - 1.6));
} else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
  alert("Cofla, comprate el heladovich");
  alert("Y te sobran " + (dineroCofla - 1.7));
} else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
  alert("Cofla, comprate el helardo");
  alert("Y te sobran " + (dineroCofla - 1.8));
} else if (dineroCofla >= 2.9) {
  alert("Cofla, puedes comprarte el helado con confites o el pote de 1/4");
  alert("Y te sobran " + (dineroCofla - 2.9));
} else {
  alert("No te alcanza ni pal de awa pobre sarnoso");
}
