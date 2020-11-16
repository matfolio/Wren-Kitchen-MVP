# Wren Kitchens MVP

## Installation
```
npm install
npm start
```

The app is written using [TypeScript](https://www.typescriptlang.org/). The bundle is generated using [Webpack](https://webpack.js.org/) and the UI uses [ReactJS](https://reactjs.org/)

## Scenario
The fields are green and Wren are venturing out to become a shepherd.

Your task is to extend the provided code with functionality and logic to create a 'field', add sheep to the field and allow the sheep to breed.

### Implementation

1) A field in which a spawn sheep is added.
2) Each added sheep has a name and gendar (Male | Female).
3) Sheep currently living in the field is branded at random (paint it green).
4) Two random sheep can breed and if both are breedable, a new sheep can be spawn into the field.

#### Implicit Logic

1) The probability of a female sheep giving birth after mating is 50%
2) Branded sheep(s) is highlighted in green.
3) Branded sheep(s) are not able to breed

