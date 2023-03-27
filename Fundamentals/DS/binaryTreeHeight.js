// JavaScript program to find height of tree

// A binary tree node
class Node
{
	constructor(data)
	{
		this.data=data;
		this.left=null;
		this.right=null;
	}
}

	let root;
	
	/* Compute the "maxDepth" of a tree -- the number of
	nodes along the longest path from the root node
	down to the farthest leaf node.*/
	function maxDepth(node)
	{
		if (node == null)
			return 0;
		else
		{
			/* compute the depth of each subtree */
			let lDepth = maxDepth(node.left);
			let rDepth = maxDepth(node.right);

			/* use the larger one */
			if (lDepth > rDepth)
				return (lDepth + 1);
			else
				return (rDepth + 1);
		}
	}
	
	/* Driver program to test above functions */
	
		root = new Node(20);
		root.right = new Node(25);
		root.right.right= new  Node(33);
		root.right.left = new Node(22);
		root.right.right.right = new Node(45);
		root.right.right.left = new Node(30);
		root.left = new Node(17);
		root.left.left = new Node(13);
		root.left.right = new Node(19);
        root.left.left.left = new Node(10);
        root.left.left.right = new Node(14);
		console.log(root)

		console.log("Height of tree is : " +
									maxDepth(root));




// This code is contributed by rag2127
//Correction done by Amit Srivastav

