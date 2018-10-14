![Color Palette for Ganymede](./assets/ganymede-palette.png)

# Ganymede

<a href="https://github.com/charlespeters/VVWIP">
  <img src="https://unpkg.com/vvwip/AWIP.svg" alt="AWIP" align='right' />
</a>

A color scheme for Hyper/Hyperterm, Vim/NeoVim & Atom (maybe, eventually, probably...) inspired by the icy coldness of the moons of Jupiter contrasted against all the bright vibrant colors that my personality comprises.


## Usage

```shell
npm i -S ganymede
```

<h3 align='center'>
  <img alt='Vim Icon' src='assets/vim.png' />
  <br />
  <a href='https://github.com/charlespeters/ganymede.vim'>Vim</a>
</h3>

This was designed using Neovim, but totally works in normal people Vim (like 7.4+). Add `charlespeters/vim-ganymede` to whatever plugin system you're using (Pathogen, Vundle, etc). In your `.vimrc` add:

```vim
set t_Co=256
colorscheme ganymede

let g:airline_theme='ganymede'
```

![Screenshot of Vim using Ganymede](assets/screenshot-vim.png)

<h3 align='center'>
  <img alt='Hyper Icon' src='assets/hyper.png' />
  <br />
  <a href='https://github.com/charlespeters/hyperganymede'>Hyper</a>
</h3>


Add `'hyperganymede'` under plugins in your configuration file (preferably toward the end of the list). An example:

```js
module.exports = {
  config: {
    fontFamily: 'SFMono-Medium',
    cursorShape: 'BEAM',
    bell: false,
    ...
  },
  plugins: {
    'hyperganymede'
  }
}
```

And in action:

![Screenshot of Hyper using Ganymede](assets/screenshot-hyper.png)

<h3 align='center'>
  <img alt='Atom Icon' src='assets/atom.png' />
  <br />
  <a href='https://github.com/charlespeters/ganymede-atom-syntax'>Atom</a>
</h3>

There's a syntax port of Ganymede for Atom. To install, run this command below or search for Ganymede.

```
apm install ganymede-atom-syntax
```

![Screenshot of Atom using Ganymede](assets/screenshot-atom.png)

The screenshot above uses Atom Dark UI theme and SF Mono.

<h3 align='center'>
  <img alt='iTerm Icon' src='assets/iterm.png' />
  <br />
  <a href='https://github.com/charlespeters/ganymede-iterm'>iTerm</a>
</h3>

Download [`Ganymede.itermcolors`](https://raw.githubusercontent.com/charlespeters/ganymede-iterm/master/Ganymede.itermcolors) and drag into onto iTerm in your Dock or In iTerm, open your preferences
navigate to _"Profiles" > "Colors" > "Color Presets" > "Import"_ and select the copy of `Ganymede.itermcolors` you downloaded.

---

## Acknowledgement

I probably wouldn't have built this if [Trevor Miller](https://twitter.com/trevordmiller) hadn't paved the way with his [Nova Project](http://www.trevordmiller.com/nova/). Trevor you're awesome, 🍻⚡️🎉.

## License

MIT
