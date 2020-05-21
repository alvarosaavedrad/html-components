# 📦 HTML Components 📦 [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)

## 🔖 Description

3 HTML components to test my skills.

## 📖 How-to

Open `./src/index.html` to display all components.

All images are located in `./src/assets/images/`.

Binary files as images are managed with [Git LFS](https://git-lfs.github.com/).

Web styling is made with [SCSS](https://sass-lang.com/) and keeping in mind [7-1 Sass Architecture](https://www.learnhowtoprogram.com/user-interfaces/building-layouts-preprocessors/7-1-sass-architecture) and [BEM pattern](https://css-tricks.com/bem-101/).

To bundle all stylesheets use `npm run compile:sass`. Mind this command will run as a `watcher`.

In order to code faster `live-server` package is used to refresh the browser automatically after every change.

### Component 1️⃣

Images in blocks turn off on hover and a white plus icon is displayed. Image caption becomes red on hover. Both image and caption redirect to the post.

### Component 2️⃣

Red line under title in left block is animated from 0 to 100 every 4 seconds. Brand images in right block change every 4 seconds too.

### Component 3️⃣

Description line is animated as writing effect every 5 seconds. Jobs number can be changed by param.
