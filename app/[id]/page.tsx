import CharacterImage from "@/components/CharacterImage";
import { getCharacterList } from "@/lib/hogwartsAPI";
import Image from "next/image";
import React from "react";

const CharacterProfile = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const characterObj = await getCharacterList(id);
  console.log(characterObj);

  return (
    <div>
      {characterObj.map((item: any) => (
        <div
          className="m-4 w-full mx-auto flex flex-col items-center justify-center gap-6"
          key={item.id}
        >
          <h1 className="text-4xl text-bold pt-4 text-white">{item.actor}</h1>
          <div className="m-4 relative w-[300px] h-[300px]">
            {" "}
            <CharacterImage name={item.name} image={item.image} />
          </div>
          <div>
            <p className="text-xl font-bold">{item.name}</p>
            <p>year of Birth : {item.yearOfBirth}</p>
            <p>House : {item.house}</p>
            <p>Wizard : {item.ancestry}</p>
            <p>
              {item.gender === "female" ? "Actress" : "Actor"} : {item.actor}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterProfile;
