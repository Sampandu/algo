var findLadders = function(start, end, wordList) {
  const ladders = [];
  const map = {};
  const distance = {};

  const dict = new Set(wordList);
  dict.add(start);
  dict.add(end);

  bfs(map, distance, end, start, dict);
  const path = [];
  dfs(ladders, path, start, end, distance, map);

  return ladders;
};

function dfs(ladders, path, crt, end, distance, map) {
  path.push(crt);
  if (crt === end) {
    ladders.push([...path]);
  } else {
    for (let next of map[crt]) {
      if (
        Object.keys(distance).includes(next) &&
        distance[crt] === distance[next] + 1
      ) {
        //in this case, distance['cog'] === 0, so it won't hit this condition. we should use Object.keys().includes()
        dfs(ladders, path, next, end, distance, map);
      }
    }
  }
  path.pop();
}

function bfs(map, distance, start, end, dict) {
  const queue = [start];
  distance[start] = 0;

  for (let str of dict) {
    map[str] = [];
  }

  while (queue.length) {
    const crt = queue.shift();
    const nextList = expand(crt, dict);
    for (let next of nextList) {
      map[next].push(crt);
      if (!Object.keys(distance).includes(next)) {
        distance[next] = distance[crt] + 1;
        queue.push(next);
      }
    }
  }
}

function expand(crt, dict) {
  const expansion = [];

  const arr = crt.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
      if (String.fromCharCode(j) !== arr[i]) {
        const temp =
          crt.slice(0, i) + String.fromCharCode(j) + crt.slice(i + 1);
        // arr[i] = String.fromCharCode(j)  //it will change the original value of arr[i]
        // const temp = arr.join('')
        if (dict.has(temp)) {
          expansion.push(temp);
        }
      }
    }
  }
  return expansion;
}
