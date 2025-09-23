import {Link} from 'react-router-dom';

function Card({ icon:Icon, title, value, color, card_container_classes }) {
  return (
    <div className={`card bg-slate-800 rounded-lg shadow-md overflow-hidden w-full mx-auto group hover:shadow-lg transition-shadow ${card_container_classes ?? ""}`} >
      <div className="card-header flex flex-row items-center border-b text-lg font-semibold text-stone-100 bg-slate-950 px-4 py-2">
        {Icon && <Icon className={`icon mr-2 text-xl ${color || 'text-stone-100'}`} />}
        <h2 className="card-title" >{title}</h2>
      </div>
      <div className="card-content px-4 py-2">
        {Array.isArray(value) ? (
          <ul className="space-y-1">
            {value.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.label}</span>
                {item.link ? (
                  <Link
                    to={item.link}
                    className="font-bold text-blue-400 hover:underline"
                  >
                    {item.value}
                  </Link>
                ) : (
                  <span className="font-bold">{item.value}</span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-3xl font-bold text-stone-100">{value}</p>
        )}
      </div>
    </div>
  );
}

export default Card;