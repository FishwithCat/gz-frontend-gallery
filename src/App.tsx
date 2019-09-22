import React from 'react';
import Gallery from './components/gallery';
import { generateGalleryCarsStub } from './stub/galleryStub';


const cards = generateGalleryCarsStub()
export interface GalleryAppProps  {
    history?: History
}

export const GalleryApp: React.FC<GalleryAppProps> = () => {
    return (
        <div className="gallery-app">
            <Gallery cards={cards} colNum={5} className="waterfall-gallery" />
        </div>
    );
}

