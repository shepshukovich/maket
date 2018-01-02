'use strict';
import React from 'react';

const Home = () => {
    return (
        <div>
            <div> Hey this is how you use server side rendering!!!! </div>
            <button onClick={() => console.log("click!")}>Press me!
            </button>
        </div>
    );
};

export default {
    component:  Home
};
