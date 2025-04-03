import { describe, it, expect} from "@jest/globals";
import { render } from "@testing-library/react";
import { CounterApp } from "../CounterApp";
import { fireEvent, screen } from "@testing-library/dom";

describe ('CounterApp tests', ()=>{
        const value = 100;
    it('should match with snapshot',()=>{
        const {container} = render(<CounterApp value ={value}/>);
        expect(container).toMatchSnapshot();
    });

    it('should render 100 as value',()=>{
        render(<CounterApp value = {value}/>);
        expect(screen.getByText(100)).toBeTruthy();
    });

    it('should increment the value by 1 when the +1 button is clicked',()=>{
        render(<CounterApp value = {value}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    it('should decrement the value by 1 when the -1 button is clicked',()=>{
        render(<CounterApp value = {value}/>);
        fireEvent.click(screen.getByText('-1'));
        expect(Number(screen.getByText('99').textContent)).toBe(99);
    });
    it('should render the initial value when reset button was clicked',()=>{
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByRole('button',{name:'reset'}))
        expect(Number(screen.getByRole('heading',{level:2}).textContent)).toEqual(100);
    })
})