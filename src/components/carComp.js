import React, { useState } from "react";
const Panel = ({image, name, download, description}) => {
    const [active, setActive] = useState(false);
    const [backgroundimage, setbackgroundImage] = useState(image);
    console.log(`${backgroundimage.src}`)
    return (
        <div className="panel">
            <div className="panel-content"style={{backgroundImage:`url(${backgroundimage.src})`}}>
                <div className="panel-content-heading">
                    <h3>{name}</h3>
                </div>
                <div className="panel-content-body">
                    <p>{description}</p>
                    </div>
                <div className="panel-content-footer">
                    <div className="panel-content-footer-left">
                        Total download: {download}
                    </div>
                </div>  
            </div>
        </div>

    )
}
export default Panel;