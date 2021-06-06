import { render, screen, fireEvent } from "@testing-library/react";

import { Header } from ".";

describe("Header component", () => {
  const mockedOnClick = jest.fn();

  it("should render", () => {
    render(<Header onOpenModal={mockedOnClick} />);

    expect(screen.getAllByAltText("SenFinanças")).toBeTruthy();
    expect(screen.getByText("Nova transação")).toBeTruthy();
  });

  it("should open transaction modal when click on the button", () => {
    render(<Header onOpenModal={mockedOnClick} />);

    fireEvent.click(screen.getByText("Nova transação"));

    expect(mockedOnClick).toBeCalledTimes(1);
  });
});
