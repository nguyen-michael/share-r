import React from 'react';
// Displays the info for the items in a card-like format

// has conditional borrowing display.

const ItemCard = (props) => {

    return (
        <div>
            <h3>ITEM CARD</h3>
            <h4>{props.itemName}</h4>
            <p>belongs to {props.owner}</p>
            {props.owner === props.currentPossessor ? "" : <p>but {props.currentPossessor} is borrowing it!</p>}
            <p>{props.description}</p>
        </div>
    );
};

export default ItemCard;