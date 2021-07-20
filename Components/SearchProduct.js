import Header from './Header';
import React, { useState } from 'react';
function SearchProduct() {
    return (
        <>
            <Header />
            <div className="col-sm-6 offset-sm-3">
            <h1>Search Product</h1>
            <input className="form-control" placeholder="Search Product"/>
            </div>

        </>
    )
}
export default SearchProduct;