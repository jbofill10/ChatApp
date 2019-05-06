import React from 'react';
import "./CSS/JoinView.css"
import "whatwg-fetch";


export default class JoinView extends React.Component{

    constructor(props){
        super(props);

        this.state={
            entry:""
        }
    }

    handleChange = event => {
        this.setState({entry:event.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello",this.state.entry)
        
        fetch("/join", {
            headers: {
				"Content-Type": "application/json"
			},
            method: 'POST',
            body: this.state.entry
        })
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
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type="displayName" 
                            value={this.state.entry} 
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
                    </form>
                    
                    

                    </div>
            
            </div>
        )
    }
}