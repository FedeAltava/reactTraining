    import {describe, test,expect} from '@jest/globals';
import { getSaludo } from '../../base-pruebas/02-template-string';
    describe('02-template-string',()=>{
        test('should return hola Fernando', ()=>{
            const name = 'Fernando';
            const message = getSaludo('Fernando');
            expect(message).toBe(`Hola ${name}`)
        });
    });