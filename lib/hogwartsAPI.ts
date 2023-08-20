const HOGWARTS_CHARACTER_API = "https://hp-api.onrender.com/api"
// getCahracterList

export const getCharacterLists = async () => {
    const response = await fetch(`${HOGWARTS_CHARACTER_API}/characters`)
    const data = await response.json()
    return data.slice(0, 100)

}

export const getCharacterList = async (id: string) => {
    const response = await fetch(`${HOGWARTS_CHARACTER_API}/character/${id}`)
    const data = await response.json()
    return data

}



// {"id":"9e3f7ce4-b9a7-4244-b709-dae5c1f1d4a8",
// "name":"Harry Potter",
// "alternate_names":["The Boy Who Lived","The Chosen One"],
// "species":"human",
// "gender":"male",
// "house":"Gryffindor",
// "dateOfBirth":"31-07-1980",
// "yearOfBirth":1980,
// "wizard":true,
// "ancestry":"half-blood",
// "eyeColour":"green",
// "hairColour":"black",
// "wand":{"wood":"holly","core":"phoenix feather","length":11},
// "patronus":"stag",
// "hogwartsStudent":true,
// "hogwartsStaff":false,
// "actor":"Daniel Radcliffe",
// "alternate_actors":[],
// "alive":true,
// "image":"https://ik.imagekit.io/hpapi/harry.jpg"}