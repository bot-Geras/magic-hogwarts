import HogwartsGrid from "@/components/HogwartsGrid";

import { getCharacterLists } from "@/lib/hogwartsAPI";
export default async function Home() {
  const characterList = await getCharacterLists();

  return <HogwartsGrid characterList={characterList} />;
}
