import { Link } from "react-router-dom"
import imgFooter from "../assets/myFooter.jpg"
export const Footer=()=>{
    
    return (
        <footer>
            <div className="containerInfo">
                <img src={imgFooter} alt="photo d'Alexandre Six" className="imgFooter"/>
                <div className="containerTextInfo">
                    <p>
                        Alexandre Six - <span>developpeur Front-end</span>
                    </p>
                    <p>
                        59280 Armentières
                    </p>
                    <p>    
                        06.31.61.43.68
                    </p>
                    <a href="mailto:alexandresix2@gmail.com">
                        <p>alexandresix2@gmail.com</p>
                    </a>
                </div>
            </div>
            <div className="containerCopyright">
                <p>Alex6dev©2022</p>
            </div>
            <div className="containerMeRetrouver">
                <p>retrouvez-moi sur le web</p>
                <div>
                    <a href="https://github.com/Alex6dev" target="_blank">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/alexandre-six-98b687235/" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>   
                    </a>
                </div>
            </div>
        </footer>
    )
}