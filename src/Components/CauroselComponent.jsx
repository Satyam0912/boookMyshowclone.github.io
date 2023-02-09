import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assests/courselImages/coroselImg1.jpg';
import img2 from '../assests/courselImages/coroselImg2.jpg';
import img3 from '../assests/courselImages/coroselImg3.jpg';
import img4 from '../assests/courselImages/coroselImg4.jpg';

function CauroselComponent() {
    return (
        <Carousel>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="img1"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="img2"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img3}
                    alt="img3"
                />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default CauroselComponent;