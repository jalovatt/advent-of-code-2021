import describeDay from '@lib/describeDay';
import loadText from '@lib/loadText';
import { a, b } from '.';

const title = 'No title yet';

const input = loadText('input.txt');

const example1 = `
1
`;

const example2 = `
1
`;

describeDay(title, () => {
  describe('Part 1', () => {
    describe('Tests', () => {
      test.each([
        [example1, 2],
      ])('%p => %p', (given, expected) => {
        expect(a(given)).toEqual(expected);
      });
    });

    xdescribe('Solution', () => {
      const knownSolution = null;

      test(`${knownSolution}`, () => {
        const solution = a(input);

        expect(solution).toEqual(knownSolution);
      });
    });
  });

  xdescribe('Part 2', () => {
    describe('Tests', () => {
      test.each([
        [example2, 2],
      ])('%p => %p', (given, expected) => {
        expect(b(given)).toEqual(expected);
      });
    });

    xdescribe('Solution', () => {
      const knownSolution = null;

      test(`${knownSolution}`, () => {
        const solution = b(input);

        expect(solution).toEqual(knownSolution);
      });
    });
  });
});
