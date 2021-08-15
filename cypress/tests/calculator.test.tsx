import React from "react";
import { mount } from "@cypress/react";
import App from "../../src/App";

describe("The Calculator", () => {
  beforeEach(() => {
    mount(<App />);
    cy.get("nav").contains("Calculator").click();
  });

  it("should perform the correct calculation: 1 + 1 = 2", () => {
    cy.contains("1").click();
    cy.contains("+").click();
    cy.contains("1").click();
    cy.contains("=").click();
    cy.contains("1+1 = 2");
  });

  it("should perform the correct calculation: 1 - 20 = -19", () => {
    cy.contains("1").click();
    cy.contains("-").click();
    cy.contains("2").click();
    cy.contains("0").click();
    cy.contains("=").click();
    cy.contains("1-20 = -19");
  });

  it("should perform the correct calculation: 5 * 6 = 30", () => {
    cy.contains("5").click();
    cy.contains("*").click();
    cy.contains("6").click();
    cy.contains("=").click();
    cy.contains("5*6 = 30");
  });

  it("should perform the correct calculation: 5 * 6 / 3 = 10", () => {
    cy.contains("5").click();
    cy.contains("*").click();
    cy.contains("6").click();
    cy.contains("-").click();
    cy.contains("/").click();
    cy.contains("3").click();
    cy.contains("=").click();
    cy.contains("5*6/3 = 10");
  });
});
