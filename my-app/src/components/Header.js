import { useNavigate } from "react-router"


export const Header=()=>{
    const navigate= useNavigate()    
    const changeUrl=(type)=>{
        switch(type){
            case"Moi":
                navigate("/moi")
            break;
            
            case"Competence":
                navigate("/competence")
            break;
            
            case"PortFolio":
                navigate("/portfolio")
            break;
            
            case"Contact":
                navigate("/contact")
            break;
        }
    }
    
    return(
        <header className="header">
            <section className="headerContainer">
                <div>
                    <h1>Alex6Dev</h1>
                </div>
                <nav className="headerNav">
                    <ul className="headerList">
                        <button className="headerBtn" onClick={()=>changeUrl("Moi")}>
                            <li className="headerElement"><p>Moi</p></li>
                        </button>
                        <button className="headerBtn" onClick={()=>changeUrl("Competence")}>
                            <li className="headerElement"><p>Compétences</p></li>
                        </button>
                        <button className="headerBtn" onClick={()=>changeUrl("PortFolio")}>
                            <li className="headerElement"><p>PortFolio</p></li>
                        </button>
                        <button className="headerBtn" onClick={()=>changeUrl("Contact")}>
                            <li className="headerElement"><p>Contact</p></li>
                        </button>
                    </ul>
                </nav>
            </section>
        </header>    
    )
}