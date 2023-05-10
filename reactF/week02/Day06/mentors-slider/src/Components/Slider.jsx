import Cards from "./Cards"

export default function Slider(props){
//console.log(props.card)
    return(
        <div className="cards-container">
        {
          props.cards.map((card) => (
            <Cards title={ card.title }
              content={ card.content }
              imgUrl={ card.imgUrl } />
            // console.log(card)
          ))
        }
      </div>
    )
}