export default function Stats({ items }) {
  // Early return as conditional rendering
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list🚀</em>
      </p>
    );

  // Derived State
  const numItems = items.length;
  // Derived State
  const numsParked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numsParked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! You are good to go✈"
          : `👜 You have ${numItems} item${
              numItems > 0 ? "s" : ""
            } on your list, and
            you already packed ${numsParked} (${percentage}%)`}
      </em>
    </footer>
  );
}
