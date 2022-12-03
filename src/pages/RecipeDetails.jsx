import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import IngredientsCard from '../components/RecipeCard';

const URL = 'http://localhost:5000/recipes/'

const RecipeDetails = ({id}) => {
  const [show, setShow] = useState(false);
  const [recipe, setRecipe] = useState({})
  const [ingredients, setIngredients] = useState([])
  useEffect(()=>{
    getRecipe()
  },[])

  const getRecipe = async () => {
    const res = await axios.get(`${URL}${id}`)
    setRecipe(res.data)
    setIngredients(res.data.ingredients.split('^'))
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
        <>
            <button className='btn btn-primary mt-2 mb-2' onClick={handleShow}>
                    See ingredients
            </button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{recipe.recipe_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <IngredientsCard ingredients={ingredients}/>
                </Modal.Body>
                <Modal.Footer>
                <button className='btn btn-secondary' onClick={handleClose}>
                    Close
                </button>
                </Modal.Footer>
            </Modal>
        </>
  );
}

export default RecipeDetails;