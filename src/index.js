"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
const urlApi = "https://randomuser.me/api/?nat=br";
(0, node_fetch_1.default)(urlApi, { method: 'GET' })
    .then((response) => response.json())
    .then((data) => {
    for (const result of data.results) {
        console.log(result.gender);
        console.log(result.name.first);
    }
})
    .catch(error => console.log('error', error));
