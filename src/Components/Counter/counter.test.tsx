import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  test("renders cout 0", () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
  });

  test("renders count 1", async () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    expect(countElement).toHaveTextContent("1");
  });

  test("renders count 2", async () => {
    render(<Counter />);
    const countElement = screen.getByRole("heading");
    expect(countElement).toHaveTextContent("0");
    const incrementButton = screen.getByRole("button", {
      name: "Increment",
    });
    await user.click(incrementButton);
    expect(countElement).toHaveTextContent("1");
    await user.click(incrementButton);
    expect(countElement).toHaveTextContent("2");
  });

  test('renders count 10 after clicking on setbutton', async()=>{
    render(<Counter/>);
    const amountinput = screen.getByRole('spinbutton');
    await user.type(amountinput, '10');
    expect(amountinput).toHaveValue(10);
    const setbutton= screen.getByRole('button', {
        name:'Set'
    })
    await user.click(setbutton);
    const headingElement= screen.getByRole('heading');
    expect(headingElement).toHaveTextContent('10');
  })

  test('elements are focused in the right order', async ()=>{
    render(<Counter/>)
    const amountinput= screen.getByRole('spinbutton');
    const incrementButton = screen.getByRole("button", {
        name: "Increment",
      });
      const setbutton= screen.getByRole('button', {
        name:'Set'
    })
    await user.tab();
    expect(incrementButton).toHaveFocus();
    await user.tab()
    expect(amountinput).toHaveFocus();
    await user.tab()
    expect(setbutton).toHaveFocus();
  })
});
