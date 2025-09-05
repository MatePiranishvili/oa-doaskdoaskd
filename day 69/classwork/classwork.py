def capitalize_letter(word):
    word  = word .split(" ")
    a = []
    for i in word:
        a.append(i.capitalize())
    return "".join(a)
print(capitalize_letter("hello my name is mate"))
    