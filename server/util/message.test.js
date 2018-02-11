var expect = require('expect');
var mocha = require('mocha');

var {generateMessage} = require('./message.js');

describe('generateMessage', () => {
    it ('should generate message object', () => {
        var from = 'Duffy';
        var text = 'Hello';
        
        var message = generateMessage(from, text);
        //expect(message.createAt).toBeA('number');
    })
});