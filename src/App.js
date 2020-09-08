import React, { Component } from 'react';
import './App.css';
import logo from './logo.jpg';


class App extends Component {

 

  handle(event){
    this.setState({
      data:event.target.value
    })



  }








  //prepara las creacion de usuario y semaforo
  state = {
   /*semaforo: [],*/
    usuario: [],
   /* semaforo1: {
      color: ''

    },*/
    usuario1: {
      cedula: "",
      email: "",
      nombre: "",
      apellido: "",
      fecha_nacimiento: "",
      contrasena: ""
    },
    calculadora:[],
    calculadora1:{
      id_semaforo:"",
      cedula:"",
      direccion:""
      
    }
 
  }


  //Obtieene los usuarios
  componentDidMount() {
   /* this.getSemaforo();*/
    this.getUsuario();

  }

 /* getSemaforo = _ => {
    fetch('http://localhost:4000/semaforo')
      .then(response => response.json())
      .then(response => this.setState({ semaforo: response.data }))
      .catch(err => console.error(err))
  }*/
  //obtiene el usuario
  getUsuario = _ => {
    fetch('http://localhost:4000/usuario')
      .then(response => response.json())
      .then(response => this.setState({ usuario: response.data }))
      .catch(err => console.error(err))
  }


  /*addSemaforo = _ => {
    const { semaforo1 } = this.state;
    fetch(` http://localhost:4000/semaforo/add?color=${semaforo1.color}`)
      .then(this.getSemaforo)
      .catch(err => console.error(err))

  }*/
  //agrega al usuario
  addUsuario = _ => {
    const { usuario1 } = this.state;
    fetch(` http://localhost:4000/usuario/add?cedula=${usuario1.cedula}&email=${usuario1.email}&nombre=${usuario1.nombre}&apellido=${usuario1.apellido}&fecha_nacimiento=${usuario1.fecha_nacimiento}&contrasena=${usuario1.contrasena}`)
      .then(this.getUsuario)
      .catch(err => console.error(err))

  }

   addCalculadora = _ => {
    const { calculadora1 } = this.state;
    fetch(` http://localhost:4000/usuario/update?id_semaforo=${calculadora1.id_semaforo}&cedula=${calculadora1.cedula}&direccion=${calculadora1.direccion}`)
      .then(this.getUsuario)
      .catch(err => console.error(err))

  }


  //renderizadores
 /* renderSemaforo = ({ semaforo_id, color }) => <div key={semaforo_id}>{color}</div>*/
renderUsuario = ({ usuario_id, cedula, email, nombre, apellido, fecha_nacimiento, contrasena,id_semaforo,direccion }) => <div key={usuario_id}>{cedula},{email},{nombre},{apellido},{fecha_nacimiento},{contrasena},{direccion},{id_semaforo}</div>

  render() {
    //descomentar y pegar "codigo importante  debajo del div classname= app"
   /* const { semaforo, semaforo1 } = this.state*/
    const { usuario, usuario1 } = this.state
    const { calculadora, calculadora1 } = this.state
    return (
      <div className="App">
       


        {usuario.map(this.renderUsuario)}
        <h1>BIENVENIDO</h1>
        <img src={logo} alt="logo" width="200" height="250"></img>
        <h2>Llene los campos porfavor</h2>

        <form>
          <div class="form-group">
            <label for="cedula">Cedula: </label><br></br>
            <input
              value={usuario1.cedula}
              onChange={e => this.setState({ usuario1: { ...usuario1, cedula: e.target.value } })} /><br></br>

            <label for="email">Email: </label><br></br>
            <input
              value={usuario1.email}
              onChange={e => this.setState({ usuario1: { ...usuario1, email: e.target.value } })} /><br></br>

            <label for="nombre">Nombre: </label><br></br>
            <input
              value={usuario1.nombre}
              onChange={e => this.setState({ usuario1: { ...usuario1, nombre: e.target.value } })} /><br></br>


            <label for="apellido">Apellido: </label><br></br>
            <input
              value={usuario1.apellido}
              onChange={e => this.setState({ usuario1: { ...usuario1, apellido: e.target.value } })} /><br></br>


            <label for="fecha_nacimiento">Fecha Nacimiento: </label><br></br>
            <input
              value={usuario1.fecha_nacimiento}
              onChange={e => this.setState({ usuario1: { ...usuario1, fecha_nacimiento: e.target.value } })} /><br></br>


            <label for="contrasena">Contrasena: </label><br></br>
            <input
              value={usuario1.contrasena}
              onChange={e => this.setState({ usuario1: { ...usuario1, contrasena: e.target.value } })} /><br></br>
          

          </div>
          <button
            onClick={this.addUsuario}>Registrarse
            
        </button><br></br>
        
        </form>
      <div class= "container">
      <h2>Ahora responda estas tres preguntas (Si la respuesta es afirmativa, suma 1 punto)</h2>
      <h3>Has tenido sintomas de covid?</h3>
      <h3>Tienes algun familiar o amigo cercano con covid?</h3>
      <h3>Sales frecuentemente de casa?</h3>
      </div>
        <form>
      <div class="form-group">

            <label for="cedulaQ">Cedula: </label><br></br>
            <input
              value={calculadora1.cedula}
              onChange={e => this.setState({ calculadora1: { ...calculadora1, cedula: e.target.value } })} /><br></br>



            <label for="id_semaforo">Escriba su puntaje: </label><br></br>
            <input
              value={calculadora1.id_semaforo}
              onChange={e => this.setState({ calculadora1: { ...calculadora1, id_semaforo: e.target.value } })} /><br></br>
              <small id="emailHelp" class="form-text text-muted">1 para VERDE -- 2 para AMARILLO -- 3 para ROJO</small><br></br>

              <label for="direccion">Direccion: </label><br></br>
            <input
              value={calculadora1.direccion}
              onChange={e => this.setState({ calculadora1: { ...calculadora1, direccion: e.target.value } })} /><br></br>
              <small id="emailHelp" class="form-text text-muted">Ciudad-Parroquia-Sector</small>

          
          
          </div>

          
        <button  type="submit" class="btn btn-primary"
        onClick={this.addCalculadora}>
          Enviar</button><br></br>
        
      </form><br></br>

      
      

      
      
      </div>
    );
  }





}

export default App;
