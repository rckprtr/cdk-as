import * as IDL from '../candid/idl/types';


describe("CDK-AS Records encode and decoding", () => {

    it("Should create a basic did", () => {
        var record = new IDL.RecordClass()
		.add("str1", IDL.getType<string>())
        .add("str2", IDL.getType<string>())
        .add("int1", IDL.getType<i32>())
        .add("int2", IDL.getType<i64>())
        .add("float1", IDL.getType<f64>())
        .add("float2", IDL.getType<f32>())
        .add("bool", IDL.getType<boolean>())

        expect<string>(
            record.name
        ).toStrictEqual("record {str1:text; str2:text; int1:int32; int2:int64; float1:float64; float2:float32; bool:bool;}", "Should verify a basic did")
    
      });

      it("Should create a basic record with a relationship", () => {

        var bar = new IDL.RecordClass()
		.add("bar_str_1", IDL.getType<string>())
        .add("bar_str_2", IDL.getType<string>())

        var foo = new IDL.RecordClass()
		.add("foo_str_1", IDL.getType<string>())
        .add("foo_str_2", IDL.getType<string>())
        .add("bar", bar)

        expect<string>(
            foo.name
        ).toStrictEqual("record {foo_str_1:text; foo_str_2:text; bar:record {bar_str_1:text; bar_str_2:text;};}", "Verify the basic did a relationship")
    
      });

      it("Should create a record and verify its type table with a vec", () => {

        var bar = new IDL.RecordClass()
		.add("bar_str_1", IDL.getType<string>())
        .add("bar_str_2", IDL.getType<string>())

        var foo = new IDL.RecordClass()
		.add("foo_str_1", IDL.getType<string>())
        .add("foo_str_2", IDL.getType<string>())
        .add("bar", IDL.Vec(bar));

        var tt = new IDL.TypeTable();
        foo.buildTypeTable(tt);

        expect<string>(
            tt.encode().toString()
        ).toStrictEqual("036c02b7c6d7880771b8c6d78807716d006c03aac1f5860671abc1f5860671d3e3aa0201", "Verify the basic did with a vector of types")
    
      });

});




