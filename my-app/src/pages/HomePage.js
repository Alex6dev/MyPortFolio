import { useSelector } from "react-redux";
import { HomePage } from "../components/HomePage";
import { JuniorFirstPage } from "../components/JuniorFirstPage";

export const HomePages=()=>{
    const userFirstVisit= useSelector((state)=>state.user.firstVisit)
    
    if(/*userFirstVisit*/ false){
        return(
            <JuniorFirstPage/>
        )
    }else{
        return(
            <HomePage/>
        )
    }

}