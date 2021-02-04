class Usuario {
  constructor(nombre, apellido, libros, mascota) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascota = mascota;
  }

  getfullName() {
    return `Mi nombre completo es ${this.nombre} ${this.apellido}`;
  }
  addMascota(pet) {
    return this.mascota.push(pet);
  }
  getMascotas() {
    return `La cantidad de mascotas que tienes es de ${mascotas.length}`;
  }
  addBook(autor, titulo) {
    this.libros = [...this.libros, { autor: autor, titulo: titulo }];
  }
  getBooks() {
    let libritosRecorridos = this.libros.map((e) => e.titulo);
    return libritosRecorridos;
  }
}

let libros = [
  {
    autor: "J. K. Rowling",
    titulo: "Harry Potter y la piedra filosofal",
  },
  {
    autor: "Stephen King",
    titulo: "IT",
  },
];

let mascotas = ["Rocco"];

const joni = new Usuario("Jonathan", "Gonzalez", libros, mascotas);

console.log(joni.getfullName());
joni.addMascota("chispitas");
console.log(joni.getMascotas());
joni.addBook("Maradona", "d10s");
console.log(joni.getBooks());
