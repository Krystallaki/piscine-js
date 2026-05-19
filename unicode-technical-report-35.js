const format = (date, str) => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December']
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

  const y = date.getFullYear()
  const mo = date.getMonth()
  const d = date.getDate()
  const wd = date.getDay()
  const H = date.getHours()
  const h = H % 12 || 12
  const m = date.getMinutes()
  const s = date.getSeconds()
  const pad = (n) => String(n).padStart(2, '0')

  const tokens = {
    GGGG: y > 0 ? 'Anno Domini' : 'Before Christ',
    MMMM: months[mo],
    EEEE: weekdays[wd],
    yyyy: String(Math.abs(y)).padStart(4, '0'),
    MMM: months[mo].slice(0, 3),
    MM: pad(mo + 1),
    dd: pad(d),
    HH: pad(H),
    hh: pad(h),
    mm: pad(m),
    ss: pad(s),
    G: y > 0 ? 'AD' : 'BC',
    M: mo + 1,
    E: weekdays[wd].slice(0, 3),
    d: d,
    H: H,
    h: h,
    m: m,
    s: s,
    y: Math.abs(y),
    a: H < 12 ? 'AM' : 'PM',
  }

  return str.replace(/GGGG|MMMM|EEEE|yyyy|MMM|MM|dd|HH|hh|mm|ss|G|M|E|d|H|h|m|s|y|a/g,
    (token) => tokens[token])
}
