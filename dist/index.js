"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = require("debug");
const axios_1 = require("axios");
const qs = require("qs");
const js_error_1 = require("@kim5257app/js-error");
const debug = debug_1.default('cnslink-adapt-router');
const rmsServer = {
    hostname: '1.215.228.83',
    protocol: 'http',
    port: 48080,
};
function urlFormat(param) {
    return `${param.protocol}://${param.hostname}:${param.port}`;
}
function checkRouter(items) {
    const body = { ssid: `'${items.join('\',\'')}'` };
    const req = {
        url: `${urlFormat(rmsServer)}/rms_router/checkSSID`,
        method: 'post',
        timeout: 3000,
        headers: {
            'Content-Type': 'application/x-www-urlencoded',
        },
        data: qs.stringify(body),
    };
    const beginTime = new Date().getTime();
    return axios_1.default(req).then((response) => (response)).catch((error) => {
        throw js_error_1.default.make(error);
    }).finally(() => {
        const current = new Date().getTime();
        debug(`Response Time(${req.url}):`, current - beginTime);
    });
}
function setDataLimit(args) {
    const req = {
        url: `${urlFormat(rmsServer)}/rms_router/doDataLimit`,
        method: 'post',
        timeout: 3000,
        headers: {
            'Content-Type': 'application/x-www-urlencoded',
        },
        data: qs.stringify(args),
    };
    const beginTime = new Date().getTime();
    return axios_1.default(req).then((response) => (response)).catch((error) => {
        throw js_error_1.default.make(error);
    }).finally(() => {
        const current = new Date().getTime();
        debug(`Response Time(${req.url}):`, current - beginTime);
    });
}
function rebootRouter(args) {
    const req = {
        url: `${urlFormat(rmsServer)}/rms_router/doReboot`,
        method: 'post',
        timeout: 3000,
        headers: {
            'Content-Type': 'application/x-www-urlencoded',
        },
        data: qs.stringify(args),
    };
    const beginTime = new Date().getTime();
    return axios_1.default(req).then((response) => (response)).catch((error) => {
        throw js_error_1.default.make(error);
    }).finally(() => {
        const current = new Date().getTime();
        debug(`Response Time(${req.url}):`, current - beginTime);
    });
}
exports.default = {
    checkRouter,
    setDataLimit,
    rebootRouter,
};
