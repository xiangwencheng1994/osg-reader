class ArrayReader
{
    constructor(data)
    {
        this.bytes = new Uint8Array(data);
        this.length = this.bytes.length;
    }

    readUInt8(offset)
    {
        return this.bytes[offset];
    }

    readDoubleLE(offset)
    {
        return this.bytes[offset] != 0;
    }

    readUInt16LE(offset)
    {
        let a = this.bytes[offset];
        let b = this.bytes[offset + 1];
        let arr = new Uint16Array(new Uint8Array([a, b]).buffer);
        return arr[0];
    }

    readUInt32LE(offset)
    {
        let a = this.bytes[offset];
        let b = this.bytes[offset + 1];
        let c = this.bytes[offset + 2];
        let d = this.bytes[offset + 3];
        let arr = new Uint32Array(new Uint8Array([a, b, c, d]).buffer);
        return arr[0];
    }

    readInt32LE(offset)
    {
        let a = this.bytes[offset];
        let b = this.bytes[offset + 1];
        let c = this.bytes[offset + 2];
        let d = this.bytes[offset + 3];
        let arr = new Int32Array(new Uint8Array([a, b, c, d]).buffer);
        return arr[0];
    }

    readFloatLE(offset)
    {
        let a = this.bytes[offset];
        let b = this.bytes[offset + 1];
        let c = this.bytes[offset + 2];
        let d = this.bytes[offset + 3];
        let arr = new Float32Array(new Uint8Array([a, b, c, d]).buffer);
        return arr[0];
    }

    toString(charset, start, end)
    {
        // assert(charset == "ASCII")
        var ret = "";
        for(let i = start; i < end; ++i) {
            ret += String.fromCharCode(this.bytes[i]);
            if (this.bytes[i] == 0) break;
        }

        return ret;
    }

    subBuffer(begin, end)
    {
        return this.bytes.subarray(begin, end);
    }

}

module.exports = ArrayReader;