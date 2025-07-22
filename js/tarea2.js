class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo.toUpperCase();
    this.peso = peso;
    this.altura = altura;
    this.anioNacimiento = anioNacimiento;
  }

  mostrarGeneracion() {
    let generacion = "";
    let rasgo = "";

    const año = this.anioNacimiento;

    if (año >= 1994 && año <= 2010) {
      generacion = "Generación Z";
      rasgo = "Irreverencia";
    } else if (año >= 1981 && año <= 1993) {
      generacion = "Generación Y (Millennials)";
      rasgo = "Frustración";
    } else if (año >= 1969 && año <= 1980) {
      generacion = "Generación X";
      rasgo = "Obsesión por el éxito";
    } else if (año >= 1949 && año <= 1968) {
      generacion = "Baby Boom";
      rasgo = "Ambición";
    } else if (año >= 1930 && año <= 1948) {
      generacion = "Silent Generation";
      rasgo = "Austeridad";
    } else {
      generacion = "Generación desconocida";
      rasgo = "Sin datos";
    }

    alert(`${this.nombre} pertenece a la ${generacion} y su rasgo característico es: ${rasgo}`);
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      alert(`${this.nombre} es mayor de edad.`);
    } else {
      alert(`${this.nombre} es menor de edad.`);
    }
  }

  mostrarDatos() {
    alert(`
Nombre: ${this.nombre}
Edad: ${this.edad}
DNI: ${this.dni}
Sexo: ${this.sexo}
Peso: ${this.peso} kg
Altura: ${this.altura} m
Año de nacimiento: ${this.anioNacimiento}`);
  }
}

let persona;

document.getElementById("formPersona").addEventListener("submit", function(e) {
  e.preventDefault();

  // Tomar los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const dni = document.getElementById("dni").value;
  const sexo = document.getElementById("sexo").value;
  const peso = parseFloat(document.getElementById("peso").value);
  const altura = parseFloat(document.getElementById("altura").value);
  const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);

  // Crear el objeto
  persona = new Persona(nombre, edad, dni, sexo, peso, altura, anioNacimiento);
  alert("¡Persona creada correctamente!");
});