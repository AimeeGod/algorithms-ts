"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("../common");
var linearSearch = function (items, item) {
    for (var counter = 0; counter <= items.length; counter++)
        if (items[counter] === item) {
            return counter;
        }
    return common_1.NO_MATCH;
};
exports.default = linearSearch;
//# sourceMappingURL=linearSearch.js.map