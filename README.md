# Santa Cruz Baoque Festival Website

This repository is for maintaining the website for the non-profit organization that produces the Santa Cruz Baroque Festival every year.


## Design Goals

There are two key design goals:

* Ease of maintenance.  As the organization moves forward, there will be a constant need to update the site.  This will typically be done by one persion, but there should be the ability to collaborate as necessary.  Most importantly change versions should be tracked, and old versions always available in the future if needed.  

* Consistency of Site.  To present a professional appearance the pages should have style guidelines strictly enforces in order to assure that all pages are styled the same.  This means that page authors will have low control of individual page styles.  Markdown offers the right capabilities.

* Free and available.  Being a non-profit organization running on a shoe string, we want to leverage open source and free utilities to the extent possible.

### Choice of Gatsby

Gatsby is an open source framework freely available for use.  It stores the site as source files that can be managed in GitHub.  It generates a static site that can be hosted on any web server without needing any special capabilities of the server.  These points:

* Collaboration: Managing of source through GitHub means that any number of people can be given access to Github, and can work on the site simultaneously.  
* Versioning: All versions from the  are preserved in history, and can be recalled.  Anything accidentally deleted in the tip revision can be easily recovered from history.
* Offline: Github allows developers to "pull" a local copy for working without needing to work online.
* Static Site: The final website is also simply a bunch of files that can be installed simply by putting the files on the server.
* Markdown: Gatsby will automatically convert markdown files to web files.  The author then specifies the text in markdown which is very simple to do, and does not have to write HTML which is complex and cumbersome.
* Stylesheets: there is no restriction on the stying of the pages.  Stylesheets and graphics are used in the same way as any web page.  Gatsby does not force any particular style on the site.
* React: Gatsby is based on the powerful React platform, and thus if we wish we can make use of spcial React components.  For example, the "donate" button is one of those components.

Converting the site to Gatsby took about 20 hours of time, and the completed new site is a complete reformat of all pages.  That is why all the pages use a consistent font face and size throughout.

Pages are simple, with bullet lists used for places where a list of items is desired.  These is no styling of individual pages, so there is no need to manually work to keep the pages looking the same.






<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
   Gatsby Bootstrap 5 starter
</h1>


Minimal bootstrap 5 and Gatsby configuration with SCSS support. 

Demo here : https://gatsbystarterbootstrap5.gatsbyjs.io/

## 📋 Available options

- You can theme bootstrap via `src/components/layout.scss`

## 🚀 How to install

Use the Gatsby CLI to create a new site. 

```shell
# create a new Gatsby site using the default starter
gatsby new gatsby-starter-bootstrap-5 https://github.com/r-ichard/gatsby-starter-bootstrap-5
```


## ✏️ How to develop locally

1.  Navigate into your new site’s directory and start it up.

    ```shell
    cd baroque
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `gatsby-starter-bootstrap-5` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 💡 How to contribute 

Any feedback is welcome and helpful.