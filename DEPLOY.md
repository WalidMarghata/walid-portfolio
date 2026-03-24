# 🚀 Deploy na Vercel — Passo a Passo

## Estrutura final do projeto

```
walid-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── robots.txt
│   ├── site.webmanifest
│   ├── favicon.ico          ← você cria (veja abaixo)
│   ├── og-image.png         ← você cria (1200×630px)
│   ├── apple-touch-icon.png ← você cria (180×180px)
│   ├── icon-32.png          ← você cria (32×32px)
│   ├── icon-192.png         ← você cria (192×192px)
│   └── icon-512.png         ← você cria (512×512px)
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

---

## PASSO 1 — Instalar Node.js (se não tiver)

Baixe em: https://nodejs.org  
Escolha a versão **LTS**. Após instalar, verifique no terminal:

```bash
node -v   # deve mostrar v18+ ou v20+
npm -v
```

---

## PASSO 2 — Criar o projeto localmente

Crie uma pasta e copie todos os arquivos gerados para dentro dela, mantendo a estrutura acima.

Depois, no terminal dentro da pasta:

```bash
npm install
npm run dev
```

Abra http://localhost:3000 — o site deve aparecer. ✅

---

## PASSO 3 — Criar conta no GitHub

1. Acesse https://github.com e crie uma conta gratuita (se não tiver)
2. Crie um repositório novo chamado `walid-portfolio` (público ou privado, tanto faz)
3. No terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/walid-portfolio.git
git push -u origin main
```

---

## PASSO 4 — Deploy na Vercel (100% gratuito)

1. Acesse https://vercel.com e clique em **Sign Up**
2. Escolha **Continue with GitHub** — autorize o acesso
3. Clique em **Add New Project**
4. Selecione o repositório `walid-portfolio`
5. A Vercel detecta Next.js automaticamente — **não mude nada**
6. Clique em **Deploy** 🚀

Em ~2 minutos seu site estará no ar em uma URL como:
`https://walid-portfolio.vercel.app`

---

## PASSO 5 — Domínio personalizado (opcional, gratuito)

Se quiser `walidmarghata.dev` ou similar:

1. Compre um domínio em https://registro.br (`.com.br`) ou https://namecheap.com (`.dev`, `.com`)
2. No painel da Vercel → seu projeto → **Settings → Domains**
3. Adicione seu domínio e siga as instruções de DNS

---

## PASSO 6 — Criar as imagens para SEO

### og-image.png (1200×630px) — aparece no LinkedIn/WhatsApp
Você pode criar grátis em:
- https://www.canva.com → crie um banner 1200×630 com seu nome e cargo
- Salve como PNG e coloque em `/public/og-image.png`

### favicon.ico + ícones
- Acesse https://favicon.io/favicon-generator
- Gere com a inicial "W" ou seu logo
- Baixe e copie os arquivos para `/public/`

---

## PASSO 7 — Atualizar o site depois

Sempre que quiser atualizar:

```bash
# Edite os arquivos que quiser, depois:
git add .
git commit -m "atualização"
git push
```

A Vercel faz o **redeploy automático** em ~1 minuto. ✅

---

## Limites do plano gratuito da Vercel

| Recurso            | Limite gratuito         |
|--------------------|-------------------------|
| Projetos           | Ilimitados              |
| Bandwidth          | 100 GB/mês              |
| Deployments        | Ilimitados              |
| Domínio `.vercel.app` | Gratuito para sempre |
| Domínio customizado | 1 por projeto           |
| Uptime             | 99.99%                  |

Para um portfólio pessoal, o plano gratuito é mais do que suficiente.

---

## Comandos úteis

```bash
npm run dev      # roda localmente em http://localhost:3000
npm run build    # gera build de produção (testa antes do deploy)
npm run lint     # verifica erros de código
```

---

## Dicas finais

- **Atualize o `metadataBase`** no `layout.tsx` com sua URL real depois do deploy
- **Teste o Open Graph** em: https://www.opengraph.xyz
- **Verifique o SEO** em: https://search.google.com/search-console
- **Velocidade** em: https://pagespeed.web.dev
