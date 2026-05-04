<p align="center">
</p>
<br/>
<p id="banner" align="center">
<br/>
<a title="Copyright Arcana Network" href="https://arcana.network"><img src="https://img.shields.io/badge/Copyright-Arcana-black"/></a>
</p><p id="start" align="center">
</p>

# SendIt Application (Deprecated)

The SendIt application allows users to send crypto via email or Twitter handle of the receiver. Having a wallet address is not a pre-requisite for the receiver as SendIt takes care of that securely and with full ownership for the recipient. As soon as the sender confirms the crypto send transaction to the recipient's email or Twitter handle, a new wallet address is automatically associated with it. All the received crypto can be accessed using this wallet address only by the receiver post authentication.

SendIt uses the Arcana Auth SDK (discontinued) under the covers that helps users onboard Web3 apps easily.

### Send Crypto 

To be able to send crypto, the whitelisted users MUST log in using Google, Twitter or other supported authentication providers. Also, they must have a non-zero balance in the Arcana wallet.  All whitelisted users will be bootstrapped with some Polygon Mumbai Testnet MATIC tokens so that their wallet has non-zero balance.

After logging in, whitelisted users can access the Arcana wallet. View various tokens and crypto assets associated with the wallet.  They can use SendIt app to send crypto to any email ID or Twitter handle. Once the transaction is confirmed, they can send an email to the recipient informing them about the SendIt link to retrieve the received crypto.  There are other options to earn rewards and XP by sending shoutouts and sharing experience with the larger community.

Whitelisted users can also use the Arcana wallet to send and receive crypto from other wallet addresses.

### Receive Crypto

To receive crypto that has been gifted/sent to a user via email ID or twitter, the sender must ensure that they email or share the SendIt link displayed in the app after they confirm the send transaction to the recipient. The recipient gets notified of blockchain transfer via this email. They can use the link shared by the sender to claim the crypto.  As part of claiming the crypto, they need to use the same emailID or Twitter handle and log into the SendIt app.

For email log in, a verification email will be sent by Arcana Network to the same email ID of the recipient used to log in to SendIt. Once the recipient is authenticated, they can instantantly access the embedded Arcana wallet displayed in the context of the SendIt app on the bottom right. This wallet is completely private, owned by the user and can be used for signing blockchain transactions.

The recipients become automatially whitelisted for SendIt usage. They can further send/share crypto with other users via email ID, Twitter handle through SendIt. They can also share crypto via any wallet address by using the Arcana wallet UI. Users can also view NFTs and more.

## Building SendIt

SendIt is a Vue app written in TypeScript that uses the Vite framework. New users require an invite to get on to SendIt. Only the whitelisted users can use the app to send crypto. Anyone, even non SendIt account holders can receive crypto via their email ID or Twitter handle. 

### Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

#### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

#### Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Documentation

SendIt uses Arcana Network Auth SDK under the covers. Check out [Arcana Network documentation](https://docs.arcana.network/) for [Auth SDK Quick Start Guide](https://docs.arcana.network/walletsdk/wallet_qs.html) and [API Reference Guide](https://authsdk-ref-guide.netlify.app).
# sendit-v2
