import React from 'react';
import { Product } from './Product';

function ProductContainer() {
    return (
        <React.Fragment>
            <div className="grid grid-cols-3 gap-4 content-start">
                <Product url='img/card-top.jpg'/>
            </div>
        </React.Fragment>
    );
}

export { ProductContainer };