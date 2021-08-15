import React from "react";
import { mount } from "@cypress/react";
import App from "../../src/App";

it("renders the correct page content", () => {
  mount(<App />);
  cy.get("nav")
    .contains("Home")
    .click()
    .then(() => cy.contains("Home page"));
});
