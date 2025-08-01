function Card({ title, image, description, price }) {
    return (
        <div className="bg-slate-900 rounded-lg shadow-md overflow-hidden w-[350px] mx-auto">
            <img src={image} alt={title} className="w-full object-contain object-top" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{title}</h2>
                {/* <p className="text-gray-400 mt-2">{description}</p> */}
                {price && <p className="text-blue-300 mt-2">Price: ${price}</p>}
            </div>
        </div>
    );
}

export default Card;
