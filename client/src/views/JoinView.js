import React from 'react';
import "./CSS/JoinView.css"


export default class JoinView extends React.Component{

    constructor(props){
        super(props);

        this.state={
            value:""
        }
    }

    handleChange = event => {
        this.setState({value:event.target.value});
    }
    
    render(){
        return(
            <div
            style={{
                height:"100%",
                width:"100%",
                position:"absolute",
                overflow:"hidden",
                
            }}>
            <div
                className="bg"
                style={{
                        background:"radial-gradient(#034FFF,#021645)",
                        position:"absolute",
                        width:"100%",
                        height:"100%"
                    }}
            />
                <div 
                    className="Box"
                    style={{
                        background:"#012787",
                        position:"relative",
                        width:"600px",
                        height:"600px",
                        top:"50%",
                        left:"50%",
                        transform:"translate(-50%,-50%)",
                        borderRadius: "5px",
                        border: "5px solid #FFFF"
                    }}>
                
                    <input 
                        type="displayName" 
                        value={this.state.value} 
                        onChange={this.handleChange}
                        placeholder="Display Name" 
                        style={{
                            position:"absolute",
                            width:"200px",
                            height:"30px",
                            borderRadius:"5px",
                            top:"45%",
                            left:"50%",
                            transform:"translate(-50%,-50%)",
                            }}>

                        </input>
                    
                    

                    </div>
            
            </div>
        )
    }
}