// pages/categories/AntikMarinPage.jsx

import { useEffect, useState } from 'react';
import '../../styles/CategoryPage.css';

// 1. Lightbox kütüphanesini ve stil dosyasını import ediyoruz
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const AntikMarinPage = () => {
    const [images, setImages] = useState([]);

    // 2. Lightbox'ın açık/kapalı durumunu ve hangi resimde olduğunu takip etmek için state'ler
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const loadImages = async () => {
            // Not: 'id' değerleri benzersiz olacak şekilde düzeltildi.
            const sampleImages = [
                { id: 1, src: '/images/IMG-20250723-WA0018.jpg', alt: 'Antik Marin Ürün 1' },
                { id: 2, src: '/images/IMG-20250723-WA0019.jpg', alt: 'Antik Marin Ürün 2' },
                { id: 3, src: '/images/IMG-20250723-WA0020.jpg', alt: 'Antik Marin Ürün 3' },
                { id: 4, src: '/images/IMG-20250723-WA0021.jpg', alt: 'Antik Marin Ürün 4' },
                { id: 5, src: '/images/IMG-20250723-WA0022.jpg', alt: 'Antik Marin Ürün 5' },
                { id: 6, src: '/images/IMG-20250723-WA0023.jpg', alt: 'Antik Marin Ürün 6' },
                { id: 7, src: '/images/IMG-20250723-WA0024.jpg', alt: 'Antik Marin Ürün 7' },
                { id: 8, src: '/images/IMG-20250723-WA0025.jpg', alt: 'Antik Marin Ürün 8' },
                { id: 9, src: '/images/IMG-20250723-WA0026.jpg', alt: 'Antik Marin Ürün 9' },
                { id: 10, src: '/images/IMG-20250723-WA0027.jpg', alt: 'Antik Marin Ürün 10' },
                // ... diğer görseller de benzersiz id'lerle devam etmeli
            ];
            setImages(sampleImages);
        };

        loadImages();
    }, []);

    // 3. Resme tıklandığında çalışacak fonksiyon
    const handleImageClick = (imageIndex) => {
        setIndex(imageIndex); // Hangi resme tıklandığını ayarla
        setOpen(true);       // Lightbox'ı aç
    };

    return (
        <> {/* Bileşeni bir fragment (<>) içine alıyoruz çünkü Lightbox'ı dışarıya ekleyeceğiz */}
            <div className="category-page">
                <h1>Antik Marin</h1>
                <div className="image-gallery">
                    {images.map((image, idx) => (
                        // 4. Resme tıklandığında handleImageClick fonksiyonunu çağırıyoruz
                        <div
                            key={image.id}
                            className="image-item"
                            onClick={() => handleImageClick(idx)}
                        >
                            <img src={image.src} alt={image.alt} />
                            <p>{image.alt}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 5. Lightbox bileşeni. open state'i true olunca ekranda belirir. */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={images}
                index={index}
            />
        </>
    );
};

export default AntikMarinPage;