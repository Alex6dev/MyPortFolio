import imgMoi from"../assets/imgMoiComponent.jpg";
import imgMoiMarché from"../assets/imgMoiMarché.jpg";
import imgMoiMarché2 from"../assets/imgMoiMarché(2).jpg";

export const MoiComponents= ()=>{
    
    return(
        <main >
            <div className="containerMoiContent">
                <div className="containerMoiImgLeft">
                    <img src={imgMoi} alt="photo d'alexandre six" className="imgMoiComponent"/>
                </div>
                <section>
                    <h1>
                        <span>
                            Je me presente 
                        </span>
                    </h1>
                    <h1>
                        <span>
                            comme il se doit
                        </span>
                    </h1>
                    <p>
                        Alexandre Six je suis fils d'agriculteur , né dans le monde 
                        du travail dès le plus jeune âge, mon père m'a inculqué les 
                        valeurs du travail et de l'effort.
                        J'ai commencé dès mes 6ans sur les marchés a donner les sachets 
                        aux clients ou encore ramassais les patates avec mon petit seau en début 
                        de saison.  
                    </p>
                    <p>
                        Puis est arrivé l'adolescence, il faut choisir sa voie pour son futur 
                        métier, je fini par me dirigeais vers la mécanique automobile. j'obtiens un BAC Pro MAVA
                        (Maintenance Après-Vente Automobile) suivi d'un BTS MAVTPM( Maintenance des 
                        Engins Travaux Public et de Manutention). Mais je ne me sentais pas faire ça
                        comme métier. Et étant donné que mon père cherché de la main d'oeuvres pour 
                        travailler sur l'exploitation familliale, je me suis dirigeais vers ce que je 
                        faisais depuis que j'étais petit, travailler à la ferme .
                    </p>
                    <p>
                        Oficiellement j'ai travaillé 5ans à la ferme mais officieusement depuis mon
                        plus jeune âge car oui les vacances je n'ai jamais connus ça avant mes 12ans, 
                        une révolution pour mes parants (entre nous maintenent ils n'arrêtent plus ! 
                        entre Mexique, Martinique et France ... ) Mais cela m'a permis de developper 
                        des soft skills que je vous invite à suivre dans l'onglet Compétences après avoir 
                        lu le dernier paragraphe sur mon virage numérique.
                    </p>
                    <p>
                        Mais voila des divergences d'opinons avec mon père sur l'exploitation ainsi
                        que l'opportunité de me reconvertir dans le domaine du numérique mon poussai
                        à passer le cap. Me voila en 2021 au pôle emploi pour lançais ma reconversion.
                        Je me tourne vers Openclassrooms sur la formation developpeur front-end JS-react.
                        Le programme me conviens pour une première expèrience, une bonne base pour demarrer.
                        Et pour finir Mai 2022 je suis l'heureux propriétaire du titre Développeur concepteur
                        logiciel , niveau 6 (bac+3/4).
                    </p>   
                    <p >
                        Je suis maintenent à la recherche de mon premier CDI dans la tech pour le poste de développeur Front-end JS React
                    </p>                 
                    <i className="fa-solid fa-tractor"></i>
                    <i className="fa-solid fa-carrot"></i>
                    <i className="fa-solid fa-seedling"></i>
                    <i className="fa-solid fa-car-side"></i>
                    <i className="fa-solid fa-laptop-code"></i>
                </section>
                <div className="containerMoiImgRight">
                    <img src={imgMoiMarché} alt="alexandre au marché" className="imgMoiMarché imgMoiMarchéTop"/>
                    <img src={imgMoiMarché2} alt="alexandre au marché" className="imgMoiMarché imgMoiMarchéBottom"/>
                </div>
            </div>
        </main>
    )
}