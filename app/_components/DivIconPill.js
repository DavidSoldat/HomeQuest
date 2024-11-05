export default function DivIconPill(price, type) {
  return (
    <button
      className={type === 'sale' ? 'property-pill' : 'property-pill-rent'}
    >
      <div className="pill-text">{price}</div>
    </button>
  );
}
