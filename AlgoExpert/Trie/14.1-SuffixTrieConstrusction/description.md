Write a class for a suffix-trie-like data structure. The class should have a "root" property set to be the root node of the trie. The class should support creation from a string and the searching of strings. The creation method (called populatedSuffixTrieFrom()) will be called when the class is instantiated and should populate the "root" property of the class. Note that every string added to the trie should end with the special "endSymbol" character: "\*"

Sample input (for creation): "babc"
Sample output (for creation):
{
"c": {"_": True},
"b":{
"c":{"_":True},
"a":{"b":{"c":{"_":True}}},
},
"a":{"b":{"c":{"_":True}}},
}
Sample input (for searching in the suffix trie above): "abc"
Sample output (for searching in the suffix trie above): True
