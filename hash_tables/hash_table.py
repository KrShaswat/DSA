# chaining

class hash_table:
    def __init__(self, size):
        self.size = size
        self.data = [0] * self.size
    
    def _hash(self, key):
        hash = 0
        for i in range(len(key)):
            hash = (hash + ord(key[i])*i)%len(self.data)
        return hash
    
    def set(self, key, value):
        address = self._hash(key)
        if (not self.data[address]):
            self.data[address] = []
        self.data[address].append([key,value])
        return self.data

    def get(self, key):
        address = self._hash(key)
        currentBucket = self.data[address]

        if (currentBucket):
            for i in range(len(currentBucket)):
                if (currentBucket[i][0] == key):
                    return currentBucket[i][1]
        return None
    
    def keys(self):
        keysArray = []
        for i in range(len(self.data)):
            # print("for ->",self.data[i])
            if self.data[i] != 0:
                # print("if ->",self.data[i])
                # with collisions
                if len(self.data[i])>1:
                    for j in range(len(self.data[i])):
                        keysArray.append(self.data[i][j][0])
                else:
                    keysArray.append(self.data[i][0][0])
        return keysArray

myHashTable = hash_table(50)
print(myHashTable.set('grapes', 10000))
print(myHashTable.get('grapes'))
print(myHashTable.set('apples', 9))
print(myHashTable.get('apples'))
print(myHashTable.set('orange', 2))
print(myHashTable.set('orange', 6))

print(myHashTable.set('sitaFal', 13))
print(myHashTable.keys())