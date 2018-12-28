const initState = {
    posts: [
        {id: '1', title: 'Squirtle', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae velit eligendi obcaecati sit, voluptatem aliquam explicabo ipsum quasi in maxime!'},
        {id: '2', title: 'Charmander', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae velit eligendi obcaecati sit, voluptatem aliquam explicabo ipsum quasi in maxime!'},
        {id: '3', title: 'Bulbasaur', body: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae velit eligendi obcaecati sit, voluptatem aliquam explicabo ipsum quasi in maxime!'}
    ]
}

const rootReducer = (state = initState, action) => {
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return post.id !== action.id;
        })
        return{
            ...state,
            posts: newPosts
        }
    }
    
    return state;
}
export default rootReducer;