
#A merge sort algorithm is an efficient sorting algorithm based on the divide and conquer algorithm.
#It divides a collection (array) of elements into single units and then merges them in an orderly fashion.


#The time complexity of merge sort is O(n*Log n) for all cases (best, average and worst).


def mergeSort(array):
    if len(array) > 1:

        midPoint = len(array)//2
        leftArray = array[:midPoint]
        rightArray = array[midPoint:]

        mergeSort(leftArray)
        mergeSort(rightArray)

        x = 0
        y = 0
        z = 0

        while x < len(leftArray) and y < len(rightArray):
            if leftArray[x] < rightArray[y]:
                array[z] = leftArray[x]
                x += 1
            else:
                array[z] = rightArray[y]
                y += 1
            z += 1

        
        while x < len(leftArray):
            array[z] = leftArray[x]
            x += 1
            z += 1

        while y < len(rightArray):
            array[z] = rightArray[y]
            y += 1
            z += 1


def printSortedArray(array):
    for i in range(len(array)):
        print(array[i], end=" ")
    print()


if __name__ == '__main__':
    numbers = [4, 10, 6, 14, 2, 1, 8, 5]

    mergeSort(numbers)

    print("Sorted array: ")
    printSortedArray(numbers)