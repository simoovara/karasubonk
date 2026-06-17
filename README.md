Karasubonk + Streamer.bot Integration (UDP Listener) + Simple discord selfbot listener

This repository is a modified fork of the original [Karasubonk](https://github.com/typeou/karasubonk) . It introduces a lightweight UDP Listener to enable direct, seamless triggers from Streamer.bot (or any UDP sender) without relying on Twitch chat integration or simulated key presses.

📋 Prerequisites

To run or build this project, you need:

Node.js: This build has been tested and confirmed working on version **24.13.0 LTS.** (Newer LTS versions should theoretically work as well).

🚀 Installation & Build

Follow these steps to set up the application on your local machine:

1. Clone the Repository

```
git clone https://github.com/FLevy04/karasubonk
cd karasubonk
```

2. Install Dependencies

`npm install`


3. Run Development Mode
Use this command to test the application immediately without building:

`npm start`


4. Build Executable (.exe)
To generate a standalone Windows application (located in the out folder):

`npm run make`


👏 Credits & Acknowledgments

Original Application: A huge thank you to [typeou](https://github.com/typeou) for creating the original Karasubonk application. This mod would not exist without their amazing work.
UDP Fork: [FLevy04](https://github.com/FLevy04/karasubonk)

UDP Implementation: The logic for the UDP Listener was assisted by Google Gemini 3 Pro.
