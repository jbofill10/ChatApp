import React from 'react';
import './CSS/DefaultView.css'
import {NavLink} from 'react-router-dom';

export default class DefaultView extends React.Component {


    render(){
        return(
            <div
                style={{
                    height:"100%",
                    width:"100%",
                    position:"absolute",
                    overflow:"hidden"
                    
                }}>
                <div
                    className="bg"
                    style={{
                        background:"radial-gradient(#034FFF,#021645)",
                        position:"relative",
                        width:"100%",
                        height:"100%"
                        }}
                />
                <NavLink to="/join"
>
                    <div className="LilGuy">

                        <div 
                            className="LilDude"
                            style={{
                                background:"#012787",
                                position:"absolute",
                                width:"500px",
                                height:"500px",
                                top:"50%",
                                left:"50%",
                                transform:"translate(-50%,-50%)",
                                borderRadius:"50px",
                                border: "5px solid #FFFF"
                            }}
                        />
                        <div 
                            className="eye-left"
                            style={{
                                background:"#034FFF",
                                position:"absolute",
                                width:"75px",
                                height:"75px",
                                top:"30%",
                                left:"30%",
                                transform:"translate(-50%,-50%)",
                                borderRadius:"125px"
                            }}
                        />  

                        <div 
                            className="eye-right"
                            style={{
                                background:"#034FFF",
                                position:"absolute",
                                width:"75px",
                                height:"75px",
                                top:"30%",
                                left:"70%",
                                transform:"translate(-50%,-50%)",
                                borderRadius:"125px"
                            }}
                        />
                        <div 
                            className="pupil-left"
                            style={{
                                background:"#FFFF",
                                position:"absolute",
                                width:"28px",
                                height:"30px",
                                top:"28.1%",
                                left:"29.99999999%",
                                transform:"translate(-50%,-50%)",
                                borderRadius:"60px"
                            }}
                        />
                
                        <div 
                            className="pupil-right"
                            style={{
                                background:"#FFFF",
                                position:"absolute",
                                width:"28px",
                                height:"30px",
                                top:"28.1%",
                                left:"70%",
                                transform:"translate(-50%,-50%)",
                                borderRadius:"60px"
                                }}
                            />
                
                        <div 
                            className="mouth"
                            style={{
                                background:"#FFFF",
                                position:"absolute",
                                width:"150px",
                                height:"50px",
                                top:"50%",
                                left:"50%",
                                transform:"translate(-50%,-50%)",
                                borderRadius: '10px',
                                borderBottomLeftRadius: '40px',
                                borderBottom: '4px solid #034FFF',
                                borderBottomRightRadius: '40px'

                            }}
                        />
                    </div> 
                </NavLink>
                              
            </div>

			
			
		
			
        )
    }
}