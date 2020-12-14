import { Decoder } from '../candid/decode';
import { Encoder } from '../candid/encode';
import { parseHexString } from './helpers';

describe("DFINITY Primitives encode and decoding", () => {

  //string
  it("Should decode and encode a string", () => {
    //didc encode '("DFINITY")'
    var dataArray = parseHexString("4449444c000171074446494e495459")
    var stringData = "DFINITY";
    var decoder = new Decoder(dataArray);
    expect<String>(
      decoder.decode<String>()
    ).toBe(stringData, "Should decode the string 'DFINITY'")
    
    var encoder = new Encoder();
    encoder.write<String>(stringData);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the string to the same Uint8Array that was decoded")
  });

  //bool
  it("Should decode and encode a bool", () => {
    //didc  encode '(true)'
    var dataArray = parseHexString("4449444c00017e01")
    var decoder = new Decoder(dataArray);
    expect<boolean>(
      decoder.decode<boolean>()
    ).toBe(true, "Should decode the bool to true")

    var encoder = new Encoder();
    encoder.write<boolean>(true);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the bool to the same Uint8Array")

    dataArray = parseHexString("4449444c00017e00")
    decoder = new Decoder(dataArray);
    expect<boolean>(
      decoder.decode<boolean>()
    ).toBe(false, "Should decode the bool to false")

    encoder = new Encoder();
    encoder.write<boolean>(false);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the bool to the same Uint8Array")
  });

  //u8
  it("Should decode and encode a u8", () => {
    //didc encode '(255)' -t '(nat8)'
    var dataArray = parseHexString("4449444c00017bff")
    var decoder = new Decoder(dataArray);
    expect<u8>(
      decoder.decode<u8>()
    ).toBe(255, "Should decode the u8 to 255")

    var encoder = new Encoder();
    encoder.write<u8>(255);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the u8 to the same Uint8Array")
  });

  //u32
  it("Should decode and encode a u32", () => {
    //didc encode '(4294967295)' -t '(nat32)'
    var dataArray = parseHexString("4449444c000179ffffffff")
    var decoder = new Decoder(dataArray);
    expect<u32>(
      decoder.decode<u32>()
    ).toBe(4294967295, "Should decode the u32 to 4294967295")

    var encoder = new Encoder();
    encoder.write<u32>(4294967295);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the u32 to the same Uint8Array")
  });

  //u64
  it("Should decode and encode a u64", () => {
    //didc encode '(18446744073709551615)' -t '(nat64)'
    var dataArray = parseHexString("4449444c000178ffffffffffffffff")
    var decoder = new Decoder(dataArray);
    expect<u64>(
      decoder.decode<u64>()
    ).toBe(18446744073709551615, "Should decode the u64 to 4294967295")

    var encoder = new Encoder();
    encoder.write<u64>(18446744073709551615);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the u64 to the same Uint8Array")
  });

  //i8
  it("Should decode and encode a i8", () => {
    //didc encode '(127)' -t '(int8)'
    var dataArray = parseHexString("4449444c0001777f")
    var decoder = new Decoder(dataArray);
    expect<i8>(
      decoder.decode<i8>()
    ).toBe(127, "Should decode the i8 to 127")

    var encoder = new Encoder();
    encoder.write<i8>(127);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the i8 to the same Uint8Array")
  });

  //i32
  it("Should decode and encode a i32", () => {
    //didc encode '(2147483647)' -t '(int32)'
    var dataArray = parseHexString("4449444c000175ffffff7f")
    var decoder = new Decoder(dataArray);
    expect<i32>(
      decoder.decode<i32>()
    ).toBe(2147483647, "Should decode the i32 to 2147483647")

    var encoder = new Encoder();
    encoder.write<i32>(2147483647);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the i32 to the same Uint8Array")
  });

  //i64
  it("Should decode and encode a i64", () => {
    //didc encode '(9223372036854775807)' -t '(int64)'
    var dataArray = parseHexString("4449444c000174ffffffffffffff7f")
    var decoder = new Decoder(dataArray);
    expect<i64>(
      decoder.decode<i64>()
    ).toBe(9223372036854775807, "Should decode the i64 to 9223372036854775807")

    var encoder = new Encoder();
    encoder.write<i64>(9223372036854775807);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the i64 to the same Uint8Array")
  });

  //float32
  it("Should decode and encode a f32", () => {
    //didc encode '(12312.32423532)' -t '(float32)'
    var dataArray = parseHexString("4449444c0001734c614046")
    var decoder = new Decoder(dataArray);
    expect<f32>(
      decoder.decode<f32>()
    ).toBe(12312.32423532, "Should decode the f32 to 12312.32423532")

    var encoder = new Encoder();
    encoder.write<f32>(12312.32423532);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the f32 to the same Uint8Array")
  });

  //float64
  it("Should decode and encode a f64", () => {
    //didc encode '(1231212.32421323532)' -t '(float64)'
    var dataArray = parseHexString("4449444c0001727ba3ff526cc93241")
    var decoder = new Decoder(dataArray);
    expect<f64>(
      decoder.decode<f64>()
    ).toBe(1231212.32421323532, "Should decode the f64 to 12312.32423532")

    var encoder = new Encoder();
    encoder.write<f64>(1231212.32421323532);
    expect<Uint8Array>(
      encoder.build()
    ).toStrictEqual(dataArray, "Should encode the f64 to the same Uint8Array")
  });
});




