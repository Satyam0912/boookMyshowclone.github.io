import React from 'react';
import Card from './Card'
import CardImg1 from '../assests/LifeEventImages/liveevent1.png';
import CardImg2 from '../assests/LifeEventImages/liveevent2.png';
import CardImg3 from '../assests/LifeEventImages/liveevent3.jpg';
import CardImg4 from '../assests/LifeEventImages/liveevent4.png';
import CardImg5 from '../assests/LifeEventImages/liveevent5.png';
import CardImg6 from '../assests/LifeEventImages/liveevent6.png';
import CardImg7 from '../assests/LifeEventImages/liveevent7.png';
import CardImg8 from '../assests/LifeEventImages/liveevent8.png';
import CardImg9 from '../assests/LifeEventImages/liveevent9.png';
import CardImg10 from '../assests/LifeEventImages/liveevent10.png';

const Bestliveevent = () => {

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
        <div className='bestliveevent mt-2'>
            <h1 className='ms-5 mt-5'>The Best Of Live Events</h1>
            <div className='innerbox d-flex flex-row'>
                {
                    cardCaptions.map((element) => {
                        return <Card cardImgSrc={element.cardImgSrc} />
                    })
                }
            </div>
        </div>
    )
}

export default Bestliveevent