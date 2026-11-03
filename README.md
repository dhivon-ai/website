# Dhivon

The organisation website at [dhivon.ai](https://dhivon.ai). It uses the Next.js App Router, Tailwind CSS and shadcn/ui, with the typography and colours of Dhivon MCP Gateway.

## Development

Use the Node version in `.node-version` and the pnpm version in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Production

Run `pnpm build` to generate a static site in `out/`. Cloudflare Pages builds the `main` branch and serves that directory on `dhivon.ai` and `www.dhivon.ai`.
