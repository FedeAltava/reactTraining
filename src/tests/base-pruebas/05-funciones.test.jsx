import {describe, test, expect} from '@jest/globals'
import { getUser, getUsuarioActivo } from '../../base-pruebas/05-funciones'

describe('05-funciones',()=>{
    test('should return a object',()=>{
        const testUsers = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser()
        expect(testUsers).toEqual(user)
    });

    test('should return a valid object',()=>{
        const testUser ={
            uid: 'ABC567',
            username: 'fede'
        }
        const user = getUsuarioActivo()
        expect(testUser).toEqual(user)
    })
})