import React from 'react'

const Top10Recipes = ({recipes}) => {

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