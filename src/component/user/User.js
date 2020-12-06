import React, { Component } from 'react'

class User extends Component {
    render() {
let {item,onSelectUser} = this.props;
        return (

            <div>

 {item.id} - {item.name} - {item.email}-

<button onClick = { () => onSelectUser(item.id)} > Choose </button>

            </div>
        )
    }
}
export default User;