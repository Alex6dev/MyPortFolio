import my from '../assets/my.jpg';
import imgCode from '../assets/imgCodeHome.jpg';
import { Link } from 'react-router-dom';

export const HomeComponent=()=>{


    return(
        <main className="containerContent">
            <section className="containerFirst">
                <div className="containerImgLeft">
                    <img alt="photo de Alexandre Six" src={my} className="imgHome"/>
                    <span className='elementDeco span1'></span>
                    <span className='elementDeco span2'></span>
                </div>
                <div className="containerText">
                    <h1> Bonjour moi c'est Alexandre Six </h1>
                    <h2> Développeur Front-End Junior pour vous servir !!</h2>
                </div>
                <div className="containerImgRight">
                    <img alt="photo d'un écran avec du code JS" src={imgCode} className="imgHome imgRight"  />
                    <span className='elementDeco span3'></span>
                    <span className='elementDeco span4'></span>
                </div>
            </section>
            <aside className="containerSecond">
                <nav >
                    <ul >
                        <Link to={"/moi"}>
                            <li>
                                <p>Je me présente ici</p>
                            </li>
                        </Link>
                        <Link to={"/competences"}>
                            <li>
                                <p>Mes compétences téchnique </p>
                            </li>
                        </Link>
                        <Link to={"/portfolio"}>
                            <li>
                                <p>Mon portfolio</p>
                            </li>
                        </Link>
                        <Link to={"/contact"}>
                            <li>
                                <p>Me contacter </p>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </aside>
        </main>
    )
}