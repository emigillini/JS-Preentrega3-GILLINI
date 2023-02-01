link = () =>{
    window.location.href="/presentacion.html"};

bienvenido =() =>{
    let formulario =document.getElementById("formulario");
    formulario.style.display="none";
    const saludo=document.createElement("p");
    saludo.innerText=usuario1.infoUsuario();
    saludo.className="bienvenida1";
    document.getElementById("bienvenida").appendChild(saludo);}


    document.getElementById('buttonOk').addEventListener('click', function(){
        let nuevoBoton2= document.getElementById("ir");
        nuevoBoton2.innerHTML= ' <button id="ir" onclick="link()">Comenzar a Jugar</button>';
        bienvenido();
    }, false);

    let form = document.getElementById('formulario');
    form.addEventListener('submit', () => {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let pais = document.getElementById("pais").value;
    let edad = document.getElementById("edad").value;
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('pais', pais);
    localStorage.setItem('edad', edad);
    localStorage.setItem("usuario", usarioObjeto);
    
    });

    class usuario {
        constructor(nombre,apellido,pais,edad){
        this.nombre= nombre;
        this.apellido= apellido;
        this.pais = pais;
        this.edad= edad;
        }
        infoUsuario(){
            if (localStorage.getItem("puntaje")){
            return `Bienvenido ${this.nombre} ${this.apellido}, de ${this.pais}. Vamos a poner a prueba tus ${this.edad} años de conocimiento. En tu ultimo juego obtuviste ${localStorage.getItem("puntaje")} puntos`;
            } else {
            return `Bienvenido ${this.nombre} ${this.apellido}, de ${this.pais}. Vamos a poner a prueba tus ${this.edad} años de conocimiento.`;
            }
        }
    }

const usuario1= new usuario ( localStorage.getItem('nombre'), localStorage.getItem('apellido'), localStorage.getItem('pais'), localStorage.getItem('edad'));

const usarioObjeto = JSON.stringify(usuario1);
localStorage.setItem("usuario", usarioObjeto);

