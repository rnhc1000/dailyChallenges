// JavaScript program to find height of tree

// A binary tree node
class Node
{
	constructor(data)
	{
		this.data=data;
		this.left=this.right=null;
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


    function sumLeftNodes(node) {
        let sumLeft=0;
        if (node === null) {
            return 0;
        } else {

            //node.left exists?

            if (node.left === null) {
                sumLeft += node.left.data;
            } else {
                
            }
            sumLeft+=sumLeftNodes(node.left)
        }

        return sumLeft;
    console.log(sumLeft);
    }
	
	/* Driver program to test above functions */
	
		root = new Node(1);
		root.left = new Node(2);
		root.right = new Node(3);
		root.left.left = new Node(4);
		root.left.right = new Node(5);
        root.left.left.left = new Node(6);
        root.left.right.right = new Node(7);

		console.log("Height of tree is : " +
									maxDepth(root));
                                    console.log("Sum of tree is " + sumLeftNodes(root))




// This code is contributed by rag2127
//Correction done by Amit Srivastav

