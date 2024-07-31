export default function Stats({ item }) {
  if (!item.length)
    return (
      <p className="stats">
        <em>Start adding some item to your packing list </em>
      </p>
    );
  const numItem = item.length;
  const numPacked = item.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItem) * 100);
  return (
    <footer className="stats">
      {percentage !== 100 ? (
        <em>
          👜you have {numItem} item on your list, and you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      ) : (
        <em>you got everthing !Ready to go ✈️</em>
      )}
    </footer>
  );
}
