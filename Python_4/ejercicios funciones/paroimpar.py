x = int(input("dime un numero y yo te digo si es par o impar: "))
def par():
    if x % 2 == 0:
        return("es par")
    else:
        return("es impar")
res = par()
print(f"el numero {x} es {res} ")