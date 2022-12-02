import React from 'react'
import axios from 'axios';
import { useState, useEffect} from 'react';

const URL = 'http://10.10.129.93:5000/?ingredients=apple';

const Top10Recipes = ({ingredients}) => {
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        console.log(ingredients)
        getRecipes()
    },[])

    const getRecipes = async () => {
        const res = await axios.get(URL)
        setRecipes(res.data)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <table className='table'>
                        <thead className='table-primary'>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {recipes.map((recipe) => (
                                <tr key={recipe.id}>
                                    <td>{recipe.id}</td>
                                    <td>{recipe.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Top10Recipes;