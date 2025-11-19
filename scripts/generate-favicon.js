import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Lê o logo original
const logoPath = path.join(__dirname, '../src/assets/images/logo.png')
const publicDir = path.join(__dirname, '../public')

// Cria a pasta public se não existir
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true })
}

// Copia o logo como favicon
const faviconPath = path.join(publicDir, 'favicon.png')
fs.copyFileSync(logoPath, faviconPath)

console.log('✅ Favicon gerado com sucesso!')
console.log(`📁 Localização: ${faviconPath}`)

