import ProjectCard from "../ProjectCard/ProjectCard"
import "./portfolio.css"

function Portfolio(){
    return(
        <div className={"main"}>
            <h1 style={{paddingBottom: '50px', fontSize:'27px'}}>Check Out My Work</h1>
            <div>
                <ProjectCard/>
            </div>
         </div>
    )
}

export default Portfolio