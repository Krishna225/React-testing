import { logRoles, render, screen } from "@testing-library/react";
import { Skills } from "./skills";

describe('Skill', ()=>{
const skills=['HTML','CSS', 'JavaScript'];

test('renders correctly', ()=>{
    render(<Skills skills={skills}/>)
    const listElement= screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
});
test('renders login button', ()=>{
    render(<Skills skills={skills}/>)
    const loginButton= screen.getByRole('button', {
        name:'Login'
    });
   expect(loginButton).toBeInTheDocument();
});
test('Start learning button is not rendered', ()=>{
    render(<Skills skills={skills}/>)
    const learningButton= screen.queryByRole('button', {
        name:'Start learning'
    });
   expect(learningButton).not.toBeInTheDocument();
});

test('start learning button is evemtually displayed', async()=>{
    const view= render(<Skills skills={skills}/>)
    //  console.log(screen.debug());
    //logRoles(view.container);
    const startLearningButton= await screen.findByRole('button',{
        name:'Start learning'
    },
{
    timeout:2000
})
    expect(startLearningButton).toBeInTheDocument();
})

})