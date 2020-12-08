import * as LEB128 from '../../utils/LEB128';
import { PipeBuffer } from '../../utils/pipeBuffer';

describe("LEB128", () =>{
  it("should be 17", () => {
    expect<i64>(
      LEB128.DecodeLEB128Signed(LEB128.EncodeLEB128Signed(17))
      ).toBe(17,"17 Encoded should return 17 Decoded")
  });

  it("should be -17", () => {
    expect<i64>(
      LEB128.DecodeLEB128Signed(LEB128.EncodeLEB128Signed(-17))
      ).toBe(-17,"-17 Encoded should return 17 Decoded")
  });

  it("should be MAX i64 9223372036854775807", () => {
    expect<i64>(
      LEB128.DecodeLEB128Signed(LEB128.EncodeLEB128Signed(i64.MAX_VALUE))
      ).toBe(i64.MAX_VALUE,"i64 MAX_VALUE Encoded should return i64 MAX_VALUE Decoded")
  });
});



