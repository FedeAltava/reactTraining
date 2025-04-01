
import { describe, test,} from "@jest/globals";
import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('FirstApp', ()=>{
    test('should do match with snapshot',()=>{
        render(<FirstApp />)
    });
});
