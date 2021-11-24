import React, { Component } from "react";
import Buscador from "./componentes/Buscador";
import Resultado from "./componentes/Resultado";

class App extends Component {

  state = {
    termino: '',
    imagenes: [],
    pagina: ''
  }
  paginaAnterior =()=>{
    //leer pagina actual
    let pagina =this.state.pagina;
    //si la pagina es 1 ya no ir hacia atras
    if(pagina===1)return null;
    //restar uno a la pagina actual
    pagina-=1;
    //agregar el cambio
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
    });
   // console.log(pagina);
  }
  paginaSiguiente =()=>{
    //leer pagina actual
    let pagina =this.state.pagina;
    //sumar uno a la pagina actual
    pagina+=1;
    //agregar el cambio
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
    });
   // console.log(pagina);

  }

  key = '24503630-55a4478eff2a36540cd5d774f';

  consultarApi = () => {
    const pagina=this.state.pagina;
    const url = `https://pixabay.com/api/?key=${this.key}&q=${this.state.termino}&page=${pagina}`;
    console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({ imagenes: resultado.hits }))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }

  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">buscador de imagenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
         <div className="row justify-content-center">
            <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
            />
         </div>
      </div>
    );
  }
}

export default App;
