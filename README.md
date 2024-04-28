# Gnome system monitor (improved)
Shows system information in the top panel
 - CPU load and temperature
 - GPU load and temperature
 - Memory and swap consumption
 - Network download/upload speeds

# How to build
```bash
meson setup ./builddir --prefix ~/.local
meson install -C ./builddir
```