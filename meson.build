project('system-monitor-improved',
  version: '1.0',
  meson_version: '>= 0.58.0',
  license: 'GPL2+'
)

uuid = meson.project_name() + '@dima424658'
datadir = get_option('datadir')
shelldir = join_paths(datadir, 'gnome-shell')
extensionsdir = join_paths(shelldir, 'extensions')
extensiondir = join_paths(extensionsdir, uuid)

metadata_name = 'metadata.json'

metadata_conf = configuration_data()
metadata_conf.set('extension_id', meson.project_name())
metadata_conf.set('uuid', uuid)
metadata_conf.set('gschemaname', 'org.gnome.shell.extensions.' + meson.project_name())
metadata_conf.set('name', 'System Monitor Improved')
metadata_conf.set('description', 'Monitor system from the top bar')
metadata_conf.set('shell_current', '48')
metadata_conf.set('url', 'https://gitlab.gnome.org/GNOME/gnome-shell-extensions')

extension_data = []
extension_data += configure_file(
  input: metadata_name + '.in',
  output: metadata_name,
  configuration: metadata_conf
)
extension_data += files('stylesheet.css', 'extension.js', 'proccessRun.js')

install_subdir('icons', install_dir: extensiondir)

install_data (extension_data,
  install_dir: extensiondir
)

custom_target('compile-schema',
  output : 'gschemas.compiled',
  input : join_paths('schemas', metadata_conf.get('gschemaname') + '.gschema.xml'),
  command : ['glib-compile-schemas', join_paths(meson.source_root(), 'schemas'), '--targetdir=@OUTDIR@'],
  install : true,
  install_dir : join_paths(extensiondir, 'schemas'))

summary_dirs = {
  'prefix': get_option('prefix'),
  'datadir': get_option('datadir'),
}

summary(summary_dirs, section: 'Directories')
