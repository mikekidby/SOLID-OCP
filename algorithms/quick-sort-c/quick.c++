// Quick sort in C++

//Time Complexity of Quick Sort:

//Worst case => O(n2)

//Average case => O(n*log(n))

//Best case => O(n*log(n))

#include <bits/stdc++.h>
using namespace std;

// function for swapping elements x and y
void swap(int* x, int* y)
{
	int temp = *x;
	*x = *y;
	*y = temp;
}

int partition(int arr[], int low, int high)
{
    // pivot
	int pivot = arr[high]; 
	int x = (low- 1); 

    // loop for comparing all elements with pivot element
	for (int y = low; y <= high - 1; y++) {
		
		if (arr[y] < pivot) {
			x++; 
			swap(&arr[x], &arr[y]);
		}
	}
	swap(&arr[x + 1], &arr[high]);
	return (x + 1);
}

void quickSort(int arr[], int low, int high)
{
	if (low < high) {
		
		int array_partition = partition(arr, low, high);
        
        // quick sort elements on the left recursively
		quickSort(arr, low, array_partition - 1);
		
		// quick sort elements on the right recursively
		quickSort(arr, array_partition + 1, high);
	}
}

// print array function 
void printArray(int arr[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		cout << arr[i] << " ";
	cout << endl;
}

int main()
{
	int arr[] = { 9,4,8,3,7,1,6,2,5 };
	
	int size = sizeof(arr) / sizeof(arr[0]);
	
	quickSort(arr, 0, size - 1);
	cout << "Sorted array: ";
	printArray(arr, size);
    // Sorted array: 1 2 3 4 5 6 7 8 9 
	
	return 0;
}