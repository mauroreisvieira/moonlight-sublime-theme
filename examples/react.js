import React from 'react';

function Counter({ name }) {
    const [count, setCount] = useState(0);

    function onClick() {
        setCount(count => count + 1);
    }

    return (
        <div>
            <h1
                style={{
                    color: '#f00',
                    fontSize: 24,
                }}
            >
                {name}'s count: {count}
            </h1>
            <button onClick={onClick}>+</button>
        </div>
    );
}
