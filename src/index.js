module.exports = function check(str, bracketsConfig) {
  // your solution

  if(str.length % 2) return false;

  let keys = {};

  bracketsConfig.forEach(config => keys[config[0]] = config[1] );

  let sequence = [];

  str.split('').forEach((bracket) => {
    if(bracket === keys[sequence[sequence.length - 1]]) {
        sequence.pop();
    } else {
        sequence.push(bracket);
    }

  })

  return sequence.length === 0;
}
