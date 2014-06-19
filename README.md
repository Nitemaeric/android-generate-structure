# Android Structure Generation

This script is used to generate various code structures for Android projects. It is used to ease the process of creating Android Applications and Games.

## Why?

Basically, I got tired of not knowing how to structure my projects. I made a strict structure to follow along with this script to generate it.

## Prerequisites

- You must have [Node.js](http://nodejs.org) installed.

## Installation

- `git clone https://github.com/Nitemaeric/android-generate-structure.git` to grab the script.
- `npm install` to install dependancies


## Alias

Alias the script for ease of use.

```
echo "alias ags='node <path_to_script>'" >> ~/.bash_profile
```

### From now on, we will assume that you have aliased the 'ags' command

===

## Usage

```
ags <generation_type> <name>
```

Where:

<i>\<generation_type\></i> is the generation type and <i>\<name\></i> is your desired name.

<i>\<generation_type\></i> ignores character case.

<i>\<name\></i> is capitalised. (Upper Case of first letter)

## Generation Types

* Activity
	* Activity
	* View
	* TouchListener
* GameObject


## Example

If you typed:

```
ags activity main
```

it would generate the following files in the 'Main' directory:

```
Current Directory of Terminal
|-> Main
	|-> MainActivity.java
	|-> MainView.java
	|-> MainTouchListener.java
```
	
## Generated File Template

### Activity

```
TODO
```

### View

```
TODO
```

### TouchListener

```
TODO
```

## Additional Info and Links

* [Lazy Fox Productions](http://www.lazyfoxproductions.com)