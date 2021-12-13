import React from "react";
import { Component } from "react/cjs/react.production.min";

export default  class Eventos extends Component{

    constructor(props){
        super(props)
        this.state={
            constador: 0
        };

        this.sumar = this.sumar.bind(this)
        this.restar= this.restar.bind(this)
    }

    sumar(){
        this.setState({
            constador:this.state.constador + 1,
        });
    }

    restar(){
        this.setState({
            constador:this.state.constador - 1,
        });
    }

  

    render(){
        return(
            <div>
                    <h2>Eventos en componentes de clases </h2>
                    <nav>
                            <button onClick={this.sumar}>+</button>
                            <button onClick={this.restar}>-</button>
                    </nav>

                    <h3>{this.state.constador}</h3>
            </div>
        )
    }
}

