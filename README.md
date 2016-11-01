![Color Palette for Ganymede](assets/ganymede-palette.png)

# Ganymede

<a href="https://github.com/charlespeters/VVWIP">
  <img src="https://unpkg.com/vvwip/AWIP.svg" alt="AWIP" align='right' />
</a>

A color scheme for Hyper/Hyperterm, Vim/NeoVim & Atom (maybe, eventually, probably...) inspired by the icy coldness of the moons of Jupiter contrasted against all the bright vibrant colors that my personality comprises.


## Usage

```
npm i -S ganymede
```

<img align='center' alt='Vim Icon' src='assets/vim.png' />
<h3 align='center'>Vim</h3>

This was designed using Neovim Add `charlespeters/vim-ganymede` to whatever plugin system you're using (Pathogen, Vundle, etc). In your `.vimrc` add:

```vim
set t_Co=256
colorscheme ganymede

let g:airline_theme='ganymede'
```

![Screenshot of Vim using Ganymede](assets/screenshot-vim.png)

<img align='center' alt='Hyper Icon' src='assets/hyper.png' />
<h3 align='center' >Hyper</h3>

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

---

## Acknowledgement

I probably wouldn't have built this if [Trevor Miller](https://twitter.com/trevordmiller) hadn't paved the way with his [Nova Project](http://www.trevordmiller.com/nova/). Trevor you're awesome, 🍻⚡️🎉.

## License

MIT
