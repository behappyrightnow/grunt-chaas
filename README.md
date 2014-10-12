# grunt-chaas

> Grunt plugin for behappyrightnow/chaas

## Installation

Install the plugin with:
```shell
npm install grunt-chaas --save-dev
```

Then, include the following in Gruntfile.js (create it if you don't have one) in your project folder:

```shell
module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-chaas')
}
```
Then, make your chaas configuration file (chaas.json) with the following structure:
```shell
{
  "fixtures": ["/path/to/fixtures"],
  "logic": ["/path/to/logic"],
  "wiki": "/path/to/wiki"
}
```

You can now run chaas by issuing:
```shell
grunt chaas
```

The fixtures and logic settings take an array of folders, so you can merge multiple projects and run a single wiki to manage all your executable documentation.

## What is executable documentation?
A term coined by Joshua Kerievsky, it refers to documentation that is accompanied with tests that are visible through the browser and can be executed. It differs from unit tests or even acceptance tests in that it is usually constructed for subject matter experts, and owned by them. While they may take the help of technical folks to edit and maintain this, the intention is for them to own the construction and content of the tests. 

This is not a new idea at all. It has been well illustrated by Ward Cunningham's pioneering work with [FIT](http://fit.c2.com) and ObjectMentor's [FitNesse](http://fitnesse.org). Chaas is an evolution of these ideas. Whereas FIT and Fitnesse focused on the testing aspects, we have built Chaas with the idea of serving as subject-matter documentation of business logic, to make it come out of the heads of experienced people and be shared in the project commons. Chaas is exclusively focused for now on Javascript, built on a foundation of AngularJS and Grunt. It is intended to have a super small footprint.

## Getting Started
This plugin requires Grunt `~0.4.4`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-chaas --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-chaas');
```

## The "chaas" task

### Overview
In your project's Gruntfile, add a section named `chaas` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  chaas: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `',  '`

A string value that is used to do something with whatever.

#### options.punctuation
Type: `String`
Default value: `'.'`

A string value that is used to do something else with whatever else.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  chaas: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  chaas: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
