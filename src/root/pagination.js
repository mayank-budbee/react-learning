import React, { useState, useEffect } from 'react';
import Post from './Post'

const url = 'https://jsonplaceholder.typicode.com/posts';

export default function App() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (response.ok) return response.json();
                throw new Error('something went wrong while requesting posts');
            })
            .then((posts) => {
                setPosts(posts)
                console.log("Hello 1")
                // console.log(posts)
            })
            .catch((error) => setError(error.message));

    }, []);

    // Using async working
    // useEffect(() => {
    //     // declare the async data fetching function
    //     const fetchData = async () => {
    //         // get the data from the api
    //         const data = await fetch(url);
    //         // convert the data to json
    //         const json = await data.json();
    //         setPosts(json);
    //         console.log(json)
    //     }
    //
    //     // call the function
    //     fetchData()
    //         // make sure to catch any error
    //         .catch(console.error);;
    //
    // }, []);

    console.log(posts.length)
    if (error) return <h1>{error}</h1>;

    return <div><ul>
        {posts.map((post => <li key={post.id}>{post.title}</li>))}
    </ul>
        </div>;
}
