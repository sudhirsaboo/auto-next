import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../app/Page";

describe("Page", () => {
    it("renders a heading", () => {
        render(<Page />);

        const heading = screen.getByRole("welcome");

        expect(heading).toBeInTheDocument();
    });
});
