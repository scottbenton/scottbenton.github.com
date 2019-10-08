# Portfolio Website

> View the final product [here](https://scottbenton.github.io/portfolio/)

---

## Installation

### Clone

- Clone this repo to your local machine using `https://github.com/scottbenton/portfolio.git`

```shell
$ git clone https://github.com/scottbenton/portfolio.git
$ cd portfolio
$ npm i 
```
### Running

- This application was created using create-react-app. It can be ran locally with the command 
```shell
$ npm start
```
- To deploy this app to the gh-pages branch of your repository, run the command
```shell
$ npm run deploy
```
---

## Configuration

### Content
- Configuration of the content of the app can mostly be done under the 'src/Resources' folder. 
- As I continue development, hopefully the app will become more configurable

### GitHub Pages
- To set the app up to work with GitHub Pages, I used [this](https://github.com/gitname/react-gh-pages) npm package. In order to make this portfolio work for you, you must change the homepage property in package.json to the URL for your webpage.

### Google Domains
- My domain for this website comes from Google Domains. In order to use Google Domains, I have followed [this](http://www.curtismlarson.com/blog/2015/04/12/github-pages-google-domains/?source=post_page-----3dd8d90cc33b----------------------) tutorial. Some tweaks will be needed to the code, primarily changing the domains listed in the CNAME file located in the public folder. 
- Remember that any changes to DNS settings can take hours to change, so be patient!
---

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
