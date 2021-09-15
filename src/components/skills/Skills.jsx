import "./skills.scss"

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            
            <div className="container">
                <div className="item">
                    <img src="../assets/python.svg" alt="" draggable="false"/>
                    <h3>Python</h3>
                </div>
                <div className="item">
                    <img src="../assets/c.svg" alt="" draggable="false"/>
                    <h3>C</h3>
                </div>
                <div className="item">
                    <img src="../assets/git.svg" alt="" draggable="false"/>
                    <h3>Git</h3>
                </div>
                <div className="item">
                    <img src="../assets/opencv.svg" alt="" draggable="false"/>
                    <h3>OpenCV</h3>
                </div>
                <div className="item">
                    <img src="../assets/ubuntu.svg" alt="" draggable="false"/>
                    <h3>Ubuntu</h3>
                </div>
                <div className="item">
                    <img src="../assets/docker.svg" alt="" draggable="false"/>
                    <h3>Docker</h3>
                </div>
                <div className="item">
                    <img src="../assets/jupyter.svg" alt="" draggable="false"/>
                    <h3>Jupyter</h3>
                </div>
                <div className="item">
                    <img src="../assets/sql.svg" alt="" draggable="false"/>
                    <h3>PostgreSQL</h3>
                </div>
            </div>
        </div>
    )
}
