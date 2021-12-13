import React from "react";
import { Component } from "react";
import RenderizadoCondicional from "./Renderizado";
import data from '../helpers/data.json'

function ElementoList(props){
    return(
        <div>
            <li>
                <a href={props.e.web} target="_blank">
                 {props.e.name}
                 </a>
            </li>
        </div>
    )
}


class RenderizadoElementos extends Component{
    constructor(props){
        super(props)
        this.state = {
            sesons: ["primavera","otono","invierno","verano"]
        }
    }

    
    render(){
        return(
            <div><h1>RenderizadoElemento</h1>
            <h2>estaciones del ano</h2>

            {this.state.sesons.map((e,index)=>(
                <li key={index}> {e} </li>
            ))}

            <h3>framework fontend javascrips</h3>
            <ul>
                {data.frameworks.map((e)=>(
                <li><ElementoList key={e.id} e={e}/></li>
                ))}
            </ul>
            </div>
            
        )
    }
}

export default RenderizadoElementos;