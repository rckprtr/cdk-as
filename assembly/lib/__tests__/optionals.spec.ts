import * as IDL from '../candid/idl/types';

describe("DFINITY Optional encode and decoding", () => {


  it("Should create a optional string IDL Type", () => {

    var foo = IDL.getType<string | null>();
    var tt = new IDL.TypeTable();
    //TODO: Why do I have to explicity cast this?
    (foo as IDL.OptClass).buildTypeTable(tt);

    expect<string>(
      tt.encode().toString()
    ).toStrictEqual("016e71", "Should create an encoded typeTable with an optional string")

  });

});




