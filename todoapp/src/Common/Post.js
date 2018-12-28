import React, {Component} from 'react';
import axios from 'axios';
import Loader from '../Images/loader.gif';

class Post extends Component{

    state = {
        post: null
    }

    componentDidMount(){        
        let id = this.props.match.params.post_id;
        axios.get('http://jsonplaceholder.typicode.com/posts/' + id)
        .then(res => {
            this.setState({
                post: res.data
            })
        })
    }

    render(){

        const post = this.state.post ? (
            <div className="post" key={this.state.post.id}>
                <h4 className="">
                    {this.state.post.title}
                </h4>
                <p>
                    {this.state.post.body}
                </p>
            </div>
        ) : (
            <div className="center"><img src={Loader} width="200" alt="Loading..." /></div>
        )

        return(
            <div className="container">
                {post}
            </div>
        )
    }
}
export default Post;