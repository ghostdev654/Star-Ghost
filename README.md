# ✨ star-ghost
> **Star-Ghost** es un fork de **Starcore** (descontinuado), mantenido por **GhostDev.js**.

[![Logo](media/star-ghost-logo.png)](https://www.npmjs.com/package/star-ghost)

<p align="center">
   A Baileys wrapper with built-in tools for WhatsApp bot development.
   <br><br>
   <a href="https://www.npmjs.com/package/star-ghost">
      <img src="https://img.shields.io/npm/v/star-ghost?style=for-the-badge&logo=npm"/>
   </a>
   <a href="https://www.npmjs.com/package/star-ghost">
      <img src="https://img.shields.io/npm/dm/star-ghost?style=for-the-badge&logo=npm"/>
   </a>
   <a href="https://github.com/ghostdev654/Star-Ghost">
      <img src="https://img.shields.io/github/stars/ghostdev654/Star-Ghost?style=for-the-badge&logo=github"/>
   </a>
   <a href="LICENSE">
      <img src="https://img.shields.io/badge/license-Apache--2.0-blue?style=for-the-badge"/>
   </a>
   <a href="https://nodejs.org">
      <img src="https://img.shields.io/badge/node-%3E%3D20-339933?logo=node.js&labelColor=green&logoColor=white&style=for-the-badge"/>
   </a>
</p>

> **Maintained by** **GhostDev.js**. Fork of the discontinued **Starcore** project.

> ⚠️ **Minimum Baileys Version**: `7.0.0-rc10` or higher.

---

## 📌 Highlights

- 🚫 No auto-follow channel (newsletter) behavior.
- 📡 Enhanced `relayMessage()` with newsletter support and compatibility for sending additional binary payloads.
- 🖼️ Adapted `prepareWAMessageMedia()` to support media delivery to newsletters.
- 🧩 Added support for sending `stickerPackMessage` through `sendStickerPack()`.
- 🎛️ Extended support for multiple interactive and button-based message types.
- 📰 Introduced `newsletterSubscribed()` to retrieve information about all newsletters the account is currently subscribed to.
- 🔓 `secretEncryptedMessage` is transparently decrypted into `editedMessage`.
- 🗳️ `vote` in `pollUpdateMessage` is transparently decrypted to reveal the user's selected poll option(s).
- 🔁 Automatically retry group messages on participant hash mismatch.
- ✏️ Edits are sent as `secretEncryptedMessage` (`MESSAGE_EDIT`) using the original message's `messageSecret`, with full WaWeb parity.
- 🗑️ `decrypt-fail="hide"` applied to `secretEncryptedMessage` type `MESSAGE_EDIT` in relay.

---

## 📥 Installations

> [!IMPORTANT]
> [`star-ghost`](https://www.npmjs.com/package/star-ghost) does **NOT** install Baileys automatically.

> You must install a compatible version of Baileys manually before using this package.

### 📄 Via `package.json`

```json
{
   "dependencies": {
      "star-ghost": "latest",
      "baileys": "^7.0.0-rc14"
   }
}
```

> **GitHub**

```json
{
   "dependencies": {
      "star-ghost": "github:ghostdev654/Star-Ghost",
      "baileys": "^7.0.0-rc14"
   }
}
```

### ⌨️ Via terminal

```bash
# NPM
npm i star-ghost@latest baileys@7.0.0-rc14

# GitHub
npm i star-ghost@github:ghostdev654/Star-Ghost baileys@7.0.0-rc14
```

### 🧩 Import (ESM & CJS)

```javascript
// --- ESM
import { Client, Extend, Request, Database } from 'star-ghost'

// --- CJS
const { Client, Extend, Request, Database } = require('star-ghost')
```

---

## 📄 Quick Start

```javascript
import Client from 'star-ghost'

const client = new Client({
   auth: {
      name: 'session',
      pairingCode: true, // Turn "false" to use QR Code
      phoneNumber: '6281111111111'
   }
})

client.on('connect', (ctx) => {
   switch (ctx.type) {
      case 'pairing':
         console.log(ctx.prettyCode ?? ctx.asciiQr)
         break

      case 'close':
         console.error(ctx.reason)
         break
   }
})

client.on('message', (ctx) => {
   if (ctx.body === 'hello') {
      ctx.m.reply('👋 Hello there!')
   }
})

client.on('ready', () => {
   console.log('✅ Bot is ready!')
})

client.on('error', (err) => {
   console.error('❌ Error:', err)
})
```

> [!IMPORTANT]
> The underlying Baileys socket instance is available through `client.sock`.

```javascript
const client = new Client({ ... })
const sock = client.sock
```

---

## ⚙️ Advanced Usage

```javascript
import Client from 'star-ghost'

const client = new Client({
   auth: {
      name: 'session',
      pairingCode: true,
      phoneNumber: '6281111111111',
      customPairingCode: 'GHOSTDEV', // Optional: 8-digit alphanumeric code (default: GHOSTDEV)
      maxRestart: 5,
      type: 'json' // 0 = 'json' | 1 = 'sqlite'
   },

   linkPreview: {
      enabled: true,
      fetchTimeoutMs: 100,
      thumbnailWidth: 192,
      uploadHqThumbnail: true
   },

   isBotMessageId: (id) =>
      typeof id === 'string' && id.includes('3EB0'),

   // Encoded as hex inside generated IDs (IDs stay alphanumeric, e.g. 3EB0...)
   messageIdPrefix: 'STAR-GHOST',

   watchPath: './plugins', // Default: null
   updatePresence: true, // Default: true
   updateProtoOnStartup: true, // Default: true
   newsletterAnnotation: {
      newsletterJid: '1211111111111@newsletter',
      newsletterName: 'star-ghost',
      contentType: 1
   } // IForwardedNewsletterMessageInfo | false, Default: false
}, {
   // Baileys socket configuration
   shouldIgnoreJid: (jid) =>
      typeof jid === 'string' && jid.endsWith('bot')
})
```

`customPairingCode` is optional and defaults to `GHOSTDEV`. If provided, it must contain exactly 8 letters and/or numbers (no symbols, regex: `^[A-Za-z0-9]{8}$`). The legacy `customCode` option is still accepted.

---

## 📋 Table of Contents

- [📌 Highlights](#-highlights)
- [📥 Installations](#-installations)
- [📄 Quick Start](#-quick-start)
- [⚙️ Advanced Usage](#-advanced-usage)
- [🧳 Environments](#-environments)
- [🗄️ Managing Store](#-managing-store)
- [🗑️ Temporary Folder](#-temporary-folder)
- [📡 Events Reference](#-events-reference)
- [📄 Message Event Metadata](#-message-event-metadata)
- [👥 Find User ID](#-find-user-id)
- [📨 Sending Messages](#-sending-messages)
- [♻️ Modify Messages](#-modify-messages)
- [🎯 Private Messaging](#-private-messaging)
- [⚙️ Baileys Features](#-baileys-features)
- [🗳️ Database](#-database)
- [🧩 Extend](#-extend)
- [🌐 Request](#-request)
- [🔧 Global Config](#-global-config)
- [📚 Exported Modules](#-exported-modules)
- [🚀 Try the Bot](#-try-the-bot)
- [📣 Credits](#-credits)

---

## 🧳 Environments

The following environment variables are used by default. Override them with [`dotenv`](https://www.npmjs.com/package/dotenv) when needed.

> **Environment variables take priority over the [global configuration](#-global-config).**

```ini
# .env
FFMPEG_PATH=ffmpeg
FFMPEG_CONCURRENCY=4
FFMPEG_TIMEOUT=90000
REQUEST_TIMEOUT=60000
TEMPORARY_PATH=temp
TZ=Asia/Jakarta
```

### Available environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `FFMPEG_PATH` | `ffmpeg` | Path to ffmpeg binary |
| `FFMPEG_CONCURRENCY` | `4` | Number of concurrent ffmpeg processes |
| `FFMPEG_TIMEOUT` | `90000` | FFmpeg execution timeout in ms |
| `REQUEST_TIMEOUT` | `60000` | Default request timeout in ms |
| `TEMPORARY_PATH` | `temp` | Temporary directory path |
| `TZ` | `Asia/Jakarta` | Time zone |

---

## 🗄️ Managing Store

Manually load and save store data.

```javascript
client.on('ready', ({ store }) => {
   store.readFromFile()

   setInterval(async () => {
      try {
         await store.writeToFile()
      }
      catch (error) {
         console.error('❌ An unexpected error occurred when saving store', ':', error)
      }
   }, 600_000) // Save every 10 minutes
})
```

### Store lifecycle

- `store.readFromFile()` - Load store from file on ready
- `store.writeToFile()` - Save store to file (automatically every 10 min)
- Store data is persisted in `./.cache/` by default

---

## 🗑️ Temporary Folder

Since `0.0.0-alpha.3`, temporary files are no longer cleaned up automatically. Implement your own cleanup routine if required.

```javascript
import { readdir, unlink } from 'fs/promises'
import { join } from 'path'

setInterval(async () => {
   try {
      const temporaryFiles = await readdir(process.env.TEMPORARY_PATH || 'temp')

      if (temporaryFiles.length) {
         for (const fileName of temporaryFiles) {
            const filePath = join(process.env.TEMPORARY_PATH || 'temp', fileName)
            await unlink(filePath)
         }
      }

      console.log('🗑️ Cleaned up temp folder')
   }
   catch (error) {
      console.error('❌ Failed to clean temp folder', ':', error)
   }
}, 300_000) // Clean every 5 minutes
```

---

## 📡 Events Reference

Listen to Baileys events through the socket events emitter. Each event provides specific metadata about what happened.

### Basic event listening

```javascript
client.ev.on('message', (ctx) => {
   console.log('📩 New message received')
   console.log('From:', ctx.sender)
   console.log('Body:', ctx.body)
})

client.ev.on('connect', (ctx) => {
   console.log('🔗 Connection state:', ctx.type)
   if (ctx.type === 'pairing') {
      console.log('📱 Pairing code:', ctx.prettyCode ?? ctx.asciiQr)
   }
})

client.ev.on('ready', () => {
   console.log('✅ Bot is ready!')
})

client.ev.on('error', (err) => {
   console.error('❌ Error event:', err)
})
```

### Available events and their payloads:

| Event | Returns |
|-------|---------|
| `connect` | `{ type: 'pairing' \| 'close' \| 'open', prettyCode?: string, asciiQr?: string, reason?: string }` |
| `ready` | `undefined` (bot is fully initialized) |
| `message` | See [Message Event Metadata](#-message-event-metadata) below |
| `message.edit` | `{ key: MessageKey, editedMessage: proto.Message, fromMe: boolean }` |
| `message.delete` | `{ key: MessageKey, fromMe: boolean }` |
| `message.stub` | `{ chat: string, from: string, messageKey: MessageKey, stubParameters: any, action: string }` |
| `message-receipt.update` | `{ key: MessageKey, participant: string, status: 'read' \| 'played' }` |
| `poll` | Poll message data with options and votes |
| `status` | Presence status update |
| `group.add` | Group JID that was added |
| `group.promote` | User promoted to admin |
| `group.demote` | User demoted from admin |
| `group.remove` | User removed from group |
| `group.request` | Group join request data |
| `group.update` | Group subject/description/photo updated |
| `label.update` | Label updated on message/chat |
| `call` | Call event data |
| `presence` | Presence update |
| `contacts.upsert` | Contact added/updated |
| `contacts.update` | Contact modified |
| `messages.delete` | Messages deleted |
| `messages.update` | Messages updated |
| `messages.media-update` | Media message updated |
| `messages.upsert` | Message inserted/updated in store |
| `messages.reaction` | Reaction added to message |
| `blocklist.set` | Blocklist set |
| `blocklist.update` | Blocklist updated |
| `labels.edit` | Label edited |
| `labels.association` | Label association changed |
| `newsletter.reaction` | Newsletter message reacted to |
| `newsletter.view` | Newsletter viewed |
| `newsletter-participants.update` | Newsletter participants changed |
| `newsletter-settings.update` | Newsletter settings changed |
| `settings.update` | Global settings updated |
| `chats.upsert` | Chat added to store |
| `chats.update` | Chat updated in store |
| `chats.delete` | Chat deleted from store |
| `chats.lock` | Chat locked |
| `lid-mapping.update` | LID mapping updated |
| `messaging-history.set` | Messaging history set |
| `messaging-history.status` | Messaging history status |
| `presence.update` | Presence updated |

---

## 📄 Message Event Metadata

The `message` event is the primary source of incoming messages. It includes commonly used information such as chat ID, sender, message type, quoted message, mentions, and helper methods.

### Full message event payload:

```javascript
{
  m: {
    // Message key information
    key: {
      remoteJid: '120111111111111111@g.us',     // Full JID of the chat
      remoteJidAlt: undefined,                   // Alternative JID
      remoteJidUsername: undefined,              // Username part
      fromMe: false,                             // Whether message is from this session
      id: 'AC1908CA012689BB9F468E6B4478EBAB',  // Message ID
      participant: '1211111111111@lid',          // Group participant JID (if group)
      participantAlt: '6281111111111@s.whatsapp.net', // Participant alternative
      participantUsername: undefined,            // Participant username
      addressingMode: 'lid'                      // Addressing mode used
    },

    // Message category (if applicable)
    category: undefined,

    // Timestamp
    messageTimestamp: 1782264500,

    // Contact name
    pushName: '‏liaaa',

    // Whether this is a broadcast
    broadcast: false,

    // The actual message proto object
    message: Message {
      extendedTextMessage: [ExtendedTextMessage],
      messageContextInfo: [MessageContextInfo]
    },

    // Convenience properties
    id: 'AC1908CA012689BB9F468E6B4478EBAB',
    chat: '120111111111111111@g.us',
    sender: '6281111111111@s.whatsapp.net',
    senderLid: '1211111111111@lid',
    device: 'android',
    fromMe: false,
    isBot: false,
    isGroup: true,
    isPrivate: false,
    isBroadcast: false,
    isNewsletter: false,

    // Message type and content
    type: 'extendedTextMessage',
    msg: ExtendedTextMessage {
      endCardTiles: [],
      text: 'star-ghost',
      previewType: 0,
      contextInfo: [ContextInfo],
      inviteLinkGroupTypeV2: 0
    },

    // Text representation
    text: 'star-ghost',

    // Mentions
    mentionedJid: [],

    // Expiration (if applicable)
    expiration: 86400,

    // Reply helper
    reply: [Function (anonymous)],

    // React helper
    react: [Function (anonymous)]
  },

  // Command prefix info
  prefixes: ['.', '#', '/', '!'],
  prefix: '',         // Current active prefix
  command: 'star-ghost', // Detected command (if any)
  args: [],          // Arguments after command
  text: ''           // Full message text
}
```

### Helper methods available on the message context:

- `ctx.reply(text)` - Reply to the message
- `ctx.m.reply(text)` - Same as above
- `ctx.react(emoji)` - Add reaction to message
- `ctx.mentionedJid` - Array of mentioned JIDs
- `ctx.quoted` - Quoted message (if any)
- `ctx.forwarded` - Forwarded message (if any)

---

## 👥 Find User ID

Quickly resolve a user's `JID` and retrieve both `PN` (phone number) and `LID` (local ID) in a synchronous function.

```javascript
// Accepts either @s.whatsapp.net or @lid format
const jidLid = '6281111111111@s.whatsapp.net'

const result = sock.findUserId(jidLid)

// --- Success case
// {
//    phoneNumber: '6281111111111@s.whatsapp.net',
//    lid: '1211111111111@lid'
// }

// --- Not found case
// {
//    phoneNumber: '6281111111111@s.whatsapp.net',
//    lid: undefined // or null depending on availability
// }
```

---

## 📨 Sending Messages

Star-Ghost provides a comprehensive set of message sending functions. Most functions accept a message object `m` (the key of a previously sent message) for reply/quote functionality.

### 🔠 Text

```javascript
sock.sendText(jid, '👋🏻 Hello', m, {
   mentionAll: false, // Optional: mention all members in group
   mentions: ['1211111111111@lid', '6281111111111@s.whatsapp.net'] // Optional: specific mentions
})
```

### 📰 Link Preview

```javascript
sock.sendAdText(jid, '👆🏻 Check it out!', m, {
   thumbnailUrl: 'https://www.npmjs.com/package/star-ghost#readme',
   title: '🌱 star-ghost',
   description: 'Underrated Baileys Wrapper',
   previewType: 0, // 0 = image, 1 = video playback
   thumbnail: fs.readFileSync('./path/to/image.jpg'), // Buffer or URL
   favicon: fs.readFileSync('./path/to/tiny-image.png'), // Optional
   largeThumbnail: true, // Must be true for large preview
   width: 720,
   height: 480
})
```

### 😄 Reaction

```javascript
sock.sendReact(jid, '✨', m.key)
```

### 📂 Media

```javascript
sock.sendMedia(jid, bufferOrUrl, '📦 Media!', m, {
   mime: 'image/jpeg', // Optional, auto-detected if not provided
   document: false, // Force send as document (not image/video)
   ptv: false, // Force send as PTV (Preview Temporary View)
   gif: false, // Send as GIF
   ptt: false // Push-to-talk mode
})
```

### ⚪ PTV

```javascript
sock.sendPtv(jid, bufferOrUrl, m)
```

### 📃 Sticker

```javascript
sock.sendSticker(jid, bufferOrUrl, m, {
   packName: 'star-ghost',
   packPublisher: 'by Lia Wynn 🌱',
   isAiSticker: true, // Enable AI sticker generation
   isAvatar: false, // Treat as avatar sticker
   premium: 1 // Premium sticker tier
})
```

### 📦 Sticker Pack

ZIP compression is built into `sendStickerPack()`, no extra dependencies required ✨

```javascript
sock.sendStickerPack(jid, [bufferOrUrl, bufferOrUrl], m, {
   cover: bufferOrUrl, // Cover image for the pack
   caption: '🔔 There you go!',
   name: '📦 Sticker Pack',
   publisher: 'GitHub: ghostdev654',
   description: '✨ ghostdev654/Star-Ghost'
})
```

### 👤 Contact

```javascript
sock.sendContact(jid, [{
   name: 'Lia Wynn',
   org: '🛎️ Waitress',
   email: 'my-email@gmail.com',
   website: 'https://www.npmjs.com/package/star-ghost#readme',
   location: 'Jakarta',
   other: '❤️ Simplified WhatsApp API',
   number: '6281111111111'
}, {
   name: '❤️ My Big Brother',
   org: '👥 Siblings',
   email: 'his-email@gmail.com',
   website: 'https://www.npmjs.com/package/star-ghost#readme',
   location: 'Jakarta',
   other: '❤️ Simplified WhatsApp API',
   number: '6281111111111'
}], m)
```

### 🖼️ Album

Send multiple media in a single message (carousel/album):

```javascript
sock.sendAlbum(jid, [{
   media: bufferOrUrl,
   caption: 'Image 1'
}, {
   media: bufferOrUrl,
   caption: 'Video 1'
}], m)
```

### 📊 Poll

```javascript
// Regular poll message
sock.sendPoll(jid, [
   '✨ Yes', '💀 No'
], m, {
   name: '🔥 Is it good?',
   selectableCount: 1, // How many options can be selected
   toAnnouncementGroup: false, // Send to announcement group only
   endDate: Date.now() + 28_800_000, // Optional: auto-close in 8 hours
   hideVoter: false, // Hide who voted
   canAddOption: false // Allow adding new options
})

// Quiz (only for newsletter)
sock.sendQuiz('1211111111111@newsletter', [
   '✨ Yes', '💀 No'
], m, {
   name: '🔥 Quiz!',
   correctAnswer: '✨ Yes'
})
```

### 📈 Poll Result

```javascript
// Regular poll result
sock.sendPollResult(jid, '📈 Poll Result', [{
   name: '🔥 Fire',
   voteCount: 133
}, {
   name: '❤️ Love it',
   voteCount: 18
}], m)

// Quiz result message
sock.sendQuizResult(jid, '🏆 Quiz Result', [{
   name: '🔥 Fire',
   voteCount: 133
}, {
   name: '❤️ Love it',
   voteCount: 18
}], m)
```

### 🗄️ Interactive (A2UI components)

> [!NOTE]
> Please read the [A2UI v0.9 component documentation](https://a2ui.org/reference/components/) before using the `components[]` field.

```javascript
sock.sendInteractive(jid, [{
   text: '👋🏻 Greeting',
   id: '#Greeting',
   icon: 'review' // Optional
}, {
   text: '📞 Call',
   call: '6281111111111'
}, {
   text: '📋 Copy',
   copy: 'star-ghost'
}, {
   text: '🌐 Source',
   url: 'https://www.npmjs.com/package/star-ghost',
   useWebView: true, // Optional
   webViewPresentation: null // Optional
}, {
   text: '📋 Select',
   sections: [{
      title: '✨ Section 1',
      rows: [{
         header: '',
         title: '🏷️ Coupon',
         description: '',
         id: '#CouponCode'
      }]
   }, {
      title: '✨ Section 2',
      highlight_label: '🔥 Popular',
      rows: [{
         header: '',
         title: '💭 Secret Ingredient',
         description: '',
         id: '#SecretIngredient'
      }]
   }],
   icon: 'default' // Optional
}], m, {
   components: components, // Widget components (optional)
   media: bufferOrUrl,
   caption: '🗄️ Interactive Message',
   footer: 'star-ghost',
   audioFooter: '/path/to/audio.mp3', // Optional
   ptt: false, // Optional, applied when "audioFooter" is set
   optionText: '👉🏻 Select Options', // Optional
   optionTitle: '📄 Select Options', // Optional
   offerText: '🏷️ Newest Coupon!', // Optional
   offerCode: 'star-ghost', // Optional
   offerUrl: 'https://www.npmjs.com/package/star-ghost', // Optional
   offerExpiration: Date.now() + 3_600_000, // Optional (1 hour)
   asTemplate: false // Optional, wrap as template
})
```

### 🎠 Carousel

```javascript
sock.sendCarousel(jid, [{
   media: bufferOrUrl,
   caption: '🖼️ Image 1',
   footer: '🏷️ Pinterest',
   nativeFlow: [{
      text: '🌐 Source',
      url: 'https://www.npmjs.com/package/star-ghost',
      useWebview: true
   }]
}, {
   media: bufferOrUrl,
   caption: '🖼️ Image 2',
   footer: '🏷️ Pinterest',
   offerText: '🏷️ New Coupon!',
   offerCode: 'star-ghost',
   offerUrl: 'https://www.npmjs.com/package/star-ghost',
   offerExpiration: Date.now() + 3_600_000,
   nativeFlow: [{
      text: '🌐 Source',
      url: 'https://www.npmjs.com/package/star-ghost'
   }]
}, {
   media: bufferOrUrl,
   caption: '🖼️ Image 3',
   footer: '🏷️ Pinterest',
   optionText: '👉🏻 Select Options',
   optionTitle: '👉🏻 Select Options',
   offerText: '🏷️ New Coupon!',
   offerCode: 'star-ghost',
   offerUrl: 'https://www.npmjs.com/package/star-ghost',
   offerExpiration: Date.now() + 3_600_000,
   nativeFlow: [{
      text: '🛒 Product',
      id: '#Product',
      icon: 'default'
}, {
      text: '🌐 Source',
      url: 'https://www.npmjs.com/package/star-ghost'
   }]
}], m, {
   text: '🎠 Carousel Message',
   footer: 'star-ghost'
})
```

### 🔘 Legacy Button

```javascript
// Regular buttons message
sock.sendLegacyButton(jid, [{
   text: '👋🏻 SignUp',
   id: '#SignUp'
}], m, {
   text: '👆🏻 Buttons!',
   footer: 'star-ghost',
   viewOnce: false // Optional, "true" for WhatsApp Web proper render
})

// Buttons with Media & List
sock.sendLegacyButton(jid, [{
   text: '👋🏻 Rating',
   id: '#Rating'
}, {
   text: '📋 Select',
   sections: [{
      title: '✨ Section 1',
      rows: [{
         header: '',
         title: '💭 Secret Ingredient',
         description: '',
         id: '#SecretIngredient'
      }]
   }, {
      title: '✨ Section 2',
      highlight_label: '🔥 Popular',
      rows: [{
         header: '',
         title: '🏷️ Coupon',
         description: '',
         id: '#CouponCode'
      }]
   }]
}], m, {
   media: bufferOrUrl,
   caption: '👆🏻 Buttons and List!'
})
```

### 📋 Legacy List

> [!NOTE]
> This message type only works in private chat (`@s.whatsapp.net`).

```javascript
// Regular legacy list message
sock.sendLegacyList(jid, [{
   title: '🚀 Menu 1',
   rows: [{
      title: '✨ AI',
      description: '',
      rowId: '#AI'
   }]
}, {
   title: '🌱 Menu 2',
   rows: [{
      title: '🔍 Search',
      description: '',
      rowId: '#Search'
   }]
}], m, {
   text: '📋 List!',
   footer: 'star-ghost',
   buttonText: '📋 Select',
   title: '👋🏻 Hello'
})

// Product list message
sock.sendLegacyList(jid, [{
   title: '📄 Section #1',
   products: [{
      productId: '177878345044'
   }, {
      productId: '607964531532'
   }]
}, {
   title: '📋 Section #2',
   products: [{
      productId: '506965808593'
   }, {
      productId: '676909529293'
   }]
}], m, {
   text: '🛍️ Product List!',
   footer: 'star-ghost',
   buttonText: '📋 See Products',
   image: bufferOrUrl,
   headerProductId: '656988410262',
   businessOwnerJid: '0@s.whatsapp.net'
})
```

### ✨ Rich

> [!TIP]
> The `sendRich()` function supports a wide variety of widget types for creating rich responses similar to Meta AI or Google Gemini.

```javascript
sock.sendRich(jid, [{
   text: '# ✨ star-ghost\n\n---'
}, {
   language: 'javascript',
   code: `console.log("Hello World")`
}, {
   title: 'The Table',
   table: [{
      isHeading: true,
      items: ['', 'Node.js', 'Bun', 'Deno']
   }, {
      isHeading: false,
      items: ['Engine', 'V8 (C++)', 'JavaScriptCore (C++)', 'V8 (C++)']
   }, {
      isHeading: false,
      items: ['Performance', '4/5', '5/5', '4/5']
   }]
}, {
   extWidget: [{
      title: '📋 Section 1',
      buttons: ['menu', 'label', 'infos']
   }, {
      title: '📄 Section 2',
      buttons: ['gif', 'runtime', 'order']
   }],
   canScroll: false
}, {
   htmlPayload: `<h1>✨ star-ghost</h1><p>A Baileys wrapper...</p>`,
   trustedSources: ['https://github.com/ghostdev654/Star-Ghost']
}, {
   video: 'https://path-to-video.com/',
   thumbnailUrl: 'https://path-to-tiny-image.com/',
   mime: 'video/mp4',
   fileLength: 13_603,
   duration: 60
}, {
   image: 'https://path-to-image.com/',
   mime: 'image/jpeg'
}, {
   imagine: 'https://path-to-image.com/',
   mime: 'image/jpeg'
}, {
   reels: [{
      reelUrl: 'https://path-to-web.com/',
      thumbnailUrl: 'https://path-to-image.com/',
      creator: 'Lia Wynn',
      avatarUrl: 'https://path-to-tiny-image.com/',
      title: 'Simple Baileys Wrapper',
      likesCount: 1,
      sharesCount: 1,
      viewCount: 1,
      source: 'https://path-to-web.com/',
      isVerified: true
   }]
}, {
   posts: [{
      caption: 'A Baileys Wrapper',
      title: '',
      subtitle: '',
      creator: 'Lia Wynn',
      avatarUrl: 'https://path-to-tiny-image.com/',
      thumbnailUrl: 'https://path-to-image.com/',
      likesCount: 1,
      commentsCount: 1,
      sharesCount: 1,
      postUrl: 'https://path-to-web.com/',
      deepLink: '',
      footerLabel: '',
      footerIcon: '',
      sourceApp: 'FACEBOOK',
      orientation: 'LANDSCAPE',
      type: 'IMAGE',
      isVerified: true,
      isCarousel: false
   }]
}, {
   text: '- Citation:',
   entities: [{
      title: 'Example of Citation',
      citationUrl: 'https://wa.me/0',
      displayName: 'star-ghost'
   }]
}, {
   text: '- Inline Link:',
   entities: [{
      inlineUrl: 'https://wa.me/0',
      displayName: 'star-ghost',
      isTrusted: true
   }]
}, {
   text: '- LaTeX:',
   entities: [{
      expression: 'x^2 + 2x + 1',
      latex: 'https://quicklatex.com/cache3/82/ql_0676ade0cd04eda37aeb3d0bcd427682_l3.png',
      width: 603,
      height: 111,
      fontHeight: 83.5,
      padding: 15
   }]
}, {
   suggestion: 'star-ghost'
}, {
   suggestions: ['star-ghost', 'Baileys Wrapper', 'Baileys']
}, {
   suggestions: ['star-ghost', 'Rich Response', 'Scroll Layout'],
   canScroll: true
}, {
   tip: 'star-ghost'
}, {
   foaText: '# 🔥 LARGE Text'
}, {
   actionUrls: [{
      text: '💰 Donate Me!',
      url: 'https://github.com/ghostdev654'
}, {
      text: '🌐 Google',
      url: 'https://www.google.com/'
   }]
}, {
   searchResults: [{
      displayName: 'Simple Baileys Wrapper',
      sourceUrl: 'https://path-to-web.com/',
      faviconUrl: 'https://path-to-tiny-image.com/',
      mime: 'image/jpeg' // Optional
   }]
}], m, {
   notify: false, // Optional
   disclaimerText: 'Example Usage of sendRich()',
   streamText: false // Stream style, like Meta AI response
})
```

### 🛍️ Order

```javascript
sock.sendOrderMessage(jid, bufferOrUrl, '🛍️ Order Message!', m)
```

### 🗒️ Copy & Forward

```javascript
sock.sendCopyMessage(jid, m, {
   forwardingScore: 1, // Optional: affect message forwarding score
   quoted: m // Optional: quote the original message
})
```

### 🎞️ Status Mention

> [!NOTE]
> Can be treated as `sendMessage()`.

```javascript
sock.sendStatus([jid], {
   text: '👋🏻 Hello!',
   font: 0,
   textColor: '#FFFFFF', // Optional
   backgroundColor: '#FF0000' // Optional
}, {
   mention: false, // Optional
   closeFriends: {
      name: 'star-ghost',
      emoji: '✨'
   } // Optional
})
```

### 👥 Group Status

> [!NOTE]
> Can be treated as `sendMessage()`.

```javascript
sock.sendGroupStatus(jid, {
   text: '👋🏻 Hello!',
   font: 0,
   textColor: '#FFFFFF', // Optional
   backgroundColor: '#000000' // Optional
}, {
   closeFriends: {
      name: 'star-ghost',
      emoji: '✨'
   } // Optional
})
```

---

## ♻️ Modify Messages

### 🗑️ Delete Messages

```javascript
sock.sendMessage(jid, {
   delete: m.key
})
```

### ✏️ Edit Messages

Edits are sent the same way WhatsApp Web sends them: encrypted as a `secretEncryptedMessage` (`MESSAGE_EDIT`) using the original message's `messageStar`. Star-Ghost keeps a small in-memory cache of the secrets of the messages it sends and also falls back to the persistent store/`getMessage`.

```javascript
// --- Edit plain text
sock.sendMessage(jid, {
   text: '✨ I mean, nice!',
   edit: m.key
})

// --- Edit media messages caption
sock.sendMessage(jid, {
   caption: '✨ I mean, here is the image!',
   edit: m.key
})
```

> The key must reference a message sent by this session (WhatsApp's 20 minute edit window applies). `remoteJid`, `fromMe` and, in groups, `participant` are taken from `m.key`; if the key only contains `id`, `fromMe: true` and the current chat JID are filled in automatically.

> **Important**: Edits are sent encrypted as `secretEncryptedMessage` (`MESSAGE_EDIT`). Star-Ghost keeps a small in-memory cache of the secrets of the messages it sends and also falls back to the persistent store/`getMessage`. If the original message is no longer available (for example after a restart and it was not persisted), pass the full message instead of only its key so the secret travels with it:

```javascript
sock.sendMessage(jid, {
   text: '✨ I mean, nice!',
   edit: m  // Pass full message object, not just key
})
```

When the secret cannot be resolved, the edit falls back to the plain `protocolMessage` format for compatibility.

---

## 🎯 Private Messaging

> [!CAUTION]
> **Experimental Features**: `recipientOverrides` and `specificRecipient` are still experimental and **strongly discouraged for continuous or frequent use**. These features may cause session instability or potentially break/corrupt the Baileys session, especially when used excessively.

> Please use these features only when necessary and **at your own risk**. If these features are found to cause widespread or significant issues, they may be removed or withdrawn in a future release.

> [!NOTE]
> This is not limited to the `sendMessage()` function. It is also available to all message-sending functions previously mentioned in [📨 Sending Messages](#-sending-messages).

### 🎭 Overriding Message

The message will be displayed differently to a specific user (`jid`) based on the `message` provided in the override.

```javascript
sock.sendMessage(jid, {
   text: '🔒 This text only shown on specific user'
}, {
   recipientOverrides: [{
      jid: userJid,
      message: { conversation: '👋🏻 Hello There!' }
   }]
})
```

### 🔒 Private Message

The message will only be displayed to specific users specified in `specificRecipient[]`.

```javascript
sock.sendMessage(jid, {
   text: '🔒 This message only shown on specific user'
}, {
   specificRecipient: [userJid]
})
```

---

## ⚙️ Baileys Features

### 🔑 Request Custom Pairing Code

> [!NOTE]
> The phone number must contain numbers only (no +, (), or -) and must include the country code.

```javascript
const phoneNumber = '6281111111111'
const customPairingCode = 'STARHOST' // 8-digit alphanumeric (optional, defaults to GHOSTDEV)

await sock.requestPairingCode(phoneNumber, customPairingCode)

console.log('🔗 Pairing code', ':', customPairingCode)
```

The `customPairingCode` option:
- Defaults to `GHOSTDEV` if not provided
- Must be exactly 8 characters: `^[A-Za-z0-9]{8}$`
- Letters (A-Z, a-z) and numbers (0-9) only - **no symbols allowed**
- Used when requesting the pairing code from WhatsApp servers

### 📣 Newsletter Management

```javascript
// --- Create a new one
sock.newsletterCreate('star-ghost', '📣 Fresh updates weekly')

// --- Get info
const metadata = sock.newsletterMetadata('1211111111111@newsletter')
console.dir(metadata, { depth: null })

// --- Get subscribers count
const subscribers = await sock.newsletterSubscribers('1211111111111@newsletter')
console.dir(subscribers, { depth: null })

// --- Follow and Unfollow
sock.newsletterFollow('1211111111111@newsletter')
sock.newsletterUnfollow('1211111111111@newsletter')

// --- Mute and Unmute
sock.newsletterMute('1211111111111@newsletter')
sock.newsletterUnmute('1211111111111@newsletter')

// --- Demote admin
sock.newsletterDemote('1211111111111@newsletter', '6281111111111@s.whatsapp.net')

// --- Change owner
sock.newsletterChangeOwner('1211111111111@newsletter', '6281111111111@s.whatsapp.net')

// --- Update newsletter
sock.newsletterUpdate('1211111111111@newsletter', { name: 'star-ghost' })

// --- Change name
sock.newsletterUpdateName('1211111111111@newsletter', '✨ star-ghost')

// --- Change description
sock.newsletterUpdateDescription('1211111111111@newsletter', '📣 Fresh updates weekly')

// --- Change photo
sock.newsletterUpdatePicture('1211111111111@newsletter', {
   url: 'path/to/image.jpg'
})

// --- Remove photo
sock.newsletterRemovePicture('1211111111111@newsletter')

// --- React to a message
sock.newsletterReactMessage('1211111111111@newsletter', '100', '💛')

// --- Get admin count
const count = await sock.newsletterAdminCount('1211111111111@newsletter')

// --- Get all subscribed newsletters
const newsletters = await sock.newsletterSubscribed()
console.dir(newsletters, { depth: null })

// --- Fetch newsletter messages
const messages = await sock.newsletterFetchMessages('jid', '1211111111111@newsletter', 50, 0, 0)
console.dir(messages, { depth: null })

// --- Delete newsletter
sock.newsletterDelete('1211111111111@newsletter')
```

### 👥 Group Management

```javascript
// --- Create a new one and add participants using their JIDs
const group = sock.groupCreate('star-ghost', ['6281111111111@s.whatsapp.net'])
console.dir(group, { depth: null })

// --- Get info
const metadata = await sock.groupMetadata(jid)
console.dir(metadata, { depth: null })

// --- Get group invite code
const inviteCode = await sock.groupInviteCode(jid)
console.dir(inviteCode, { depth: null })

// --- Revoke invite link
sock.groupRevokeInvite(jid)

// --- Accept group invite
sock.groupAcceptInvite(inviteCode)

// --- Leave group
sock.groupLeave(jid)

// --- Add participants
sock.groupParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'add')

// --- Remove participants
sock.groupParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'remove')

// --- Promote to admin
sock.groupParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'promote')

// --- Demote from admin
sock.groupParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'demote')

// --- Accept join requests
sock.groupRequestParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'approve')

// --- Change name
sock.groupUpdateSubject(jid, '✨ star-ghost')

// --- Change description
sock.groupUpdateDescription(jid, 'Updated description')

// --- Change photo
sock.updateProfilePicture(jid, {
   url: 'path/to/image.jpg'
})

// --- Remove photo
sock.removeProfilePicture(jid)

// --- Set group as admin only for chatting
sock.groupSettingUpdate(jid, 'announcement')

// --- Set group as open to all for chatting
sock.groupSettingUpdate(jid, 'not_announcement')

// --- Set admin only can edit group info
sock.groupSettingUpdate(jid, 'locked')

// --- Set all participants can edit group info
sock.groupSettingUpdate(jid, 'unlocked')

// --- Set admin only can add participants
sock.groupMemberAddMode(jid, 'admin_add')

// --- Set all participants can add participants
sock.groupMemberAddMode(jid, 'all_member_add')

// --- Enable or disable temporary messages with seconds format
sock.groupToggleEphemeral(jid, 86400) // 24 hours

// --- Disable temporary messages
sock.groupToggleEphemeral(jid, 0)

// --- Enable or disable membership approval mode
sock.groupJoinApprovalMode(jid, 'on')
sock.groupJoinApprovalMode(jid, 'off')

// --- Get all groups metadata
const groups = await sock.groupFetchAllParticipating()
console.dir(groups, { depth: null })

// --- Get pending join requests
const requests = await sock.groupRequestParticipantsList(jid)
console.dir(requests, { depth: null })

// --- Get group info from link
const group = await sock.groupGetInviteInfo('ABC123456789')
console.log('👥 Got group info from invite code:', group)

// --- Update bot member label
sock.updateMemberLabel(jid, 'star-ghost')
```

### 👥 Community Management

```javascript
// --- Create a new one and add description
const community = await sock.communityCreate('star-ghost', '📣 Fresh updates weekly')
console.dir(community, { depth: null })

// --- Create a subgroup for community and add participants using their JIDs
const group = await sock.communityCreateGroup('📢 Announcements', ['6281111111111@s.whatsapp.net'], communityJid)

// --- Link an existing group
sock.communityLinkGroup(groupJid, communityJid)

// --- Unlink an existing group
sock.communityUnlinkGroup(groupJid, communityJid)

// --- Get info
const metadata = await sock.communityMetadata(jid)
console.dir(metadata, { depth: null })

// --- Get community invite code
const inviteCode = await sock.communityInviteCode(jid)
console.dir(inviteCode, { depth: null })

// --- Revoke invite link
sock.communityRevokeInvite(jid)

// --- Accept community invite
sock.communityAcceptInvite(inviteCode)

// --- Leave community
sock.communityLeave(jid)

// --- Accept join requests
sock.communityRequestParticipantsUpdate(jid, ['6281111111111@s.whatsapp.net'], 'approve')

// --- Change name
sock.communityUpdateSubject(jid, '✨ star-ghost')

// --- Change description
sock.communityUpdateDescription(jid, 'Updated description')

// --- Set community as admin only for chatting
sock.communitySettingUpdate(jid, 'announcement')

// --- Set community as open to all for chatting
sock.communitySettingUpdate(jid, 'not_announcement')

// --- Set admin only can edit community info
sock.communitySettingUpdate(jid, 'locked')

// --- Set all participants can edit community info
sock.communitySettingUpdate(jid, 'unlocked')

// --- Set admin only can add participants
sock.communityMemberAddMode(jid, 'admin_add')

// --- Set all participants can add participants
sock.communityMemberAddMode(jid, 'all_member_add')

// --- Enable or disable temporary messages with seconds format
sock.communityToggleEphemeral(jid, 86400)

// --- Disable temporary messages
sock.communityToggleEphemeral(jid, 0)

// --- Enable or disable membership approval mode
sock.communityJoinApprovalMode(jid, 'on')
sock.communityJoinApprovalMode(jid, 'off')

// --- Get all communities metadata
const communities = await sock.communityFetchAllParticipating()
console.dir(communities, { depth: null })

// --- Get all community linked groups
const linked = await sock.communityFetchLinkedGroups(jid)
console.dir(linked, { depth: null })

// --- Get pending join requests
const requests = await sock.communityRequestParticipantsList(jid)
console.dir(requests, { depth: null })

// --- Get community info from link
const community = await sock.communityGetInviteInfo('ABC123456789')
console.log('👥 Got community info from invite code:', community)
```

### 👤 Profile Management

```javascript
// --- Get user profile picture
const url = await sock.profilePictureUrl(jid, 'image')
console.log('🖼️ Got user profile url', url)

// --- Update profile picture
sock.updateProfilePicture(jid, buffer)
sock.updateProfilePicture(jid, { url })

// --- Remove profile picture
sock.removeProfilePicture(jid)

// --- Update profile name
sock.updateProfileName('My Name')

// --- Update profile status
sock.updateProfileStatus('Available')

// --- Presence
sock.sendPresenceUpdate('available', jid)
sock.presenceSubscribe(jid)

// --- Read receipts
sock.readMessages([m.key])
sock.sendReceipt(jid, participant, [messageId], 'read')

// --- Block user
sock.updateBlockStatus(jid, 'block')

// --- Unblock user
sock.updateBlockStatus(jid, 'unblock')

// --- Fetch blocklist
const blocked = await sock.fetchBlocklist()
console.dir(blocked, { depth: null })

// --- Modify chats
sock.chatModify({
   archive: true,
   lastMessageOrig: m,
   lastMessage: m
}, jid)

// --- Star messages
sock.star(jid, [{ id: messageId, fromMe: true }], true)

// --- Contact
sock.addOrEditContact(jid, { displayName: 'Starseed' })
sock.removeContact(jid)

// --- Label
sock.addChatLabel(jid, labelId)
sock.removeChatLabel(jid, labelId)
sock.addMessageLabel(jid, messageId, labelId)

// --- Favorites
sock.keepFavorites([
   '6281111111111@s.whatsapp.net',
   '1211111111111@g.us'
])
sock.keepFavorites([
   '6281111111111@s.whatsapp.net' // Only this one remains
])

// --- App state sync
sock.resyncAppState(['regular', 'critical_block'], true)

// --- Get business profile
const profile = await sock.getBusinessProfile(jid)
console.dir(profile, { depth: null })
```

### 🛒 Business Management

```javascript
// --- Create a new product
const product = await sock.productCreate({
   name: '🧩 Starseed (Premium)',
   description: 'Get a full version of Starseed!',
   price: 100000,
   currency: 'IDR',
   originCountryCode: 'ID',
   images: [
      bufferImage,
      {
         url: './path/to/image.jpg'
      }
   ]
})
console.dir(product, { depth: null })

// --- Update product
await sock.productUpdate(productId, {
   name: '🧩 Starseed (Premium)',
   description: 'Get a full version of Starseed with more features!',
   price: 75000,
   currency: 'IDR',
   images: [
      {
         url: './path/to/image.jpg'
      }
   ]
})

// --- Delete product
sock.productDelete([productId])

// --- Get catalog info
const { products, nextPageCursor } = await sock.getCatalog({
   jid: '6281111111111@s.whatsapp.net',
   limit: 10
})

// --- Get collections
const collections = await sock.getCollections('6281111111111@s.whatsapp.net', 10)
console.dir(collections, { depth: null })

// --- Get order info
const order = await sock.getOrderDetails(orderId, tokenBase64)
console.dir(order, { depth: null })

// --- Update business profile
await sock.updateBusinessProfile({
   address: 'Jakarta, Indonesia',
   description: '🛒 Official Starseed Store',
   websites: ['https://www.npmjs.com/package/star-ghost'],
   email: 'more-more@gmail.com',
   hours: {
      timezone: 'Asia/Jakarta',
      days: [{ day: 'mon', mode: 'open_24h' }]
   }
})

// --- Update cover
sock.updateCoverPhoto({
   url: './path/to/image.jpg'
})

// --- Remove cover
sock.removeCoverPhoto(coverId)

// --- Update quick replies
sock.addOrEditQuickReply({
   shortcut: 'hello',
   message: 'Hello from business account'
})

// --- Remove quick reply
sock.removeQuickReply(timestamp)
```

### 🔐 Privacy Management

```javascript
// --- Update last seen privacy
sock.updateLastSeenPrivacy('all')
sock.updateLastSeenPrivacy('contacts')
sock.updateLastSeenPrivacy('contact_blacklist')
sock.updateLastSeenPrivacy('nobody')

// --- Update online privacy
sock.updateOnlinePrivacy('all')
sock.updateOnlinePrivacy('match_last_seen')

// --- Update profile picture privacy
sock.updateProfilePicturePrivacy('contacts')

// --- Update status privacy
sock.updateStatusPrivacy('contacts')

// --- Update read receipts privacy
sock.updateReadReceiptsPrivacy('all')
sock.updateReadReceiptsPrivacy('none')

// --- Update groups add privacy
sock.updateGroupsAddPrivacy('all')
sock.updateGroupsAddPrivacy('contacts')

// --- Update messages privacy
sock.updateMessagesPrivacy('all')
sock.updateMessagesPrivacy('contacts')
sock.updateMessagesPrivacy('nobody')

// --- Update call privacy
sock.updateCallPrivacy('everyone')

// --- Update default disappearing mode
sock.updateDefaultDisappearingMode(86400) // 24 hours in seconds

// --- Update link previews privacy
sock.updateDisableLinkPreviewsPrivacy(true)
```

---

## 📡 Baileys Events Reference

Full list of available Baileys events that can be listened to via `sock.ev.on(event, callback)`:

| Event | Typical Payload |
|-------|----------------|
| `connection.update` | `{ type: 'connect' \| ' disconnect' \| 'close' \| 'qr' \| 'authenticated', qr?: string, code?: number, ... }` |
| `creds.update` | Credentials update data |
| `messaging-history.set` | `{ chats: [...] }` |
| `messaging-history.status` | Status of history sync |
| `chats.upsert` | Chat object that was added/updated |
| `chats.update` | Chat that was updated |
| `chats.delete` | Chat JID that was deleted |
| `chats.lock` | Locked chat data |
| `lid-mapping.update` | LID mapping update |
| `presence.update` | Presence update |
| `contacts.upsert` | Contact added/updated |
| `contacts.update` | Contact modified |
| `messages.delete` | Message keys that were deleted |
| `messages.update` | Message keys that were updated |
| `messages.media-update` | Media message updated |
| `messages.upsert` | Message inserted/updated in store |
| `messages.reaction` | Reaction event on message |
| `message-receipt.update` | Read receipt update |
| `groups.upsert` | Group added/updated |
| `groups.update` | Group subject/description/photo updated |
| `group-participants.update` | Participants added/removed/promoted/demoted |
| `group.join-request` | Group join request data |
| `group.member-tag.update` | Member tag updated |
| `blocklist.set` | Full blocklist |
| `blocklist.update` | Blocklist update |
| `call` | Call event data |
| `labels.edit` | Label edited data |
| `labels.association` | Label association changed |
| `newsletter.reaction` | Newsletter reaction event |
| `newsletter.view` | Newsletter view event |
| `newsletter-participants.update` | Newsletter participants changed |
| `newsletter-settings.update` | Newsletter settings changed |
| `settings.update` | Global settings updated |

---

## 🗳️ Database

Star-Ghost includes two built-in database backends:

### 📎 JSON (Default, simple)

```javascript
import { Database } from 'star-ghost'

const db = await Database.json('database.json')

// Read all data
const data = await db.read()

// Write data
await db.write({
   users: {},
   groups: {},
   settings: {}
})

// Alternative: read/write in one step
const result = await db.readWrite({
   users: { '123': { name: 'Test' } },
   groups: {}
})
```

### 📎 SQLite (High performance)

> [!IMPORTANT]
> [`better-sqlite3@>=13.0.0`](https://www.npmjs.com/package/better-sqlite3) is a peer dependency. You must install it manually and add it to your project's `package.json`.

```javascript
import { Database } from 'star-ghost'

const db = await Database.sqlite('database.db')

// Read all data
const data = db.read()

// Write data
db.write({
   users: {},
   groups: {},
   settings: {}
})

// Close the database connection when done
db.close()
```

### Database methods (both backends):

| Method | Description |
|--------|-------------|
| `db.read()` | Read all stored data |
| `db.write(obj)` | Write data object |
| `db.close()` | Close SQLite connection (JSON has no close) |
| `db.clear()` | Clear all data |

---

## 🧩 Extend

If you prefer not to use the `Client` wrapper but still want the additional features provided by this package, you can use `Extend`.

> [!TIP]
> `waSocket` is used as the Baileys socket instance throughout this example. If your project uses a different variable name (e.g. `conn` or `client`), replace `waSocket` with your own variable name.

> [!CAUTION]
> Your Baileys instance must be extensible and writable, as `Extend` attaches additional methods to the instance.

```javascript
import { Extend } from 'star-ghost'
import { makeWASocket } from 'baileys'

const waSocket = makeWASocket({ ... })

const sock = await Extend(waSocket, {
   messageIdPrefix: 'STAR-GHOST',
   updatePresence: true, // Default: true
   updateProtoOnStartup: true, // Default: true
   newsletterAnnotation: {
      newsletterJid: '1211111111111@newsletter',
      newsletterName: 'star-ghost',
      contentType: 1
   } // IForwardedNewsletterMessageInfo | false
})

// Now you can use all Client methods on waSocket
sock.sendText('123@s.whatsapp.net', 'Hello!')
sock.sendMedia('123@s.whatsapp.net', buffer, 'Hello!')
```

### Extend options:

| Option | Default | Description |
|--------|---------|-------------|
| `messageIdPrefix` | `'STAR-GHOST'` | Prefix for message IDs |
| `updatePresence` | `true` | Whether to update presence status |
| `updateProtoOnStartup` | `true` | Whether to update proto on startup |
| `newsletterAnnotation` | `false` | Newsletter annotation config |

---

## 🌐 Request

> [!NOTE]
> This feature relies on Node.js's built-in `fetch()` API along with several other native Node.js capabilities. Therefore, it's highly recommended to use Node.js version 20 or newer (>= 20) to ensure everything works properly.

```javascript
import { Request } from 'star-ghost'

// --- Quick request
const result = await Request.request('https://path-to-web-api.com/', {
   timeout: 3000 // Default: 60000 (60 seconds)
})

// --- Get URL from redirect chain
const maxRedirects = 3 // Default: 3
const realUrl = await Request.resolveUrl('https://path-to-redirect.com/', maxRedirects)

// --- Create a fast API path
const someApi = Request.createApiRequest('https://path-to-web-api.com/')

// GET request
const getResult = await someApi('path/to/get', {
   q: 'Hello'
}, {
   // Optional parameters
   timeout: 3000,
   method: 'GET',
   headers: {
      'Content-Type': 'application/json'
   }
})

// POST request
const postResult = await someApi('path/to/post', {
   method: 'POST',
   headers: {
      'Content-Type': 'application/json'
   },
   body: JSON.stringify({
      q: 'Hello'
   })
})
```

### Request utility functions:

| Function | Description |
|----------|-------------|
| `Request.request(url, options)` | Make a generic HTTP request |
| `Request.resolveUrl(url, maxRedirects)` | Resolve redirects and return final URL |
| `Request.createApiRequest(baseUrl)` | Create a reusable API request function |

### Default options for `Request.request()`:

```javascript
{
   timeout: getGlobalConfig('requestTimeout') || 60000, // 60 seconds
   signal: undefined, // Abort signal
   headers: {} // Custom headers
}
```

---

## 🔧 Global Config

Manage global configuration settings that affect the entire bot's behavior.

```javascript
import { Utilities, getGlobalConfig, setGlobalConfig } from 'star-ghost'

// Get current configuration
const myConfig = getGlobalConfig()

// Set new configuration
setGlobalConfig({
   // FFmpeg executable binary path
   ffmpegPath: 'ffmpeg',

   // FFmpeg concurrent execution
   ffmpegConcurrency: 4,

   // FFmpeg execution timeout in milliseconds
   ffmpegTimeout: 90_000, // 90 seconds

   // Shared cache instance
   cache: Utilities.createCache(),

   // Logger instance (e.g. pino, winston)
   logger: LOGGER,

   // Default request timeout in milliseconds
   requestTimeout: 60_000, // 60 seconds

   // Temporary directory path
   temporaryPath: 'temp',

   // Time zone for date operations
   timezone: 'Asia/Jakarta'
})
```

### Global config defaults:

| Setting | Default | Description |
|---------|---------|-------------|
| `ffmpegPath` | `ffmpeg` | Path to ffmpeg binary |
| `ffmpegConcurrency` | `4` | Concurrent ffmpeg processes |
| `ffmpegTimeout` | `90000` | FFmpeg timeout in ms |
| `cache` | `Utilities.createCache()` | Cache instance |
| `logger` | `pino` or custom | Logger instance |
| `requestTimeout` | `60000` | Default request timeout in ms |
| `temporaryPath` | `temp` | Temp directory |
| `timezone` | `Asia/Jakarta` | Default time zone |

### Cache utilities:

```javascript
import { Utilities } from 'star-ghost'

const cache = Utilities.createCache({
   ttl: 300_000, // 5 minutes default
   max: 1024 // Max entries
})

// Cache methods
cache.set('key', 'value')
cache.get('key')
cache.has('key')
cache.delete('key')
cache.clear()
```

---

## 📚 Exported Modules

```javascript
import {
   Client,
   Database,
   Extend,
   Request,
   Scraper,
   Serialize,
   Utilities,
   Watcher,
   getGlobalConfig,
   setGlobalConfig
} from 'star-ghost'
```

### Module descriptions:

| Module | Description |
|--------|-------------|
| `Client` | Main bot client wrapper |
| `Database` | JSON/SQLite database manager |
| `Extend` | Extend Baileys socket with extra methods |
| `Request` | HTTP request utilities |
| `Scraper` | Web scraping utilities |
| `Serialize` | Message serialization helpers |
| `Utilities` | General utility functions |
| `Watcher` | File watching utilities |
| `getGlobalConfig` | Get global configuration |
| `setGlobalConfig` | Set global configuration |

---

## 🚀 Try the Bot

A fast, and modular WhatsApp bot built with [@itsliaaa/baileys](https://www.npmjs.com/package/@itsliaaa/baileys). Perfect for managing groups, moderating chats, and adding fun with quiz games and handy tools.

---

## 📣 Credits

This project uses Protocol Buffer definitions maintained by [WPP Connect](https://github.com/wppconnect-team) via [`wa-proto`](https://github.com/wppconnect-team/wa-proto) for the `updateProtoOnStartup` feature.

Special thanks to the original Baileys maintainers and contributors:
- [purpshell](https://github.com/purpshell)
- [jlucaso1](https://github.com/jlucaso1)
- [adiwajshing](https://github.com/adiwajshing)

<!-- Please do not replace my name with yours. It's disrespectful. -->

**This project is created and maintained by [Lia Wynn](https://github.com/itsliaaa)**

**Star-Ghost fork maintained by [GhostDev.js](https://github.com/ghostdev654).**

---

## 📁 Media Folder

A `media/` folder has been created at the root of the project for uploading the logo and other media assets.

- Place your logo image as `media/star-ghost-logo.png`
- The logo is referenced in the README header: `media/star-ghost-logo.png`
- Supported formats: PNG, JPG, SVG, WebP

---

*Generated with Star-Ghost v0.0.0-alpha.34*