import React from 'react';
import Card from './card';

function Properties(props) {
    const properties = props.data.categories[0].list
    return (
        <div className="card-columns">
            {
                properties.map((item) => {
                    return <Card {...item} key={item.id}/>
                })
            }
        </div>
    )
}

export default Properties;