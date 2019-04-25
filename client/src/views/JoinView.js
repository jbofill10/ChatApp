import React from 'react';


export default class JoinView extends React.Component{
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
            
            </div>
        )
    }
}