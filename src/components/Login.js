import React from "react";
import axios from "axios"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userId:'',
            title:'',
            body: ''
        }
    }
    changehandelar = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }
    submithandelar=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(responce => {
                console.log(responce)
            })
            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const{userId,title,body}=this.state
        return (
            <>
            <h1>login page</h1>
                <div>
                    <form onSubmit={this.submithandelar}>
                        <div>
                            <label>UserId:</label>
                            <input type="text"
                                name="userId"
                                value={userId}
                                onChange={this.changehandelar} />
                        </div>
                        <div>
                        <label>title:</label>
                            <input type="text"
                                name="title"
                                value={title}
                                onChange={this.changehandelar} />
                        </div>
                        <div>
                        <label>body:</label>
                            <input type="text"
                                name="body"
                                value={body}
                                onChange={this.changehandelar} />
                        </div>  
                        <button type="submit">submit</button>
                    </form>
                </div>
            </>
        )
    }

}

export default Login
