import {describe, test, expect} from '@jest/globals'
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('05-funciones',()=>{
    test('should return a valid object',()=>{
        const testUsers = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        expect(testUsers).toEqual(user)
    });

    test('should return a valid object',()=>{

        const name = 'fede';
        const user = getUsuarioActivo(name)
        expect(user).toEqual({    uid: 'ABC567',
            username: name})
    })
})