import React, {Component} from 'react';
import Axios from 'axios';
import { NavLink } from 'react-router-dom';

class AboutUs extends Component {

    state = {
        posts: []
    }
    
    componentDidMount(){
        Axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
            //console.log(response);
            this.setState({
                posts: response.data.slice(0,5)
            });
        })
    }
    
    render(){

        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <NavLink to={'/about/' + post.id} key={post.id}>
                        <div className="post card">
                            <div className="card-content">
                                <span className="card-title">{post.title}</span>
                                <p>{post.body}</p>
                            </div>
                        </div>
                    </NavLink>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        );

        return(
            <div className="container">
                <h1 className="center">About us</h1>
                {postList}
            </div>
        )
    }
}
export default AboutUs;