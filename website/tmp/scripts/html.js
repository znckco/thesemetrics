const Path = require('path')
const FS = require('fs')

module.exports =
  /**
   * @param {Record<string, string|number|boolean>} variables
   * @returns {import('vite').Plugin}
   */
  function createHTMLReplacementPlugin(variables) {
    if (process.argv.includes('build')) {
      process.on('exit', () => {
        const indexFile = Path.resolve(__dirname, '../dist/index.html')
        if (FS.existsSync(indexFile)) {
          FS.writeFileSync(
            indexFile,
            replace(
              FS.readFileSync(indexFile, { encoding: 'utf-8' }),
              variables,
            ),
          )
        }
      })
      return {}
    } else {
      return {
        configureServer: ({ app }) => {
          app.use(async (ctx, next) => {
            await next()

            if (ctx.type === 'text/html') {
              if (typeof ctx.body === 'object')
                ctx.body = await streamToString(ctx.body)
              if (typeof ctx.body === 'string') {
                ctx.body = replace(ctx.body, variables)
              }
            }
          })
        },
      }
    }
  }
/**
 * @param {string} code
 * @param {Record<string, string|number|boolean>} variables
 */
function replace(code, variables) {
  const RE = /(?:_="\s*<%=(.*?)%>\s*"|<%=(.*?)%>)/

  let match
  while ((match = RE.exec(code))) {
    const expr = (match[1] || match[2]).trim()
    const value = variables[expr] || ''

    code =
      code.substr(0, match.index) +
      value +
      code.substr(match.index + match[0].length)
  }

  return code
}

function streamToString(stream) {
  const chunks = []
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => chunks.push(chunk))
    stream.on('error', reject)
    stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
  })
}
