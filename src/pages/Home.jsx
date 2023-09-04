import React from 'react';



const Home = () => {
    return (
        <div>
            {
                Array.from([100]).map((item, i) => (
                    <div>
                        {item}
                    </div>
                ))
            }
        </div>
    );
};

export default Home;