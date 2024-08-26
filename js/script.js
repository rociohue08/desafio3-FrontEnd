const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// Para registrar el evento de submit y mostrar los datos en JSON
//formulario de REGISTRO
const formRegistro = document.querySelector('#formulario-registro');
const procesaRegistro = (event) => {
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(JSON.stringify(datosCompletos));

    const usuario = datosCompletos.usuario; // Obtiene el valor del campo 'usuario'
    alert(`${usuario}, ¡Cuenta creada con éxito!`);
    console.log('un nuevo usuario registrado')

}
formRegistro.addEventListener('submit', procesaRegistro);

//formulario de Inicio Sesion
const forminicioSesion = document.querySelector('#formulario-inicioSesion');
const procesaLogin = (event) => {
    event.preventDefault();
    const datos = new FormData(event.target);
    const datosCompletos = Object.fromEntries(datos.entries());
    console.log(JSON.stringify(datosCompletos));
    const usuario = datosCompletos.usuario; // Obtiene el valor del campo 'usuario'
    alert(`${usuario}, ¡Iniciaste sesion!`);
    console.log('alguien inicio sesion')

};
forminicioSesion.addEventListener('submit', procesaLogin);
