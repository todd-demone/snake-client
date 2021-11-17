# Snake Client Project

Snake game is a very popular video game. This is simply a multiplayer take on the genre.

Before you can run this client, you will need to be running the server side which you can download and install from [here](https://github.com/lighthouse-labs/snek-multiplayer). 

## Final Product
Server screenshot:
!["snake-server-screenshot"](https://user-images.githubusercontent.com/17071349/142240185-ca2aaf43-6ecd-46be-a762-08b4e612c856.png)
Screenshot of client terminal:
!["snake-client-screenshot"](https://user-images.githubusercontent.com/17071349/142238196-85ce65fe-50b0-4fad-b172-b3786e011803.png)

## Dependencies
- Node 12.x or above
- npm 6.x or above

## Getting Started

- Follow steps inside the [snek server repo](https://github.com/lighthouse-labs/snek-multiplayer) to run the server side.
- Clone and run the snake client side using the following commands:
```
git clone https://github.com/todd-demone/snake-client.git
cd snake-client
node play.js
```

## Instructions
- Move the snake using the keyboard controls (described below) and eat the red dots.
- Each time the snake eats a red dot it grows. The goal is to grow it as big as possible without dying.
- The snake dies if it collides with the wall, its own tail or another snake.

## Keyboard controls:
  - `w` `a` `s` `d` - move up, left, down, right
  - `g` - say hi to the other players
  - `b` - say bye to the other players
  - `Ctrl` + `c` - exit from the game

## Author
- [Todd Demone](https://github.com/todd-demone)

## Purpose
This game client was created while completing the [Lighthouse Labs](https://github.com/lighthouse-labs) [Web Development Flex Program](https://www.lighthouselabs.ca/en/web-development-flex-program).

## Acknowledgements
The [snek server](https://github.com/lighthouse-labs/snek-multiplayer) was inspired and started from [snek](https://github.com/taniarascia/snek), made by [Tania Rascia](https://www.taniarascia.com/).