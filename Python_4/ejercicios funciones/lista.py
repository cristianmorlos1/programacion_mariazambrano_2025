x = int(input("dime la cantidad de numeros que quieres poner: "))

def dentro():
    suma = 0
    for i in range(x):
        y = int(input("escribe el numero: "))
        suma += y
    return suma

res = dentro()
print(res)
