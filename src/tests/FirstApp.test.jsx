
import { describe, test, expect} from "@jest/globals";
import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('FirstApp', ()=>{
    test('should match with snapshot',()=>{
        const title = 'eyyyyyyy';
        const subtitle = 'yooooo';
        const name = 'ELPepe';
        const {container} = render(<FirstApp title={title} subtitle={subtitle} name={name}/>);

        expect(container).toMatchSnapshot();

    });
    test('should show title as h1',()=>{
        const title = 'eyyyyyyy';
        const {container, getByText} = render(<FirstApp title={title} />);
        const h1 = container.querySelector('h1');
        getByText(title)
        expect(h1.innerHTML).toContain(title);

    });

    test('should show the subtitle by props',()=>{
        const title = 'fede';
        const subtitle = 'yooooo';
        const {getAllByText} = render(<FirstApp title={title} subtitle={subtitle} />);
        expect(getAllByText(subtitle)).toBeTruthy();

    });
});
