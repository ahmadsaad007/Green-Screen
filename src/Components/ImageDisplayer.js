import React from 'react';
///import firebaseDb from "../firebase";

import '../Style/ImageDisplayer.css';

const ImageDisplayer = () => {
    return (
        <div className="image-displayer">
            <div className="grid-item grid-item-1"><img src="" className='im' alt='' style={{ visibility: 'hidden' }}></img></div>
            <div className="grid-item grid-item-2"><img src="" className='im' alt='' style={{ visibility: 'hidden' }}></img></div>
            <div className="grid-item grid-item-3"><img src="" className='im' alt='' style={{ visibility: 'hidden' }}></img></div>
            <div className="grid-item grid-item-4"><img src="" className='im' alt='' style={{ visibility: 'hidden' }}></img></div>
            <div className="grid-item grid-item-5"><img src="" className='im' alt='' style={{ visibility: 'hidden' }}></img></div>
            <div className="grid-item grid-item-6"><img src="" className='im' alt='' style={{ visibility: 'hidden' }}></img></div>
            <div className="grid-item grid-item-7"><img src="" className='im' alt='' style={{ visibility: 'hidden' }}></img></div>
            <div className="grid-item grid-item-8"><img src="" className='im' alt='' style={{ visibility: 'hidden' }}></img></div>
            <div className="grid-item grid-item-9"><img src="" className='im' alt='' style={{ visibility: 'hidden' }}></img></div>
        </div>
    )
}
export default ImageDisplayer;