const sameAmount = (str, reg1, reg2) => {
  const count = (reg) => {
    const flags = reg.flags.includes('g') ? reg.flags : reg.flags + 'g'
    return (str.match(new RegExp(reg.source, flags)) || []).length
  }
  return count(reg1) === count(reg2)
}
