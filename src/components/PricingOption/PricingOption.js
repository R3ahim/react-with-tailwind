
import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifit from '../Benifit/Benifit';


const PricingOption = (props) => {
    const {name,price ,benefits} = props.option
    return (
        <div className='bg-white p-4 rounded-lg'>
            <h2 className='bg-indigo-200 py-2 text-2xl font-medium '>{name}</h2>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold text-gray-500'>/mo</span>
            </p>
            <div>
                <h3 className='text-xl font-bold text-left'>Benefits: </h3>
               {
                   benefits.map(benifit =><Benifit
                    benifit={benifit}
                   ></Benifit>)
               }
            </div>
        <button className= ' w-full hover:text-white  font-bold bg-green-500 rounded-lg p-2 mt-4 text-lg flex justify-center items-center'>
            Buy now <ArrowRightIcon className='w-6 ml-3'></ArrowRightIcon>
        </button>
        </div>
    );
};

export default PricingOption;