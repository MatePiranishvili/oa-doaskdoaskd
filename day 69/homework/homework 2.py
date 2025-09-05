def swap(st):
    s = ""
    for i in st:
        if i.isupper():
            s += i.lower()
        elif i.islower():
            s += i.upper()
    return s

print(swap("HelLo"))
