import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
   staticContext.notFound = true;
    return <h1>Ooooops, this page does not exist...</h1>
};



export default {
    component: NotFoundPage
}
