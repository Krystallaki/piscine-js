const letterSpaceNumber = (str) =>
  str.match(/[a-zA-Z] \d(?![\da-zA-Z])/g) || []
