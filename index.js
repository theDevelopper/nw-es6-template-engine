const fs = nw.require('fs');

export default function (path) {
    const filename = nw.require.resolve(path);
    const template = fs.readFileSync(filename, 'utf8');

    return Function('data', `return \`${template}\``);
}
