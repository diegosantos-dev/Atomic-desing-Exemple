import { CardImage } from '../../Atoms';
import { CardBody, CardAction } from '../../Molecules';

interface CardProps {
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

const Card = ({
  imageUrl,
  alt,
  title,
  description,
  buttonText,
  onButtonClick,
}: CardProps) => {
  return (
    <div className="card" style={{ border: '1px solid black', width: '35%' }}>
      <CardImage imageUrl={imageUrl} alt={alt} />
      <CardBody title={title} description={description} />
      <CardAction buttonText={buttonText} onClick={onButtonClick} />
    </div>
  );
};

export default Card;
