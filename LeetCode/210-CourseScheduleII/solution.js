var findOrder = function(numCourses, prerequisites) {
  const graph = createJobGraph(numCourses, prerequisites);
  return getOrderedJobs(graph);
};

function getOrderedJobs(graph) {
  const orderedJobs = [];
  const nodesWithNoEdges = graph.nodes.filter(node => !node.numOfPrereqs);
  while (nodesWithNoEdges.length) {
    const node = nodesWithNoEdges.pop();
    orderedJobs.push(node.job);
    removeDeps(node, nodesWithNoEdges);
  }
  const graphHasEdges = graph.nodes.some(node => node.numOfPrereqs);

  return graphHasEdges ? [] : orderedJobs;
}

function removeDeps(node, nodesWithNoEdges) {
  while (node.deps.length) {
    const dep = node.deps.pop();
    dep.numOfPrereqs--;

    if (!dep.numOfPrereqs) nodesWithNoEdges.push(dep);
  }
}

function createJobGraph(numCourses, prerequisites) {
  const jobs = [];
  for (let i = 0; i < numCourses; i++) {
    jobs.push(i);
  }
  const graph = new JobGraph(jobs);
  for (const [job, prereq] of prerequisites) {
    graph.addDeps(prereq, job);
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
    if (!(job in this.graph)) this.addNode(job);
    return this.graph[job];
  }

  addDeps(job, dep) {
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
