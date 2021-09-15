import React from 'react';
import { Col, Card, Button } from "react-bootstrap";
import { BASE_PATH } from "../../utils/constants";

import "./Product.scss";

export default function Products(props) {
    const { product, addProductCart } = props;

    return (
        <Col xs={3} className="product">
            <Card>
                <Card.Img variant="top" src={`/${product.image}`} />
                <Card.Body>
                    <Card.Title> {product.name} </Card.Title>
                    <Card.Text> {product.extraInfo} </Card.Text>
                    <Card.Text> {product.price.toFixed(2) } $ / Unidad </Card.Text>
                    <Button onClick={() => addProductCart(product.id, product.name)} > Añadir al carrito</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}