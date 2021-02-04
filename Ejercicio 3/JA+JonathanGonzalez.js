const texto = (text, time = 1000, calback) => {
  const palabras = text.split(" ");
  let iterador = 0;

  let idInterval = setInterval(
    (letras) => {
      if (iterador < letras.length) {
        console.log(letras[iterador]);
        iterador++;
      } else {
        clearInterval(idInterval);
        calback(palabras.length);
      }
    },
    time,
    palabras
  );
};

texto("Se ejecuta una vez", 500, (count) => {
  let totalCount = count;
  texto("Se ejecuta dos veces", 500, (count) => {
    totalCount += count;
    texto("Se ejecuta tres veces", 500, (count) => {
      totalCount += count;
      console.log(`proceso completado ${totalCount}`);
    });
  });
});
