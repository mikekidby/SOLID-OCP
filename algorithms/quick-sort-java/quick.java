// Quick sort in Java

//Time Complexity of Quick Sort:

//Worst case => O(n2)

//Average case => O(n*log(n))

//Best case => O(n*log(n))

import java.util.Arrays;

class Quicksort {
    
    // method for swapping elements x and y
    static void swap(int[] arr, int x, int y) {
        int temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

  // partition method
  static int partition(int array[], int low, int high) {
    
    //pivot
    int pivot = array[high];
    
    int x = (low - 1);
    
    

    // loop for comparing all elements with pivot element
    for (int y = low; y < high; y++) {
      if (array[y] <= pivot) {
        x++;
        
        swap(array, x, y);
      }

    }

    int temp = array[x + 1];
    array[x + 1] = array[high];
    array[high] = temp;

    return (x + 1);
  }

  static void quickSort(int array[], int low, int high) {
    if (low < high) {

      int array_partition = partition(array, low, high);
      
      // quick sort elements on the left recursively
      quickSort(array, low, array_partition - 1);

      // quick sort elements on the right recursively
      quickSort(array, array_partition + 1, high);
    }
  }
}

class Main {
  public static void main(String args[]) {

    int[] my_array = { 9,4,8,3,7,1,6,2,5 };

    int size = my_array.length;

    Quicksort.quickSort(my_array, 0, size - 1);

    System.out.println("Sorted Array: ");
    System.out.println(Arrays.toString(my_array));
    // Sorted Array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
}