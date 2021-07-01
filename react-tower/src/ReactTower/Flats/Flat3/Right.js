import TvRemote from './components/TvRemote';

function Right() {
    return (
        <div>
            <TvRemote />
            <img
                alt='Mona Lisa'
                src='https://polarisdiagram.com/wp-content/themes/yootheme/cache/Mona_Lisa-3e89dc5d.jpeg'
                style={{
                    marginTop: '50px',
                    width: '50px',
                    transform: 'rotate(-90deg)',
                }}
            />
        </div>
    );
}

export default Right;
