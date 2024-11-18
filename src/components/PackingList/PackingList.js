import { useState } from 'react';
import Item from '../Item/Item';

export default function PackingList({
  items,
  onDeleteItem,
  onTogglePacked,
  onClearList,
}) {
  const [sortedBy, setSortedBy] = useState('input');
  // console.log(sortedBy);
  let sortedItems;

  if (sortedBy === 'input') sortedItems = items;
  if (sortedBy === 'description') {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortedBy === 'packed') {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className='list'>
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.description}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
          />
        ))}
      </ul>
      <div className='actions'>
        <select
          name=''
          id=''
          value={sortedBy}
          onChange={(e) => setSortedBy(e.target.value)}
        >
          <option value='input'>sorted by input value</option>
          <option value='description'>Sorted by description</option>
          <option value='packed'>Sorted by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
