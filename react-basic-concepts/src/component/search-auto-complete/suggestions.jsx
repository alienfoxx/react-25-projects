export default function Suggestion({ data, handeClick }) {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => (
            <li onClick={handeClick} key={index} className="item">
              {item}
            </li>
          ))
        : null}
    </ul>
  );
}
