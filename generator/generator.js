const fruitBasket = {
  apple: 27,
  grape: 0,
  pear: 14
}


const fruitsToGet = ['apple', 'grape', 'pear']

const getNumFruit = fruit => {
  return fruitBasket[fruit]
}
const reduceLoop = async _ => {
  console.log('Start')

  const sum = await fruitsToGet.reduce(async (sum, fruit) => {
    const numFruit = await getNumFruit(fruit);
    console.log(sum + numFruit);
    return sum + numFruit
  }, 0)

  console.log(sum)
  console.log('End')
}

// reduceLoop();



function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw);