import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import anniv from '../assets/pics/anniv.svg';
import etoile  from '../assets/pics/etoile.svg'

function Anniv({prenom, nom, color}){
    const classes = [color, "border-end border-2 border-black", "text-center"].join(" ");

    return(
        <Col xs={6} className={classes}>
            <Row className="d-flex justify-content-center align-items-center mt-5">
                <Col xs={2}>
                    <Image src={etoile}/>
                    <Image src={etoile}/>
                </Col>
                <Col xs={8}><Image src={anniv} className='spin mt-5'/></Col>
                <Col xs={2}><Image src={etoile}/></Col>
            </Row>
            <Row className='mt-5'>
                <Col xs={12}><h1 className='text3 mt-5'>{prenom} {nom}</h1></Col>
            </Row>
        </Col>
    )
}

export default Anniv;