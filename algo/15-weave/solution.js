function weave(sourcesOne, sourcesTwo) {
  const result = new Queue()

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      result.add(sourceOne.remove())
    }

    if (sourceTwo.peek()) {
      result.add(sourceTwo.remove())
    }
  }

  return result
}
