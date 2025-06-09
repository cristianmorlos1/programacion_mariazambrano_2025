x = int(input("dime tu edad: "))

def edad():
    if x >= 18:
        return("eres mayor de edad")
    else:
        return("no eres mayor de edad.")
res = edad()
print(res)
