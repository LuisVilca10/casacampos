// src/atoms/ClientAvatar.jsx
const ClientAvatar = ({ img, name, country }) => (
  <div className="flex gap-x-4">
    <img
      src={img}
      alt={name}
      className="inline-block h-[58px] w-[58px] rounded-full object-cover object-center"
    />
    <div>
      <h5 className="text-xl font-semibold text-slate-800">{name}</h5>
      <p className="text-xs uppercase font-bold text-slate-500 mt-0.5">{country}</p>
    </div>
  </div>
);

export default ClientAvatar;
