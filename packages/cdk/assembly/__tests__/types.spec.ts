import {IDL} from '../candid/idl/types';


describe("CDK-AS Basic Type functionality", () => {

    it("getType String should return the right Text IDL type.", () => {
      
        expect<IDL.Type>(
           IDL.getType<string>()
        ).toStrictEqual(new IDL.TextClass(), "Should verify a basic Text type")
      });

      it("getType<Array<string>>() should return a  Vec(TextClass()).", () => {
        var vec = IDL.Vec(IDL.getType<string>())
        expect<IDL.Type>(
          IDL.getType<Array<string>>()
        ).toStrictEqual(vec, "Should verify a basic Vec(TextClass())")
      });

      it("getType<Array<Array<string>>>() should return a  Vec(Vec(TextClass())).", () => {
        var vec = IDL.Vec(IDL.Vec(IDL.getType<string>()));
        expect<IDL.Type>(
          IDL.getType<Array<Array<string>>>()
        ).toStrictEqual(vec, "Should verify a basic Vec(TextClass())")
      });

      it("getType<Array<Array<string>>>() should return a  Vec(Vec(TextClass())).", () => {
        var vec = IDL.Vec(IDL.Vec(IDL.getType<string>()));
        expect<IDL.Type>(
          IDL.getType<Array<Array<string>>>()
        ).toStrictEqual(vec, "Should verify a basic Vec(TextClass())")
      });
});




