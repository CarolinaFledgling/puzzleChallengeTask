# Exercise 3

This project has been bootstrapped using [Create React App](https://create-react-app.dev/) and is a test of your skills related to advanced patterns in React. The task at hand is to create a fully responsive grid of boxes with pseudo ranomdly generated background colors. Within each box is a color inverted and pseudo randomly generated shape; triangle, circle or rectangle. Hovering over a box should invert its color, both background color and shape color. Clicking on a box should expand it box in a fluid fashion and create a new randomly generated shape. Page refresh should never display the same content twice. See [exercise-1-demo.mov](./exercise-1-demo.mov) for details.

## Run Locally

Clone the project

```bash
https://github.com/CarolinaFledgling/puzzleChallengeTask.git
```

```bash
npm install
# and
npm start

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Requirments

- use TypeScript and make sure everything is statically typed

- each shape must be created pseudo randomly and in a programmatic way (no page refresh is the same)
- shapes and grid must be fully responsive
- colors are inverted on hover
- the color of a box is pseudo randomly generated
- the color of a shape within a box is inverted
- click a box increases its with and height

## Bonus requirments (optional)

It is considered as a bonus if you also comply with the following set of requirments, even though they are optional.

- use vanilla CSS
- CSS-in-JS or CSS custom properties are not allowed
- do not use context
- do not use state directly in components, e.g. useState
- not a single line of duplicated code, HTML or CSS
