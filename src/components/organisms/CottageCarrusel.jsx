import CottageCard from './CottageCard';

const CottageCarrusel = ({ data, loading, error }) => {
  const cottages = data?.cottages?.data || [];

  return (
    <div className="flex flex-col gap-8">
      {loading ? (
        [...Array(2)].map((_, i) => <CottageCard key={i} index={i} loading={true} />)
      ) : cottages.length > 0 ? (
        cottages.map((producto, index) => (
          <CottageCard key={producto.id} producto={producto} index={index} />
        ))
      ) : (
        <p>No hay cabañas disponibles</p>
      )}
    </div>
  );
};

export default CottageCarrusel;
