import { render, screen, fireEvent } from "@testing-library/react";
import { MdEdit } from "react-icons/md";

import IconButton from ".";

describe("IconButton component", () => {
  const mockedOnClick = jest.fn();

  it("should render", () => {
    render(
      <IconButton onClick={mockedOnClick} title="Editar">
        <MdEdit />
      </IconButton>
    );

    expect(screen.getByTitle('Editar')).toBeTruthy()
  });

  it("should calls onClick prop when clicked", () => {
    render(
      <IconButton onClick={mockedOnClick} title="Editar">
        <MdEdit />
      </IconButton>
    );

    fireEvent.click(screen.getByTitle('Editar'));

    expect(mockedOnClick).toBeCalledTimes(1)
  });
});
