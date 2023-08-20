import { getCharacterList } from '@/lib/hogwartsAPI'
import Image from 'next/image'
import React from 'react'


const CharacterProfile = async ({params}: {params : {id: string}}) => {
  const {id} = params
  const characterObj = await getCharacterList(id)
  console.log(characterObj);
  

   
    


  return (
    <div>
      <h1 className='text-4xl text-bold pt-4 text-white'>{id}</h1>
    <div className='m-4'>
    <Image src={characterObj.image } alt='profile-character' width={200} height={200} />
    </div>

    </div>
  )
}

export default CharacterProfile