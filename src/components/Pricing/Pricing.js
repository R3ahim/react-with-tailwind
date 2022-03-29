import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {
    const pricingOption =[
        {id:1,name:'Free',price:0,benefits:[
            'lifetime free',
            'unlimlited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id:2,name:'Regular',price:99.9,benefits:[
            'Everything on Regular',
            'unlimlited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
        {id:3,name:'Premium',price:19.99, benefits:[
            'every thing on premium',
            'unlimlited deals',
            'localized deals',
            'fantastic deals',
            'crazy deals'
        ]},
    ]
    return (
        <div className='bg-indigo-400 p-4 mt-5'>
            <h1 className='text-7xl font-mono  text-red-400'>Best delas of the year</h1>

            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus recusandae ratione asperiores vel atque vero similique quos voluptatem voluptate hic.</p>
           
           <div className='grid md:grid-cols-3 gap-3'>
                         
            {
                pricingOption.map(option=><PricingOption 
                key={option.id}
                option={option}
                ></PricingOption>)
            }
           </div>
        </div>
    );
};

export default Pricing;