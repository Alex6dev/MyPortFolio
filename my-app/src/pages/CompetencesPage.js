import { CompetencesComponent } from "../components/competencesComponent"
import { Footer } from "../components/footer"
import { Header } from "../components/Header"

export const CompetencesPage=()=>{
    return(
        <>
            <Header props={"competences"}/>
            <CompetencesComponent />
            <Footer/>
        </>
    )
}