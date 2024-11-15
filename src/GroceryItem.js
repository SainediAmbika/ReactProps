import React from 'react';

function GroceryItem(props) {
    // const items = ['Eggs', 'Banana', 'Strawberry', 'Bread'];
    const itemslist = props.items
    function handleClick(item) {
        alert(`${item} has been added to the cart!`);
    }

    return (
        <div>
            {itemslist.map((item, index) => (

                <><button key={index} onClick={() => handleClick(item)}>{item}
                </button><p></p></>

            ))}
        </div>);
}

export default GroceryItem