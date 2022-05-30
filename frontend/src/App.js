import React from 'react';
import Products from './components/products/Products';

function App() {
    return (
        <div className="grid-container">
            <header className="row">
                <div><a className="brand" href="/">UNION</a></div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
               <Products/>
            </main>
            <footer className="row center">
                All rights reserved
            </footer>
        </div>
    );
}

export default App;
