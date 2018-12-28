import React, {Component} from 'react';
import Loader from '../Images/loader.gif';
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'

class LocalPost extends Component{

    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/careers');
    }

    render(){

        //console.log(this.props);

        const post = this.props.post ? (
            <div className="post" key={this.props.post.id}>
                <h4 className="">
                    {this.props.post.title}
                </h4>
                <p>
                    {this.props.post.body}
                </p>
                <div className="center">
                <button className="btn red" onClick={this.handleClick}>Delete Post</button>
                </div>
            </div>
        ) : (
            <div className="center"><img src={Loader} width="200" alt="Loading..." /></div>
        )

        return(
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => post.id === id)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LocalPost);