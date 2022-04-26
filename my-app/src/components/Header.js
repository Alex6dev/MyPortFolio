import { useNavigate } from "react-router"
import { Link } from "react-router-dom"


export const Header=(props)=>{
    const navigate= useNavigate()    
    const changeUrl=(type)=>{
        switch(type){
            case"Moi":
                navigate("/moi")
            break;
            
            case"Competences":
                navigate("/competences")
            break;
            
            case"PortFolio":
                navigate("/portfolio")
            break;
            
            case"Contact":
                navigate("/contact")
            break;
        }
    }
    const pageCurrents= props.props
    return(
        <header className="header">
            <section className="headerContainer">
                <div>
                    <Link to={'/'}>
                        <h1>Alex6Dev</h1>
                    </Link>
                </div>
                <nav className="headerNav">
                    <ul className="headerList">
                        {pageCurrents==="moi"? (
                            <button className="headerBtn headerBtnCurrents">
                                <li className="headerElement"><p>Moi</p></li>
                            </button>    
                        ):(
                            <button className="headerBtn" onClick={()=>changeUrl("Moi")}>
                                <li className="headerElement"><p>Moi</p></li>
                            </button>
                        )}
                        {pageCurrents==="competences"?(
                            <button className="headerBtn headerBtnCurrents" onClick={()=>changeUrl("Competences")}>
                                <li className="headerElement"><p>Compétences</p></li>
                            </button>
                        ):(
                            <button className="headerBtn " onClick={()=>changeUrl("Competences")}>
                                <li className="headerElement"><p>Compétences</p></li>
                            </button>
                        )}
                        {pageCurrents==="portfolio"?(
                            <button className="headerBtn headerBtnCurrents" onClick={()=>changeUrl("PortFolio")}>
                                <li className="headerElement"><p>PortFolio</p></li>
                            </button>
                        ):(
                            <button className="headerBtn" onClick={()=>changeUrl("PortFolio")}>
                                <li className="headerElement"><p>PortFolio</p></li>
                            </button>
                        )}
                        {pageCurrents==="contact"?(
                            <button className="headerBtn headerBtnCurrents" onClick={()=>changeUrl("Contact")}>
                                <li className="headerElement"><p>Contact</p></li>
                            </button>    
                        ):(
                            <button className="headerBtn" onClick={()=>changeUrl("Contact")}>
                                <li className="headerElement"><p>Contact</p></li>
                            </button>
                        )}
                       
                    </ul>
                </nav>
            </section>
        </header>    
    )
}