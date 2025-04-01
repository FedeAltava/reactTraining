

export const getImagen = async() => {

    try {

        const apiKey = 'lbtaS4TeDXv0Y6PkuV7tiWIPaXnQa7H3';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url

    } catch (error) {

        return 'No se encontro la imagen'
    }
    
    
    
}

 getImagen();



