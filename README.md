# Minecraft Server Status Web (Personal Project)

This is a small personal project for fun.

The website uses the **mcstatus.io API** to fetch and display Minecraft server data directly on a web page.

## Features

- Fetch server status in real time
- Display server logo
- Show MOTD (Message of the Day)
- Show online player count (basic info)
- Client-side only (JavaScript)

## API Used

mcstatus.io Java server status API:


## How It Works

The website sends a request to the mcstatus.io API and updates the page dynamically using JavaScript.

Data fetched includes:
- Server icon
- MOTD
- Online players
- Server status

## How To Use

1. Open `script.js`
2. Find the following line:

```js
const api = "https://api.mcstatus.io/v2/status/java/hypixel.net"
```
3. Replace hypixel.net with your own Minecraft server IP, for example:
```js
const api = "https://api.mcstatus.io/v2/status/java/play.example.com"
```
