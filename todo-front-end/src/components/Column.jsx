/* eslint-disable react/prop-types */

import List from "../assets/List.png";
import Card from "./Card";

function Column({ title, cards }) {
  const filteredCards = cards.filter((c) => c.status === title);
  console.log(title);
  console.log(filteredCards);

  return (
    <div className="flex-col w-[22%] justify-between">
      <div className="flex justify-between w-[100%]">
        <h3 className="text-[1.2rem] font-semibold">{title}</h3>
        <img src={List} alt="" />
      </div>
      {filteredCards.map((card) => (
        <Card
          key={card.title} // Adding a key prop for list rendering
          title={card.title}
          priority={card.priority}
          deadline={card.deadline}
          description={card.description}
        />
      ))}
    </div>
  );
}

export default Column;

