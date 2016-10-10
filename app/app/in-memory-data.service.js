"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Mr. Nice', faves: 2 },
            { id: 12, name: 'Narco', faves: 0 },
            { id: 13, name: 'Bombasto', faves: 1 },
            { id: 14, name: 'Celeritas', faves: 6 },
            { id: 15, name: 'Magneta', faves: 8 },
            { id: 16, name: 'RubberMan', faves: 2 },
            { id: 17, name: 'Dynama', faves: 3 },
            { id: 18, name: 'Dr IQ', faves: 2 },
            { id: 19, name: 'Magma', faves: 2 },
            { id: 20, name: 'Tornado', faves: 1 }
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map