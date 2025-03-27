import { getHeroeById } from "./01-import";

// const promesa = new Promise ((resolve, reject)=>{
  //   setTimeout(() => {
  //     const heroe = getHeroeById(2)
  //     resolve( heroe )
  //     // reject('no se pudo encontrar el heroe')
  //   }, 200);
  // })
  // promesa.then((heroe)=>{
  //   console.log('heroe',heroe)
  // })
  // .catch((err)=>console.warn(err));

  const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const heroe = getHeroeById(id);
        if(heroe){
          resolve(heroe);
        }else{
          reject("no se pudo encontrar el heroe");
        }
      }, 2000);
    });
  };

  getHeroeByIdAsync(2)
    .then(
      console.log
    )
    .catch((err) => console.warn(err));