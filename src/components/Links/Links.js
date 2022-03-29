import React from 'react';

const Links = (props) => {
    const{name,link} = props.route
    return (
        <div className='mr-16'>
            <li><a href={link}>{name}</a></li>
        </div>
    );
};

export default Links;