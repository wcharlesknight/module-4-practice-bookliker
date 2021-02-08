import React from 'react'
import User from './User.js'


export default class UserContainer extends React.Component{

    render(){
        return(
            <ul> 
            {this.props.book ? this.props.book.users.map(user => <User name={user.username} key={user.id} />) : null} 
            </ul>
        )
    }


}