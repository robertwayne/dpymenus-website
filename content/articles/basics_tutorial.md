## Let's Structure a Basic Bot

*This tutorial assumes you have basic knowledge of Python syntax, pip, the command line, and are familiar with Discord and the discord.py library. We will also be developing
on Python 3.9rc1, but Python 3.7+ should work just fine!*

<div class="toc">

**Contents**
+ [Prework](#prework)
+ [Defining the Core](#define-the-core)
+ [Base Method Overrides](#base-method-overrides)
+ [Startup Code](#startup-code)

</div>

-----

### Prework

First, make sure you are in your virtual environment. If you are not sure how to do this, please read [the official docs](https://docs.python.org/3/library/venv.html) on how to use
'venv'. This is an integral part of developing with Python *(there are alternative options, but if you are new I recommend learning venv first)*, and you should become familiar with it.

We will be using several external libraries here, so go ahead and install them with:  **pip install dpymenus cogwatch python-dotenv**
As **discord.py** is a requirement of **dpymenus**, it will be installed automatically at the latest working version.

Create a new file in your working directory called **.env** -- this is where we will store our secrets during development. It should look like this:
```
# This is our secret development file. You never want to upload this to github or online,
# as we will be storing sensitive information within it. It let's us access these variables
# and share our code without a security problem!

BOT_TOKEN=
```

Just paste your bot token into this file, after the equals sign.

Lastly, create a sub-directory named 'commands' to your working directory; we will store our commands separately here.

### Defining the Core

Let's start with our imports, setting up a basic logger, and a simple structure:

```python
import asyncio
import logging
import os

import cogwatch
import discord
from discord.ext import commands
from dotenv import load_dotenv

logging.basicConfig(level=logging.INFO)

class Client(commands.Bot):
    def __init__(self):
        super().__init__(command_prefix='!',
                         help_command=None,
                         case_insensitive=False)
```

We inherit from **commands.Bot**, so we have access to a variety of methods on that class and its parent, **discord.Client**. If you're newer to Python, you may not be familiar with **super()** yet. This is basically calling a method from the parent class, in this case, **commands.Bot**. So in our **\_\_init\_\_** method, we also want to call the
parents **\_\_init\_\_** -- that way it can be set up properly. This is how the class inheritance flow works.

We also pass in several parameters: 
- **command_prefix**:  lets us define how we will call our commands in Discord
- **help_command**:  lets us disable the built-in help command, as we will be utilizing **dpymenus** to write our own
- **case_insensitive**: lets commands be called without regard to capitalization.

There are many other parameters you can pass in, all of which can be read about [on the official API documentation](https://discordpy.readthedocs.io/en/latest/ext/commands/api.html#bot). I highly recommend you become familiar with reading API documentation if you are new to Python as it is a staple for development at every level. The **discord.py** docs are very good in my opinion, and once you know how to navigate them, you can figure almost anything out.

### Base Method Overrides

```python
@cogwatch.watch(preload=True)
async def on_ready(self):
	logging.info('Basic bot is ready to go!')

async def on_message(self, message):
	if message.author.bot:
		return

	await self.process_commands(message)
```

There's a lot going on here: for starters, let's just look at the methods themselves, **on_ready** and **on_message**. Both of these will be called when certain events happen, in particular, when the bot is ready and when a message is received by the bot. You can read about them in detail on the API docs [here](https://discordpy.readthedocs.io/en/latest/api.html?highlight=on_ready#discord.on_ready) and [here](https://discordpy.readthedocs.io/en/latest/api.html?highlight=on_ready#discord.on_message).

We've also attached a decorator to one of our methods, **@cogwatch.watch**. If you are unfamiliar with decorators, I recommend reading up on them as **discord.py** makes heavy use of them to simplify many otherwise tedious problems in code. **cogwatch** is a development utility that will automatically hot-reload your commands whenever you make a change.  This saves time when developing from typing out your own reload commands over and over for small changes, and doesn't require a hit to your rate limits. We also pass in the **preload** parameter, which means we can skip writing a method to load all our command files for now as they will be loaded in automatically.

*Please note that I developed cogwatch as a development utility, and it is not meant to be active in a production environment.*

### Startup Code

Finally, let's get the code needed to actually start and run our bot!

```python
async def main():
    load_dotenv()

    client = Client()
    await client.start(os.getenv('BOT_TOKEN'))


if __name__ == '__main__':
    asyncio.run(main())
```

Pretty simple for now: we call a function from the **python-dotenv** library to allow us to access our **.env** file variables in our code. After that, we create an instance of our  Client class and then call a method defined on its parent, start(). This takes our bot token in order to run, so we pass that in. Finally, we pass our main function into the asyncio.run() function, which will start an event loop and all lights are ago! As long as you've invited your bot into your server, it should be online!

<details>
  <summary>Click to view the full code!</summary>

```python
import asyncio
import logging
import os

import cogwatch
import discord
from discord.ext import commands
from dotenv import load_dotenv

logging.basicConfig(level=logging.INFO)


class Client(commands.Bot):
    def __init__(self):
        super().__init__(command_prefix='!',
                         help_command=None,
                         case_insensitive=False)

    @cogwatch.watch(preload=True)
    async def on_ready(self):
        logging.info('Basic bot is ready to go!')

    async def on_message(self, message: discord.Message):
        if message.author.bot:
            return

        await self.process_commands(message)


async def main():
    load_dotenv()

    client = Client()
    await client.start(os.getenv('BOT_TOKEN'))


if __name__ == '__main__':
    asyncio.run(main())
```
</details>

From here on out, this will be our base bot code used in the tutorials on how to actually use **dpymenus** to its fullest.