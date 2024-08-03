/* eslint-disable react/prop-types */

import List from "../assets/List.png";
import Card from "./Card";
import DropArea from "./DropArea";

function Column({ title, cards}) {
  

  return (
    <div className="flex-col w-[22%] justify-between">
      <div className="flex justify-between w-[100%]">
        <h3 className="text-[1.2rem] font-semibold">{title}</h3>
        <img src={List} alt="" />
      </div>
      <DropArea/>
      {cards.map((card) => (
        <>
        <Card
          key={card._id}
          id={card._id}
          title={card.title}
          priority={card.priority}
          deadline={card.deadline}
          description={card.description} />
          <DropArea />
          </>
      ))}
    </div>
  );
}

export default Column;

