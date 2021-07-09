import React from 'react';

class Tv extends React.Component {
    render() {
        return (
            <div style={{
                height: '80px',
                width: '120px',
                margin: '20px auto',
                backgroundColor: 'black',
            }}>
                <div style={{ backgroundColor: 'black' }} />
            </div>
        );
    }
}

export default Tv;
