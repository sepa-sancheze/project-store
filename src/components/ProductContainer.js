import React from 'react';
import { Product } from './Product';

function ProductContainer() {
    return (
        <React.Fragment>
            <div className="grid grid-cols-3 gap-4 content-start max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <Product 
                    url='img/card-top.jpg'
                    description='Descripción producto A'
                    title='Producto A'
                    price='25.00' />
            </div>
        </React.Fragment>
    );
}

export { ProductContainer };