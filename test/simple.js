var assert = require("assert")

describe('Array', function(){


    before(function() {
        console.log('before');
    });

    beforeEach(function() {
        console.log('beforeEach');
    });

    after(function() {
       console.log('after');
    });

    describe('#indexOf()', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(-1, [1,2,3].indexOf(5));
            assert.equal(-1, [1,2,3].indexOf(0));
        })
    });

    describe('#length', function() {
       it('should return 3 when the number of elements in the array is 3', function() {
           assert.equal(3, [1,2,3].length);
       })
    });
})
