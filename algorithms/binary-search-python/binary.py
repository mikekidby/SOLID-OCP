#Binary Search in Python

# A binary search algorithm uses a technique called “divide and conquer” to tackle its task. 

# Time Complexity: O(log n). 
# The best-case time complexity would be O(1) when the central index would directly match the desired value. Binary search worst case differs from that. 
# The worst-case scenario could be the values at either extremity of the list or values not in the list.

# Searching for a word in a dictionary
# searching for a literature text book in a literature section in a library
# searching for an element in a sorted list
# searching for students taller than 5 feet 3 inches in a line of students arranged according to their heights.



def binary_search(list_num, first_index, last_index, to_search):
    if last_index >= first_index:
       
        mid_index = (first_index + last_index) // 2
        mid_element = list_num[mid_index]
       
 
        if mid_element == to_search:
            return f"{mid_element} occurs in position {mid_index}"
 
        elif mid_element > to_search:
            new_position = mid_index - 1
            # new last index is the new position
            return binary_search(list_num, first_index, new_position, to_search)
 
        elif mid_element < to_search:
            new_position = mid_index + 1
             # new first index is the new position
            return binary_search(list_num, new_position, last_index, to_search)
 
    else:
        return " Does not appear in the list"
       
list_container = [ 1, 9, 11, 21, 34, 54, 67, 90 ]
search = 34
first = 0
last= len(list_container) - 1
 
print(binary_search(list_container,first,last,search))