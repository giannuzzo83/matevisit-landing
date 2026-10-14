# matevisit-landing

Pagina **Coming Soon** statica per [matevisit.com](https://matevisit.com). Repository separato dal prodotto [`matevisit`](https://github.com/giannuzzo83/matevisit).

## Contenuto

- Messaggio: *Le visite immobiliari, organizzate meglio. In arrivo.*
- File serviti dalla root: `index.html`, `styles.css`, `favicon.svg`, `_headers`.

## Sviluppo locale

Apri `index.html` nel browser, oppure:

```bash
npx --yes serve .
```

## Verifica

```bash
npm run check
```

Lo script `build` è un no-op di validazione: **non genera una cartella `dist`**.

## Deploy su Cloudflare Pages (GitHub)

| Impostazione | Valore |
|--------------|--------|
| **Repository** | `giannuzzo83/matevisit-landing` |
| **Branch di produzione** | `main` |
| **Framework preset** | None |
| **Build command** | `npm run build` (opzionale) oppure *vuoto* |
| **Build output directory** | `/` (root del repository) |

### Passi nell’interfaccia Cloudflare

1. [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Autorizza GitHub e seleziona **`matevisit-landing`**.
3. **Production branch:** `main`.
4. **Build settings:**
   - Build command: `npm run build` (consigliato, verifica i file) **oppure** lasciare vuoto.
   - Build output directory: `/` (oppure `.` se l’UI non accetta `/`).
5. **Save and Deploy**.
6. **Custom domains:** aggiungi `matevisit.com` (e opzionalmente `www`) al progetto Pages; segui le istruzioni DNS (record CNAME verso `*.pages.dev` o nameserver Cloudflare).

### Note

- Non collegare questo progetto al backend MateVisit (PR #6 / app Next).
- Nessun secret, database o integrazione WhatsApp su questa repo.
