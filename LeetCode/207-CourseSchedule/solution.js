var canFinish = function(numCourses, prerequisites) {
  const graph = createJobGraph(numCourses, prerequisites);
  return getOrderedJobs(graph);
};

function getOrderedJobs(graph) {
  const nodesWithNoPrereqs = graph.nodes.filter(node => !node.numOfPrereqs);
  while (nodesWithNoPrereqs.length) {
    const node = nodesWithNoPrereqs.pop();
    removeDeps(node, nodesWithNoPrereqs);
  }
  const graphHasEdges = graph.nodes.some(node => node.numOfPrereqs);
  return !graphHasEdges; // noted, if graphHasEdge is true which means the topological sort is false.
}

function removeDeps(node, nodesWithNoPrereqs) {
  while (node.deps.length) {
    const dep = node.deps.pop();
    dep.numOfPrereqs--;

    if (!dep.numOfPrereqs) nodesWithNoPrereqs.push(dep);
  }
}

function createJobGraph(num, prerequisites) {
  const jobs = [];
  for (let i = 0; i < num; i++) {
    jobs.push(i);
  }
  const graph = new JobGraph(jobs);
  for (const [job, prereq] of prerequisites) {
    graph.addDep(prereq, job);
  }
  return graph;
}

class JobGraph {
  constructor(jobs) {
    this.nodes = [];
    this.graph = {};
    for (let job of jobs) {
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
    jobNode.deps.push(depNode);
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
    this.deps = [];
    this.numOfPrereqs = 0;
  }
}
