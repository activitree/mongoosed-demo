"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongo_object_1 = __importDefault(require("mongo-object"));
class SimpleSchemaGroup {
    constructor(...definitions) {
        this.definitions = [];
        this.definitions = definitions.map((definition) => {
            if (mongo_object_1.default.isBasicObject(definition)) {
                return { ...definition };
            }
            if (definition instanceof RegExp) {
                return {
                    type: String,
                    regEx: definition
                };
            }
            return { type: definition };
        });
    }
    get singleType() {
        return this.definitions[0].type;
    }
    clone() {
        return new SimpleSchemaGroup(...this.definitions);
    }
    extend(otherGroup) {
        // We extend based on index being the same. No better way I can think of at the moment.
        this.definitions = this.definitions.map((def, index) => {
            const otherDef = otherGroup.definitions[index];
            if (otherDef === undefined)
                return def;
            return { ...def, ...otherDef };
        });
    }
}
exports.default = SimpleSchemaGroup;