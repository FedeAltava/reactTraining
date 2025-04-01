import {describe, test, expect} from '@jest/globals';
import { getImagen } from '../../base-pruebas/11-async-await';


describe('011-async-await', ()=>{
    test('shold return a valid url',async()=>{
        const url = await getImagen();
        console.log(url)
        expect(typeof url).toBe('string')
    })

})