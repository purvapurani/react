export const createProject = (project) => {
    return (dispatch, getState, { getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstname: 'Net',
            authorLastname: 'Ninja',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATE_PROJECT',
                project: project
            })
        }).catch((error) => {
            dispatch({
                type: 'CREATE_PROJECT_ERROR',
                error
            })
        })
    }
}