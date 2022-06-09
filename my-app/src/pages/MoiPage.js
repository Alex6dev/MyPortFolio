import { Footer } from "../components/footer"
import { Header } from "../components/Header"
import { MoiComponents } from "../components/MoiComponent"

export const MoiPage=()=>{
    
    
    return(
        <>
            <Header props={"moi"}/>
            <MoiComponents/>
            <Footer/>
        </>
    )
}