Implement​​ a ​​Queue​​ with​ ​O(1)​​ lookup​​ of​​ the​​ Maximum​​ element.

Sample input:
const qm = new QueueWithMax()
qm.enqueue(1)
qm.enqueue(4)
qm.findMax()
qm.enqueue(2)
qm.findMax()
qm.dequeue()
qm.dequeue()
qm.enqueue(3)
qm.enqueue(5)
qm.findMax()

Sample output:
-> (enqueue 1)
-> (enqueue 4)
-> 4
-> (enqueue 2)
-> 4
-> (dequeue 1)
-> (dequeue 4)
-> (enqueue 3)
-> (enqueue 5)
-> 5
