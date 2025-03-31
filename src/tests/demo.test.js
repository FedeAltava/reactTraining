import {describe ,test,expect} from '@jest/globals';

describe('first test',()=>{
    test('should not fail',()=>{
        expect(1+2).toBe(3)
    })
})