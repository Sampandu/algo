const alienOrder = function(words) {
  const graph = createGraph(words);
  return getOrderedJobs(graph);
};

function getOrderedJobs(graph) {
  const orderedJob = [];

  //notoce: in order to maintain the lexicographical order, we need to use PriorityQueue instead of FIFO queue
  const nodesWithNoPrereqs = graph.nodes.filter(node => !node.numOfPrereq);
  while (nodesWithNoPrereqs.length) {
    const node = nodesWithNoPrereqs.pop();
    orderedJob.push(node.job);
    removeDeps(node, nodesWithNoPrereqs);
  }
  const graphHasEdge = graph.nodes.some(node => node.numOfPrereq);
  return graphHasEdge ? [] : orderedJob.join('');
}

function removeDeps(node, nodesWithNoPrereqs) {
  while (node.deps.length) {
    const dep = node.deps.pop();
    dep.numOfPrereq--;
    if (!dep.numOfPrereq) nodesWithNoPrereqs.push(dep);
  }
}

function createGraph(words) {
  const set = new Set();
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      !set.has(words[i][j]) && set.add(words[i][j]);
    }
  }
  const jobs = [...set];
  console.log('jobs', jobs);
  const graph = new JobGraph(jobs);
  console.log('++++', graph);
  for (let i = 0; i < words.length - 1; i++) {
    let index = 0;
    while (index < words[i].length && index < words[i + 1].length) {
      if (words[i][index] !== words[i + 1][index]) {
        graph.addDep(words[i][index], words[i + 1][index]);
        break;
      }
      index++;
    }
  }
  console.log('----', graph);
  return graph;
}

class JobGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (const job of jobs) {
      this.addNode(job);
    }
  }

  addNode(job) {
    this.graph[job] = new JobNode(job);
    this.nodes.push(this.graph[job]);
  }

  getNode(job) {
    if (!(job in this.graph)) this.addNode(job);
    return this.graph[job];
  }

  addDep(job, dep) {
    const jobNode = this.getNode(job);
    const depNode = this.getNode(dep);
    jobNode.deps.push(depNode);
    depNode.numOfPrereq++;
  }
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.deps = [];
    this.numOfPrereq = 0;
  }
}
