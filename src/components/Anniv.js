import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import anniv from '../assets/pics/anniv.svg';
import etoile  from '../assets/pics/etoile.svg'

function Anniv({prenom, nom, color}){
    const classes = [color, "border-end border-2 border-black"].join(" ");

    return(
        <Col xs={12} className={classes}>
            <Row>
                <Col xs={3}>
                    <Row>
                        <Col><Image src={etoile}/></Col>
                    </Row>
                    <Row>
                        <Col><Image src={etoile}/></Col>
                    </Row>
                </Col>
                <Col xs={6}><Image src={anniv} roundedCircle/></Col>
                <Col xs={3}><Image src={etoile}/></Col>
            </Row>
            <Row>
                <Col xs={12}><h1 className='text text-center w-100'>{prenom} {nom}</h1></Col>
            </Row>
        </Col>
    )
}

export default Anniv;