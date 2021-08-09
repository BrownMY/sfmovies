'use strict';

const { expect } = require('chai');
const Movie = require('../../lib/models/movie');

describe('movie model', () => {
    describe('serialize', () => {
        it('includes all of the necesary fields', () => {
            return 'no coverage';
        });

        it('includes all of the necessary fields', () => {
            const movie = Movie.forge().serialize();

            expect(movie).to.have.all.keys([
                'id',
                'title',
                'release_year',
                'object'
            ]);
          });
    });
});