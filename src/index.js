const cbor = require("cbor");
const pako = require("pako");
const qrious = require("qrious");

const CBOR = (e) => {
  return cbor.encode(e);
};

const PAKO = (e) => {
  return pako.deflate(e);
};

const HEX = (e) => {
  return Buffer.from(e).toString("hex");
};

const QRIOUS = (c, v) => {
  return new qrious({
    element: document.getElementById(c),
    value: v,
  });
};

class Blackhole {
  constructor() {
    this.value = null;
    this.cborHex = null;
    this.set = null;
    this.canvas = null;
  }
  generate(canvas, value, size) {
    this.value = value;
    this.cborHex = HEX(PAKO(CBOR(this.value)));
    this.set = QRIOUS(canvas, this.cborHex);
    this.set.size = size;
    this.set.background = "transparent";
    this.set.foregroundAlpha = 0.8;
    this.set.backgroundAlpha = 0.8;
    this.set.foreground = "#000000";
    this.set.level = "L";
  }
  decode() {
    const hexDecoded = new Buffer.from(this.cborHex, 'hex')
    const pakoDecoded = pako.inflate(hexDecoded)
    const cborDecoded = cbor.decode(pakoDecoded)

    return cborDecoded
  }
  decodeByValue(value) {
    const hexDecoded = new Buffer.from(value, 'hex')
    const pakoDecoded = pako.inflate(hexDecoded)
    const cborDecoded = cbor.decode(pakoDecoded)

    return cborDecoded
  }
}

module.exports = {
  Blackhole,
};
