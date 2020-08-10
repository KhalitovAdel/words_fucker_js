"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var format_library_1 = require("./constants/format.library");
function fucker(value) {
    if (typeof value !== 'string')
        throw new Error('value must be a string');
    return new Fucker(value || '');
}
exports.default = fucker;
var Fucker = /** @class */ (function () {
    function Fucker(value) {
        this.fuckme = value;
    }
    Fucker.prototype.correctLang = function (options) {
        this.fuckme = this.fuckme
            .split('')
            .map(function (letter) {
            var isUpperCase = letter === letter.toUpperCase();
            //prettier-ignore
            var newSymbol = !options || (options.toLanguage && options.toLanguage === 'eu')
                ? format_library_1.library[letter.toLowerCase()] || letter
                : Object.values(format_library_1.library).findIndex(function (el) { return el === letter.toLowerCase(); }) !== -1
                    ? Object.keys(format_library_1.library)[Object.values(format_library_1.library).findIndex(function (el) { return el === letter.toLowerCase(); })]
                    : letter;
            return isUpperCase ? newSymbol.toUpperCase() : newSymbol;
        })
            .join('');
        return this;
    };
    Object.defineProperty(Fucker.prototype, "value", {
        get: function () {
            return this.fuckme;
        },
        enumerable: false,
        configurable: true
    });
    return Fucker;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSw2REFBcUQ7QUFHckQsU0FBd0IsTUFBTSxDQUFDLEtBQWE7SUFDeEMsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3pFLE9BQU8sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFIRCx5QkFHQztBQUVEO0lBR0ksZ0JBQVksS0FBYTtRQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN4QixDQUFDO0lBRU0sNEJBQVcsR0FBbEIsVUFBbUIsT0FBd0I7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTTthQUNwQixLQUFLLENBQUMsRUFBRSxDQUFDO2FBQ1QsR0FBRyxDQUFDLFVBQUMsTUFBTTtZQUNSLElBQU0sV0FBVyxHQUFHLE1BQU0sS0FBSyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDcEQsaUJBQWlCO1lBQ2pCLElBQU0sU0FBUyxHQUFHLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsVUFBVSxLQUFLLElBQUksQ0FBQztnQkFDN0UsQ0FBQyxDQUFDLHdCQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksTUFBTTtnQkFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsd0JBQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLEVBQUUsS0FBSyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQTNCLENBQTJCLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLHdCQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQSxFQUFFLElBQUksT0FBQSxFQUFFLEtBQUssTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUEzQixDQUEyQixDQUFDLENBQUM7b0JBQzNGLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDakIsT0FBTyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzdELENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUNiLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxzQkFBSSx5QkFBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBQ0wsYUFBQztBQUFELENBQUMsQUEzQkQsSUEyQkMifQ==