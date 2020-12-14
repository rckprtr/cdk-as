import * as LEB128 from '../utils/LEB128';
import { Uint8ArrayFromU8Array } from '../utils/helpers';
import { Decoder, Encoder } from '../call';
import { parseHexString } from './helpers';

describe("DFINITY Vectors encode and decoding", () => {

  //vector string
  //TODO: Fix as there is some sort of error associated to toStrictEqual 
  //and the string list when I tried D I F I N I T Y
  it("Should decode and encode a vector string", () => {
    //didc encode '(vec {"D";"F";"X";})' -t '(vec text)'
    var dataArray = parseHexString("4449444c016d71010003014401460158")
    var decoder = new Decoder(dataArray);
    var inputData = ['D','F','X'];
    expect<Array<string>>(
      decoder.decode<Array<string>>()
    ).toStrictEqual(inputData, "Should decode the Array<string> to ['D','F','X']")

    var encoder = new Encoder();
    encoder.write<Array<string>>(inputData);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the Array<string> to the same Uint8Array")
  });

  //vector bool
  it("Should decode and encode a vector bool", () => {
    //didc encode '(vec {true;false;true;false;true})' -t '(vec bool)'
    var dataArray = parseHexString("4449444c016d7e0100050100010001")
    var decoder = new Decoder(dataArray);
    var inputData = [true,false,true,false,true];
    expect<Array<boolean>>(
      decoder.decode<Array<boolean>>()
    ).toStrictEqual(inputData, "Should decode the Array<boolean> to [true,false,true,false,true]")

    var encoder = new Encoder();
    encoder.write<Array<boolean>>(inputData);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the Array<boolean> to the same Uint8Array")
  });

  //vector u8

  //vector u32

  //vector u64

  //vector i8

  //vector i32

  //vector i64

  //vector float32

  //vector float64


});




