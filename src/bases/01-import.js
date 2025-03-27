import heroes from "./heroes";

export const getHeroeById = (id)=> heroes.find((heroe)=>heroe.id===id);

export const getHeroesByOwner = ( owner ) => heroes.filter((heroes)=>heroes.owner===owner )

// console.log(getHeroeById(2));
// console.log(getHeroesByOwner('Marvel'));