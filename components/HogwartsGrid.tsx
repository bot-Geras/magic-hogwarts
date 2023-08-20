"use client";

import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import CharacterCard from "./CharacterCard";

interface HogwartsGridProps {
  characterList: any;
}
const HogwartsGrid = ({ characterList }: HogwartsGridProps) => {
  const [searchText, setSearchText] = useState("");

  //console.log(characterList);
  const searchFilter = (characterList: any) => {
    return characterList.filter(
      (character: any) =>
        character.name.toLowerCase().includes(searchText.toLowerCase()) ||
        character.house.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  const filteredCharacterList = searchFilter(characterList);

  return (
    <>
      <div>
        <h3 className="text-2xl py-6 text-center">Search for your Favourite Character!</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="pokemonName">Search</Label>
          <Input
            type="text"
            value={searchText}
            autoComplete="off"
            onChange={(e) => setSearchText(e.target.value)}
            id="pokemonName"
            placeholder="Name and House..."
          />
        </div>
        <h3 className="text-3xl pt-12 pb-6 text-center">
          Character Collection
        </h3>
      </div>
      <div className="mb-32 grid text-center  lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3  lg:text-left">
        {filteredCharacterList.map((character: any) => {
          return (
            <CharacterCard
              name={character.name}
              id={character.id}
              dateOfBirth={character.dateOfBirth}
            />
          );
        })}
      </div>
    </>
  );
};

export default HogwartsGrid;
