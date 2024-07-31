function Rating() {

  return (
    <ul className="rating">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <li>
          <input
            type="radio"
            name="rating"
            value={num}
          />
          <label for={`num${num}`}>{num}</label>
        </li>
      ))}
    </ul>
  );
}

export default Rating;