import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = (props) => {
    /* Original Code with destructuring
    //original line: const images = props.images.map((image) =>
    const images = props.images.map(({description, id, urls}) => { 
        // original line without destructuring: return <img key={image.id} src={image.urls.regular} />
        return <img alt={description} key={id} src={urls.regular} />; 
        
    });
    */
    //console.log(props);
     const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />;
    });
    
    return <div className="image-list">{images}</div>
};

export default ImageList;