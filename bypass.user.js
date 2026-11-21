// ==UserScript==
// @name         [Working] Bypass.city + Local Multi-Layer Shortlink Bypasser
// @namespace    bypass-city
// @version      14.1.1
// @description  Desempacota shortlinks locais (?video= / ?token= Base64) instantaneamente e integra o protocolo oficial do bypass.city/adbypass.org sem delays artificiais.
// @author       bypass.city team (fork & local unwrapper by victormrreis)
// @homepageURL  https://bypass.city
// @supportURL   https://discord.gg/bypass-city
// @icon         https://adbypass.org/favicon.ico
// @license      CC BY-NC 4.0 (https://creativecommons.org/licenses/by-nc/4.0/)
// @downloadURL  https://raw.githubusercontent.com/victormrreis/shortlink-bypasser/main/bypass.user.js
// @updateURL    https://raw.githubusercontent.com/victormrreis/shortlink-bypasser/main/bypass.user.js
// @match        *://*.cursoafiliado.online/*
// @match        *://*.bestwebhostinglist.com/*
// @match        *://*/v.php*
// @match        *://*/v2.php*
// @match        *://*/v3.php*
// @match        *://*/v4.php*
// @match        *://*/link.php*
// @match        *://*/link2.php*
// @match        *://*/link3.php*
// @match        *://*/link4.php*
// @match        *://*.adshnk.com/*
// @match        *://*.adshrink.it/*
// @match        *://*.shrink-service.it/*
// @match        *://adfoc.us/*
// @match        *://*.adf.ly/*
// @match        *://boost.ink/*
// @match        *://bst.gg/*
// @match        *://bst.wtf/*
// @match        *://booo.st/*
// @match        *://boost.fusedgt.com/*
// @match        *://thedragonslayer2.github.io/*
// @match        *://empebau.eu/*
// @match        *://www.google.com/url*
// @match        *://is.gd/*
// @match        *://justpaste.it/redirect/*
// @match        *://leasurepartment.xyz/*
// @match        *://letsboost.net/*
// @match        *://*.linkvertise.com/*
// @match        *://*.linkvertise.net/*
// @match        *://*.linkvertise.download/*
// @match        *://*.link-to.net/*
// @match        *://*.link-target.net/*
// @match        *://*.link-center.net/*
// @match        *://*.link-hub.net/*
// @match        *://*.direct-link.net/*
// @match        *://*.file-link.net/*
// @match        *://*.up-to-down.net/*
// @match        *://*.work.ink/*
// @match        *://*.workink.net/*
// @match        *://*.workink.one/*
// @match        *://*.workink.me/*
// @match        *://*.workink.click/*
// @match        *://loot-link.com/*
// @match        *://loot-link.co/*
// @match        *://loot-link.org/*
// @match        *://loot-link.net/*
// @match        *://loot-link.info/*
// @match        *://loot-links.com/*
// @match        *://loot-links.co/*
// @match        *://loot-links.org/*
// @match        *://loot-links.net/*
// @match        *://loot-links.info/*
// @match        *://lootlinks.com/*
// @match        *://lootlinks.co/*
// @match        *://lootlinks.org/*
// @match        *://lootlinks.net/*
// @match        *://lootlinks.info/*
// @match        *://lootdest.com/*
// @match        *://lootdest.co/*
// @match        *://lootdest.org/*
// @match        *://lootdest.net/*
// @match        *://lootdest.info/*
// @match        *://links-loot.com/*
// @match        *://links-loot.co/*
// @match        *://links-loot.org/*
// @match        *://links-loot.net/*
// @match        *://links-loot.info/*
// @match        *://linksloot.com/*
// @match        *://linksloot.co/*
// @match        *://linksloot.org/*
// @match        *://linksloot.net/*
// @match        *://linksloot.info/*
// @match        *://lootlink.com/*
// @match        *://lootlink.co/*
// @match        *://lootlink.org/*
// @match        *://lootlink.net/*
// @match        *://lootlink.info/*
// @match        *://mboost.me/*
// @match        *://rekonise.com/*
// @match        *://rkns.link/*
// @match        *://shorte.st/*
// @match        *://sh.st/*
// @match        *://gestyy.com/*
// @match        *://destyy.com/*
// @match        *://social-unlock.com/*
// @match        *://socialwolvez.com/app/l/*
// @match        *://sub1s.com/*
// @match        *://sub2get.com/*
// @match        *://subtolink.com/*
// @match        *://subfinal.com/*
// @match        *://sub2unlock.com/*
// @match        *://unlocknow.net/*
// @match        *://v.gd/*
// @match        https://bypass.city/*
// @match        https://adbypass.org/*
// @match        http://localhost:3000/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://linkvertise.com/adfly-notice*
// @exclude      *://linkvertise.com/search*
// @exclude      *://linkvertise.com/login*
// @exclude      *://linkvertise.com/profile*
// @exclude      *://blog.linkvertise.com
// @exclude      *://blog.linkvertise.com/*
// @exclude      *://linkvertise.com/assets/vendor/*
// @exclude      *://link-mutation.linkvertise.com/*
// @exclude      *://linkvertise.com/assets/external/thinksuggest
// @grant        GM_getValue
// @grant        GM.getValue
// @grant        GM_setValue
// @grant        GM.setValue
// @grant        GM_deleteValue
// @grant        GM.deleteValue
// @grant        GM_addStyle
// @grant        GM.addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM.info
// @grant        GM_info
// @grant        GM_getResourceURL
// @grant        GM.getResourceURL
// @connect      bypass.city
// @connect      adbypass.org
// ==/UserScript==
/*
Original release: 14.0.2 (1182f49), 1/29/2025, 8:49:59 PM
Website: https://bypass.city | https://adbypass.org
Discord: https://discord.gg/bypass-city
Additional copyright/license info:
Linkvertise Bypass by "bypass.city team" is licensed under CC BY-NC 4.0 (https://creativecommons.org/licenses/by-nc/4.0/).

Linkvertise Bypass © 2025 by bypass.city team.
Upstream source: https://api2.adbypass.org/userscript/download/bypass.user.js
*/

