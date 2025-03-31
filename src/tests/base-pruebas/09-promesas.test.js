import {describe, test, expect} from '@jest/globals';
import { getHeroeByIdAsync } from '../../base-pruebas/09-promesas';
describe ('09-promesas',()=>{
    test('should return a heroe',(done)=>{
        const id = 1;
        getHeroeByIdAsync(id)
            .then(hero=>{
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                })
                done()
            })
        expect()
    })
})