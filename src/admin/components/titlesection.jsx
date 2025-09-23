function TitleSection({ title, subtitle }) {
  return (
    <div className="title-section bg-slate-950 m-auto p-4 mb-6 align-center text-center shadow-md">
      <h1 className="title-section-title text-2xl font-bold mb-1 text-gray-50">{title}</h1>
      {subtitle && <p className="title-section-subtitle text-gray-500">{subtitle}</p>}
    </div>
  );
}

export default TitleSection;