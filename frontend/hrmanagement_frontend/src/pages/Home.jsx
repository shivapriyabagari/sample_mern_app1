import img1 from '../assets/img1.avif';
import img2 from '../assets/img2.avif';
import img3 from '../assets/img3.jpg';

function Home() {
    const images = [img1, img2, img3];

    return (
        <div>
            <h1>Home page</h1>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Home banner ${index + 1}`}
                        style={{ width: 200, height: 150, objectFit: 'cover' }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;