import React, {useState} from 'react';

const Home = () => {
    const [count, setCount] = useState(2);
    return (
        <div className="center-align" style={{ marginTop: '200px' }}>
            <h3>Welcome!! Count: {count}</h3>
            <p>Check out my ssr app</p>   
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    )
}
export default {
    component: Home
}    