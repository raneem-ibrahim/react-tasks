import myimg from "./photo-1488372759477-a7f4aa078cb6.avif";
export default function Task13() {
  const cards = [
    {
      image: myimg,
      titel: "abdkakash",
      age: "27",
    },
    {
      image: myimg,
      titel: "raneem",
      age: "23",
    },
    {
      image: myimg,
      titel: "rawan",
      age: "35",
    },
    {
      image: myimg,
      titel: "mohamd",
      age: "19",
    },
  ];
  return (
    <div style={{ display: "flex" ,justifyContent:"space-evenly",  }}>
      {cards.map((card) => (
        <div style={{border:"1px solid gray", margin:"10px", padding:"10px", borderRadius:"10px"}}>
          <img
            src={card.image} alt="error" style={{ width: "100px", height: "100px" }} />
          <h3>{card.titel}</h3>
          <p>{card.age}</p>
        </div>
      ))}
    </div>
  );
}