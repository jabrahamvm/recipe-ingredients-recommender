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
        <div className="container text-secondary px-9 py-3 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold">Recipes recommendations</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">Get recipe recommendations based on your favorite ingredients!</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <div style={{"width" : "100%"}}>
                            <MultiSelect
                                options={options}
                                value={selected}
                                onChange={setSelected}
                                labelledBy="Choose your ingredients"
                                className="multi-select"
                            />
                        </div>
                        <div className="d-grip">
                            <button onClick={redirect} className="btn btn-primary btn-block">Get Recipes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header