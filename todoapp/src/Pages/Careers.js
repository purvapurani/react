import React, {Component} from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Careers extends Component {
    
    render(){
        const { posts } = this.props;
        const postList = posts.length ? (
            posts.map(post => {
                return (
                    <NavLink to={'/careers/' + post.id} key={post.id}>
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

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Careers);