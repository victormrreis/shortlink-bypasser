# Shortlink Bypasser (Bypass.city + Local Multi-Layer Unwrapper)

Userscript para **Tampermonkey / Violentmonkey** que combina o protocolo oficial do **[bypass.city](https://bypass.city)** (`adbypass.org`) com um **desempacotador recursivo local** para encurtadores em camadas (`?video=` / `?token=` em Base64 e URL-encode).

---

## Créditos e Agradecimentos (Credits)

Todo o crédito pelo motor principal de resolução de encurtadores (Linkvertise, LootLabs/LootLinks, Work.ink, Shorte.st, Boost.ink, Rekonise, Sub2Unlock, etc.) pertence à equipe do **[bypass.city](https://bypass.city)**:

- **Projeto Original:** [bypass.city](https://bypass.city) / [adbypass.org](https://adbypass.org)
- **Autores Originais:** **bypass.city team** (Release `14.0.2`)
- **Discord Oficial do Bypass.city:** [https://discord.gg/bypass-city](https://discord.gg/bypass-city)
- **Script Upstream Oficial:** `https://api2.adbypass.org/userscript/download/bypass.user.js`
- **Licença:** [Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/)

---

## Instalação (Tampermonkey / Violentmonkey)

1. Instale a extensão [Tampermonkey](https://www.tampermonkey.net/) no seu navegador (Microsoft Edge, Chrome, Brave, Firefox).
2. Clique no link abaixo para instalar o script diretamente:
   - **[Instalar `bypass.user.js`](https://raw.githubusercontent.com/victormrreis/shortlink-bypasser/main/bypass.user.js)**

---

## O que foi adicionado/melhorado neste fork

1. **Desempacotador Local Recursivo (0ms):**
   - Resolve localmente links que escondem a URL final em múltiplas camadas de parâmetros (`video`, `token`, `url`, `q`, `link`, `dest`, `go`, `target`, `redirect`, `u`) alternando `URL Encode` e `Base64` (ex.: `cursoafiliado.online`, `bestwebhostinglist.com`, `/v.php`, `/v2.php`, `/v3.php`, `/link.php`, `/link2.php`, `/link3.php`, `google.com/url`).
   - Caso um link resolvido pelo `bypass.city` retorne outro encurtador em camadas, o script desempacota todas as camadas restantes antes mesmo de redirecionar.
2. **Remoção de Atrasos Artificiais e Abas Duplicadas:**
   - Removidos os `sleep(2000)` e `sleep(3000)` do script original, tornando o redirecionamento imediato.
   - Removido o fallback `window.open(..., "_blank")` após 200ms que causava abertura de abas duplicadas.
3. **Cobertura Completa no `@match` e Zero Avisos no ESLint do Tampermonkey:**
   - Adicionados ao cabeçalho `@match` os domínios alternativos do Linkvertise (`link-to.net`, `link-target.net`, `link-center.net`, `link-hub.net`, `direct-link.net`, `file-link.net`, `up-to-down.net`) e do `work.ink` (`workink.net`, `workink.one`, `workink.me`, `workink.click`).

---

## Licença

Distribuído sob a licença **[CC BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/)**, mantendo a atribuição e os termos definidos pelo **bypass.city team**.
