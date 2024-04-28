import Gio from 'gi://Gio';
import GLib from 'gi://GLib';

export default class ProccessRun {
    static {
        Gio._promisify(Gio.Subprocess.prototype, 'communicate_utf8_async');
    }

    constructor(program, args) {
        this._path = GLib.find_program_in_path(program);
        this._argv = args ?? [];
    }

    async run() {
        if (this._path == null) {
            throw new Error('Command in not avaliable');
        }

        let proc = Gio.Subprocess.new([this._path].concat(this._argv),
            Gio.SubprocessFlags.STDOUT_PIPE |
            Gio.SubprocessFlags.STDERR_PIPE);

        return await proc.communicate_utf8_async(null, null);
    }

    destroy() {
        this._path = null;
        this._argv = null;
    }
};
