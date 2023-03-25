import 'react-multi-carousel/lib/styles.css';
import Panel from "./carComp";
import React from "react";
import Carousel from "nuka-carousel/lib/carousel";
import games from "./games.js";


const Carousal = () => {
    return (
        <div>
            <Carousel wrapAround={true} slidesToShow={3} autoplay={true}>
                {games.map((game,index) => (
                    <div className='panel-div' key={index}>
                    <Panel image={game.image} name={game.name} description={game.discription}/>
                    </div>
                ))}
            </Carousel>
        </div>

    )
}
export default Carousal;