import React from "react";

import UserList from "./UserList";
import SearchBar from "./SearchBar"
import LoginForm from "./LoginForm";
import axios from "axios";

class List extends React.Component{

    state = {

        users: [],

        search: ""
    }

    async componentDidMount() {
        const response = await axios.get("http://localhost:3003/users");
        this.setState({users: response.data})

    }

    deleteUsers = async (user) => {
        
        axios.delete(`http://localhost:3003/users/${user.id}`)

        const newUserList = this.state.users.filter(
            m => m.id !== user.id
        );

        this.setState(state => ({
            users: newUserList
        }))
    }

    render(){


        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar />
                    </div>
                </div>
                <UserList 
                users = {this.state.users}
                deleteUser = {this.deleteUsers}/>
            </div>
        )   
    }
    
}

export default List;