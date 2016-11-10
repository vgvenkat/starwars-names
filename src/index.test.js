var expect = require('chai').expect;
var starWars = require('./index');

describe('starWars-names', function(){
    it('should work!', function(){
          expect(true).to.be.true;
    });

    describe('all', function(){
        it('should be an array of strings', function(){
            expect(starWars.all).to.satisfy(isArrayOfString);

            function isArrayOfString(array){
                return array.every(function(item){
                    return typeof item === 'string'
                });
            }
        });

        it('should have have `Luke Skywalker`', function(){
            expect(starWars.all).to.include('Luke Skywalker')
        })
    });

    describe('random', function(){
        it('should return a random value from starWars.all', function(){
            var randomItem = starWars.random();
            expect(starWars.all).to.contain(randomItem);
        });
        it('should return an array of random item if passed a number', function(){
            var randomItems = starWars.random(3);
            expect(randomItems).to.have.length(3);

            randomItems.forEach(function(item){
                expect(starWars.all).to.include(item);
            });
        });
    });
});
