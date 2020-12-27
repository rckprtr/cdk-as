import { Encoder } from '../candid/encode';
import { Uint8ArrayFromU8Array } from '../utils/helpers';
import { parseHexString } from './helpers';

describe("Call encode and decoding", () => {

  //test helpers
  it("Should convert a hex string to a Uint8Array", () => {
    var dataArray = Uint8ArrayFromU8Array([68, 73, 68, 76, 0, 1, 113, 7, 68, 70, 73, 78, 73, 84, 89])
    var data = "4449444c000171074446494e495459";
    expect<Uint8Array>(
      parseHexString(data)
    ).toStrictEqual(dataArray, "Should match the equal Uint8Array")
  });

  it("Should encode a empty response", () => {
    //didc encode '()'
    var dataArray = parseHexString("4449444c0000")
    var encode = new Encoder([]);
    expect<Uint8Array>(
      encode.build()
    ).toStrictEqual(dataArray, "Should match a empty response")
  });
});




