import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="flex flex-row items-center space-x-2">
            <img
              className="inline-block h-16 w-16 rounded-full object-cover"
              src={image}
              alt={name}
            />
            <div>
              <h4 className="text-lg font-serif font-semibold">{name}</h4>
              <p className="text-sm">{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
