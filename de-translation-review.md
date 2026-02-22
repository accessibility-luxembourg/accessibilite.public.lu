# German Translation Review — accessibilite.public.lu

Date: 2026-02-22

---

- vérifier les liens morts
- vérifier tous les contenus avec le spellchecker de Word

---

---

**Line 53 — Garbled sentence beginning**
> `Gehen Eine über die Anforderungen des aktuellen Standards hinausgehende Umsetzung der Neuerungen von WCAG 2.2…`

The word "Gehen" at the beginning is extraneous — a translation artefact. The sentence should start: `Eine über die Anforderungen des aktuellen Standards hinausgehende Umsetzung der Neuerungen von WCAG 2.2 stünde im Widerspruch…`

---

## `content/de/news/2026-01-30-synthese-2025.md`


**Line 78 — Internal link points to English instead of German article**
> `[unseren Einführungsartikel zu lesen](/en/news/2026-01-30-observatoire.html)`

A German translation of this article exists at `content/de/news/2026-01-30-observatoire.md`. The link should point to `/de/news/2026-01-30-observatoire.html`, not the English version.

---

## `content/de/news/2026-01-30-observatoire.md`

**Line 63 — URL not formatted as a markdown link**
> `Folglich zeigt die Seite „Vermittlungen" (https://observatoire.accessibilite.public.lu/en/mediations)`

The URL is in plain parentheses, not a clickable hyperlink. Compare the French source: `la page [« médiations »](https://observatoire.accessibilite.public.lu/fr/mediations)`. Should be: `die Seite [„Vermittlungen"](https://observatoire.accessibilite.public.lu/en/mediations)`.

**Line 73 — URL not formatted as a markdown link**
> `zögern Sie bitte nicht, uns zu kontaktieren (https://accessibilite.public.lu/en/contact.html)`

Same issue — bare URL in parentheses. Should be: `[uns zu kontaktieren](https://accessibilite.public.lu/en/contact.html)`.

---

## Cross-cutting Vocabulary Inconsistencies

**"Ombudsmann" vs. "Ombudsperson"**
- `reclamation.md`: uses *Ombudsmann* (matches the official Luxembourg site)
- `accessibilite.md`: uses *Ombudsperson*
- `obligations.md`: uses both *Ombudsmann* and *Ombudsperson* within the same document

One form should be chosen and used consistently throughout all files.

**"Erklärung zur Barrierefreiheit" vs. "Barrierefreiheitserklärung"**
Both compound forms appear across files (notably in `obligations.md`). These are synonymous but alternating between them is stylistically inconsistent. One form should be standardised.

**Language-locale links in `accessibilite.md`**
Links to `accessibilite.public.lu/en/raweb1.1/` are appropriate since there is no German version of RAWeb. However, the `hreflang` on those links should be `en` to reflect the actual language of the destination.

---
