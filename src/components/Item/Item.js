export default function Item({ item, onDeleteItem, onTogglePacked }) {
  const { id, description, quantity, packed } = item;
  return (
    <li>
      <input
        type='checkbox'
        value={packed}
        onChange={() => onTogglePacked(id)}
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  );
}
