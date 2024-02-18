import AboutPage from "@/app/about/page";
import AboutLayout from "@/app/about/layout";
import { render, screen } from "@testing-library/react";
import { describe } from "node:test";

describe("About Page", () => {
  it("should render the About Page", () => {
    const page = render(
      <AboutLayout>
        <AboutPage />
      </AboutLayout>
    );
    expect(page).toMatchSnapshot();
  });
});
