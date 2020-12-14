# Facebook's messenger.com - Force Official Dark Mode (M-FODM)

## What is this ?
This is a Tampermonkey script that forces messenger.com to use Facebook's official Dark Theme.

## How does that work ?
This script simply adds Facebook's Dark Theme class to the HTML tag, effectively triggering the Dark Mode they've implemented for facebook.com/messages.
If you navigate to facebook.com/messages, you can see this looks like messenger.com is embedded in facebook's page. And you're right! facebook.com/messages is only an iFrame which uses messenger.com under the hood. If you use the Dark Theme on Facebook, messenger also becomes dark, but only when using the wrapped messenger inside facebook's main site.

What this script does is just applying the same class that Facebook uses on the wrapped version, but directly on messenger.com.

## Why is this not a thing by default ?
That's a good question. Facebook does already have implemented a dark mode on messenger.com, but still not providing a toggle to enable it from the UI.
This will surely come later on, but for the time being, this script can be useful by forcing the dark theme class.

# Screenshot (Google Chrome)
![alt text](https://github.com/FrostiiZ/fb-messenger-official-dark-mode/blob/main/fb_messenger_dark_mode_screenshot.png?raw=true)
