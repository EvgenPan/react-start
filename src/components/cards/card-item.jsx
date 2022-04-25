import React from 'react';
import './card-item.css'
const CardItem = (props) => {
    console.log(props)
    return (
        <div className="wrapper">
            <div className="card_main">
            <div className="img_wrapper">
                <img className="card_img" src={props.card.src} alt={`card_img-${props.card.id}`}/>
            </div>
            <div className="content_card">
                <h2 className="title">{props.card.title}</h2>
                <p>{props.card.description}</p>
                <a href={props.card.link} className="card_button">Подробнее</a>
            </div>
            </div>
        </div>
    );
};
export default CardItem;