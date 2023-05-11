# BLOODY-M-ARRAYS


Play the Game: (https://inesalmeida-91.github.io/Bloody-M-Arrays/)


## Description:
BLOODY-M-ARRAYS is a game where players use the left/right arrow keys to gather all the correct cocktail ingredients and avoid the wrong one's,  as they fall from the sky.
To win the player needs to match the number of cocktails ordered and the number of cocktails made.
The game ends when players catch a wrong ingredient, that doesn't belong to the cocktail.

## MVP:
- Ingredients fall from the sky 
- Player moves across the game by clicking left and right arrow keys.
- By collecting the correct ingredients, they desapear and the number of ingredients increase
- In every Start Game is generated a random number between 1 and 5 to define how many cocktails the player needs to do (cocktails ordered)
- When the player picks up 1 ingredient of each from the list a cocktail is created
- When the number of cocktails made and cocktails ordered math the player win's the game
- When the player catch a wrong ingredient the game stops

## Backlog - List of features you might implement after the MVP
- put some sounds
- make levels with diferent cocktails and ingredients
- canvas adjusting depending on screen size

## Data structure
- function startGame()
- function completeCocktail()
- Object myGameArea with methods start, clear, stop, score
- Class Person with draw(), moveLeft(), moveRight(), newPos(), update(), top(), left(), right() and crashWith(ingredient) methods
- Class CorrectIngredient and class IncorrectIngredient with the  update() and bottom() methods
- function updateGameArea()
- function checkScore()
- function checkGameOver()
- function checkWin() 

## States
- Start Screen
- Game Screen
- Game Over Screen


## Links
- [Trello Link](https://trello.com/b/mKUR0mgp/bloody-m-arrays)
- [Slides Link](http://slides.com)
- [Github repository Link](https://github.com/InesAlmeida-91/Bloody-M-Arrays) 