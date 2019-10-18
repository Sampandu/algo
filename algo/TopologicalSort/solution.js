// solution1: BFS
function topologicalSort(jobs, deps) {
  const jobGraph = createJobGraph(jobs, deps);
  return getOrderedJobs(jobGraph);
}

function createJobGraph(jobs, deps) {
  const graph = new JobGraph(jobs);
  for (const [job, dep] of deps) {
    graph.addDep(job, dep);
  }
  return graph;
}

function getOrderedJobs(graph) {
  const orderedJobs = [];
  const nodesWithNoPrereqs = graph.nodes.filter(node => !node.numOfPrereqs);
  while (nodesWithNoPrereqs.length) {
    //checks if the length of nodesWithNoPrereqs is 1 everytime, if yes, we can say this graph has only one topological order.
    const node = nodesWithNoPrereqs.pop();
    orderedJobs.push(node.job);
    removeDeps(node, nodesWithNoPrereqs);
  }
  const graphHasEdges = graph.nodes.some(node => node.numOfPrereqs);
  return graphHasEdges ? [] : orderedJobs;
}

function removeDeps(node, nodesWithNoPrereqs) {
  while (node.dep.length) {
    const dep = node.dep.pop();
    dep.numOfPrereqs--;
    if (!dep.numOfPrereqs) nodesWithNoPrereqs.push(dep);
  }
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

  addDep(job, dep) {
    const jobNode = this.getNode(job);
    const depNode = this.getNode(dep);
    jobNode.dep.push(depNode);
    depNode.numOfPrereqs++;
  }

  getNode(job) {
    if (!(job in this.graph)) this.addNode(job);
    return this.graph[job];
  }
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.dep = [];
    this.numOfPrereqs = 0;
  }
}
