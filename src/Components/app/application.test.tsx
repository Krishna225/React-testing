import { render, screen } from "@testing-library/react";
import { Application } from "./application";


 it("renders correctly", async  () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      // name: "Job application form",
      level: 2,
    });
    expect(pageHeading).toBeInTheDocument();
    const sectionHeading = screen.getByRole("heading", {
      //name: "Section 1",
      level: 1,
    });
    expect(sectionHeading).toBeInTheDocument();
    const nameElement = screen.getByRole("textbox", {
      name: "Name",
    });
    expect(nameElement).toBeInTheDocument();
    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();
    const nameElement3= screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio",
    });

    expect(bioElement).toBeInTheDocument();

    const joblocationElement = screen.getByRole("combobox");
    expect(joblocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    const termsElement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement2).toBeInTheDocument();

    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();

    const paragraphElement= screen.getByText('All fields are mandatory');
    expect(paragraphElement).toBeInTheDocument();

    const nameElement4= await screen.getByDisplayValue("Krishna");
  expect(nameElement4).toBeInTheDocument();

  const imageElement= screen.getByAltText("a person with a laptop");
  expect(imageElement).toBeInTheDocument();

  const closeElement = screen.getByTitle('close');
  expect(closeElement).toBeInTheDocument();

  const testElement= screen.getByTestId('custom-element');
  expect(testElement).toBeInTheDocument();
  });



  
