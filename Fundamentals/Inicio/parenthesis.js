// Given n number of matching paranthesis generate all combinations

var array = ["(",")"];
var results = [];

// Since you only want pairs, there's no reason
// to iterate over the last element directly
for (var i = 0; i < 3 - 1; i++) {
  // This is where you'll capture that last value
  for (var j = i + 1; j < 3; j++) {
    results.push(array[i] + ' ' + array[j]);
  }
}

console.log(results)

// javascript program to print all
// combinations of balanced parentheses

	// Function that print all combinations of
	// balanced parentheses
	// open store the count of opening parenthesis
	// close store the count of closing parenthesis
	function _printParenthesis( str , pos , n , open , close)
	{
		if (close == n)
		{
		
			// print the possible combinations
			for (let i = 0; i < str.length; i++)
				console.log(str[i]);
			
			return;
		}
		else
		{
			if (open > close)
			{
				str[pos] = '}';
				_printParenthesis(str, pos + 1, n, open, close + 1);
			}
			if (open < n)
			{
				str[pos] = '{';
				_printParenthesis(str, pos + 1, n, open + 1, close);
			}
		}
	}

	// Wrapper over _printParenthesis()
	function printParenthesis( str , n)
	{
		if (n > 0)
			_printParenthesis(str, 0, n, 0, 0);
		return;
	}

	// Driver program
	var n = 3;
	var str = new Array(2 * n);
	printParenthesis(str, n);

// This code is contributed by shikhasingrajput
