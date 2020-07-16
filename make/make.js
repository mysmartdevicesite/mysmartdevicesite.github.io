#!/usr/bin/env node

const path = require("path");
const fs = require("fs");
const { isObject } = require("util");

if (process.argv.length < 3) {
    console.log("need more argumens");
    process.exit(-1);
}
const pname = process.argv[2]
const parts = process.argv.slice(3);
const me = process.argv[1];
const mypath = path.resolve(path.dirname(me));
const hnames = JSON.parse(fs.readFileSync(path.join(mypath, "vars.json"), {encoding: "utf8"}));
const names = {};

function addPrefix(prefix, a) {
    if (prefix === "") return a;
    else return prefix + "-" + a;
}

function readNames(tab, prefix="") {
    for (const k in tab) {
        const v = tab[k];
        const key = addPrefix(prefix, k);
        if (isObject(v)) {
            readNames(v, key);
        }
        else names[key] = v;
    }
}

readNames(hnames);

console.log("NAMES:", names);

var result = "";
for (const part of parts) {
    var code = fs.readFileSync(part, {encoding: "utf8"});
    for (const name in names) {
        code = code.split(`-var(${name})`).join(names[name]);
    }
    result += `\n/*** ${part} ***/\n`;
    result += code + "\n";
}

fs.writeFileSync(path.join("..", "css", pname+".css"), result, {encoding: "utf8"});