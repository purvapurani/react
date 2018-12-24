import React from 'react'

const ProjectDetails = (props) => {

const id = props.match.params.id;
  return (
    <div className="container section project-details">
        <div className="card z-depth-0">
            <div className="card-content">
                <span className="btn btn-floating black lighten-1 white-text">{id}</span>
                <p className="card-title">Project Title</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea at suscipit quis nobis nisi? Sint doloribus natus ipsum enim nesciunt, necessitatibus ullam. Culpa similique ullam molestiae delectus harum alias placeat.</p>
            </div>
            <div className="card-action geey lighten-4 grey-text">
                <div>Posted by Purva Purani</div>
                <div>3rd January, 2am</div>
            </div>
        </div>
    </div>
  )
}

export default ProjectDetails