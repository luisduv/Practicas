import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";


function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}


class  Pruebas extends Component{

    constructor(props){
        super(props)
        this.state = {
            estaciones: ["orono","invierno","verano","primavera"],
            contador:0,
            session:true
        }

        setInterval(()=>{
            this.setState({
                contador:this.state.contador+1
            });

        },1000)

       
    }

    render(){
        
        return(
            <div>
                <h1>hola desde prueba</h1>
                <h2>aqui las estaciones del ano</h2>

                <ul>
                   {this.state.estaciones.map((e,index)=>(<li key={index}>{e}</li>))}
                </ul>
                <hr/>

                <h1>contador</h1>
                <h3>{this.state.contador}</h3>
                {this.state.contador % 2 == 0 ?"log" : "logout"}

                <h1>contador hijo</h1>
                <EstadoAHijo contadorHijo = {this.state.contador}/>

            </div>
        )
    };
}

export default Pruebas;