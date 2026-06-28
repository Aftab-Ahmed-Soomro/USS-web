const fs = require('fs');
fetch('https://emmanuelcolewilliams.com/')
  .then(res => res.text())
  .then(html => {
    const urls = [];
    const regex = /<img[^>]+src=["']([^"']+)["'][^>]*>/gi;
    let match;
    while ((match = regex.exec(html)) !== null) {
      urls.push(match[1]);
    }
    console.log(urls.join('\n'));
  });
