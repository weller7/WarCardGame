
let currentDeck = ""

  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data) 
        currentDeck = data.deck_id       
      })
      .catch(err => {
          console.log(`error ${err}`)
      })

      
document.querySelector('button').addEventListener('click', drawCards)


function drawCards(){
  const url = `https://deckofcardsapi.com/api/deck/${currentDeck}/draw/?count=2`

  fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data) 
      document.querySelector("#p1").src = data.cards[0].image
      document.querySelector("#p2").src = data.cards[1].image

      let playerOneVal = toNumber(data.cards[0].value)
      let playerTwoVal = toNumber(data.cards[1].value)

      if (playerOneVal > playerTwoVal){
        document.querySelector("h3").innerText = "Player 1 won"
      }else if  (playerOneVal < playerTwoVal){
        document.querySelector("h3").innerText = "Player 2 won"}
      else {document.querySelector("h3").innerText = "WAR!"}
    


    })
    .catch(err => {
      console.log(`error ${err}`)
    });
 }


function toNumber (val){
  if (val === "ACE"){
    return 14
  }
  else if(val === "KING"){
    return 13
  }
  else if(val === "QUEEN"){
  return 12
  }
  else if(val === "JACK"){
  return 11}

  else {return Number(val)}
  }

