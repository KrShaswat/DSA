# merge and sort array
# [0,3,4,31], [4,6,30]
# [0,3,4,4,6,30,31]

# select the smaller array to loop over
# looping 2 elements
# while condition <length
# increment the string with the samller value while addin to return string
# 
# O(n)


array1 = [0,3,4,31, 41, 89]
array2 = [4,6,30]


def mergeSortString(arr1, arr2):
    i = 0 # arr1 loop index
    j = 0 # arr2 loop index
    mergedSorted = []

    while (i < len(arr1) and j < len(arr2)):
        if arr1[i]<arr2[j]:
            mergedSorted.append(arr1[i])
            i += 1
            

        elif arr2[j]<arr1[i]:
            mergedSorted.append(arr2[j])
            j += 1
            

        elif arr1[i] == arr2[j]:
            mergedSorted.append(arr1[i])
            mergedSorted.append(arr2[j])
            i += 1
            j += 1
        else: 
            print("problem in thy loop")
    print(i,'\n',j)
    
    if i < len(arr1):
        mergedSorted =  mergedSorted+arr1[i:]
    elif j < len(arr2):
        mergedSorted =  mergedSorted+arr2[j:]

    return mergedSorted

print(mergeSortString(array2, array1)) # BUG: does not continue after small array length





# -------------------------------------------------------------------

# python *facepalm*

def merge_sort_string2(arr1, arr2):
    return sorted(arr1 + arr2)

print(merge_sort_string2(array1, array2))


# -------------------------------------------------------------------

# Andrei's solution

def mergeSort(arr1, arr2):
    merged = []
    
    i = 0
    j = 0

    # input check
    if  (len(arr1) == 0):
        return arr2
    if  (len(arr2) == 0):
        return arr1
    

    while ((i<len(arr1)) or (j<len(arr2))):
        if ((not arr2[j]) or arr1[i] < arr2[j]):
            merged.append(arr1[i])
            i += 1
        else:
            merged.append(arr2[j])
            j += 1
    
    return merged

print(mergeSort(array1, array2))