export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your Packing list 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      {percentage === 100
        ? "You packed everthing, time to go✈️"
        : `💼You have ${numItems} items in your list, and you already packed 
          ${numPacked} (${percentage}%)`}
    </footer>
  );
}
