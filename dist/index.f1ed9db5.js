// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hnX1p":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "d11016f4f1ed9db5";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"15ljZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GAP_HEIGHT", ()=>GAP_HEIGHT);
parcelHelpers.export(exports, "PIPE_SPEED", ()=>PIPE_SPEED);
parcelHelpers.export(exports, "PIPE_HEIGHT", ()=>PIPE_HEIGHT);
parcelHelpers.export(exports, "PIPE_WIDHT", ()=>PIPE_WIDHT);
parcelHelpers.export(exports, "canvas", ()=>canvas);
parcelHelpers.export(exports, "c", ()=>c);
parcelHelpers.export(exports, "scoreUI", ()=>scoreUI);
parcelHelpers.export(exports, "liveScoreUI", ()=>liveScoreUI);
parcelHelpers.export(exports, "VIRTUAL_WIDTH", ()=>VIRTUAL_WIDTH);
parcelHelpers.export(exports, "VIRTUAL_HEIGHT", ()=>VIRTUAL_HEIGHT);
parcelHelpers.export(exports, "engine", ()=>engine);
var _utils = require("./utils");
var _gameState = require("./GameState");
var _gameStateDefault = parcelHelpers.interopDefault(_gameState);
var _backgroundPng = require("./background.png");
var _backgroundPngDefault = parcelHelpers.interopDefault(_backgroundPng);
var _background = require("./Background");
var _backgroundDefault = parcelHelpers.interopDefault(_background);
var _groundPng = require("./ground.png");
var _groundPngDefault = parcelHelpers.interopDefault(_groundPng);
var _groundJs = require("./Ground.js");
var _groundJsDefault = parcelHelpers.interopDefault(_groundJs);
var _birdPng = require("./bird.png");
var _birdPngDefault = parcelHelpers.interopDefault(_birdPng);
var _bird = require("./Bird");
var _birdDefault = parcelHelpers.interopDefault(_bird);
var _pipePng = require("./pipe.png");
var _pipePngDefault = parcelHelpers.interopDefault(_pipePng);
var _pipe = require("./Pipe");
var _pipeDefault = parcelHelpers.interopDefault(_pipe);
var _pipePair = require("./PipePair");
var _pipePairDefault = parcelHelpers.interopDefault(_pipePair);
let backgroundScroll = 0;
let groundScroll = 0;
const GAP_HEIGHT = 90;
const PIPE_SPEED = 2;
const PIPE_HEIGHT = 288;
const PIPE_WIDHT = 70;
// import audio from './audio';
const BACKGROUND_SCROLL_SPEED = 0.9;
const GROUND_SCROLL_SPEED = 1.8;
const BACKGROUND_LOOPING_POINT = 413;
const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const containerUI = document.querySelector(".flappy-gui-states");
const scoreUI = document.querySelector(".score-point span");
const liveScoreUI = document.querySelector(".score-point");
const resultScoreUI = document.querySelector(".result-point span");
const btnStart = document.getElementById("btn-start");
const btnJump = document.getElementById("btn-jump");
const VIRTUAL_WIDTH = 512;
const VIRTUAL_HEIGHT = 288;
canvas.width = VIRTUAL_WIDTH;
canvas.height = VIRTUAL_HEIGHT;
let engine = false;
let background;
let ground;
let bird;
let pipesPairs;
let spawnTimer;
let lastY;
let score;
let msPrev = window.performance.now();
let fps = 60;
let fpsInterval = 1000 / fps;
function init() {
    background = new (0, _backgroundDefault.default)({
        position: {
            x: -1,
            y: -1
        }
    }, (0, _utils.createImage)((0, _backgroundPngDefault.default)));
    ground = new (0, _groundJsDefault.default)({
        position: {
            x: -1,
            y: VIRTUAL_HEIGHT - 16
        }
    }, (0, _utils.createImage)((0, _groundPngDefault.default)));
    bird = new (0, _birdDefault.default)({
        position: {
            x: VIRTUAL_WIDTH / 2,
            y: VIRTUAL_HEIGHT / 2
        }
    }, (0, _utils.createImage)((0, _birdPngDefault.default)));
    pipesPairs = [];
    spawnTimer = 0;
    lastY = -PIPE_HEIGHT - Math.random() * 80 + 20;
    score = 0;
    containerUI.insertAdjacentHTML("afterbegin", (0, _gameStateDefault.default).startScreen());
}
function animate() {
    requestAnimationFrame(animate);
    const msNow = window.performance.now();
    const elapsed = msNow - msPrev;
    if (elapsed < fpsInterval) return;
    msPrev = msNow - elapsed % fpsInterval; // 3.34
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);
    backgroundScroll = (backgroundScroll + BACKGROUND_SCROLL_SPEED * 1) % BACKGROUND_LOOPING_POINT; // prettier-ignore
    groundScroll = (groundScroll + GROUND_SCROLL_SPEED * 1) % VIRTUAL_WIDTH; // prettier-ignore
    spawnTimer++;
    if (spawnTimer > 60 && engine) {
        // prettier-ignore
        let y = Math.max(-PIPE_HEIGHT + 10, Math.min(lastY + (0, _utils.randomIntFromRange)(-20, 20), VIRTUAL_HEIGHT - 90 - PIPE_HEIGHT));
        lastY = y;
        pipesPairs.push(new (0, _pipePairDefault.default)({
            position: {
                y: y
            }
        }));
        spawnTimer = 0;
    }
    //////////////////////////////////
    if (engine) {
        background.draw(-backgroundScroll);
        for(let p = pipesPairs.length - 1; p >= 0; p--){
            let pair = pipesPairs[p];
            pair.pipes.forEach((pipe)=>{
                if (bird.collides(pipe)) {
                    // prettier-ignore
                    audio.lost.play();
                    containerUI.insertAdjacentHTML("afterbegin", (0, _gameStateDefault.default).lostScreen(score));
                    engine = false;
                }
            });
            if (!pair.scored) {
                if (pair.position.x + PIPE_WIDHT < bird.position.x) {
                    audio.scoring.play();
                    score = score + 1;
                    scoreUI.innerText = score;
                    pair.scored = true;
                }
            }
            if (pair.position.x + PIPE_WIDHT < 0) pipesPairs.splice(p, 1);
            else pair.update();
        }
        ground.draw(-groundScroll);
        if (bird.position.y + bird.height + ground.height > VIRTUAL_HEIGHT) {
            audio.lost.play();
            engine = false;
            containerUI.insertAdjacentHTML("afterbegin", (0, _gameStateDefault.default).lostScreen(score));
        } else bird.update();
    } else {
        background.draw(-backgroundScroll);
        ground.draw(-groundScroll);
    }
}
init();
animate();
window.addEventListener("keypress", ({ key  })=>{
    switch(key){
        case " ":
            if (!engine) return;
            audio.jump.play();
            bird.velocity.y = -3.8;
            break;
        case "p":
            break;
        case "Enter":
            init();
            engine = true;
            containerUI.innerHTML = "";
            console.log("game restarted");
            break;
    }
});
btnJump.addEventListener("click", ()=>{
    if (!engine) return;
    audio.jump.play();
    bird.velocity.y = -3.8;
});
btnStart.addEventListener("click", ()=>{
    init();
    engine = true;
    containerUI.innerHTML = "";
});
window.addEventListener("click", ()=>{
    if (!engine) return;
    audio.jump.play();
    bird.velocity.y = -3.8;
});
audio.backgroundMusic.play();

},{"./utils":"bIDtH","./background.png":"iYI08","./Background":"1KKMm","./ground.png":"kIzJb","./Ground.js":"6OAYq","./bird.png":"bZFdM","./Bird":"aPQZR","./pipe.png":"iDknE","./Pipe":"4dkLc","./PipePair":"fQaGZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./GameState":"5S8R9"}],"bIDtH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createImage", ()=>createImage);
parcelHelpers.export(exports, "randomIntFromRange", ()=>randomIntFromRange);
const createImage = function(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    return image;
};
const randomIntFromRange = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iYI08":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWPS4") + "background.2e2df4be.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1KKMm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvas = require("./canvas");
var _genericObject = require("./GenericObject");
var _genericObjectDefault = parcelHelpers.interopDefault(_genericObject);
class Background extends (0, _genericObjectDefault.default) {
    constructor({ position  }, image){
        super({
            position
        }, image);
        this.position = {
            x: position.x,
            y: position.y
        };
    // this.width = image.width;
    // this.height = image.height;
    // this.image = image;
    }
    draw(x = this.position.x) {
        (0, _canvas.c).drawImage(this.image, x, this.position.y);
    }
    update() {}
}
exports.default = Background;

},{"./canvas":"15ljZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./GenericObject":"bl9Nt"}],"bl9Nt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvas = require("./canvas");
class GenericObjects {
    constructor({ position  }, image){
        this.position = {
            x: position.x,
            y: position.y
        };
        this.width = image.width;
        this.height = image.height;
        this.image = image;
    }
    draw(x = this.position.x) {
        (0, _canvas.c).drawImage(this.image, x, this.position.y);
    }
    update() {}
}
exports.default = GenericObjects;

},{"./canvas":"15ljZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kIzJb":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWPS4") + "ground.43565134.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"6OAYq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvas = require("./canvas");
var _genericObject = require("./GenericObject");
var _genericObjectDefault = parcelHelpers.interopDefault(_genericObject);
class Ground extends (0, _genericObjectDefault.default) {
    constructor({ position  }, image){
        super({
            position
        }, image);
        this.position = {
            x: position.x,
            y: position.y
        };
    // this.width = image.width;
    // this.height = image.height;
    // this.image = image;
    }
    draw(x = this.position.x) {
        (0, _canvas.c).drawImage(this.image, x, this.position.y);
    }
    update() {}
}
exports.default = Ground;

},{"./canvas":"15ljZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./GenericObject":"bl9Nt"}],"bZFdM":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWPS4") + "bird.4bda3845.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"aPQZR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvas = require("./canvas");
var _genericObject = require("./GenericObject");
var _genericObjectDefault = parcelHelpers.interopDefault(_genericObject);
class Bird extends (0, _genericObjectDefault.default) {
    #GRAVITY = 0.18;
    constructor({ position  }, image){
        super({
            position
        }, image);
        this.position = {
            x: position.x - this.width / 2,
            y: position.y - this.height / 2
        };
        this.velocity = {
            x: 0,
            y: 0
        };
    }
    draw() {
        (0, _canvas.c).drawImage(this.image, this.position.x, this.position.y);
    }
    update() {
        this.draw();
        this.velocity.y += this.#GRAVITY * 1;
        this.position.y += this.velocity.y;
    }
    collides(pipe) {
        if (this.position.x + 0 + (this.width - 0) >= pipe.position.x && this.position.x + 0 <= pipe.position.x + (0, _canvas.PIPE_WIDHT)) {
            if (this.position.y + 0 + (this.height - 0) >= pipe.position.y && this.position.y + 0 <= pipe.position.y + (0, _canvas.PIPE_HEIGHT)) return true;
        }
        return false;
    }
}
exports.default = Bird;

},{"./canvas":"15ljZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./GenericObject":"bl9Nt"}],"iDknE":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("hWPS4") + "pipe.54afd9d2.png" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"4dkLc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvas = require("./canvas");
var _utils = require("./utils");
var _pipePng = require("./pipe.png");
var _pipePngDefault = parcelHelpers.interopDefault(_pipePng);
var _genericObject = require("./GenericObject");
var _genericObjectDefault = parcelHelpers.interopDefault(_genericObject);
class Pipe extends (0, _genericObjectDefault.default) {
    #PIPE_SCROLL = -0.5;
    constructor({ position  }, orientation, image = (0, _utils.createImage)((0, _pipePngDefault.default))){
        super({
            position
        }, image);
        this.position = {
            x: (0, _canvas.VIRTUAL_WIDTH),
            y: position.y
        };
        this.orientation = orientation;
    }
    draw() {
        this.mirrorImage(this.image, this.position.x, this.orientation == "top" ? this.position.y + (0, _canvas.PIPE_HEIGHT) : this.position.y, false, this.orientation == "top" ? true : false);
    }
    update() {
        this.draw();
    }
    mirrorImage(image, x = 0, y = 0, horizontal = false, vertical = false) {
        (0, _canvas.c).save();
        (0, _canvas.c).setTransform(horizontal ? -1 : 1, 0, 0, vertical ? -1 : 1, x + (horizontal ? image.width : 0), y + 0 // y origin
        );
        (0, _canvas.c).drawImage(image, 0, 0);
        (0, _canvas.c).restore();
    }
}
exports.default = Pipe;

},{"./canvas":"15ljZ","./utils":"bIDtH","./pipe.png":"iDknE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./GenericObject":"bl9Nt"}],"fQaGZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvas = require("./canvas");
var _pipe = require("./Pipe");
var _pipeDefault = parcelHelpers.interopDefault(_pipe);
class PipePair {
    constructor({ position  }){
        this.position = {
            x: (0, _canvas.VIRTUAL_WIDTH) + 32,
            y: position.y
        };
        this.pipes = [
            new (0, _pipeDefault.default)({
                position: {
                    y: this.position.y
                }
            }, "top"),
            new (0, _pipeDefault.default)({
                position: {
                    y: this.position.y + (0, _canvas.PIPE_HEIGHT) + (0, _canvas.GAP_HEIGHT)
                }
            }, "bottom")
        ];
        this.scored = false;
    }
    draw() {
        this.pipes.forEach((pipe)=>pipe.update());
    }
    update() {
        this.draw();
        this.position.x -= (0, _canvas.PIPE_SPEED) * 1;
        this.pipes[0].position.x = this.position.x;
        this.pipes[1].position.x = this.position.x;
    }
}
exports.default = PipePair;

},{"./canvas":"15ljZ","./Pipe":"4dkLc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5S8R9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _canvas = require("./canvas");
class GameState {
    static startScreen() {
        (0, _canvas.scoreUI).innerText = 0;
        (0, _canvas.liveScoreUI).classList.remove("live-score");
        return `<h2>Flappy Bird</h2>
      <p>Press Enter to Start &#9654;</p>`;
    }
    static lostScreen(score) {
        (0, _canvas.liveScoreUI).classList.add("live-score");
        return `<h2>Oops! You Lost</h2>
      <p class="result-point">score : <span>${score}</span></p>
      <p>Press Enter to coninue playing &#9654;</p>`;
    }
}
exports.default = GameState;

},{"./canvas":"15ljZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["hnX1p","15ljZ"], "15ljZ", "parcelRequire2382")

//# sourceMappingURL=index.f1ed9db5.js.map
