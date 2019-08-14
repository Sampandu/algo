Write a class for a double linked list. The class should havea a "head" and "tail" properties, both of which should point to either the None (null) value or to a link list node. Every node will have a "value" property as well as "next" and "prev" properties, both of which can point to either the None (null) value or another node. The class should support setting the head and tail of the linked list, inserting nodes before and after other nodes as well as at certain positions, removing given nodes and removing nodes with specific values, and searching for nodes with values. Only the searching method should return a value: specifically, a boolean.

Sample input:
1 -> 2 -> 3 -> 4 -> 5
Sample output (after setting 4 to head):
4 -> 1 -> 2 -> 3 -> 5
Sample output (after setting 6 to tail):
4 -> 1 -> 2 -> 3 -> 5 -> 6
Sample output (after inserting 3 before 6):
4 -> 1 -> 2 -> 5 -> 3 -> 6
Sample output (after inserting a new 3 after 6):
4 -> 1 -> 2 -> 5 -> 3 -> 6 -> 3
Sample output (after inserting a new 3 at position 1):
3 -> 4 -> 1 -> 2 -> 5 -> 3 -> 6 -> 3
Sample output (after removing nodes with value 3):
4 -> 1 -> 2 -> 5 -> 6
Sample output (after removing 2):
4 -> 1 -> 5 -> 6
Sample output (after searching for 5): true
