import { render, screen } from "@testing-library/react";
import Greet from './Greet';

describe('Greet', ()=>{
    test('greet renders correctly', ()=>{
        render(<Greet />)
        const textElement= screen.getByText(/Hello/);
        expect(textElement).toBeInTheDocument();
        })
        
        // test('greet renders with the name', ()=>{
        //     render(<Greet name='Krishna'/>);
        //     const textElement= screen.getByText(/hello krishna/i);
        //     expect(textElement).toBeInTheDocument();
        // })
})
