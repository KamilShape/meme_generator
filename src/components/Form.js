import React from "react";
import memesData from "./memesData";
function Form() {
  let url ='https://i.imgflip.com/hlmst.jpg'
  let [image, setImage] = React.useState(url)
  function handleClick(){
    let randomNumber = (Math.random()*100).toFixed()
    const memesArray = memesData.data.memes
    url = memesArray[randomNumber].url
    setImage(url)
  }
  return (
    <section className="form">
      <div className="form_inputs">
        <input type="text" placeholder='Upper text' className="form_input" />
        <input type="text" placeholder='Down text' className="form_input" />
      </div>
      <button className="form_button" onClick={handleClick}>Get a new meme image</button>
      <div className="form_picture_box">
        <img  className="form_picture" src={image} alt="" />
      </div>

    </section>
  );
}

export default Form;
