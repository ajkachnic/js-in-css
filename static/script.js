const trim = code => {
  return code.startsWith('"') || code.startsWith("'") 
    ? code.slice(1, -1) 
    : code
}
const apply = element => {
  const code = getComputedStyle(element).getPropertyValue('content')

  if(code !== undefined && code !== 'normal') {
    try {
      const trimmed = trim(code) 
      // Using new Function for code safety
      const fn = new Function(trimmed)
      
      return fn.call(element)
    } catch (err){ 
      console.error(`Error Found when running code:
${code}`)
      console.error(err)
    }
  }

}

const run = root => {
  apply(root)
  if(root.children) {
    for(const child of root.children) {
      run(child)
    }
  }
}

window.addEventListener('load', () => {
  run(document.body)
})
