## Let's Build a Registration Menu

*This tutorial assumes you have basic knowledge of Python syntax and are familiar with Discord and the discord.py
library.*

The Text menu can be a powerful tool for handling more complex user input that isn't suited to simple
button menus. As Discord lacks the ability to have user editable fields on top of a UI element, we have to
implement our own work-around.

In this tutorial we will be building a bot that lets users sign up to a service; this could be anything, a game,
a weekly digest, your imagination is the limit here. We will not worry about the macro details, but we will explore
how to:
* Create a basic bot using the Cog architecture
* Implement a complex registration menu using the TextMenu class
* Store the data in a database

-----

## Basic Bot Structure

