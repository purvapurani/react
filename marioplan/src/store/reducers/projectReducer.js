const initState = {
    projects: [
        {id: '1', title: 'Help me find Peach', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {id: '2', title: 'Collect all the stars', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
        {id: '3', title: 'Egg hunt with Mario', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}        
    ]    
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project);
            return state;
        case 'CRETE_PROJECT_ERROR':
            console.log('Create project error', action.error);
            return state;
        default:
            return state;
    }
  };
  
export default projectReducer;