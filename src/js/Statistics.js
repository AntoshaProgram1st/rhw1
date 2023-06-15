import { generateRandomColor } from './RandomColor'
export const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="statistics__title">{title}</h2>}
      <ul
        className="statistics__list">
        {stats.map(item => (
          <li
            key={item.id}
            className="statistics__item"
            style={{
              backgroundColor: generateRandomColor()
            }}>
            <span className="statistics__label">{item.label}</span>
            <span className="statistics__percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};