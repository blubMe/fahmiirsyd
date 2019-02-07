---
title: "Menjelajah Vue: Pengenalan awal tentang vue"
date: 2018-09-15
description: "Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet."
image: ""
logo: "/images/vue.svg"
slug: menjelajah-vue-pengenalan-awal
---

I was recently tasked with creating a simple command line program that would take an input of a file of unknown contents and print a hex dump as the output. However, I didn’t really know how I could access the data of the file to begin with, and I didn’t know what a hex dump was. So I’m going to share with you what I learned and what I wrote to accomplish this task.

Which will run a hexdump.js program on a file (data) and output the hex dump.

The file can be anything – an image, a binary, a regular text file, or a file with other encoded data. In my particular case, it was a ROM.

If you’ve ever tried opening a non text-based file with a text editor, you’ll remember seeing a jumbled mess of random characters. If you’ve ever wondered how a program could access that raw data and work with it, this article might be enlightening.

This article will consist of two parts: the first, background information explaining what a hex dump is, what bits and bytes are, how to calculate values in base 2, base 10, and base 16, and an explanation of printable ASCII characters. The second part will be writing the hex dump function in Node.