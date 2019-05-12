import React from "react"
import clientSocket from "socket.io-client"

export default class ChatView extends React.Component{
    constructor(props){
        super(props);
        this.state={
            entry:"",
            messages:[],
            tester:[{name: "Rich", body:"Hey"},{name:"Alex", body:"Glulp"}],
            user:""
        }

    }
    _isMouted=false;

    componentDidMount(){
        this._isMouted = true;
        this.socket = clientSocket("http://localhost:3000")
        this.socket.on("connect", () =>{
            console.log("connected"); 

            this.socket.on("get messages", messages =>{
                this.setState({messages:messages.messages})
                
            })
            
            this.socket.on("send message", data =>{
                this.setState({
                    messages:[...this.state.messages,data]
                })
            })


        })


    }

    sendMessage = ()=> {
        if(this.state.entry.length===0) return;

        this.socket.emit("send message", this.state.entry);

        this.setState({entry:""});


    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.sendMessage();
        this.state.tester.map((messages, key) => (
            console.log(messages.name,messages.body)
        ))
        console.log(this.state.messages)
        
    }

    handleUser = (e) => {
        if(this.state.user.trim().length===0){
            e.preventDefault()
            return;
        }else{
            var str = this.state.user.trim();
            this.setState({user:""})
            e.preventDefault();

            this.socket.emit("add user", str)
        }
    }

    handleChange = event => {
        this.setState({entry:event.target.value});
    }

    handleChangeUser = event => {
        this.setState({user:event.target.value})
    }


    componentWillUnmount(){
        this.socket.disconnect();
        this._isMouted = false;
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
                    className="Bg"
                    style={{
                        background:"radial-gradient(#034FFF,#021645)",
                        position:"absolute",
                        width:"100%",
                        height:"100%"
                    }}
                >

                        <div 
                            className="ChatBox"
                            style={{
                                position:"absolute",
                                top:"5.6%",
                                left:"15.78%",
                                height:"100%",
                                width:"100%",
                                background:"#FFFFFF",
                            }}>
                                {this.state.messages.map((message, key) => (
                                <div key={key}
                                className="chatmessage"
                                style={{
                                    position:"relative",
                                    textAlign:"left"
                            
                                }}>
                                {message.name}: {message.body}
                                </div>))}
                        </div>

                        

                        <div 
                        className="UsersRight"
                        style={{
                            position:"absolute",
                            right:"0%",
                            height:"100%",
                            width:"15.7%",
                            background:"#021645",
                            borderLeft: "2px solid black"
                        }}
                    ></div>
                    <div 
                        className="Users"
                        style={{
                            position:"absolute",
                            height:"100%",
                            width:"15.7%",
                            background:"#021645",
                            borderRight: "2px solid black"
                        }}
                    >
                        <form onSubmit={this.handleUser}>
                            <input
                                className="Username"
                                value={this.state.user}
                                onChange={this.handleChangeUser}
                                placeholder="Enter username:"
                                style={{
                                    position:"absolute",
                                    height:"5%",
                                    width:"82%",
                                    bottom:"85%",
                                    left:"5%"
                                }}></input>
                                </form>

                
                        <div
                            className="UsersText"
                            style={{
                                position:"relative",
                                fontSize:"35px",
                                backgroundColor:"#101010",
                                height:"5.5%",
                                borderBottom:"2px solid white",
                                borderRight:"2px solid white",
                                color:"white"

                            }}
                        >
                            Set Name:
                        </div>

                    </div>
                </div>
                <div 
                        className="Header"
                        style={{
                            position:"absolute",
                            top:"0%",
                            width:"100%",
                            height:"5.6%",
                            left:"15.7%",
                            background:"#101010",

                            
                        }}>
                        
                    </div>
                                        
                    <form onSubmit={this.handleSubmit}>
                        <input
                            className="TextBar"
                            value={this.state.entry} 
                            onChange={this.handleChange}
                            placeholder="Type your message:"
                            style={{
                                position:"absolute",
                                left:"15.704%",
                                bottom:"0%", 
                                height:"50px",
                                width:"64%",
                                border:"3px solid #3E3E3E",
                                borderTop:"5px solid #3E3E3E"
                            }}>
                            </input>
                        </form>

                    <form onSubmit={this.handleSubmit}>
                        <button 
                            type="submiterino"
                            style={{
                                position:"absolute",
                                bottom:"0%",
                                height:"5.9%",
                                left:"80%",
                                width:"4.3%",
                                border:"3px solid #3E3E3E"

                            }}>Send
                        </button>
                    </form>
            </div>
        )
    }
}