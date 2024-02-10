import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import gif from '../assets/pics/gif.svg';

function Citation(){

    return(
        <Col xs={6}>
            <Row>
                <Col xs={12}>
                    <div className='rose z-0 mx-5 my-4 pb-3 border-2 border-black rounded-4'>
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
                    <div className='rose z-0 my-2 mx-5 pb-2 border-2 border-black rounded-4'>
                    <figure className='ms-3'>
                        <Image src={gif} className='w-100'/>
                    </figure>
                    </div>
                </Col>
            </Row>
            <Row className='mx-5 my-4 justify-content-center'>
                <Col xs={1}><p className='text1'>01</p></Col>
                <Col xs={8}>
                    <div className="progress m-3 mt-5" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        <div className="progress-bar w-75"></div>
                    </div>
                </Col>
                <Col xs={1}><p className='text1'>03</p></Col>
            </Row>
        </Col>
    )
}

export default Citation;