interface CardActionProps {
  buttonText: string;
  onClick: () => void;
}

const CardAction = ({ buttonText, onClick }: CardActionProps) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default CardAction;
