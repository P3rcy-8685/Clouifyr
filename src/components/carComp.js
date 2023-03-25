import React, { useState } from "react";
const Panel = ({image, name, description}) => {
    const [backgroundimage, setbackgroundImage] = useState(image);
    return (
        <div className="panel">
            <div className="panel-content"style={{backgroundImage:`url(${backgroundimage.src})`,
            backgroundSize:"cover", 
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center"
            }}>
                <div className="content">
                    <div className="panel-content-heading">
                        <h3>{name}</h3>
                    </div>
                    <div className="panel-content-body">
                        <p>{description}</p>
                    </div>
                    <div className="random">
                        <button className="panel-content-button">Explore</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Panel;