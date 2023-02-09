import React from 'react';
import Card from './Card';
import CardImg1 from '../assests/Premire/premire1.jpg';
import CardImg2 from '../assests/Premire/premire2.jpg';
import CardImg3 from '../assests/Premire/premire3.jpg';
import CardImg4 from '../assests/Premire/premire4.jpg';
import CardImg5 from '../assests/Premire/premire5.jpg';
import CardImg6 from '../assests/Premire/premire6.jpg';
import CardImg7 from '../assests/Premire/premire7.jpg';
import CardImg8 from '../assests/Premire/premire8.jpg';
import CardImg9 from '../assests/Premire/premire9.jpg';
import CardImg10 from '../assests/Premire/premire10.jpg';

const Premiere = () => {

  let cardCaptions = [
    {
      cardImgSrc: CardImg1
    },
    {
      cardImgSrc: CardImg2
    },
    {
      cardImgSrc: CardImg3
    },
    {
      cardImgSrc: CardImg4
    },
    {
      cardImgSrc: CardImg5
    },
    {
      cardImgSrc: CardImg6
    },
    {
      cardImgSrc: CardImg7
    },
    {
      cardImgSrc: CardImg8
    },
    {
      cardImgSrc: CardImg9
    },
    {
      cardImgSrc: CardImg10
    }
  ]

  return (
    <div className='premiere'>
      <h1 className='ms-5 mt-5'>P R E M I E R E</h1>
      <div className='innerbox d-flex flex-row'>
        {
          cardCaptions.map((element) => {
            return <Card captionTitle={element.title} captionType={element.type} cardImgSrc={element.cardImgSrc} />
          })
        }
      </div>
    </div>
  )
}

export default Premiere