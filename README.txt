THE LOADED DICE WEBSITE

HOW THE SITE IS PUT TOGETHER
- index.html     the public site. You should not need to touch it.
- content.js     every event, journal post and link on the site. The admin page writes this file.
- admin.html     the admin page: theloadeddice.com/admin.html (not linked from the site).
- uploads/       pictures added through the admin page (made automatically).

CHANGING THE SITE
Open theloadeddice.com/admin.html, sign in, change things, press "Save changes".
It goes live a minute or two later. Everything is saved in GitHub's history, so nothing is lost.
- Events tab: add an event, open or close it, add up to 4 pictures per event, and add photo and video links after a night.
- Journal tab: write and reorder posts.
- Side quests tab: pop-ups, games nights, BYOB and the Pitch Night. Add, reorder, set Open / Coming soon / Done.
- Private events tab: the heading, kinds of events, three boxes, the WhatsApp message people send you, and a small note where you can put pricing later.
- Settings tab: WhatsApp, Instagram, contact email and the business WhatsApp number used by the quote button.

PHOTO AND VIDEO LINKS
Close an event, then "Add a photo or video link". Paste a Google Photos, Google Drive,
YouTube or any link. Guests tap the button on that night's case file and go straight there.
In Google Photos: open the album > Share > create link > copy. Turn link sharing on.

THE TOKEN (one time, per device)
GitHub > Settings > Developer settings > Personal access tokens > Fine-grained tokens > Generate new token.
Repository access: only theloadeddice12-tech.github.io. Permissions: Contents = Read and write.
Treat the token like a password: anyone who has it can change the site.

PUBLISHING THESE FILES (first time only)
In the GitHub repo: Add file > Upload files, drop in index.html, content.js, admin.html and README.txt
(the pictures do not change), then Commit changes.
