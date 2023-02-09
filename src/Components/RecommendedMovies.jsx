import React from 'react';
import Card from './Card'
import './recommendedMovies.css'
import CardImg1 from '../assests/cardImages/cardImg1.jpg';
import CardImg2 from '../assests/cardImages/cardImg2.jpg';
import CardImg3 from '../assests/cardImages/cardImg3.jpg';
import CardImg4 from '../assests/cardImages/cardImg4.jpg';
import CardImg5 from '../assests/cardImages/cardImg5.jpg';
import CardImg6 from '../assests/cardImages/cardImg6.jpg';
import CardImg7 from '../assests/cardImages/cardImg7.jpg';
import CardImg8 from '../assests/cardImages/cardImg8.jpg';
import CardImg9 from '../assests/cardImages/cardImg9.jpg';
import CardImg10 from '../assests/cardImages/cardImg10.jpg';


const RecommendedMovies = () => {

    let cardCaptions = [
        {
            title: "Amigos",
            type: "Action/Thriller",
            cardImgSrc: CardImg1
        },
        {
            title: "Pathaan",
            type: "Action/Thriller",
            cardImgSrc: CardImg2
        },
        {
            title: "Writer Padmabhushan",
            type: "Drama/Family",
            cardImgSrc: CardImg3
        },
        {
            title: "Michael",
            type: "Action/Drama/Thriller",
            cardImgSrc: CardImg4
        },
        {
            title: "Waltair Veerayya",
            type: "Action/Drama",
            cardImgSrc: CardImg5
        },
        {
            title: "Amigos",
            type: "Action/Thriller",
            cardImgSrc: CardImg6
        },
        {
            title: "Pathaan",
            type: "Action/Thriller",
            cardImgSrc: CardImg7
        },
        {
            title: "Writer Padmabhushan",
            type: "Drama/Family",
            cardImgSrc: CardImg8
        },
        {
            title: "Michael",
            type: "Action/Drama/Thriller",
            cardImgSrc: CardImg9
        },
        {
            title: "Waltair Veerayya",
            type: "Action/Drama",
            cardImgSrc: CardImg10
        }
    ]

    return (
        <div className='recommendedMovies mt-5'>
            <h1 className='ms-5 mt-5'>Recommended Movies</h1>
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

export default RecommendedMovies