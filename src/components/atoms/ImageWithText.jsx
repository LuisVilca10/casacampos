// src/atoms/ImageWithText.jsx
const ImageWithText = ({ src, alt, title, text }) => (
    <div className="flex space-x-4 md:p-9 items-center md:mt-0 mt-9">
        <div className="text-primary border-r md:p-4">
            <div className="rounded-md md:h-44 md:w-56 h-36 w-40 text-center flex items-center justify-center">
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
