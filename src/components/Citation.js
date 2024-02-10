import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ProgressBar } from 'react-bootstrap';

import gif from '../assets/pics/gif.svg';

function Citation({couleur, progress}){

    return(
        <Col xs={6}>
            <Row>
                <Col xs={12}>
                    <div className={`${couleur} z-0 m-5 pb-3 border-2 border-black rounded-4`}>
                    <article className='ms-3 border border-2 border-black rounded-4 z-1 white'>
                        <p className='mx-3 text'>
                            I've missed more than 9,000 shots in my career. I've lost almost 300 games. 
                            Twenty-six times I've been trusted to take the game-winning shot and missed. 
                            I've failed over and over and over again in my life. And that is why I succeed.
                        </p>
                        <p className='me-3 text-end text'>- MICHAEL JORDAN</p>
                    </article>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={`${couleur} z-0 my-2 mx-5 pb-1 border-2 border-black rounded-4`}>
                    <figure className='ms-3'>
                        <Image src={gif} className='w-100'/>
                    </figure>
                    </div>
                </Col>
            </Row>
            <Row className='mx-5 my-4 justify-content-center'>
                <Col xs={1}><p className='text1'>01</p></Col>
                <Col xs={8}><ProgressBar now={progress} label={`${progress}%`} visuallyHidden /></Col>
                <Col xs={1}><p className='text1'>03</p></Col>
            </Row>
        </Col>
    )
}

export default Citation;