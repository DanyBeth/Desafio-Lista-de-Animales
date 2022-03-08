class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    datosPropietario() {
        return `El nombre del dueño es: ${this._nombre}. El domicilio es: ${this._direccion}, y el número telefónico de contacto: ${this._telefono} .`;
    }
}

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono);
        this._tipo = tipo;
    }
    get tipo() {
        return `El tipo de animal es un: ${this._tipo},`;
    }
}

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
        super(nombre, direccion, telefono, tipo);
        this._nombreMascota = nombreMascota;
        this._enfermedad = enfermedad;
    }
    get nombreMascota() {
        return ` mientras que el nombre de la mascota es: ${this._nombreMascota}`;
    }
    set nombreMascota(nombreMascota) {
        this._nombreMascota = nombreMascota;
    }
    get enfermedad() {
        return ` y la enfermedad es: ${this._enfermedad}.`;
    }
    set enfermedad(enfermedad) {
        this._enfermedad = enfermedad;
    }
}

let registrar = document.getElementsByTagName("form");
registrar[0].addEventListener("submit", observando);


function registrando() { //sirve para instanciar tomando los datos ingresados en los input.
    let nombre = document.getElementById("propietario").value;
    let direccion = document.getElementById("direccion").value;
    let telefono = document.getElementById("telefono").value;
    let tipo = document.getElementById("tipo").value;
    let nombreMascota = document.getElementById("nombreMascota").value;
    let enfermedad = document.getElementById("enfermedad").value;
    switch (tipo) { //variable a evaluar
        case "perro":
            let perro = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
            return perro;
        case "gato":
            let gato = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
            return gato;
        case "conejo":
            let conejo = new Mascota(nombre, direccion, telefono, tipo, nombreMascota, enfermedad);
            return conejo;
        default:
            //se ejecuta por defecto algo
            break;
    }
}

function observando(event) {
    event.preventDefault();
    const data = registrando();
    const resultado = document.getElementById('resultado');
    const li1 = document.createElement('li');
    li1.innerHTML = data.datosPropietario();
    resultado.appendChild(li1);
    const li2 = document.createElement('li');
    li2.innerHTML = data.tipo + data.nombreMascota + data.enfermedad;
    resultado.appendChild(li2);
}
