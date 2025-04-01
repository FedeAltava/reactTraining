import {describe, test, expect} from '@jest/globals';
import { getHeroeById, getHeroesByOwner } from '../../base-pruebas/08-imp-exp';

describe('08-imp-exp',()=>{
    test('should return a valid heroe',()=>{
        const id = 1;
        const hero = getHeroeById(id);
    
        expect(hero).toEqual({id: 1,name: 'Batman',owner: 'DC'})
    });

    test('should return undefined if heroe doesnt exists',()=>{
        const id = 100;
        const hero = getHeroeById(id);
    
        expect(hero).toBeFalsy()
    });
    test('should return a valid array',()=>{
        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
    
        expect(heroes.length).toBe(3)
        expect(heroes).toEqual(heroes.filter((heroe)=>heroe.owner === owner))

    });
})