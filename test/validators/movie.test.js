"use strict";

const { expect } = require("chai");
const { number } = require("joi");

const Joi = require("joi");

const MovieValidator = require("../../lib/validators/movie");

describe("movie validator", () => {
  describe("title", () => {
    it("is required", () => {
        const payload = {};
        const result = Joi.validate(payload, MovieValidator)

        expect(result.error.details[0].path[0]).to.eql('title');
        expect(result.error.details[0].type).to.eql('any.required');
    });

    it("is less than 255 characters", () => {
        const payload = { title: 'a'.repeat(260) };
        const result = Joi.validate(payload, MovieValidator)
        
        expect(result.error.details[0].path[0]).to.eql('title');
        expect(result.error.details[0].type).to.eql('string.max');
    });
  });

  describe("release_year", () => {
    it("is after 1878", () => {
        const payload = {
            title: 'foo',
            release_year: 1800
        };
        const result = Joi.validate(payload, MovieValidator);

        expect(result.error.details[0].path[0]).to.eql('release_year');
        expect(result.error.details[0].type).to.eql('number.min');
    });

    it("is limited to 4 digits", () => {
        const payload = {
            title: 'foo',
            release_year: 12345
        };

        const result = Joi.validate(payload, MovieValidator);

        expect(result.error.details[0].path[0]).to.eql('release_year');
        expect(result.error.details[0].type).to.eql('number.max');
    });
  });
});
