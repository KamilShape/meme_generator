import React from "react";
import memesData from "./memesData";
function Form() {
  let url =''

  let [meme, setMemeData] = React.useState({
    image: 'https://i.imgflip.com/1bij.jpg',
    topText: "",
    bottomText: ''
  })

  function handleClick(e){
    e.preventDefault()
    let randomNumber = (Math.random()*100).toFixed()
    const memesArray = memesData.data.memes
    url = memesArray[randomNumber].url
    setMemeData((prevMeme) => {
      return{
        ...prevMeme,
        image: url
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    setMemeData((prevState)=>{
      const {name, value} = e.target
      return{
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <form className="form">
      <div className="form_inputs">
        <input type="text" value={meme.topText} onChange={handleSubmit} name='topText' placeholder='Upper text' className="form_input" />
        <input type="text" value={meme.bottomText} onChange={handleSubmit} name='bottomText' placeholder='Down text' className="form_input" />
      </div>
      <button className="form_button" onClick={handleClick}>Get a new meme image</button>
      {/* <button className="form_button" type='submit' onClick={handleSubmit}>Add text</button> */}
      <div className="form_picture_box">
        <img  className="form_picture" src={meme.image}/>
        <p className="form_text form_text-top">{meme.topText}</p>
        <p className="form_text form_text-bottom">{meme.bottomText}</p>
      </div>
    </form>
  );
}

export default Form;
