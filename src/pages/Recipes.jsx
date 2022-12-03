import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';

const URL_2 = 'https://recipe-recommender.herokuapp.com/recommender?ingredients=';
const URL = 'http://localhost:5000/recommender/?ingredients=';

const Recipes = () => {
    const {ingredients} = useParams()
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{
        console.log(recipes)
        getRecipes()
    },[ingredients]) 

    const getRecipes = async () => {
        const res = await axios.get(`${URL}${ingredients}`)
        console.log(res.data)
        // Add res.data.data when working with API from heroku
        setRecipes(res.data)
    }
    return (
        <div className='container mx-auto w-75'>
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
                                    <td><RecipeDetails id={recipe.id}/></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Recipes;
