var expect = require("chai").expect;
var manifesto = require("../../dist-commonjs");

var fixtures = require("../fixtures/propertyvalues.json");

describe("PropertyValue", function() {
  it("should parse and handle simple v2 string values", function() {
    var val = manifesto.PropertyValue.parse(fixtures.v2.singleString);
    expect(val.getValue()).to.eq("A single string");
    expect(val.getValue("en")).to.eq("A single string");
    val = manifesto.PropertyValue.parse(fixtures.v2.multipleStrings);
    expect(val.getValue("zh")).to.eq("One string");
    expect(val.getValue("jp", "\n")).to.eq("One string\nanother string");
    expect(val.getValues("kr")).to.have.members([
      "One string",
      "another string",
    ]);
  });

  it("should parse and handle localized v2 values", function() {
    var val = manifesto.PropertyValue.parse(fixtures.v2.singleLocalized);
    expect(val.getValue()).to.eq("Ich bin ein Berliner.");
    expect(val.getValue("en")).to.eq("Ich bin ein Berliner.");
    expect(val.getValue("de")).to.eq("Ich bin ein Berliner.");
    val = manifesto.PropertyValue.parse(fixtures.v2.multipleLocalized);
    expect(val.getValue("es")).to.eq("Yo La Tengo");
    expect(val.getValue("fr")).to.eq("Sous les pavés, la plage");
    expect(val.getValue()).to.eq("Yo La Tengo");
    expect(val.getValues()).to.have.members(["Yo La Tengo"]);
  });

  // omeka S manifests exclude @language - easier to fix here than in omeka
  it("should parse and handle localized v2 values without @language", function() {
    var val = manifesto.PropertyValue.parse(
      fixtures.v2.singleLocalizedWithoutLanguage
    );
    expect(val.getValue()).to.eq("Ich bin ein Berliner.");
  });

  it("should parse and handle mixed v2 values", function() {
    var val = manifesto.PropertyValue.parse(fixtures.v2.multipleMixed);
    expect(val.getValue()).to.eq("Saluton!");
    expect(val.getValue(undefined, "\n")).to.eq("Saluton!\n\ud83d\udc4b");
    expect(val.getValue("en")).to.eq("Hello!");
    expect(val.getValue("de")).to.eq("Saluton!");
    expect(val.getValue("zh")).to.eq("你好!");
    expect(val.getValue("zh-Latn")).to.eq("Nǐ hǎo!");
    expect(val.getValue("jp")).to.eq("こんにちは");
    expect(val.getValues("jp")).to.have.members(["こんにちは"]);
  });

  it("should parse and handle v3 values", function() {
    var val = manifesto.PropertyValue.parse(fixtures.v3);
    expect(val.getValue()).to.eq("Whistler (1871)");
    expect(val.getValue("en")).to.eq("Whistler's Mother");
    expect(val.getValues("en")).to.have.members([
      "Whistler's Mother",
      "Arrangement in Grey and Black No. 1: The Artist's Mother",
    ]);
    expect(val.getValue("fr")).to.eq("Arrangement en gris et noir no 1");
    expect(val.getValue("jp")).to.eq("Whistler (1871)");
  });
});
