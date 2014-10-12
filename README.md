# grunt-chaas

> Grunt plugin for behappyrightnow/chaas

## Installation

Install the plugin with:
```shell
npm install grunt-chaas 
```

Then, include the following in Gruntfile.js (create it if you don't have one) in your project folder:

```shell
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-chaas')
}
```
Then, make your chaas configuration file (chaas.json) in your project folder with the following structure:
```shell
{
  "fixtures": ["/path/to/fixtures"],
  "logic": ["/path/to/logic"],
  "wiki": "/path/to/wiki"
}
```

You can now run chaas by issuing in your project folder:
```shell
grunt chaas
```

The fixtures and logic settings take an array of folders, so you can merge multiple projects and run a single wiki to manage all your executable documentation.

## What is executable documentation?
A term coined by Joshua Kerievsky, it refers to documentation that is accompanied with tests that are visible through the browser and can be executed. It differs from unit tests or even acceptance tests in that it is usually constructed for subject matter experts, and owned by them. While they may take the help of technical folks to edit and maintain this, the intention is for them to own the construction and content of the tests. 

This is not a new idea at all. It has been well illustrated by Ward Cunningham's pioneering work with [FIT](http://fit.c2.com) and ObjectMentor's [FitNesse](http://fitnesse.org). Chaas is an evolution of these ideas. It is exclusively focused for now on Javascript, built on a foundation of AngularJS and Grunt. It has a super small footprint, and does not generate any unnecessary files. It is still early days for Chaas, and you are welcome to contribute to this project.

This plugin requires Grunt `~0.4.4`
