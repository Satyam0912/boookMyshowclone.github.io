import Card from 'react-bootstrap/Card';

function BasicExample({ captionTitle, captionType, cardImgSrc, key }) {

    return (
        <div className='mycard m-5' key={Math.random() * 10000000}>
            <Card.Img variant="top" src={cardImgSrc} style={{ height: '50vh', width: 'auto' }} />
            <Card.Body>
                <Card.Title>{captionTitle ? captionTitle : ''}</Card.Title>
                <Card.Text>
                    {captionType ? captionType : ''}
                </Card.Text>
            </Card.Body>
        </div >
    );
}

export default BasicExample;