const Card = ({ image, title, subtitle, github }) => {
  return (
    <div className="m-4 block max-w-sm overflow-hidden rounded-lg bg-black/20 transition-all hover:scale-105 hover:bg-black/40">
      <div className="relative">
        {/* Image wrapped with GitHub link */}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-64 w-full object-cover"
            src={image}
            alt={title}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x300?text=Project+Image';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </a>

        {/* Text area (outside the link to avoid full box click) */}
        <div className="relative flex h-full flex-col justify-end p-6">
          <h2 className="mb-2 text-2xl font-bold">{title}</h2>
          <p className="text-sm font-medium">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
