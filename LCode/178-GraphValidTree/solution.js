//BFS
const validTree = (num, edges) => {
  if (num === 0) return false;

  if (edges.length !== num - 1) return false;

  const graph = createJobGraph(num, edges);
  const root = graph.nodes[0];
  const queue = [root];
  const set = new Set();
  set.add(root.job);
  while (queue.length) {
    const node = queue.shift();
    for (const dep of node.deps) {
      if (set.has(dep.job)) continue;
      set.add(dep.job);
      queue.push(dep);
    }
  }
  return set.size === num;
};

function createJobGraph(num, edges) {
  const jobs = [];
  for (let i = 0; i < num; i++) {
    jobs.push(i);
  }
  const graph = new JobGraph(jobs);
  for (const [job, dep] of edges) {
    graph.addDep(job, dep);
  }
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
    if (!(job in this.graph)) this.graph[job] = this.addNode(job);
    return this.graph[job];
  }

  addDep(job, dep) {
    const jobNode = this.getNode(job);
    const depNode = this.getNode(dep);
    jobNode.deps.push(depNode);
    depNode.numOfPrereqs++;
  }
}

class JobNode {
  constructor(job) {
    this.job = job;
    this.deps = [];
    this.numOfPrereqs = 0;
  }
}
