/*

   Problem 1:
    const menu = [
      {
        key: "1",
        label: "Homepage",
        children: [],
      },
      {
        key: "2",
        label: "Category",
        children: [
          {
            key: "2_cat",
            label: "Television",
            children: [{ key: "2_cat_te_1", label: "Skyworth", children: [] }],
          },
        ],
      },
      {
        key:"3",
        label:"Car",
        children:[
          
        ]
      }
    ];

   2. Sort algorithm
   
   - Time complexity: BigO notation
*/

const nums = [1, 20, 15, 4, 5, 6]; //n => 2*n =>

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum = sum + nums[i];
}

console.log("Tong la:", sum);

const bubbleSort = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[i]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }

  return nums;
};

const resultOfBubbleSort = bubbleSort(nums);
console.log(resultOfBubbleSort);

/*
    SORT
    1. O(n) = n^2 (*)
        - Algo  
            + Bubble Sort
            + Interchange Sort
            + Selection Sort

        - Requirements:
            + Code
            + 10 test cases
            + Report: Input, output, Time complexity, description

    2. O(n) = log(n)

        - Algo
            + Quick Sort (*)
            + Heap Sort
            + Merge Sort

    3. O(n) = n
        - Algo
            + Radix sort       

    
    
    SEARCH
    
    1. Linear Search: code, testcase, description
    2. Binary Search: code, testcase, description
*/