(() => {
  'use strict';

  // ============================================================================
  // 1. DESEMPACOTADOR LOCAL DE CAMADAS (?video=, ?token= Base64, Google URL, etc.)
  // ============================================================================
  const LOCAL_PARAM_NAMES = ['video', 'token', 'url', 'q', 'link', 'dest', 'go', 'target', 'redirect', 'u'];
  const MAX_UNWRAP_DEPTH = 20;

  function tryDecodeBase64(value) {
    const normalized = value.trim().replace(/-/g, '+').replace(/_/g, '/');
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, '=');
    try {
      const decoded = atob(padded);
      if (/^https?:\/\//i.test(decoded)) {
        return decoded;
      }
    } catch (e) {
      // Não é Base64 válido
    }
    return null;
  }

  function decodeCandidate(rawValue) {
    let candidate = rawValue.trim();
    for (let i = 0; i < 3; i++) {
      if (/^https?%3A%2F%2F/i.test(candidate) || /%3F(video|token|url|link)%3D/i.test(candidate)) {
        try {
          candidate = decodeURIComponent(candidate);
        } catch (e) {
          break;
        }
      }
    }
    if (/^https?:\/\//i.test(candidate)) {
      return candidate;
    }
    return tryDecodeBase64(candidate);
  }

  function extractNextLayer(urlString) {
    let parsed;
    try {
      parsed = new URL(urlString);
    } catch (e) {
      return null;
    }

    for (const key of LOCAL_PARAM_NAMES) {
      const rawParam = parsed.searchParams.get(key);
      if (!rawParam) continue;
      const decoded = decodeCandidate(rawParam);
      if (decoded) return decoded;
    }
    return null;
  }

  function unwrapAllLayers(startUrl) {
    let current = startUrl;
    let depth = 0;
    while (depth < MAX_UNWRAP_DEPTH) {
      const next = extractNextLayer(current);
      if (!next || next === current) break;
      current = next;
      depth++;
    }
    return depth > 0 ? current : null;
  }

  const locallyUnwrapped = unwrapAllLayers(window.location.href);
  if (locallyUnwrapped && window.location.hostname !== 'bypass.city' && window.location.hostname !== 'adbypass.org') {
    console.info('[Local Unwrapper] Redirecionando direto para:', locallyUnwrapped);
    window.stop();
    window.location.replace(locallyUnwrapped);
    return;
  }

  // ============================================================================
  // 2. INTEGRAÇÃO OFICIAL BYPASS.CITY / ADBYPASS.ORG
  // ============================================================================
  const UserScript = {
    getValue: (key, defaultValue) =>
      typeof GM_getValue === 'undefined'
        ? GM.getValue(key, defaultValue)
        : Promise.resolve(GM_getValue(key, defaultValue)),
    setValue: (key, value) =>
      typeof GM_setValue === 'undefined'
        ? GM.setValue(key, value)
        : Promise.resolve(GM_setValue(key, value)),
    deleteValue: (key) =>
      typeof GM_deleteValue === 'undefined'
        ? GM.deleteValue(key)
        : Promise.resolve(GM_deleteValue(key)),
    addStyle: (css) =>
      typeof GM_addStyle === 'undefined'
        ? GM.addStyle(css)
        : Promise.resolve(GM_addStyle(css)),
    xmlHttpRequest: (details) =>
      typeof GM_xmlhttpRequest === 'undefined'
        ? GM.xmlHttpRequest(details)
        : GM_xmlhttpRequest(details),
    info: typeof GM_info === 'undefined' ? GM.info : GM_info
  };

  const config = {
    version: '14.0.2',
    buildTime: '1/29/2025, 8:49:59 PM',
    branch: 'release',
    release: '1182f49',
    installed: true,
    releaseTag: '14.0.2 (1182f49)',
    downloadURL: 'https://api2.adbypass.org/userscript/download/bypass.user.js'
  };

  const WrappedGet = async (key) => {
    const value = await UserScript.getValue(key);
    return value ? JSON.parse(value) : undefined;
  };

  const WrappedSet = async (key, value) => {
    await UserScript.setValue(key, JSON.stringify(value));
  };

  const bypassCityListener = async () => {
    if (
      window.location.hostname !== 'bypass.city' &&
      window.location.hostname !== 'localhost' &&
      window.location.hostname !== 'adbypass.org'
    ) {
      return;
    }

    const injectScriptInfo = () => {
      const script = document.createElement('script');
      script.textContent = `window.scriptInfo = JSON.parse('${JSON.stringify(config)}')`;
      (document.body || document.documentElement).appendChild(script);
    };

    const sendUserscriptInfoEvent = () => {
      const event = new CustomEvent('userScriptInfo', { detail: config });
      window.dispatchEvent(event);
    };

    injectScriptInfo();
    sendUserscriptInfoEvent();

    window.addEventListener('bypassComplete', async (event) => {
      const data = event.detail;
      const redirectURL = await UserScript.getValue('bypass.callback');
      console.log('bypassMessage', data);

      await UserScript.deleteValue('bypass.data');
      await UserScript.deleteValue('bypass.callback');

      if (data && typeof data.bypassData === 'string') {
        const deepUnwrapped = unwrapAllLayers(data.bypassData);
        if (deepUnwrapped) {
          data.bypassData = deepUnwrapped;
        }
      }

      await WrappedSet('bypass.data', data);

      if (redirectURL) {
        window.location.replace(redirectURL);
      } else if (data && data.bypassData) {
        window.location.replace(data.bypassData);
      }
    });
  };

  const jsonFetch = async (url, options) => {
    return new Promise((resolve, reject) => {
      UserScript.xmlHttpRequest({
        method: options.method,
        data: options.data ? JSON.stringify(options.data) : undefined,
        headers: options.headers,
        url,
        onload: (response) => {
          if (response.responseText && typeof response.responseText === 'string') {
            try {
              resolve(JSON.parse(response.responseText));
            } catch (e) {
              reject(e);
            }
          } else {
            reject(new Error('Empty response'));
          }
        },
        onerror: reject,
        ontimeout: reject,
        onabort: reject,
        timeout: 5000
      });
    });
  };

  const ping = async () => {
    try {
      const data = await jsonFetch('https://bypass.city/.well-known/ping.json', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      return data.ping;
    } catch (e) {
      return false;
    }
  };

  const linkConfig = [
    {
      name: 'adshrink',
      regex: /^https?:\/\/(www\.)?(adshnk\.com|adshrink\.it|shrink-service\.it)/i,
      valid_url_regex: /^https?:\/\/(www\.)?(adshnk\.com|adshrink\.it|shrink-service\.it)\/.+/,
      url_base: 'https://adshnk.com'
    },
    {
      name: 'adfocus',
      regex: /^https?:\/\/adfoc\.us/i,
      valid_url_regex: /^https?:\/\/adfoc\.us\/(?:\d+|serve\/\?id=\d+)$/,
      url_base: 'https://adfoc.us'
    },
    {
      name: 'boost.ink',
      regex: /^https?:\/\/(boost\.ink|bst\.gg|bst\.wtf|booo\.st)/i,
      valid_url_regex: /^https?:\/\/(boost\.ink|bst\.gg|bst\.wtf|booo\.st)\/[a-zA-Z0-9_]+\/?$/,
      url_base: 'https://boost.ink'
    },
    {
      name: 'boost.fusedgt',
      regex: /^https?:\/\/boost\.fusedgt\.com/i,
      valid_url_regex: /^https?:\/\/boost\.fusedgt\.com\/.+/,
      url_base: 'https://boost.fusedgt.com'
    },
    {
      name: 'dragonslayer',
      regex: /^(https?:\/\/)?thedragonslayer2\.github\.io\/.*$/i,
      valid_url_regex: /^https?:\/\/thedragonslayer2\.github\.io\/GetKey\.html\?\w+$/,
      url_base: 'https://thedragonslayer2.github.io'
    },
    {
      name: 'empebau',
      regex: /^https?:\/\/empebau\.eu/i,
      valid_url_regex: /^https?:\/\/empebau\.eu\/s\/(linker\/)?[a-zA-Z0-9-]+$/,
      url_base: 'https://empebau.eu'
    },
    {
      name: 'is.gd',
      regex: /^https?:\/\/is\.gd/i,
      valid_url_regex: /^https?:\/\/is\.gd\/[a-zA-Z0-9-_]+$/,
      url_base: 'https://is.gd'
    },
    {
      name: 'justpaste',
      regex: /https?:\/\/justpaste\.it\/redirect\/[0-9a-z]+\//i,
      valid_url_regex: /https?:\/\/justpaste\.it\/redirect\/[0-9a-z]+\//i,
      url_base: 'https://justpaste.it'
    },
    {
      name: 'leasurepartment',
      regex: /^(https?:\/\/)?leasurepartment\.xyz\/.*$/i,
      valid_url_regex: /^https?:\/\/leasurepartment\.xyz\/\?h=[^&]+&tid=\d+&cc=[^&]+$/,
      url_base: 'https://leasurepartment.xyz'
    },
    {
      name: 'letsboost',
      regex: /^https?:\/\/letsboost\.net/i,
      valid_url_regex: /^https?:\/\/letsboost\.net\/[a-zA-Z0-9-_]+$/,
      url_base: 'https://letsboost.net'
    },
    {
      name: 'linkvertise',
      regex: /^https?:\/\/(?:www\.)?(linkvertise\.(com|net|download)|adf\.ly|(link-(center|target|hub|to)|direct-link|file-link|up-to-down)\.net)/i,
      valid_url_regex: /^https?:\/\/(?:www\.)?(linkvertise\.(com|net|download)|adf\.ly|(link-(center|target|hub|to)|direct-link|file-link|up-to-down)\.net)\/(?!$|search|login|profile|assets\/vendor\/|assets\/external\/thinksuggest|publisher|link-mutation|blog)(.+)/i,
      url_base: 'https://linkvertise.com'
    },
    {
      name: 'work.ink',
      regex: /^https?:\/\/(?:www\.)?(work\.ink|workink\.(net|one|me|click))/i,
      valid_url_regex: /^https?:\/\/(?:www\.)?(work\.ink|workink\.(net|one|me|click))\/.+/i,
      url_base: 'https://work.ink'
    },
    {
      name: 'loot-link',
      regex: /^https?:\/\/(?:loot-link|loot-links|lootlinks|lootdest|links-loot|linksloot|lootlink)\.(?:com|co|org|net|info)/i,
      valid_url_regex: /^https?:\/\/(?:loot-link|loot-links|lootlinks|lootdest|links-loot|linksloot|lootlink)\.(?:com|co|org|net|info)\/s\?./i,
      url_base: 'https://loot-link.com'
    },
    {
      name: 'mboost',
      regex: /^https?:\/\/mboost\.me/i,
      valid_url_regex: /^https?:\/\/mboost\.me\/a\/[a-zA-Z0-9-_]{3}$/,
      url_base: 'https://mboost.me'
    },
    {
      name: 'rekonise',
      regex: /^https?:\/\/(rekonise\.com|rkns\.link)/i,
      valid_url_regex: /^https?:\/\/(rekonise\.com|rkns\.link)\/[a-zA-Z0-9-]+(?:#[a-zA-Z0-9-_]+)?$/,
      url_base: 'https://rekonise.com'
    },
    {
      name: 'shortest',
      regex: /^https?:\/\/(shorte\.st|sh\.st|gestyy\.com|destyy\.com)/i,
      valid_url_regex: /^https?:\/\/(shorte\.st|sh\.st|gestyy\.com|destyy\.com)\/[a-zA-Z0-9\/-]+(?:\?.*)?$/,
      url_base: 'https://shorte.st'
    },
    {
      name: 'social-unlock',
      regex: /^https?:\/\/social-unlock\.com/i,
      valid_url_regex: /^https?:\/\/social-unlock\.com\/[a-zA-Z0-9]+\/?$/,
      url_base: 'https://social-unlock.com'
    },
    {
      name: 'socialwolvez',
      regex: /^https?:\/\/socialwolvez\.com\/app\/l\//i,
      valid_url_regex: /^https?:\/\/socialwolvez\.com\/app\/l\/[a-zA-Z0-9]+\/?(?:#.*)?$/,
      url_base: 'https://socialwolvez.com'
    },
    {
      name: 'sub1s',
      regex: /^https?:\/\/sub1s\.com\//i,
      valid_url_regex: /^https?:\/\/sub1s\.com\/(l\/)?[a-zA-Z0-9-_]+\/?$/,
      url_base: 'https://sub1s.com'
    },
    {
      name: 'sub2get',
      regex: /^https?:\/\/(www\.)?sub2get\.com/i,
      valid_url_regex: /^https?:\/\/(www\.)?sub2get\.com\/link(\.php)?\?(l|id)=\d+\/?(?:#.*)?$/,
      url_base: 'https://sub2get.com'
    },
    {
      name: 'subtolink',
      regex: /^https?:\/\/(www\.)?(subtolink|subfinal)\.com/i,
      valid_url_regex: /^https?:\/\/(www\.)?(subtolink|subfinal)\.com\/.+/,
      url_base: 'https://subtolink.com'
    },
    {
      name: 'sub2unlock',
      regex: /^https?:\/\/sub2unlock\.com/i,
      valid_url_regex: /^https?:\/\/sub2unlock\.com\/[a-zA-Z0-9-_]+\/?$/,
      url_base: 'https://sub2unlock.com'
    },
    {
      name: 'unlocknow',
      regex: /^https?:\/\/unlocknow\.net\/*/i,
      valid_url_regex: /^https?:\/\/unlocknow\.net\/.+/,
      url_base: 'https://unlocknow.net'
    },
    {
      name: 'v.gd',
      regex: /^https?:\/\/v\.gd/i,
      valid_url_regex: /^https?:\/\/v\.gd\/[a-zA-Z0-9-_]+\/?$/,
      url_base: 'https://v.gd'
    }
  ];

  const match = (url) => {
    for (const item of linkConfig) {
      if (item.regex.test(url)) {
        return {
          match: true,
          name: item.name,
          base: item.url_base,
          valid_url: item.valid_url_regex
        };
      }
    }
    return { match: false };
  };

  const linksListener = async () => {
    const matchData = match(window.location.href);
    if (!matchData.match) return;

    const bypassData = await WrappedGet('bypass.data');
    if (bypassData && bypassData.bypassData) {
      const targetUrl = unwrapAllLayers(bypassData.bypassData) || bypassData.bypassData;
      await UserScript.deleteValue('bypass.data');
      window.location.replace(targetUrl);
      return;
    }

    if (matchData.valid_url.test(window.location.href)) {
      const isPing = await ping();
      const redirectBase = isPing ? 'https://bypass.city' : 'https://adbypass.org';

      await UserScript.deleteValue('bypass.data');
      await UserScript.setValue('bypass.callback', matchData.base);

      const bypassCityUrl = new URL(`${redirectBase}/bypass`);
      bypassCityUrl.searchParams.set('bypass', window.location.href);
      bypassCityUrl.searchParams.set('userscript', 'true');
      bypassCityUrl.searchParams.set('userscript-version', config.version);

      window.location.replace(bypassCityUrl.href);
    }
  };

  (async () => {
    await bypassCityListener();
    await linksListener();
  })();
})();
