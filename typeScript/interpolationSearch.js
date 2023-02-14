// A → Array list
// N → Size of A
// X → Target Value

// Procedure Interpolation_Search()

//    Set Lo  →  0
//    Set Mid → -1
//    Set Hi  →  N-1

//    While X does not match
   
//       if Lo equals to Hi OR A[Lo] equals to A[Hi]
//          EXIT: Failure, Target not found
//       end if
      
//       Set Mid = Lo + ((Hi - Lo) / (A[Hi] - A[Lo])) * (X - A[Lo]) 

//       if A[Mid] = X
//          EXIT: Success, Target found at Mid
//       else 
//          if A[Mid] < X
//             Set Lo to Mid+1
//          else if A[Mid] > X
//             Set Hi to Mid-1
//          end if
//       end if
//    End While

// End Procedure