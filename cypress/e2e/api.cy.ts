import { BASE_URL } from "../../constants/environment";
import {
  BAD_REQUEST,
  CREATED,
  METHOD_NOT_ALLOWED,
  NOT_FOUND,
  OK,
} from "../../constants/http-codes";
import { FAKE_TODO } from "../../constants/test";

before(() => {
  cy.task("db:reset");
});

beforeEach(() => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
  cy.reload();
});

describe("Testing API endpoints", () => {
  it("getAll() should return 3 items", () => {
    cy.request({
      method: "GET",
      url: `${BASE_URL}/api/todos`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(OK);
      expect(response.body).to.be.length(3);
    });
  });

  it("Put method must return 405 http code", () => {
    cy.request({
      method: "PUT",
      url: `${BASE_URL}/api/todos`,
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(METHOD_NOT_ALLOWED);
    });
  });

  it("getById(1) should return 1 item", () => {
    cy.request({
      method: "GET",
      url: `${BASE_URL}/api/todos/1`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(OK);
      expect(response.body).to.have.property("id", 1);
    });
  });

  it("getById(4) should return undefined", () => {
    cy.request({
      method: "GET",
      url: `${BASE_URL}/api/todos/4`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(NOT_FOUND);
      expect(response.body).to.be.empty;
    });
  });

  it("Put method must return 405 http code", () => {
    cy.request({
      method: "PUT",
      url: `${BASE_URL}/api/todo1`,
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(METHOD_NOT_ALLOWED);
    });
  });

  it('save({title: "TEST"}) should return a new todo with id === 4', () => {
    cy.request({
      method: "POST",
      body: FAKE_TODO,
      url: `${BASE_URL}/api/todos`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(CREATED);
      expect(response.body).to.have.property("id", 4);
    });
  });

  it("save({}) should throw AttributeError", () => {
    cy.request({
      method: "POST",
      body: {},
      url: `${BASE_URL}/api/todos`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(BAD_REQUEST);
      expect(response.body).to.have.property("target", "title");
    });
  });

  it("changeState(4) should update last TODO created", () => {
    cy.request({
      method: "PATCH",
      url: `${BASE_URL}/api/todos/4`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(OK);
    });
  });

  it("getAll() should return 4 items now", async () => {
    cy.request({
      method: "GET",
      url: `${BASE_URL}/api/todos`,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(OK);
      expect(response.body).to.be.length(4);
    });
  });
});
