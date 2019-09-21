import React from 'react';

export interface GalleryAppProps  {
    history: History
}
export const GalleryApp: React.FC<GalleryAppProps> = () => {
    return (
        <div className="App">
            this is gallery
        </div>
    );
}

