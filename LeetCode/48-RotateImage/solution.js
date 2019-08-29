const rotate = matrix => {
  if (matrix === null || matrix.length === null || matrix[0].length === null)
    return;

  const len = matrix.length;
  for (let layer = 0; layer <= Math.floor((len - 1) / 2); layer++) {
    rotateLayer(matrix, layer, len - 1 - layer);
  }
};

function rotateLayer(arr, start, end) {
  for (let cur = 0; start + cur <= end; cur++) {
    const top = arr[start][start + cur];
    arr[start][start + cur] = arr[end - cur][start]; //from left to top
    arr[end - cur][start] = arr[end][end - cur]; //from bottom to left
    arr[end][end - cur] = arr[start + cur][end]; //from right to bottom
    arr[start + cur][end] = top; //from top to right
  }
}
