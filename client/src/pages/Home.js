import React from 'react';
import Feed from '../components/Feed';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_ITEMS } from '../utils/queries';

const Home = () => {

console.log("Home.js");
    return(
        <main>
            <Feed />
        </main>
    )
}

export default Home;