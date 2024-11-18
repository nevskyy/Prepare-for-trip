export default function Stats({ items }) {
  if (!items.length) {
    return (
      <footer className='stats'>
        <p>
          <em>Start adding some items to your packing list</em>
        </p>
      </footer>
    );
  }
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const persantage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className='stats'>
      {persantage === 100 ? (
        <em>You got everything! Ready to go ✈</em>
      ) : (
        <em>{`🎁 You have ${numItems} items on your list, and you already packed ${numPacked} (${persantage}%)`}</em>
      )}
    </footer>
  );
}
