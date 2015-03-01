beforeEach(module('phonecatApp'));

describe('PhoneListController', function() {
    var scope, controller, httpBackend;

    beforeEach(inject(function($rootScope, $controller, _$httpBackend_) {
        scope = $rootScope.$new();
        controller = $controller('PhoneListController', {$scope: scope});

        httpBackend = _$httpBackend_;
        httpBackend.expectGET('/data/phones.json').
            respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    }));

    it('should be existed', function() {
        expect(scope).not.toBe(null);
    });

    it('should create "phones" model with 2 phones fetched from xhr', function() {
        expect(scope.phones.length).toBe(0);
        httpBackend.flush();

        expect(scope.phones.length).toBe(2);
    });
});