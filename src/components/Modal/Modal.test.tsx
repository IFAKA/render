import "@testing-library/jest-dom";
import { getByRole, queryByText, render } from "@testing-library/react";

import Modal from "./Modal";

describe("Modal", () => {
  it("renders a heading", () => {
    const { container } = render(
      <Modal>
        <h1>hi</h1>
      </Modal>
    );

    const text = getByRole(container, "heading");

    expect(text).toBeInTheDocument();
  });
});
