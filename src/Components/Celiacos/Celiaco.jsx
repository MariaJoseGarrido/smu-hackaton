import React, { Fragment } from 'react'
import { celiacos } from '../../Json/celiacos.json'
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Row, Button } from 'reactstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from "react-router-dom";
import MenuPrincipal from '../Principal/MenuPrincipal';
import Carrusel from '../Principal/Carrusel';
import Footer from '../Principal/Footer.jsx';
import BarraBusqueda from '../Principal/BarraBusqueda';

const Celiaco = () => {
    return (
        <Fragment>
            <MenuPrincipal />
            <Carrusel />
            <BarraBusqueda />
            <Row sm='3'>
                {celiacos.map((element, i) => {
                    return (
                        <Link to={element.tipo}>
                            <Card>
                                <CardImg src={element.imagen} alt="" />

                            </Card>
                        </Link>
                    );
                })
                }
            </Row>
            <Footer />
        </Fragment>

    )
}

export default Celiaco
