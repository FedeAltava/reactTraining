const newMessage ={
    message: 'hola mundo',
    title:'Fede'

};

export const FirstApp = () => {
  return (
    <>
        <h1>{newMessage.title}</h1>
        <p>el fede</p>
    </>
  )
}

export default FirstApp
