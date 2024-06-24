
const ImageList = ({images}) => {
    return (
        <div className="image-list">
            {images.map((image) => (
                <div key={image.id} className="image-container">
                    <img src={image.urls.small} alt={image.description} className="image" />
                </div>
            ))}
        </div>
    );
};

export default ImageList;