function Usuario(nombre, apellido, pet, books) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.pet = pet;
  this.books = books;
}

Usuario.prototype.getfullName = function () {
  return `Mi nombre completo es : ${this.nombre} ${this.apellido}`;
};
Usuario.prototype.addPet = function (pet) {
  this.pet.push(pet);
};
Usuario.prototype.getPets = function () {
  return `Tengo en total ${this.pet.length} mascotas `;
};
Usuario.prototype.addBook = function (author, title) {
  this.books = [...this.books, { author: author, title: title }];
};
Usuario.prototype.getBooks = function () {
  const allBooks = this.books.map((bk) => bk.title);
  return allBooks;
};

const pets = ["Rocco"];
let libros = [
  {
    author: "J. K. Rowling",
    title: "Harry Potter y la piedra filosofal",
  },
  {
    author: "Stephen King",
    title: "IT",
  },
];
const joni = new Usuario("Jonathan", "Gonzalez", pets, libros);
console.log(joni.getfullName());
joni.addPet("chispitas");
console.log(joni.getPets());
joni.addBook("Maradona", "El D10S");
console.log(joni.getBooks());
