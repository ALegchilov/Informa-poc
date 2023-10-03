// Sharding example
// Shows how to split feature file scope on almost equal chunks

const getChunk = function (array, shardExpression) {
  const [shard, shards] = shardExpression.split("/").map(e => parseInt(e));
  const subarrayLength = array.length / shards;
  const startIndex = Math.floor(shard * subarrayLength - subarrayLength);
  const endIndex = shards / shard === 1 ? array.length : subarrayLength * shard;
  return array.slice(startIndex, endIndex);
}

const specs = [
  'search.feature',
  'ads.feature',
  'login.feature',
  'footer.feature',
  'informaBar.feature',
  'signOut.feature',
  'video.feature',
  'slideShow.feature',
  'podcast.feature',
  'keyword.feature',
  'document.feature'
];

console.log(getChunk(specs, '1/4'));
console.log(getChunk(specs, '2/4'));
console.log(getChunk(specs, '3/4'));
console.log(getChunk(specs, '4/4'));


// console.log(getChunk(specs, '1/6'));
// console.log(getChunk(specs, '2/6'));
// console.log(getChunk(specs, '3/6'));
// console.log(getChunk(specs, '4/6'));
// console.log(getChunk(specs, '5/6'));
// console.log(getChunk(specs, '6/6'));
