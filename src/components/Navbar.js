import face from "./face.png"

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar_box">
        <img src={face} className="navbar_image" />
        <h1 className="navbar_title">Meme generator</h1>
      </div>
    </header>
  );
}

export default Navbar;
