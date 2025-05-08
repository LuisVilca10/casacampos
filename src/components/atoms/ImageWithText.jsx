// src/atoms/ImageWithText.jsx
const ImageWithText = ({ src, alt, title, text }) => (
    <div className="flex space-x-4 p-9 items-center">
        <div className="text-primary border-r p-4">
            <div className="rounded-md h-44 w-56 text-center flex items-center justify-center">
                <img src={src} alt={alt} />
            </div>
        </div>
        <div className="flex flex-wrap">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-lg">{text}</p>
        </div>
    </div>
);

export default ImageWithText;
