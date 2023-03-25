import Image from "next/image";
import React from "react";

const CoverImage = ({ src, width, height }) => {
    return (
        <div className="cover-image" style={{position: "relative", display: "flex", height: "18rem", marginBottom: "2rem", marginTop: "2rem"}}>
                <Image src={src} fill={true} style={{objectFit: "cover"}}/>
        </div>
    );
}

export default CoverImage;