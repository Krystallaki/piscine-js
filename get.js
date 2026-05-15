const get = (src, path) => path.split('.').reduce((obj, key) => obj && obj[key], src)
