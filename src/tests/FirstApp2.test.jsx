
import { describe, test, expect} from "@jest/globals";
import { render, screen} from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('FirstApp', ()=>{
    const title = 'Manuuueeeeeeee';
    const subtitle = 'subtitle';
    test('sholud match with snapchot',()=>{
        const { container } = render(<FirstApp title={title}/>)
        expect(container).toMatchSnapshot();
    });

    test('sholud render the title',()=>{
        render(<FirstApp title={title}/>)
        expect(screen.getByText(title)).toBeTruthy();
    });

    test('sholud render the title on h1 tag',()=>{
        render(<FirstApp title={title}/>)
        expect(screen.getByRole('heading',{level:1}).innerHTML).toContain(title);
    });

    test('sholud render the subtitle',()=>{
        render(<FirstApp subtitle={subtitle}/>)
        expect(screen.getByText(subtitle)).toBeTruthy();
    });
});
