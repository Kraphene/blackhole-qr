# blackhole-qr

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

blackhole-qr allows you to store large amounts of characters or JSON objects in a QR code. using (CBOR, PAKO, HEX). compresses up to 96% of the size.

- CBOR ( for generate an Uint8Array)
- PAKO ( for compress Uint8Array, very fast )
- QRIOUS ( high quality QR library )
- HEX (Buffer.from(_).toString('hex' )

## Features
- INPUT 30.811 Length
- OUTPUT 1856 Length
- RESULT ->  93.98 % Less 
- It takes a value and converts it to QR.
- The Qr is generated in a canva.
- Allows to compress large amounts of characters and reduce their size by 80-90%

## Usage


```sh
npm i blackhole-qr
```
1. Create an canvas 

```sh
 <canvas id="qr"></canvas>
```
2. Import module
```sh
import { Blackhole }from 'blackhole-qr'
```
3. Class instance       (canvas, value, qr_size)
```sh
     const QR = new Blackhole()
      QR.generate('qr', 'value_to_QR', 300)
```
4. Change QR parameters  (optional)
```sh
     const QR = new Blackhole()
      QR.generate('qr', 'value', 300)
      QR.set.size = 500;
      QR.set.background = 'green';
      QR.set.backgroundAlpha = 0.8;
      QR.set.foreground = 'blue';
      QR.set.foregroundAlpha = 0.8;
      QR.set.level = 'L';
      QR.set.padding = 25;
      QR.set.value = 'https://github.com/neocotic/qrious';
```
5. Test
```sh

    generateRamdomJSON() {
      let beforeEncodeProcess = [];
      let result = "";
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (let i = 0; i < 1000; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }

      for (let d = 0; d < 30; d++) {
        beforeEncodeProcess.push({ answer: 5, textarea: result });
      }

      console.log(JSON.stringify(beforeEncodeProcess).length);
      const QR = new Blackhole();
      QR.generate("qr", beforeEncodeProcess, 300);
      console.log(QR.cborHex.length);
    }
```
INPUT 30.811 Length
OUTPUT 1856 Length
RESULT ->  93.98 % Less 


6.DECODE 

```sh
     QR.decode()
     QR.decodeByValue('QR.cborHex')

```



   
## License
MIT
https://github.com/Kraphene

