"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
const calculateModule = './calculos';
const operacion = async (num1, num2, op) => {
    let operation = null;
    switch (op.toLowerCase()) {
        case 'suma':
            operation = await Promise.resolve().then(() => __importStar(require(calculateModule))).then(m => m.Suma);
            break;
        case 'resta':
            operation = await Promise.resolve().then(() => __importStar(require(calculateModule))).then(m => m.Resta);
            break;
        default:
            return console.log(`${op} no es una operación soportada`);
    }
    return new operation(num1, num2).resultado();
};
const operaciones = async (num1, num2, op) => {
    const resultado = await operacion(num1, num2, op);
    console.log(resultado);
};
// Ejemplo de implementacion
operaciones(1, 2, 'suma');
