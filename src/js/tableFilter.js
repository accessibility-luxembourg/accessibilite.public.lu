/*
 * Column filters for data tables (table.filterable).
 * A row of search fields is added below the column headers. Rows are kept
 * when every non-empty field is contained in the corresponding cell
 * (case and accent insensitive). The number of displayed rows is announced
 * through a status message.
 */

const i18n = {
  fr: {
    help: 'Saisissez du texte dans les champs situés sous les en-têtes pour filtrer les lignes du tableau.',
    label: col => `Filtrer la colonne ${col}`,
    reset: 'Réinitialiser les filtres',
    status: (shown, total) => `${shown} ${shown > 1 ? 'lignes affichées' : 'ligne affichée'} sur ${total}`
  },
  en: {
    help: 'Type text in the fields below the column headers to filter the table rows.',
    label: col => `Filter column ${col}`,
    reset: 'Reset filters',
    status: (shown, total) => `${shown} ${shown === 1 ? 'row' : 'rows'} shown out of ${total}`
  }
}

function normalize(str) {
  return str.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\s+/g, ' ').trim()
}

// visible text of an element, without the tooltips and with <br> as spaces
function visibleText(el) {
  const clone = el.cloneNode(true)
  clone.querySelectorAll('.tip-bubble').forEach(e => e.remove())
  clone.querySelectorAll('br').forEach(e => e.replaceWith(' '))
  return clone.textContent
}

function initTableFilter(table, tableIndex, t) {
  const headerRow = table.tHead ? table.tHead.rows[0] : null
  const body = table.tBodies[0]
  if (!headerRow || !body) {
    return
  }
  const headers = Array.from(headerRow.cells)
  const rows = Array.from(body.rows).map(row => ({
    row: row,
    texts: Array.from(row.cells).map(cell => normalize(visibleText(cell)))
  }))

  // help text, reset button and status message, placed before the table
  const controls = document.createElement('div')
  controls.className = 'table-filter-controls'
  const help = document.createElement('p')
  help.textContent = t.help
  const reset = document.createElement('button')
  reset.type = 'button'
  reset.textContent = t.reset
  const status = document.createElement('p')
  status.className = 'table-filter-status'
  status.setAttribute('role', 'status')
  controls.append(help, reset, status)
  table.before(controls)

  // filter row
  const filterRow = document.createElement('tr')
  filterRow.className = 'table-filters'
  const inputs = headers.map((th, i) => {
    const td = document.createElement('td')
    const id = `table-filter-${tableIndex}-${i}`
    const label = document.createElement('label')
    label.className = 'sr-only'
    label.htmlFor = id
    label.textContent = t.label(visibleText(th).replace(/\s+/g, ' ').trim())
    const input = document.createElement('input')
    input.type = 'search'
    input.id = id
    input.autocomplete = 'off'
    td.append(label, input)
    filterRow.append(td)
    return input
  })
  table.tHead.append(filterRow)

  let statusTimer
  function filter() {
    const values = inputs.map(input => normalize(input.value))
    let shown = 0
    rows.forEach(({ row, texts }) => {
      const match = values.every((v, i) => v === '' || (texts[i] || '').includes(v))
      row.hidden = !match
      if (match) {
        shown++
      }
    })
    // the status is updated once typing pauses, to avoid too many announcements
    clearTimeout(statusTimer)
    statusTimer = setTimeout(() => {
      status.textContent = t.status(shown, rows.length)
    }, 500)
  }

  inputs.forEach(input => input.addEventListener('input', filter))
  reset.addEventListener('click', () => {
    inputs.forEach(input => { input.value = '' })
    filter()
    inputs[0].focus()
  })
}

export function initTableFilters() {
  const lang = document.documentElement.lang.substring(0, 2)
  const t = i18n[lang] || i18n.fr
  document.querySelectorAll('table.filterable').forEach((table, i) => initTableFilter(table, i, t))
}
