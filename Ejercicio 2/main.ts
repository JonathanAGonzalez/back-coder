const calculateModule = './calculos';

const operacion = async (num1: number, num2: number, op: string): Promise<any> => {
    let operation = null;
    switch (op.toLowerCase()) {
        case 'suma':
            operation = await import(calculateModule).then(m => m.Suma);
            break
        case 'resta':
            operation = await import(calculateModule).then(m => m.Resta);
            break
        default:
            return console.log(`${op} no es una operación soportada`)
    }
    return new operation(num1, num2).resultado();
}

const operaciones = async (num1: number, num2: number, op: string) => {
    const resultado = await operacion(num1, num2, op)
    console.log(resultado)
}

// Ejemplo de implementacion
operaciones(1, 2, 'suma');