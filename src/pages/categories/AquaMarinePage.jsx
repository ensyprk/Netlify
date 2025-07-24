import { useEffect, useState } from 'react';
import '../../styles/CategoryPage.css';

const AquaMarinePage = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Burada API'den veya statik olarak görselleri yükleyebilirsiniz
        const loadImages = async () => {
            // Örnek görsel verisi
            const sampleImages = [
                { id: 1, src: '/images/aqua-marine-1.jpg', alt: 'Aqua Marine Ürün 1' },
                { id: 2, src: '/images/aqua-marine-2.jpg', alt: 'Aqua Marine Ürün 2' },
                // Diğer görseller...
            ];
            setImages(sampleImages);
        };

        loadImages();
    }, []);

    return (
        <div className="category-page">
            <h1>Aqua Marine Ürünleri</h1>
            <div className="image-gallery">
                {images.map((image) => (
                    <div key={image.id} className="image-item">
                        <img src={image.src} alt={image.alt} />
                        <p>{image.alt}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AquaMarinePage;