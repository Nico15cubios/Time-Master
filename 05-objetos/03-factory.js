function crearUsuario (name, email){
    return {
        email, 
        name,
       activo: true,
       recuperarClave: function () {
       console.log('Recuperando Clave...');
       },
    };
  }

let user1 = crearUsuario ('Nicolas', 'nicolas.cubillosleyva@concentrix.com')
let user2 = crearUsuario ('Chanchito', 'Chanchito.feliz@concentrix.com')
console.log (user1, user2); 