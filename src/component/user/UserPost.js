import React, { Component } from 'react'

class UserPost extends Component {
    
    
    
    
    render() {
        let {item,onSelectUserPost} = this.props;
    
        return (

            <div>
                
{item.id}-..

<button onClick = {()=> onSelectUserPost(item.id)}>Users post </button>


            </div>
        )
    }
}
export default UserPost;