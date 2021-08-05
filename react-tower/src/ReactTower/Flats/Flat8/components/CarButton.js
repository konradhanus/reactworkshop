import react from "react";

export const CarButton = () => {
  const handleClick = () => {
    console.log('car');
  }

  return (
    <div
      onClick={handleClick}
      style={{
        height: "40px",
        width: "40px",
        backgroundImage: 'url("https://media.istockphoto.com/vectors/car-line-icon-isolated-on-white-background-vector-id1133431051")',
        backgroundSize: "cover",
        borderRadius: "20px",
        marginTop: "20px",
        marginLeft: "40%",
        transform: 'rotate(-90deg)'
      }}
    />
  );
};

export default CarButton;
