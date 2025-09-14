interface DestinationCardProps {
  image: string;
  title: string;
  price: string;
  href?: string;
}

const DestinationCard = ({ image, title, price, href = "#" }: DestinationCardProps) => {
  return (
    <a
      href={href}
      className="group block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {price}
        </p>
      </div>
    </a>
  );
};

export default DestinationCard;