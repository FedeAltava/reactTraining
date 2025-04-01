import {describe, test, expect} from '@jest/globals';
import { retornaArreglo } from '../../base-pruebas/07-deses-arr';


describe('07-deses-arr',()=>{
    test('should return a string and number', ()=>{
        const [letters, numbers] = retornaArreglo(); 
        expect(letters).toBe('ABC')
        expect(numbers).toBe(123)
    })
})