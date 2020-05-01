document.addEventListener('DOMContentLoaded', () =>{
  const cardArray = [
    {
      name: 'AAAAA',
      img: 'images/AAAAA.png'
    },
    {
      name: 'AAAAA',
      img: 'images/AAAAA.png'
    },
    {
      name: 'cry',
      img: 'images/cry.png'
    },
    {
      name: 'cry',
      img: 'images/cry.png'
    },
    {
      name: 'disgusting',
      img: 'images/disgusting.png'
    },
    {
      name: 'disgusting',
      img: 'images/disgusting.png'
    },
    {
      name: 'loops',
      img: 'images/loops.png'
    },
    {
      name: 'loops',
      img: 'images/loops.png'
    },
    {
      name: 'welp',
      img: 'images/welp.png'
    },
    {
      name: 'welp',
      img: 'images/welp.png'
    },
    {
      name: 'what',
      img: 'images/what.png'
    },
    {
      name: 'what',
      img: 'images/what.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())
  const grid = document.querySelector('.grid')
  const scoreDisplay = document.querySelector('#result')
  const winDisplay = document.querySelector('#win')
  scoreDisplay.textContent = "0"
  var cardsChosen = []
  var cardsChosenId = []
  var cardsCorrect = []

  //Create game board
  function createBoard(){
    for(let i=0; i<cardArray.length;i++){
      var card = document.createElement('img')
      card.setAttribute('src','images/blank.png')
      card.setAttribute('data-id',i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //Check for match
  function checkMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]){
      alert("Correct!")
      cards[optionOneId].setAttribute('src','images/white.png')
      cards[optionTwoId].setAttribute('src','images/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsCorrect.push(cardsChosen)
    }
    else{
      alert("Incorrect, try again!")
      cards[optionOneId].setAttribute('src','images/blank.png')
      cards[optionTwoId].setAttribute('src','images/blank.png')
    }
    cardsChosen = []
    cardsChosenId = []
    scoreDisplay.textContent = cardsCorrect.length
    if(cardsCorrect.length === cardArray.length/2){
      winDisplay.textContent = "Congratulations! You win!"
    }
  }

  //Flip card
  function flipCard(){
    var cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length===2){
      setTimeout(checkMatch, 250)
    }
  }
  createBoard();

})
