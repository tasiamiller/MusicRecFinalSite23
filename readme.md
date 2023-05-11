# Eleventy Sass Starter

> This is a minimal eleventy starter designed to have a similar structure to a basic web site. The repo owes a big thanks to Stephanie Eckles's [Smol Eleventy Starter](https://github.com/5t3ph/smol-11ty-starter) and [11ty Sass Skeleton](https://github.com/5t3ph/11ty-sass-skeleton) repositories.


## Quick Start

1. [Generate a repo from this template](https://github.com/profstein/eleventy-sass/generate) which will copy this project into your own new repo. _Note: You must be signed in to GitHub for this link to work_
   
   The other option is to [visit the repo directly](https://github.com/profstein/eleventy-sass/) and clone it. Generating is a smoother process and is recommended over direct cloning.

2. Once you have a copy of the repository on GitHub, you will need to edit it. You can use Codespaces or open it on your local computer. There are a few options.
    1. Use Codespaces. This is available from the green code button on the home page of your GitHub Repository. This is a cloud editor so you don't need to have a copy on your computer or an editor installed. Just a browser.
    2. Use the Terminal – [see this GitHub tutorial](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
    3. Use an editor like VS Code – [see more info on VS Code and GitHub](https://code.visualstudio.com/docs/editor/github)
    4. Use a program like [GitHub Desktop ](https://desktop.github.com/)for Windows/mac or Git Tower.
3. In your Editor, open the repository folder if you didn't already in the previous step. Remember to always open the folder and not individual files!
4. Open the Terminal and type, run `npm install` to install 11ty module and other dependent modules (you should see a new **node_modules** folder and **package-lock.json** file). 
5. Then, also in the Terminal, run `npm start` to run 11ty in `serve` mode which will create a local server including hot-reload via BrowserSync. You will see a link to the localhost url in the terminal.

6. Open `package.json` and adjust the author values to your name. There are other things you can change, but maybe hold off until you know more about how package.json works.

7. Edit `index.md` to change the home page, and then create content within `src` folder. 
8. If you are converting an existing site you can:
    1. Copy your CSS, JS and images into the respective folders
    2. Edit `src/_includes/base.njk` to inclue the parts of your site that are on every page (ie header, footer, links to css files, links to js files.)
    3. Create Markdown files in the `src` folder for your HTML files.


## Learn More About Eleventy

- [11ty Official Site](https://11ty.dev)
- Stephanie Eckles site [11ty Rocks](https://11ty.rocks) has a lot of information on 11ty. You can learn how to get started, apply custom data sources and more. Here are a few:
    - Get the 11ty highlights in her [14 minute feature overview](https://youtu.be/p81J7G1qFAM)
    - Read her post on [creating your first Eleventy website](https://11ty.rocks/posts/create-your-first-basic-11ty-website/)
    - View the [Quick Tips](https://11ty.rocks/tips/)
    - View some [configuration examples](https://11ty.rocks/eleventyjs/)

## Site and Longer Guides

- [Beginner's Guid to Eleventy](https://11ty.rocks/eleventyjs/)
- [11ty Recipes](https://11ty.recipes/)
- [Learn Eleventy from Scratch](https://learneleventyfromscratch.com/) note: while it says it&rsquo;s out of date, the basics are all fine.
