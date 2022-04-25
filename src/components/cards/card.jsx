import React from 'react';
import {useState} from "react";
import CardItem from "./card-item";
import './card.css'


const Card = () => {
    const [cards] = useState([
        {id:1, src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdoLv6J9af26BW3AQqGyDWYS1n1H7j1I2aIw&usqp=CAU', title:'Отличная погода!' ,description:'Синоптики обещают отличную погоду в течении всего года.',
            link:'#'},
        {id:2, src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTViibRN3X5LpUGCdtD7OtrSDbo318egZ5k9g&usqp=CAU', title:'Прокат лодок' ,description:'Для удобства наших гостей мы организуем прокат лодок',
            link:'#'},
        {id:3, src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW1yTGeASmM08hVlSDliXnZd0LvriSl8UBuQ&usqp=CAU', title:'Открытие осеннего сезона' ,description:'В минувшую субботу мы открыли осенний сезон!',
            link:'#'}
    ]);

    return (
        <div className="card_container">
            {cards.map(card => <CardItem card={card} key={card.id}/>)

            }
        </div>
    );
};

export default Card;