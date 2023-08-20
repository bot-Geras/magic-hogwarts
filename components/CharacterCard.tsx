import Link from "next/link";
import React from "react";

interface CharacterCardProps {
    name: string;
    id: string;
    dateOfBirth: string
}
const CharacterCard = ({name, id, dateOfBirth}: CharacterCardProps) => {
  return (
    <Link
      href={id}
      className="group rounded-lg border border-transparent m-3 dark:border-gray-500 px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      
      key={name + 'card'}
    >
      <h2 className={` text-2xl font-semibold`}>{name}</h2>
      <p className="text-sm">Date of Birth: {dateOfBirth?.length ? dateOfBirth: "unknown"}</p>

    </Link>
  );
};

export default CharacterCard;
