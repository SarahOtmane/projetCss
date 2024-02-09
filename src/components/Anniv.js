import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import anniv from '../assets/pics/anniv.svg';
import etoile  from '../assets/pics/etoile.svg'

function Anniv({prenom, nom, color}){
    const classes = [color, "border-end border-2 border-black", "text-center"].join(" ");

    return(
        <Col xs={6} className={classes}>
            <Row className="d-flex justify-content-center align-items-center">
                <Col xs={3}>
                    <Row>
                        <Col><Image src={etoile}/></Col>
                    </Row>
                    <Row className='align-self-end'>
                        <Col><Image src={etoile}/></Col>
                    </Row>
                </Col>
                <Col xs={6}><Image src={anniv} className='spin'/></Col>
                <Col xs={3}><Image src={etoile}/></Col>
            </Row>
            <Row>
                <Col xs={12}><h1 className='text'>{prenom} {nom}</h1></Col>
            </Row>
        </Col>
    )
}

export default Anniv;