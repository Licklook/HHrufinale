import { Elysia } from 'elysia'
import { staticPlugin } from '@elysiajs/static'

const app = new Elysia()
  .use(staticPlugin()) // This serves files from the 'public' directory by default

// Serve your index.html from root
app.get('/', () => Bun.file('./index.html'))

// Or if you want to serve multiple static files from project root:
app.use(staticPlugin({
  assets: '.', // Serve from current directory (project root)
  prefix: ''   // Remove prefix
}))

app.listen(3000)
