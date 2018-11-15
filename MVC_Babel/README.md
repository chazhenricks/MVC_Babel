# Babel/Webpack with MVC

### What is Webpack?

Webpack, at its core, is a module bundler. In essessence it performs the same action
as the built in MVC bundler. It has the ability of taking multiple files and combining them 
into a single file. 

Where webpack starts to become cool, however, is it has the ability to perform actions on files
_before_ it bundles them together. One of the most used features of Webpack is runing Babel on javascript
files to transpile them into ES5 code 
>read as: things IE11 can understand

### What is Babel?
Babel is a _transpile_ application that will translate and compile (get it?) newer, more modern
Javascript syntax into older syntax that older browsers can understand. This allows you to utilize more 
modern Javascript syntax and not worry about if something will work in older versions of internet explorer. 

## Installing

To get started, you will need to verify some things are installed on your machine. 

#### 1. Some sort of terminal
CMD will work, but I am a lot more used to unix-based commands, so I have [GitBash](https://git-scm.com/downloads)installed on my machine. 
This will make running the NPM scripts a lot easier. 

#### Node
Node is simply a Javascript runtime that lets you compile/run Javascript locally on your machine. Each browser has a Javascript runtime engine built in
that lets it compile/execute Javascript code. Installing Node on your machine allows you to utilize tools to do this locally. Basically you need it to allow other tools to do the thing.

To check to see if you have node installed already, open your terminal and type `node -v` anywhere in your terminal and it will return the version number currently installed, if any. 
To install node visit the [Node Website](https://nodejs.org/en/)and download the latest LTS release.

#### NPM 
NPM (Short for Node Package Manager) is the package manager used for maintaining Node packages. Think of it as the Nuget for Javascript stuff. 

Luckily, when you install Node, you also get NPM. 
To check to see if you have NPM installed, run `npm -v` anywhere in your terminal and it will return the version number currently installed, if any. 


## Getting Started
#### 1. `npm init` 
The first thing we need to do is initialize our project to work with NPM. Running `npm init` in the root directory of your project will kick this process off. 
This creates a `package.json` file in the root of your project. This file is kind of the traffic cop of how npm modules interact with the rest of the projects. 

>Note: This project already has a 'package.json` file set up with all you need. 


#### 2. `npm install` 
We are going to need a few packages to get Webpack/Bable up and running. To install these packages, we include them as devDependencies in our `package.json` file. 
To install new packages, type `npm install ${package-name} --save-dev` in the root directory of your project. This looks in npm for a package, downloads it, and adds it to your `package.json`
file. 

When installing packages from NPM, they are placed in a `/node_modules/` directory on the same level as your `package.json` file. This is similiar to the `References` directory in a C# project. 
However, this folder contains files needed for development and often contains _lots_ of directories/files, so this is usually ignored in source control for space reasons. Because of this, if you are starting
a project that some one else has created, and that project has a list of dependencies in the `package.json` file, all you need to do is type `npm install` in the root directory of the project and npm will install all of them for you. 

#### 3. `webpack.config.js`
We will now need to configure our `webpack.config.js` file. This is a configuration file that tells webpack how to webpack. 
It is here you will define your entry points, where to dump the bundled file, and what to do to each file before it gets added to the bundle. 

####4. `.babelrc`
The next file we need to configure is our `.babelrc` file. This is similiar to the `webpack.config.js` file, but for Babel. This just tells babel how to babel. 
