import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ProgressBar } from 'react-bootstrap';

import gif from '../assets/pics/gif.svg';

function Citation({ couleur, progress, index, total, citation }) {
    return (
        <Col xs={6}>
            <Row>
                <Col xs={12}>
                    <div className={`${couleur} z-0 m-5 pb-3 border-2 border-black rounded-4`}>
                        <article className='ms-3 border border-2 border-black rounded-4 z-1 white'>
                            <p className='mx-3 text'>{citation.text}</p>
                            <p className='me-3 text-end text'>- {citation.auteur}</p>
                        </article>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={`${couleur} z-0 my-2 mx-5 pb-1 border-2 border-black rounded-4`}>
                        <figure className='ms-3'>
                            <Image src={gif} className='w-100' />
                        </figure>
                    </div>
                </Col>
            </Row>
            <Row className='mx-5 my-4 justify-content-center'>
                <Col xs={1}><p className='text1'>0{index}</p></Col>
                <Col xs={8}><ProgressBar now={progress} label={`${progress}%`} visuallyHidden /></Col>
                <Col xs={1}><p className='text1'>0{total}</p></Col>
            </Row>
        </Col>
    );
}

export default Citation;
