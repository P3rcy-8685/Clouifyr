import React, { useState } from "react";

const Category = () => {
    const [active, setActive] = useState(false);
  
    const handleClick = () => {
      setActive(!active);
    };
    return(
    <div class="input-heading">
        <div class="container">
            <div class="selector">
                <div class="selector-item">
                    <input type="radio" id="radio1" name="selector" className="selector-item-radio" checked />
                    <label for="radio1" className="selector-item-label">All</label>
                </div>
                <div class="selector-item">
                    <input type="radio" id="radio2" name="selector" className="selector-item-radio" />
                    <label for="radio2" className="selector-item-label">Games</label>
                </div>
                <div class="selector-item">
                    <input type="radio" id="radio3" name="selector" className="selector-item-radio" />
                    <label for="radio3" className="selector-item-label">Type</label>
                </div>
                <div class="selector-item">
                    <input type="radio" id="radio4" name="selector" className="selector-item-radio" />
                    <label for="radio4" className="selector-item-label">UI</label>
                </div>
                <div class="selector-item">
                    <input type="radio" id="radio5" name="selector" className="selector-item-radio" />
                    <label for="radio5" className="selector-item-label">Programming</label>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Category;