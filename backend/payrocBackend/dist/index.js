"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var cors = require("cors");
var body_parser_1 = __importDefault(require("body-parser"));
var client_1 = require("@prisma/client");
var shortid = require("shortid");
var app = (0, express_1["default"])();
var prisma = new client_1.PrismaClient();
app.use(cors());
app.use(body_parser_1["default"].json());
function main() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/];
        });
    });
}
main()["catch"](function (e) {
    throw e;
})["finally"](function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//runs when the user sends through a url they want shortened
app.post("/shorten-url", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var short;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    short = shortid.generate();
                    return [4 /*yield*/, prisma.uRL.create({
                            data: {
                                originalUrl: req.body.text,
                                shortUrl: short,
                                usedCount: 0
                            }
                        })];
                case 1:
                    _a.sent();
                    console.log(req.body.text);
                    res.send("http://localhost:3000/" + short);
                    return [2 /*return*/];
            }
        });
    });
});
app.post("/s", function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.uRL.findUnique({
                        where: {
                            shortUrl: req.body.text
                        }
                    })];
                case 1:
                    result = _a.sent();
                    if (!!result) return [3 /*break*/, 2];
                    res.status(404).send();
                    return [2 /*return*/];
                case 2:
                    res.send(result.originalUrl);
                    //adds a increment to the database to show how many times the shortened url was used
                    return [4 /*yield*/, prisma.uRL.update({
                            where: {
                                shortUrl: result.shortUrl
                            },
                            data: {
                                usedCount: { increment: 1 }
                            }
                        })];
                case 3:
                    //adds a increment to the database to show how many times the shortened url was used
                    _a.sent();
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
});
app.listen(3001);
//# sourceMappingURL=index.js.map