const cbor = require("cbor");
const pako = require("pako");
const QRious = require("qrious");

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
  return new QRious({
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
  newQr(canvas, value, size) {
    this.value = value;
    this.cborHex = HEX(PAKO(CBOR(this.value)));
    this.set = QRIOUS(canvas, this.cborHex);
    this.set.size = size;
    this.set.background = "transparent";
    this.set.oregroundAlpha = 0.8;
    this.set.backgroundAlpha = 0.8;
    this.set.foreground = "#000000";
    this.set.level = "L";
  }
  revertQr() {
    return 0;
  }
}

module.exports = {
  Blackhole,
};
