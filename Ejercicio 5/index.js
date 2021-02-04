const http = require("http");

const fn = () => {
  return {
    id: Math.floor(Math.random() * 10),
    product: `Producto ${Math.floor(Math.random() * 10)}`,
    price: `${(Math.random() * 9999.99).toFixed(2)}$`,
    img: `Foto ${Math.floor(Math.random() * 10)}`,
  };
};

const server = http.createServer((req, res) => {
  res.end(JSON.stringify(fn()));
});

const PORT = 3030;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
