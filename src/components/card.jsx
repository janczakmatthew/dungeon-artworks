export default function Card({ title, image, description, price, saleprice, onClick }) {
  return (
    <div className="bg-slate-900 rounded-lg shadow-md overflow-hidden w-full mx-auto group hover:shadow-lg transition-shadow">
      <div className="aspect-[4/3] bg-black overflow-hidden">
        <img
          src={image}
          alt={title || 'Artwork Image'}
          className="w-full h-full object-contain object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-stone-100">{title}</h2>

        {description && (
          <p className="text-gray-400 text-sm mt-2 line-clamp-2">{description}</p>
        )}

        <div className="flex items-center justify-between mt-4">
            {price && saleprice ? (
                <div className="flex items-center">
                    <span className="text-blue-400 font-medium line-through mr-2">${price}</span>
                    <span className="text-red-400 font-semibold">${saleprice}</span>
            </div>
            ) : (
                <span className="text-blue-400 font-semibold">${price}</span>
                )}
          <a
            href="#link"
            className="bg-blue-600 text-white px-4 py-2 rounded transition-colors invisible group-hover:visible"
          >
            View Details
          </a>
        </div>
      </div>
    </div>
  );
}
