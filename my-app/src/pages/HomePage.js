import { useSelector } from "react-redux";
import { Header } from "../components/Header";
import { HomeComponent } from "../components/HomeComponent";
import { JuniorFirstPage } from "../components/JuniorFirstPage";

export const HomePage=()=>{
    const userFirstVisit= useSelector((state)=>state.user.firstVisit)
    
    if(/*userFirstVisit*/false){
        return(
            <JuniorFirstPage/>
        )
    }else{
        return(
            <>
            <Header props={"home"}/>
            <HomeComponent/>
            </>
        )
    }

}