# Given 2 arrays, create a function that let's a user know (true/false)
# whether these two arrays contain any common items

# ------------------------------------
# double loop solution

array1 = ['a', 'b', 'c', 'x']
array2 = ['z', 'y', 'i']

def common_items (array1, array2):
    for i in array1:
        for j in array2:
            if i == j:
                return True
    return False;
print(common_items(array1, array2))

# -----------------------------------
#
