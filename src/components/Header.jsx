import { Button } from "bootstrap";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { Link, useNavigate } from "react-router-dom";

const options = [
    { label: "Tomato", value: "tomato" },
    { label: "Lettuce", value: "lettuce" },
    { label: "Cucumber", value: "cucumber"},
    { label: "Cheese", value: "cheese"},
    { label: "Apple", value: "apple"},
    { label: "Chicken", value: "chicken" },
    { label: "Avocado", value: "avocado"},
    { label: "Meat", value: "meat"},
    { label: "Sausage", value: "sausage" },
    { label: "Milk", value: "milk"},
    { label: "Tortilla", value: "tortilla"},
    { label: "Bread", value: "bread"}
];
  

const Header = () => {
    const [selected, setSelected] = useState([]);
    const [ingredients, setIngredients] = useState("");
    const navigate = useNavigate()
    
    const redirect = () => {
        setIngredients(selected.map((ingr) => ingr.value).join(" "))
        navigate(`/${ingredients}`)
    }

    return (
        <div>
           <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Choose your ingredients"
            />
            <button onClick={redirect} className="btn btn-primary">Get recommendations</button>
        </div>
    )
}

export default Header