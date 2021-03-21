# This solution is O(n)

string = input("Enter a string: ")
def reverse(string):
    rev_string = ""

    for i in string:
        rev_string = i + rev_string
        # print(rev_string)
    return rev_string

print(reverse(string))

# language specific solution

# using resversed

def reversed_str(string):
    string = "".join(reversed(string))
    return string

print(reversed_str(string))
