import React, { useState } from "react";
const Category = () => {
    const [active, setActive] = useState(false);
  
    const handleClick = () => {
      setActive(!active);
    };
    return(
    <div className="input-heading">
        <div className="container">
            <div className="selector">
                <div className="selector-item">
                    <input type="radio" id="radio1" name="selector" className="selector-item-radio" defaultChecked />
                    <label className="selector-item-label">All</label>
                </div>
                <div className="selector-item">
                    <input type="radio" id="radio2" name="selector" className="selector-item-radio" />
                    <label  className="selector-item-label">Games</label>
                </div>
                <div className="selector-item">
                    <input type="radio" id="radio3" name="selector" className="selector-item-radio" />
                    <label className="selector-item-label" >Type</label>
                </div>
                <div className="selector-item">
                    <input type="radio" id="radio4" name="selector" className="selector-item-radio" />
                    <label className="selector-item-label">UI</label>
                </div>
                <div className="selector-item">
                    <input type="radio" id="radio5" name="selector" className="selector-item-radio" />
                    <label className="selector-item-label">Programming</label>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Category;