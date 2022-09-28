import {useEffect, useState} from 'react'

const url = 'https://jsonplaceholder.typicode.com/posts';


function DataFetching() {
    const [posts, setPosts] = useState([])
    const [error, setError] = useState('');

    useEffect(() => {
        console.log("Hello")
        fetch(url)
            .then((response) => {
                if (response.ok)
                    return response.json();
                throw new Error('something went wrong while requesting posts');
            })
            .then((posts) => {
                setPosts(posts)
                console.log("Hello 1")
                console.log(posts)
            })
            .catch(err => {
                console.log(err)
            })
            .catch((error) => setError(error.message));
    }, [])

    return (<div>
        <ul>
            {posts.map((post => <li key={post.id}>{post.title}</li>))}
        </ul>
    </div>)
}

export default DataFetching
