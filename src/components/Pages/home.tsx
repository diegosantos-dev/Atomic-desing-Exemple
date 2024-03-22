import Card from '../Organisms/Card';

const Home = () => {
  return (
    <>
      <h1>Atomic Design Home</h1>
      <Card
        imageUrl="https://picsum.photos/200/300"
        alt="Imagem Random"
        title="Tile Card"
        description="Description card here"
        buttonText="Click here"
        onButtonClick={() => alert('Hello Word')}
      />
    </>
  );
};

export default Home;
