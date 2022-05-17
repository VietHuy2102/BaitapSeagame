"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryManager = void 0;
var CountryManager = /** @class */ (function () {
    function CountryManager() {
        this.list = [];
    }
    CountryManager.prototype.add = function (data) {
        this.list.push(data);
    };
    CountryManager.prototype.swap = function (arr, a, b) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    };
    CountryManager.prototype.countrySort = function () {
        for (var i = 0; i < this.list.length; i++) {
            for (var j = 0; j < this.list.length - 1 - i; j++) {
                if (this.list[j].gold < this.list[j + 1].gold) {
                    this.swap(this.list, j, j + 1);
                }
                else if (this.list[j].gold === this.list[j + 1].gold) {
                    if (this.list[j].silver < this.list[j + 1].silver) {
                        this.swap(this.list, j, j + 1);
                    }
                    else if (this.list[j].silver === this.list[j + 1].silver) {
                        if (this.list[j].copper < this.list[j + 1].copper) {
                            this.swap(this.list, j, j + 1);
                        }
                        else if (this.list[j].copper === this.list[j + 1].copper) {
                            if (this.list[j].country.localeCompare(this.list[j + 1].country) === 1) {
                                this.swap(this.list, j, j + 1);
                            }
                        }
                    }
                }
            }
        }
        return this.list;
    };
    return CountryManager;
}());
exports.CountryManager = CountryManager;
