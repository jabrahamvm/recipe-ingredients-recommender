import { Card, ListGroup, ListGroupItem } from "react-bootstrap";


const IngredientsCard = ({ingredients}) => {
    console.log(ingredients)
    return (
        <Card className="mx-auto w-100">
            <Card.Body>
                <Card.Title>Ingredients</Card.Title>
                <ListGroup variant="flush">
                    {ingredients.map((ingredient) => (
                        <ListGroupItem>{ingredient}</ListGroupItem>
                    ))}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default IngredientsCard;