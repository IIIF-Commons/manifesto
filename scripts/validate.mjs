import { promises as FS } from "node:fs";
import chalk from "chalk";

const pkgJson = await FS.readFile(`./package.json`);
const pkg = JSON.parse(pkgJson.toString());

let _indent = 2;
let _indentBy = 4;

function logWithIndent(msg) {
  console.log(chalk.gray(`${new Array(_indent + 1).fill("").join(" ")}${msg}`));
}

async function checkFile(file, description) {
  logWithIndent(`${description ? `"${chalk.cyanBright(description)}": ` : ''}${chalk.blue(`"${file}"`)} ${chalk.green(`✓`)} exists`);
  await FS.stat(file);
}

function indent() {
  _indent += _indentBy;
}

function dedent(arr = false) {
  _indent -= _indentBy;
  logWithIndent(arr ? ']' : '}');
}

console.log(chalk.gray(`
Validating ${chalk.blue(`package.json`)}
`))

logWithIndent(`{`);

await checkFile(pkg.main, "main");
await checkFile(pkg.module, "module");
await checkFile(pkg.types, "types");

const exportKeys = Object.keys(pkg.exports);
logWithIndent(`"exports": {`);
indent();
for (const exportKey of exportKeys) {
  if (typeof pkg.exports[exportKey] === "string") {
    await checkFile(pkg.exports[exportKey], exportKey);
    continue;
  }
  logWithIndent(`"${exportKey}": {`);
  const variations = Object.keys(pkg.exports[exportKey]);
  indent();
  for (const variation of variations) {
    await checkFile(pkg.exports[exportKey][variation], variation);
  }
  dedent();
}
dedent();


const typesVersionKeys = Object.keys(pkg.typesVersions);
logWithIndent(`"typesVersions": {`);
indent();
for (const typesVersionKey of typesVersionKeys) {
  const variations = Object.keys(pkg.typesVersions[typesVersionKey]);
  logWithIndent(`"${typesVersionKey}": {`);
  indent();
  for (const variation of variations) {
    const listOfTypes = pkg.typesVersions[typesVersionKey][variation];
    logWithIndent(`"${variation}": [`);
    indent();
    for (const pathToTypescriptFile of listOfTypes) {
      await checkFile(pathToTypescriptFile);
    }
    dedent(true);
  }
  dedent();
}
dedent();

console.log(chalk.greenBright(`\n\n ✓ package.json is valid`));

