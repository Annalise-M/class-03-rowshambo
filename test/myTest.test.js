// IMPORT MODULES under test here:
import { compareResult } from '../compareResult.js';
// import example from '../src/example.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const playerThrow = 'rock';
    const computerThrow = 'rock';
    const expected = 'draw';
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareResult(playerThrow, computerThrow);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});
