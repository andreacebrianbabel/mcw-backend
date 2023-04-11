"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = __importDefault(require("./routes/user.route"));
const crypto_route_1 = __importDefault(require("./routes/crypto.route"));
const relation_route_1 = __importDefault(require("./routes/relation.route"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const allowedOrigins = ['http://localhost:4200'];
const options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
const PORT = 5000;
app.use('/api/users', user_route_1.default);
app.use('/api/crypto', crypto_route_1.default);
app.use('/api/relation', relation_route_1.default);
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
