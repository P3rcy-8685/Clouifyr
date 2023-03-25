import 'react-multi-carousel/lib/styles.css';
import Panel from "./carComp";
import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import games from "./games.js";


const Carousal = () => {
    return (
        <div>
            <Carousel wrapAround={true} slidesToShow={3} autoplay={true}  cellSpacing={20}>
                {games.map((game,index) => (
                    <div className='panel-div' key={index}>
                    <a href="/jojo">
                        <Panel image={game.image} name={game.name} description={game.discription}/>
                    </a>

                    </div>
                ))}
            </Carousel>
        </div>

    )
}
export default Carousal;