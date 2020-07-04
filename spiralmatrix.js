//Objective is to do a 'spiral' traversal of a 2D matrix.

let matrix = 
[[1,2,3],
 [4,5,6],
 [7,8,9]]


//O(n * m) solution since we visit each tile once.

let result = []

while (matrix.length > 0) {
    //Top and bottom of the arrays
    let top = matrix.shift()
    let bottom = (matrix.pop() || []).reverse()

    //Left and right of the arrays
    let left = []
    let right = []
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].length > 0) {
            right.push(matrix[i].pop())
        }

        if (matrix[i].length > 0) {
            left.unshift(matrix[i].shift())
        }
    }

    //Put everything together
    result.push(...top, ...right, ...bottom, ...left)
}

return result