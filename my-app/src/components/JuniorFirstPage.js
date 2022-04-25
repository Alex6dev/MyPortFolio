import { useDispatch, useSelector } from "react-redux";
import * as userActions from "../features/user";
import pilotJunior from "../assets/pilotJunior.png" ;
export const JuniorFirstPage=()=>{
    const userFirstVisit= useSelector((state)=>state.user.firstVisit)
    const dispatch= useDispatch()
    const IWantToLand=()=>{
        dispatch(userActions.changeVisit())
    }
    return(
        <>
            <section className="JuniorBackGround">
                <div className="JuniorContainer">
                    <span className="JuniorContainerCloud CloudFirst">
                        <i className="fa-solid fa-cloud "></i>
                    </span> 
                    <span className="JuniorContainerCloud CloudTwo">
                        <i className="fa-solid fa-cloud "></i>
                    </span>
                    <div className="JuniorContainerContent">
                        <h1>Es-tu prêt ??</h1>
                        <p>
                            Car oui, tu viens d'arriver dans une zone de turbulance etant donner que suis Junior, un diamant à l'état brut !!<br/>
                            Je ne connais pas tout sur tout mais je ne demande qu'à evoluer et devenir un diamant magnifique. </p>
                        <button type="button" onClick={IWantToLand} className="btn juniorBtn">click pour atterrir et en voir plus sur moi !!!</button>
                    </div>
                    <div className="JuniorContainerImg">
                        <img alt="" src={pilotJunior} className="JuniorImg"/>
                    </div>
                </div> 
            </section>
        </>
    )
}