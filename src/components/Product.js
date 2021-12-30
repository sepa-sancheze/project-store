import React from 'react';


function Product(props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={props.url} alt="Sunset in the mountains"/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{ props.title }</div>
                <p className="text-gray-700 text-base mb-2">
                    { props.description }
                </p>
                <p className='font-bold text-xl'>
                    Q. { props.price } 
                </p>
            </div>
        </div>
    );
}

export { Product };