//@ts-nocheck
class base64 {
    static PADCHAR = "=";
    static ALPHA =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

    static makeDOMException = function() {
        // sadly in FF,Safari,Chrome you can't make a DOMException
        try {
            // TODO TS return new DOMException(DOMException.INVALID_CHARACTER_ERR);
            return new DOMException();
        } catch (tmp) {
            // not available, just passback a duck-typed equiv
            // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Error
            // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Global_Objects/Error/prototype
            const ex: any = new Error("DOM Exception 5");

            // ex.number and ex.description is IE-specific.
            ex.code = ex.number = 5;
            ex.name = ex.description = "INVALID_CHARACTER_ERR";

            // Safari/Chrome output format
            ex.toString = function() {
                return "Error: " + ex.name + ": " + ex.message;
            };
            return ex;
        }
    };

    static getbyte64 = function(s, i) {
        // This is oddly fast, except on Chrome/V8.
        //  Minimal or no improvement in performance by using a
        //   object with properties mapping chars to value (eg. 'A': 0)
        const idx = base64.ALPHA.indexOf(s.charAt(i));
        if (idx === -1) {
            throw base64.makeDOMException();
        }
        return idx;
    };

    static decode = function(s) {
        // convert to string
        s = "" + s;
        const getbyte64 = base64.getbyte64;
        let pads, i, b10;
        let imax = s.length;
        if (imax === 0) {
            return s;
        }

        if (imax % 4 !== 0) {
            throw base64.makeDOMException();
        }

        pads = 0;
        if (s.charAt(imax - 1) === base64.PADCHAR) {
            pads = 1;
            if (s.charAt(imax - 2) === base64.PADCHAR) {
                pads = 2;
            }
            // either way, we want to ignore this last block
            imax -= 4;
        }

        const x = [];
        for (i = 0; i < imax; i += 4) {
            b10 =
                (getbyte64(s, i) << 18) |
                (getbyte64(s, i + 1) << 12) |
                (getbyte64(s, i + 2) << 6) |
                getbyte64(s, i + 3);
            x.push(
                String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff, b10 & 0xff)
            );
        }

        switch (pads) {
            case 1:
                b10 =
                    (getbyte64(s, i) << 18) |
                    (getbyte64(s, i + 1) << 12) |
                    (getbyte64(s, i + 2) << 6);
                x.push(String.fromCharCode(b10 >> 16, (b10 >> 8) & 0xff));
                break;
            case 2:
                b10 = (getbyte64(s, i) << 18) | (getbyte64(s, i + 1) << 12);
                x.push(String.fromCharCode(b10 >> 16));
                break;
        }
        return x.join("");
    };

    static getbyte = function(s, i) {
        const x = s.charCodeAt(i);
        if (x > 255) {
            throw base64.makeDOMException();
        }
        return x;
    };

    static encode = function(s) {
        if (arguments.length !== 1) {
            throw new SyntaxError("Not enough arguments");
        }
        const padchar: any = base64.PADCHAR;
        const alpha: any = base64.ALPHA;
        const getbyte: any = base64.getbyte;

        let i, b10;
        const x = [];

        // convert to string
        s = "" + s;

        const imax = s.length - (s.length % 3);

        if (s.length === 0) {
            return s;
        }
        for (i = 0; i < imax; i += 3) {
            b10 =
                (getbyte(s, i) << 16) |
                (getbyte(s, i + 1) << 8) |
                getbyte(s, i + 2);
            x.push(alpha.charAt(b10 >> 18));
            x.push(alpha.charAt((b10 >> 12) & 0x3f));
            x.push(alpha.charAt((b10 >> 6) & 0x3f));
            x.push(alpha.charAt(b10 & 0x3f));
        }
        switch (s.length - imax) {
            case 1:
                b10 = getbyte(s, i) << 16;
                x.push(
                    alpha.charAt(b10 >> 18) +
                        alpha.charAt((b10 >> 12) & 0x3f) +
                        padchar +
                        padchar
                );
                break;
            case 2:
                b10 = (getbyte(s, i) << 16) | (getbyte(s, i + 1) << 8);
                x.push(
                    alpha.charAt(b10 >> 18) +
                        alpha.charAt((b10 >> 12) & 0x3f) +
                        alpha.charAt((b10 >> 6) & 0x3f) +
                        padchar
                );
                break;
        }
        return x.join("");
    };
}

export default base64;
