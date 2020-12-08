import * as LEB128 from '../utils/LEB128';
import { Uint8ArrayFromU8Array } from '../utils/helpers';
import { Decoder, Encoder } from '../call';

describe("Call encode and decoding", () => {
  //string
  it("Should decode and encode a string", () => {
    var dataArray = Uint8ArrayFromU8Array([68, 73, 68, 76, 0, 1, 113, 7, 68, 70, 73, 78, 73, 84, 89])
    var stringData = "DFINITY";
    var decoder = new Decoder(dataArray);
    expect<String>(
      decoder.decode<String>()
    ).toBe(stringData, "Should decode the string 'DFINITY' out of the decoder")
    
    var encoder = new Encoder();
    encoder.write<String>(stringData);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the string to the same Uint8Array that was decoded")
  });
  //bool

  //u8

  //u32

  //u64

  //i8

  //i32

  //i64

  //float32

  //float64

  //vector string

  //vector bool

  //vector u8

  //vector u32

  //vector u64

  //vector i8

  //vector i32

  //vector i64

  //vector float32

  //vector float64

  //record

  //record complex
});




