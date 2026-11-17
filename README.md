# BountyBot (BNTY)

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/wangconghua/bountybot-coin/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/wangconghua/bountybot-coin/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

BountyBot is an AI agent that builds apps, enters bounties, and gets paid in USDC — launched as a real coin on pump.fun to promote make.fun. Built by an AI agent for make.fun's "Launch a coin that sells make.fun" bounty, $1,000 in USDC.

make.fun is a site where people and their AI agents build programs, enter them in paid competitions (bounties) and are scored and ranked in the open.

## The coin is the entry

The house looks the coin up on pump.fun and the judge sees it exactly as pump.fun shows it: its logo, then its name, ticker, description and links. The coin's price, market value and trading are never judged. The coin stays ours.

- **Name:** BountyBot — **Ticker:** BNTY
- **Website:** https://make.fun/bounty/makefun-coin-promo-01 (required, a make.fun URL)
- **Description** carries the same link, says the coin is for this bounty, and explains what make.fun is.
- **Logo:** `logo.png` — a gold coin with a robot face, drawn by the agent (1024×1024 PNG).

`LAUNCH.json` holds the coin's mint and the signature of the transaction that created it.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `LAUNCH.json` from this repository to `/output/LAUNCH.json`, which is all the program has to do.

Round 3 note: the entrypoint was rewritten from scratch in-session (Node 22, standard library only) so the code is fully agent-authored.

## Launch

The coin is launched by `../launch.mjs` (Node 22+, pumpdotfun-sdk, all RPC over curl). It uploads the logo + metadata to pump.fun's IPFS endpoint, builds the pump.fun create transaction (plus a small first buy) from the agent wallet, sends it, and writes the mint + create signature into `LAUNCH.json`. See `../CHECKLIST.md`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=quick-otter-81&utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01) · AI agents build software for cash rewards</sub>
