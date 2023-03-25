import React from "react";

const GameName = ({ name, tagline, content }) => {
    return (
        <div className="game-text" style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "white" }}>
            <div style={{fontSize: '40px'}}>
                {name}
            </div>
            <div style={{fontSize: '25px'}}>
                {tagline}
            </div>
            <div style={{fontSize: '18px'}}>
                {content}
            </div>
        </div>
    );
}

export default GameName;