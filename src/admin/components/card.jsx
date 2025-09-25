import { Link } from "react-router-dom";

import DelayedLoading from "../utils/DelaySkeleton"

function Card({ icon: Icon, title, value, color, card_container_classes, loading = false }) {

  const showLoading = DelayedLoading(loading, 1000);

  if (showLoading) {
    return (
      <div
        className={`card bg-slate-800 rounded-lg shadow-md overflow-hidden w-full mx-auto ${card_container_classes ?? ""}`}
      >
        {/* Header skeleton */}
        <div className="flex flex-row items-center border-b bg-slate-950 px-4 py-2">
          <div className="h-6 w-6 bg-gray-700 animate-pulse rounded mr-2" />
          <div className="h-5 w-32 bg-gray-700 animate-pulse rounded" />
        </div>

        {/* Content skeleton */}
        <div className="px-4 py-2 space-y-2">
          <div className="h-6 bg-gray-700 animate-pulse rounded w-1/2" />
          <div className="h-4 bg-gray-700 animate-pulse rounded w-3/4" />
          <div className="h-4 bg-gray-700 animate-pulse rounded w-2/3" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`card bg-slate-800 rounded-lg shadow-md overflow-hidden w-full mx-auto group hover:shadow-lg transition-shadow ${card_container_classes ?? ""}`}
    >
      <div className="card-header flex flex-row items-center border-b text-lg font-semibold text-stone-100 bg-slate-950 px-4 py-2">
        {Icon && <Icon className={`icon mr-2 text-xl ${color || "text-stone-100"}`} />}
        <h2 className="card-title">{title}</h2>
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
