---
title: Hako
publishDate: 2023-03-03 00:00:00
featured: true
img: /assets/projects/hako/hako-bug.gif
img_alt: Hako bugs out while trying to blow you a kiss
caption: Hako seems to be experiencing some technical difficulties...
description: |
    Hako is a lovable open source virtual desktop assistant!
tags:
    - Game Development
    - Machine Learning
    - Computer Graphics
---

## A companion just for you. For free. Forever.

---

Hako is a lovable open source virtual desktop assistant for all your computer tasks.

Check out the source, downloads, and more information on [GitHub](https://github.com/ShungFei/hako)

## Features

---

⚠️ Hako is in a early stage of development, so this is more a wishlist than anything! ⚠️

I'm currently implementing some of the more basic groundwork, while I think about how to best implement state of the art Machine Learning methods to drive these core features. Please reach out if you're interested in some of these problems!

Current time of writing is the 6th of March 2023, and I'm really excited about [certain recent developments in the text generation space](https://github.com/facebookresearch/llama). Could a model as good as ChatGPT soon be able to run on any home computer? I sure hope so!

### Animation

-   [ ] Moves in procedurally generated paths based on the current context
-   [ ] Drag Hako around the screen with a mouse
-   [ ] Interacts with application windows as if they had geometry
-   [ ] Turn gravity (or other force fields) on/off

### Conversation

-   [ ] Remembers the things you talk about and do
-   [ ] Learns how to make an engaging conversation with you

### Computer Vision

-   [ ] You don't need to explain what you're up to if Hako can see your screen!

### Application Interactions

-   [ ] Searches the internet and does your research for you
-   [ ] Answer chat messages in your stead
-   [ ] Teach Hako how to crunch your numbers in excel
-   [ ] Play multiplayer games together

### And more!

-   [ ] Install extensions to have Hako watch your security cameras, turn on your rice cooker, or anything you want.
-   [x] Unfortunately, you can't install extensions to make Hako wash your clothes or give you a bath

## How's it made?

---

-   Hako's 3D model was created with [Blender](https://www.blender.org/)
-   GDScript game code powered by the [Godot Game Engine](https://godotengine.org/)!

## Technical Design

---

Machine Learning is moving at a incredible pace nowadays, so how do you future-proof an architecture for Hako? Honestly — I have no idea!

I'm learning everything as I go, so please do help me if I'm wandering right into a dead end 😅

### Modules / Extensions

Ideally, the architecture should be designed in a way that allows the integration of extensions that can hack the assistant and make them do whatever you want, like traditional home assistant things such as turning on your lights or searching for the weather.

Modular Machine Learning is hard! If you know a good way to implement it for this project I'd love to have a chat.

### Reinforcement Learning

This is also a topic I'm not too familar with, but I think that it's probably key

### Memory

Big unanswered question: What's the best way to store memories of past interactions and then consume it?

I've been eyeing the [Langchain](https://langchain.readthedocs.io/) project for a while. Could this be part of the answer?

It's probably a good idea to log as many events as possible so that future versions of Hako can use the data, even if the current iteration does not.

## License

---

Since I'm currently working solo, I'm under no rush to choose a license for Hako.

I intend on eventually using GPL, MIT, MPL, or some other popular open source license once I have a clearer vision of what place in the world Hako has.

If this project is to be of any significance to people, then this is definitely a decision I'd want to give more attention than I'm currently able to!

## Thank you for your time!

---

![Hako manages to successfully blow you a kiss](/assets/projects/hako/hako.apng)
