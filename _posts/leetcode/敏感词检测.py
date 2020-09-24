def testWorld(sentence, dirtyWord):
    tmp = [0 for _ in range(len(sentence))]
    num = 0
    for i in range(len(sentence)):
        if sentence[i] in dirtyWord:
            tmp[i] = 1
            num += 1
    if num<int(len(dirtyWord)*0.8):
        return sentence
    length = len(dirtyWord)
    for i in range(len(sentence)):
        if (tmp[i]==1) and tmp[i:i+length].count(0)==len(dirtyWord)-int(len(dirtyWord)*0.8):
            idx1 = tmp.find(0)
            idx2 = idx1
            while (idx2!=-1):
                idx2 = tmp.find(0, idx1);
                if idx2-idx1<2:
                    break
                idx1 = idx2
            
            sentence = list(sentence)
            for j in range(length):
                sentence[i+j] = '*'
            return ('').join(sentence)

    return sentence

while True:
    tmp = input().strip().split()
    sentence, dirtyWord = tmp[0], tmp[1]
    print(testWorld(sentence, dirtyWord))
