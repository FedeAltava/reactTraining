
import { describe, test, expect} from "@jest/globals";
import { render, screen} from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('FirstApp', ()=>{
    const title = 'Manuuueeeeeeee'
    test('sholud match with snapchot',()=>{
        const { container } = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot();
    });

    test('sholud render the title',()=>{
        render(<FirstApp title={title}/>)
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('sholud render the title',()=>{
        render(<FirstApp title={title}/>)
        expect(screen.getByRole('heading',{level:1})).toBeTruthy();
    });
});
