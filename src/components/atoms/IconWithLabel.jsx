// src/atoms/IconWithLabel.jsx
const IconWithLabel = ({ Icon, label }) => (
    <div className="flex flex-col text-center items-center">
        <Icon size={"50px"} color="#235633" />
        <p className="mt-1">{label}</p>
    </div>
);

export default IconWithLabel;
