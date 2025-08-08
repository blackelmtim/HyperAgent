import express from 'express';
const app = express();
app.use(express.json({ limit: '5mb' }));
app.get('/healthz', (_req, res) => res.send('ok'));
app.post('/run', (req, res) => res.json({ ok: true, received: req.body ?? {} }));
const port = Number(process.env.PORT) || 8080;
app.listen(port, () => console.log('HyperAgent listening on', port));
