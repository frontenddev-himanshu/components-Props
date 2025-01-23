
function Component({cardPic, title, disc, btn}) {

    console.log(cardPic, title, disc);
    

  return (
    
    <div className="card_container">
        <div className="card_i">
            <img src={cardPic} alt="" />
        </div>
        <div className="card_content">
            <h2>{title}</h2>
            <p>{disc}</p>

            <button className="card_btn">
                {btn}
            </button>
        </div>
    </div>
  )
}

export default Component
