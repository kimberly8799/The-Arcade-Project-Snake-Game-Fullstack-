SNAKE

As a user playing the game I want to:

[x] start the game by pressing a Start button
        --start button & starts function
[X] use my arrow keys to change the direction of the snake 
        --eventlistener on keydown arrows - update nextDirection property in array/object
                ** event.code = 
                        ArrowUp
                        ArrowDown
                        ArrowLeft
                        ArrowRight

[x] have the snake grow correctly when it eats the apple 
        --update the array snakebody
        
[x] have the game end if the snake tries to eat itself
        --game over, end game (alert)
[x] have the game end if the snake runs into a wall
        --in function - make check point, if move is valid
        --game over, end game (alert)
[x] see how long my snake was when the game ended
        --update the "best" score


[X] start the game over without having to reset the browser
        --reset button, or reset if lost?


As a user playing a single player game I would be delighted if:

[ ] can set the difficulty (speed of snake)
        --update ticks() --miliseconds setInterval
[ ] can keep track of my stats (maximum points, average points, etc.) between games
        --scoreboard on the side of previous





**
as board renders - take class out of div & push into another div

Monday: 3/13 
[x] initial state:
[x] create grid with for loops
[x] show snake & apple

Thursday: 3/16
[x] snake moving
[x] move right & left correctly
[x] move up & down correctly
[x] remove from tail when moves (on renderState)

Friday: 3/17
[x] game over when snake runs into wall
[x] restart when game is over
[x] adds to head when eats an apple & apple disappears        
[x] logs length of snake (length of array - 1 & updates Now & Best score)
[x] logs score into Previous Scores


Monday: 3/20
Bugs:
[] apple appears on the snake body
[] snake doesn't move on its own or faulty

[] how to highlight high score in list


STRETCH GOALS

There's a lot of fun things you can do:

Have more than one thing to eat on the board at a time
Some speed you up (oh no!) --update the ticks() --miliseconds
Some slow you down (oh yay!)
Some are poisonous to snakes, and change the controls while the snake is poisoned
Some cause super-growth (for the next 5 ticks the snake keeps getting bigger)
Get rid of the walls, have the snake wrap around to the other side when they go "off screen"
Add extra walls, grid elements which are dangerous to collide with
Make the snake a little faster each time it eats something
Make the grid size selectable
Make a difficulty (speed) selector
When I made my first snake, I added one silly feature:

Portals! There were pairs of portals that when the snake went into one, started coming out the other one in the same direction they entered.

