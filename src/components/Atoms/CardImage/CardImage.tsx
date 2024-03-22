interface CardImageProps {
  imageUrl: string;
  alt: string;
}

const CardImage = ({ imageUrl, alt }: CardImageProps) => {
  return <img src={imageUrl} alt={alt} className="card-img-top" />;
};

export default CardImage;
