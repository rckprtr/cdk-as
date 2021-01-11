(module
 (type $i32_i32_=>_none (func (param i32 i32)))
 (type $i32_=>_i32 (func (param i32) (result i32)))
 (type $none_=>_none (func))
 (type $i32_i32_=>_i32 (func (param i32 i32) (result i32)))
 (type $i32_=>_none (func (param i32)))
 (type $i32_i32_i32_=>_i32 (func (param i32 i32 i32) (result i32)))
 (type $i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $i32_i32_i32_=>_none (func (param i32 i32 i32)))
 (type $i32_i32_i32_i32_=>_none (func (param i32 i32 i32 i32)))
 (type $i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32) (result i32)))
 (type $none_=>_i32 (func (result i32)))
 (type $i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_i32_=>_i32 (func (param i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) (result i32)))
 (type $i32_i64_=>_i32 (func (param i32 i64) (result i32)))
 (import "env" "memory" (memory $0 1))
 (data (i32.const 1036) "(\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00(\00\00\00a\00l\00l\00o\00c\00a\00t\00i\00o\00n\00 \00t\00o\00o\00 \00l\00a\00r\00g\00e\00")
 (data (i32.const 1100) "\1e\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00p\00u\00r\00e\00.\00t\00s\00")
 (data (i32.const 1164) "\1e\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00t\00l\00s\00f\00.\00t\00s\00")
 (data (i32.const 1228) "\08\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00D\00I\00D\00L\00")
 (data (i32.const 1260) "\04\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\04\00\00\00DIDL")
 (data (i32.const 1292) "\10\00\00\00\01\00\00\00\00\00\00\00\03\00\00\00\10\00\00\00\00\05\00\00\00\05\00\00\04\00\00\00\04\00\00\00")
 (data (i32.const 1340) ">\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00>\00\00\00C\00D\00K\00-\00A\00S\00 \00B\00a\00s\00i\00c\00 \00T\00y\00p\00e\00 \00f\00u\00n\00c\00t\00i\00o\00n\00a\00l\00i\00t\00y\00")
 (data (i32.const 1436) "j\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00j\00\00\00g\00e\00t\00T\00y\00p\00e\00 \00S\00t\00r\00i\00n\00g\00 \00s\00h\00o\00u\00l\00d\00 \00r\00e\00t\00u\00r\00n\00 \00t\00h\00e\00 \00r\00i\00g\00h\00t\00 \00T\00e\00x\00t\00 \00I\00D\00L\00 \00t\00y\00p\00e\00.\00")
 (data (i32.const 1564) ">\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00>\00\00\00S\00h\00o\00u\00l\00d\00 \00v\00e\00r\00i\00f\00y\00 \00a\00 \00b\00a\00s\00i\00c\00 \00T\00e\00x\00t\00 \00t\00y\00p\00e\00")
 (data (i32.const 1660) "4\00\00\00\01\00\00\00\00\00\00\00\01\00\00\004\00\00\00c\00a\00c\00h\00e\00L\00e\00n\00g\00t\00h\00 \00s\00h\00o\00u\00l\00d\00 \00b\00e\00 \00e\00v\00e\00n\00")
 (data (i32.const 1740) "t\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00t\00\00\00n\00o\00d\00e\00_\00m\00o\00d\00u\00l\00e\00s\00/\00@\00a\00s\00-\00p\00e\00c\00t\00/\00a\00s\00s\00e\00m\00b\00l\00y\00/\00a\00s\00s\00e\00m\00b\00l\00y\00/\00i\00n\00t\00e\00r\00n\00a\00l\00/\00a\00s\00s\00e\00r\00t\00.\00t\00s\00")
 (data (i32.const 1884) "\1c\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data (i32.const 1932) "\1a\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (data (i32.const 1980) "\00\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\00\00\00\00")
 (data (i32.const 2012) "\00\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\00\00\00\00")
 (data (i32.const 2044) "\1c\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\1c\00\00\00A\00r\00r\00a\00y\00 \00i\00s\00 \00e\00m\00p\00t\00y\00")
 (data (i32.const 2092) "\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2124) "\00\00\00\00\01\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00")
 (data (i32.const 2156) "\08\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00T\00y\00p\00e\00")
 (data (i32.const 2188) "$\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t\00")
 (data (i32.const 2252) "\16\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s\00")
 (data (i32.const 2300) "&\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00")
 (data (i32.const 2364) "\00\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\00\00\00\00")
 (data (i32.const 2396) "\08\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00n\00a\00m\00e\00")
 (data (i32.const 2428) "\0c\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\0c\00\00\00S\00t\00r\00i\00n\00g\00")
 (data (i32.const 2460) "\08\00\00\00\01\00\00\00\00\00\00\00\0f\00\00\00\08\00\00\00\01\00\00\00\00\00\00\00")
 (data (i32.const 2492) "v\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00v\00\00\00g\00e\00t\00T\00y\00p\00e\00<\00A\00r\00r\00a\00y\00<\00s\00t\00r\00i\00n\00g\00>\00>\00(\00)\00 \00s\00h\00o\00u\00l\00d\00 \00r\00e\00t\00u\00r\00n\00 \00a\00 \00 \00V\00e\00c\00(\00T\00e\00x\00t\00C\00l\00a\00s\00s\00(\00)\00)\00.\00")
 (data (i32.const 2636) "L\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00L\00\00\00S\00h\00o\00u\00l\00d\00 \00v\00e\00r\00i\00f\00y\00 \00a\00 \00b\00a\00s\00i\00c\00 \00V\00e\00c\00(\00T\00e\00x\00t\00C\00l\00a\00s\00s\00(\00)\00)\00")
 (data (i32.const 2732) "\08\00\00\00\01\00\00\00\00\00\00\00\0f\00\00\00\08\00\00\00\02\00\00\00\00\00\00\00")
 (data (i32.const 2764) "\8e\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\8e\00\00\00g\00e\00t\00T\00y\00p\00e\00<\00A\00r\00r\00a\00y\00<\00A\00r\00r\00a\00y\00<\00s\00t\00r\00i\00n\00g\00>\00>\00>\00(\00)\00 \00s\00h\00o\00u\00l\00d\00 \00r\00e\00t\00u\00r\00n\00 \00a\00 \00 \00V\00e\00c\00(\00V\00e\00c\00(\00T\00e\00x\00t\00C\00l\00a\00s\00s\00(\00)\00)\00)\00.\00")
 (data (i32.const 2940) "\08\00\00\00\01\00\00\00\00\00\00\00\0f\00\00\00\08\00\00\00\03\00\00\00\00\00\00\00")
 (data (i32.const 2972) "\08\00\00\00\01\00\00\00\00\00\00\00\0f\00\00\00\08\00\00\00\04\00\00\00\00\00\00\00")
 (data (i32.const 3004) "\08\00\00\00\01\00\00\00\00\00\00\00\0f\00\00\00\08\00\00\00\05\00\00\00\00\00\00\00")
 (data (i32.const 3036) "\08\00\00\00\01\00\00\00\00\00\00\00\0f\00\00\00\08\00\00\00\06\00\00\00\00\00\00\00")
 (data (i32.const 3068) "\08\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00v\00e\00c\00 \00")
 (data (i32.const 3100) "\08\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00n\00u\00l\00l\00")
 (data (i32.const 3132) "\08\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00t\00e\00x\00t\00")
 (data (i32.const 3164) "\00\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\00\00\00\00")
 (data (i32.const 3196) "&\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00s\00t\00a\00t\00i\00c\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (data (i32.const 3260) "\00\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\00\00\00\00")
 (data (i32.const 3292) "\10\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\10\00\00\00\00\00\c0A\af\'\dfA\00\00\80\11\c3&\dfA")
 (data (i32.const 3340) "\08\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\08\00\00\00\00\00\80\11\c3&\dfA")
 (data (i32.const 3372) "\00\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\00\00\00\00")
 (data (i32.const 3404) "\00\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\00\00\00\00")
 (data (i32.const 3436) "\10\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\10\00\00\00\00\00\c0A\af\'\dfA\00\00\80\11\c3&\dfA")
 (data (i32.const 3484) "\08\00\00\00\01\00\00\00\00\00\00\00\01\00\00\00\08\00\00\00t\00y\00p\00e\00")
 (data (i32.const 3516) "\08\00\00\00\01\00\00\00\00\00\00\00\0c\00\00\00\08\00\00\00\00\00\80\11\c3&\dfA")
 (data (i32.const 3552) "\14\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00b\00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\000A\02\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\n\00\00\00 \00\00\00\07\00\00\00\"\01\00\00\00\00\00\00$\n\00\00\00\00\00\00\"\t\00\00\00\00\00\000\t\02\00\00\00\00\00 \00\00\00\00\00\00\00 \00\00\00\11\00\00\00 \00\00\00\07\00\00\00\"A\00\00\00\00\00\00\"A\00\00\00\00\00\00")
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "__aspect" "createReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue (param i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) (result i32)))
 (import "__aspect" "pushReflectedObjectKey" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectKey (param i32 i32)))
 (import "__aspect" "pushReflectedObjectValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectValue (param i32 i32)))
 (import "__aspect" "attachStackTraceToReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue (param i32)))
 (import "__aspect" "reportActualReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Actual/reportActualReflectedValue (param i32)))
 (import "__aspect" "reportExpectedReflectedValue" (func $node_modules/@as-pect/assembly/assembly/internal/Expected/reportExpectedReflectedValue (param i32 i32)))
 (import "__aspect" "clearActual" (func $node_modules/@as-pect/assembly/assembly/internal/Actual/clearActual))
 (import "__aspect" "clearExpected" (func $node_modules/@as-pect/assembly/assembly/internal/Expected/clearExpected))
 (import "__aspect" "reportTestTypeNode" (func $node_modules/@as-pect/assembly/assembly/internal/Test/it (param i32 i32)))
 (import "__aspect" "reportGroupTypeNode" (func $node_modules/@as-pect/assembly/assembly/internal/Test/describe (param i32 i32)))
 (table $0 7 funcref)
 (elem (i32.const 1) $start:assembly/lib/__tests__/types.spec~anonymous|0~anonymous|0 $start:assembly/lib/__tests__/types.spec~anonymous|0~anonymous|1 $start:assembly/lib/__tests__/types.spec~anonymous|0~anonymous|2 $start:assembly/lib/__tests__/types.spec~anonymous|0~anonymous|2 $start:assembly/lib/__tests__/types.spec~anonymous|0 $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0)
 (global $~lib/rt/tlsf/ROOT (mut i32) (i32.const 0))
 (global $~argumentsLength (mut i32) (i32.const 0))
 (global $~started (mut i32) (i32.const 0))
 (global $~lib/rt/__rtti_base i32 (i32.const 3552))
 (export "_start" (func $~start))
 (export "memory" (memory $0))
 (export "table" (table $0))
 (export "__new" (func $~lib/rt/pure/__new))
 (export "__renew" (func $~lib/rt/pure/__renew))
 (export "__retain" (func $~lib/rt/pure/__retain))
 (export "__release" (func $~lib/rt/pure/__release))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "__call" (func $node_modules/@as-pect/assembly/assembly/internal/call/__call))
 (export "__ignoreLogs" (func $node_modules/@as-pect/assembly/assembly/internal/log/__ignoreLogs))
 (export "__disableRTrace" (func $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0))
 (export "__getUsizeArrayId" (func $node_modules/@as-pect/assembly/assembly/internal/RTrace/__getUsizeArrayId))
 (func $~lib/rt/tlsf/removeBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 272
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const -4
  i32.and
  local.tee $2
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 274
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 256
  i32.lt_u
  if
   local.get $2
   i32.const 4
   i32.shr_u
   local.set $2
  else
   local.get $2
   i32.const 31
   local.get $2
   i32.clz
   i32.sub
   local.tee $3
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $2
   local.get $3
   i32.const 7
   i32.sub
   local.set $3
  end
  local.get $2
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 287
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load offset=8
  local.set $4
  local.get $1
  i32.load offset=4
  local.tee $5
  if
   local.get $5
   local.get $4
   i32.store offset=8
  end
  local.get $4
  if
   local.get $4
   local.get $5
   i32.store offset=4
  end
  local.get $1
  local.get $0
  local.get $2
  local.get $3
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  i32.eq
  if
   local.get $0
   local.get $2
   local.get $3
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   local.get $4
   i32.store offset=96
   local.get $4
   i32.eqz
   if
    local.get $0
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    local.tee $4
    i32.load offset=4
    i32.const -2
    local.get $2
    i32.rotl
    i32.and
    local.set $1
    local.get $4
    local.get $1
    i32.store offset=4
    local.get $1
    i32.eqz
    if
     local.get $0
     local.get $0
     i32.load
     i32.const -2
     local.get $3
     i32.rotl
     i32.and
     i32.store
    end
   end
  end
 )
 (func $~lib/rt/tlsf/insertBlock (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 200
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.load
  local.tee $4
  i32.const 1
  i32.and
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 202
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.add
  local.tee $5
  i32.load
  local.tee $2
  i32.const 1
  i32.and
  if
   local.get $4
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $2
   i32.const -4
   i32.and
   i32.add
   local.tee $3
   i32.const 1073741820
   i32.lt_u
   if
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/removeBlock
    local.get $1
    local.get $3
    local.get $4
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $1
    i32.const 4
    i32.add
    local.get $1
    i32.load
    i32.const -4
    i32.and
    i32.add
    local.tee $5
    i32.load
    local.set $2
   end
  end
  local.get $4
  i32.const 2
  i32.and
  if
   local.get $1
   i32.const 4
   i32.sub
   i32.load
   local.tee $3
   i32.load
   local.tee $7
   i32.const 1
   i32.and
   i32.eqz
   if
    i32.const 0
    i32.const 1184
    i32.const 223
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $7
   i32.const -4
   i32.and
   i32.const 4
   i32.add
   local.get $4
   i32.const -4
   i32.and
   i32.add
   local.tee $8
   i32.const 1073741820
   i32.lt_u
   if (result i32)
    local.get $0
    local.get $3
    call $~lib/rt/tlsf/removeBlock
    local.get $3
    local.get $8
    local.get $7
    i32.const 3
    i32.and
    i32.or
    local.tee $4
    i32.store
    local.get $3
   else
    local.get $1
   end
   local.set $1
  end
  local.get $5
  local.get $2
  i32.const 2
  i32.or
  i32.store
  local.get $4
  i32.const -4
  i32.and
  local.tee $3
  i32.const 1073741820
  i32.lt_u
  i32.const 0
  local.get $3
  i32.const 12
  i32.ge_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 238
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.get $5
  i32.ne
  if
   i32.const 0
   i32.const 1184
   i32.const 239
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $5
  i32.const 4
  i32.sub
  local.get $1
  i32.store
  local.get $3
  i32.const 256
  i32.lt_u
  if
   local.get $3
   i32.const 4
   i32.shr_u
   local.set $3
  else
   local.get $3
   i32.const 31
   local.get $3
   i32.clz
   i32.sub
   local.tee $4
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $3
   local.get $4
   i32.const 7
   i32.sub
   local.set $6
  end
  local.get $3
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $6
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 255
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=96
  local.set $4
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  local.get $4
  i32.store offset=8
  local.get $4
  if
   local.get $4
   local.get $1
   i32.store offset=4
  end
  local.get $0
  local.get $3
  local.get $6
  i32.const 4
  i32.shl
  i32.add
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store offset=96
  local.get $0
  local.get $0
  i32.load
  i32.const 1
  local.get $6
  i32.shl
  i32.or
  i32.store
  local.get $0
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  local.tee $0
  local.get $0
  i32.load offset=4
  i32.const 1
  local.get $3
  i32.shl
  i32.or
  i32.store offset=4
 )
 (func $~lib/rt/tlsf/addMemory (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  local.get $2
  i32.gt_u
  if
   i32.const 0
   i32.const 1184
   i32.const 380
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.set $1
  local.get $2
  i32.const -16
  i32.and
  local.get $0
  i32.load offset=1568
  local.tee $2
  if
   local.get $1
   local.get $2
   i32.const 4
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1184
    i32.const 387
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $2
   local.get $1
   i32.const 16
   i32.sub
   i32.eq
   if
    local.get $2
    i32.load
    local.set $4
    local.get $1
    i32.const 16
    i32.sub
    local.set $1
   end
  else
   local.get $1
   local.get $0
   i32.const 1572
   i32.add
   i32.lt_u
   if
    i32.const 0
    i32.const 1184
    i32.const 400
    i32.const 5
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $1
  i32.sub
  local.tee $2
  i32.const 20
  i32.lt_u
  if
   return
  end
  local.get $1
  local.get $4
  i32.const 2
  i32.and
  local.get $2
  i32.const 8
  i32.sub
  local.tee $2
  i32.const 1
  i32.or
  i32.or
  i32.store
  local.get $1
  i32.const 0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.const 4
  i32.add
  i32.add
  local.tee $2
  i32.const 2
  i32.store
  local.get $0
  local.get $2
  i32.store offset=1568
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/initialize
  (local $0 i32)
  (local $1 i32)
  memory.size
  local.tee $0
  i32.const 1
  i32.lt_s
  if (result i32)
   i32.const 1
   local.get $0
   i32.sub
   memory.grow
   i32.const 0
   i32.lt_s
  else
   i32.const 0
  end
  if
   unreachable
  end
  i32.const 3728
  i32.const 0
  i32.store
  i32.const 5296
  i32.const 0
  i32.store
  loop $for-loop|0
   local.get $1
   i32.const 23
   i32.lt_u
   if
    local.get $1
    i32.const 2
    i32.shl
    i32.const 3728
    i32.add
    i32.const 0
    i32.store offset=4
    i32.const 0
    local.set $0
    loop $for-loop|1
     local.get $0
     i32.const 16
     i32.lt_u
     if
      local.get $0
      local.get $1
      i32.const 4
      i32.shl
      i32.add
      i32.const 2
      i32.shl
      i32.const 3728
      i32.add
      i32.const 0
      i32.store offset=96
      local.get $0
      i32.const 1
      i32.add
      local.set $0
      br $for-loop|1
     end
    end
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
  i32.const 3728
  i32.const 5300
  memory.size
  i32.const 16
  i32.shl
  call $~lib/rt/tlsf/addMemory
  i32.const 3728
  global.set $~lib/rt/tlsf/ROOT
 )
 (func $~lib/rt/tlsf/prepareSize (param $0 i32) (result i32)
  local.get $0
  i32.const 1073741820
  i32.ge_u
  if
   i32.const 1056
   i32.const 1184
   i32.const 461
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 12
  local.get $0
  i32.const 19
  i32.add
  i32.const -16
  i32.and
  i32.const 4
  i32.sub
  local.get $0
  i32.const 12
  i32.le_u
  select
 )
 (func $~lib/rt/tlsf/searchBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 256
  i32.lt_u
  if
   local.get $1
   i32.const 4
   i32.shr_u
   local.set $1
  else
   i32.const 31
   local.get $1
   i32.const 1
   i32.const 27
   local.get $1
   i32.clz
   i32.sub
   i32.shl
   i32.add
   i32.const 1
   i32.sub
   local.get $1
   local.get $1
   i32.const 536870910
   i32.lt_u
   select
   local.tee $1
   i32.clz
   i32.sub
   local.set $2
   local.get $1
   local.get $2
   i32.const 4
   i32.sub
   i32.shr_u
   i32.const 16
   i32.xor
   local.set $1
   local.get $2
   i32.const 7
   i32.sub
   local.set $2
  end
  local.get $1
  i32.const 16
  i32.lt_u
  i32.const 0
  local.get $2
  i32.const 23
  i32.lt_u
  select
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 333
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load offset=4
  i32.const -1
  local.get $1
  i32.shl
  i32.and
  local.tee $1
  if (result i32)
   local.get $0
   local.get $1
   i32.ctz
   local.get $2
   i32.const 4
   i32.shl
   i32.add
   i32.const 2
   i32.shl
   i32.add
   i32.load offset=96
  else
   local.get $0
   i32.load
   i32.const -1
   local.get $2
   i32.const 1
   i32.add
   i32.shl
   i32.and
   local.tee $1
   if (result i32)
    local.get $0
    local.get $1
    i32.ctz
    local.tee $1
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=4
    local.tee $2
    i32.eqz
    if
     i32.const 0
     i32.const 1184
     i32.const 346
     i32.const 18
     call $~lib/builtins/abort
     unreachable
    end
    local.get $0
    local.get $2
    i32.ctz
    local.get $1
    i32.const 4
    i32.shl
    i32.add
    i32.const 2
    i32.shl
    i32.add
    i32.load offset=96
   else
    i32.const 0
   end
  end
 )
 (func $~lib/rt/tlsf/prepareBlock (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  i32.load
  local.set $3
  local.get $2
  i32.const 4
  i32.add
  i32.const 15
  i32.and
  if
   i32.const 0
   i32.const 1184
   i32.const 360
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.const -4
  i32.and
  local.get $2
  i32.sub
  local.tee $4
  i32.const 16
  i32.ge_u
  if
   local.get $1
   local.get $2
   local.get $3
   i32.const 2
   i32.and
   i32.or
   i32.store
   local.get $2
   local.get $1
   i32.const 4
   i32.add
   i32.add
   local.tee $1
   local.get $4
   i32.const 4
   i32.sub
   i32.const 1
   i32.or
   i32.store
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/insertBlock
  else
   local.get $1
   local.get $3
   i32.const -2
   i32.and
   i32.store
   local.get $1
   i32.const 4
   i32.add
   local.tee $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   local.get $0
   local.get $1
   i32.load
   i32.const -4
   i32.and
   i32.add
   i32.load
   i32.const -3
   i32.and
   i32.store
  end
 )
 (func $~lib/rt/tlsf/allocateBlock (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/prepareSize
  local.tee $2
  call $~lib/rt/tlsf/searchBlock
  local.tee $1
  i32.eqz
  if
   i32.const 4
   memory.size
   local.tee $1
   i32.const 16
   i32.shl
   i32.const 4
   i32.sub
   local.get $0
   i32.load offset=1568
   i32.ne
   i32.shl
   local.get $2
   i32.const 1
   i32.const 27
   local.get $2
   i32.clz
   i32.sub
   i32.shl
   i32.const 1
   i32.sub
   i32.add
   local.get $2
   local.get $2
   i32.const 536870910
   i32.lt_u
   select
   i32.add
   i32.const 65535
   i32.add
   i32.const -65536
   i32.and
   i32.const 16
   i32.shr_u
   local.set $3
   local.get $1
   local.get $3
   local.get $1
   local.get $3
   i32.gt_s
   select
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
   local.get $0
   local.get $1
   i32.const 16
   i32.shl
   memory.size
   i32.const 16
   i32.shl
   call $~lib/rt/tlsf/addMemory
   local.get $0
   local.get $2
   call $~lib/rt/tlsf/searchBlock
   local.tee $1
   i32.eqz
   if
    i32.const 0
    i32.const 1184
    i32.const 498
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $2
  local.get $1
  i32.load
  i32.const -4
  i32.and
  i32.gt_u
  if
   i32.const 0
   i32.const 1184
   i32.const 500
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/removeBlock
  local.get $0
  local.get $1
  local.get $2
  call $~lib/rt/tlsf/prepareBlock
  local.get $1
 )
 (func $~lib/rt/pure/__new (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 1073741804
  i32.gt_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 275
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.add
  local.set $2
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  global.get $~lib/rt/tlsf/ROOT
  local.get $2
  call $~lib/rt/tlsf/allocateBlock
  i32.const 4
  i32.add
  local.tee $3
  i32.const 4
  i32.sub
  local.tee $2
  i32.const 0
  i32.store offset=4
  local.get $2
  i32.const 0
  i32.store offset=8
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $2
  local.get $0
  i32.store offset=16
  local.get $3
  i32.const 16
  i32.add
 )
 (func $~lib/rt/tlsf/checkUsedBlock (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 4
  i32.sub
  local.set $1
  local.get $0
  i32.const 15
  i32.and
  i32.eqz
  i32.const 0
  local.get $0
  select
  if (result i32)
   local.get $1
   i32.load
   i32.const 1
   i32.and
   i32.eqz
  else
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 1184
   i32.const 563
   i32.const 3
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
 )
 (func $~lib/memory/memory.copy (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $2
   local.set $4
   local.get $0
   local.get $1
   i32.eq
   br_if $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.get $1
   i32.lt_u
   if
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|0
      local.get $0
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.set $4
       local.get $0
       local.tee $2
       i32.const 1
       i32.add
       local.set $0
       local.get $1
       local.tee $3
       i32.const 1
       i32.add
       local.set $1
       local.get $2
       local.get $3
       i32.load8_u
       i32.store8
       br $while-continue|0
      end
     end
     loop $while-continue|1
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $0
       local.get $1
       i64.load
       i64.store
       local.get $4
       i32.const 8
       i32.sub
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.set $0
       local.get $1
       i32.const 8
       i32.add
       local.set $1
       br $while-continue|1
      end
     end
    end
    loop $while-continue|2
     local.get $4
     if
      local.get $0
      local.tee $2
      i32.const 1
      i32.add
      local.set $0
      local.get $1
      local.tee $3
      i32.const 1
      i32.add
      local.set $1
      local.get $2
      local.get $3
      i32.load8_u
      i32.store8
      local.get $4
      i32.const 1
      i32.sub
      local.set $4
      br $while-continue|2
     end
    end
   else
    local.get $1
    i32.const 7
    i32.and
    local.get $0
    i32.const 7
    i32.and
    i32.eq
    if
     loop $while-continue|3
      local.get $0
      local.get $4
      i32.add
      i32.const 7
      i32.and
      if
       local.get $4
       i32.eqz
       br_if $~lib/util/memory/memmove|inlined.0
       local.get $4
       i32.const 1
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i32.load8_u
       i32.store8
       br $while-continue|3
      end
     end
     loop $while-continue|4
      local.get $4
      i32.const 8
      i32.ge_u
      if
       local.get $4
       i32.const 8
       i32.sub
       local.tee $4
       local.get $0
       i32.add
       local.get $1
       local.get $4
       i32.add
       i64.load
       i64.store
       br $while-continue|4
      end
     end
    end
    loop $while-continue|5
     local.get $4
     if
      local.get $4
      i32.const 1
      i32.sub
      local.tee $4
      local.get $0
      i32.add
      local.get $1
      local.get $4
      i32.add
      i32.load8_u
      i32.store8
      br $while-continue|5
     end
    end
   end
  end
 )
 (func $~lib/rt/tlsf/freeBlock (param $0 i32) (param $1 i32)
  local.get $1
  local.get $1
  i32.load
  i32.const 1
  i32.or
  i32.store
  local.get $0
  local.get $1
  call $~lib/rt/tlsf/insertBlock
 )
 (func $~lib/rt/tlsf/moveBlock (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  local.get $2
  call $~lib/rt/tlsf/allocateBlock
  local.tee $2
  i32.const 4
  i32.add
  local.get $1
  i32.const 4
  i32.add
  local.get $1
  i32.load
  i32.const -4
  i32.and
  call $~lib/memory/memory.copy
  local.get $1
  i32.const 3716
  i32.ge_u
  if
   local.get $0
   local.get $1
   call $~lib/rt/tlsf/freeBlock
  end
  local.get $2
 )
 (func $~lib/rt/pure/__renew (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.const 1073741804
  i32.gt_u
  if
   i32.const 1056
   i32.const 1120
   i32.const 288
   i32.const 30
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.sub
  local.set $0
  global.get $~lib/rt/tlsf/ROOT
  i32.eqz
  if
   call $~lib/rt/tlsf/initialize
  end
  local.get $1
  i32.const 16
  i32.add
  local.set $2
  local.get $0
  i32.const 3716
  i32.lt_u
  if
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/checkUsedBlock
   local.get $2
   call $~lib/rt/tlsf/moveBlock
   local.set $0
  else
   block $__inlined_func$~lib/rt/tlsf/reallocateBlock
    global.get $~lib/rt/tlsf/ROOT
    local.set $3
    local.get $0
    call $~lib/rt/tlsf/checkUsedBlock
    local.set $0
    block $folding-inner0
     local.get $2
     call $~lib/rt/tlsf/prepareSize
     local.tee $5
     local.get $0
     i32.load
     local.tee $6
     i32.const -4
     i32.and
     local.tee $4
     i32.le_u
     br_if $folding-inner0
     local.get $0
     i32.const 4
     i32.add
     local.get $0
     i32.load
     i32.const -4
     i32.and
     i32.add
     local.tee $7
     i32.load
     local.tee $8
     i32.const 1
     i32.and
     if
      local.get $5
      local.get $4
      i32.const 4
      i32.add
      local.get $8
      i32.const -4
      i32.and
      i32.add
      local.tee $4
      i32.le_u
      if
       local.get $3
       local.get $7
       call $~lib/rt/tlsf/removeBlock
       local.get $0
       local.get $4
       local.get $6
       i32.const 3
       i32.and
       i32.or
       i32.store
       br $folding-inner0
      end
     end
     local.get $3
     local.get $0
     local.get $2
     call $~lib/rt/tlsf/moveBlock
     local.set $0
     br $__inlined_func$~lib/rt/tlsf/reallocateBlock
    end
    local.get $3
    local.get $0
    local.get $5
    call $~lib/rt/tlsf/prepareBlock
   end
  end
  local.get $0
  i32.const 4
  i32.add
  local.tee $0
  i32.const 4
  i32.sub
  local.get $1
  i32.store offset=16
  local.get $0
  i32.const 16
  i32.add
 )
 (func $~lib/rt/pure/__retain (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.const 3716
  i32.gt_u
  if
   local.get $0
   i32.const 20
   i32.sub
   local.tee $1
   i32.load offset=4
   local.tee $2
   i32.const -268435456
   i32.and
   local.get $2
   i32.const 1
   i32.add
   i32.const -268435456
   i32.and
   i32.ne
   if
    i32.const 0
    i32.const 1120
    i32.const 109
    i32.const 3
    call $~lib/builtins/abort
    unreachable
   end
   local.get $1
   local.get $2
   i32.const 1
   i32.add
   i32.store offset=4
   local.get $1
   i32.load
   i32.const 1
   i32.and
   if
    i32.const 0
    i32.const 1120
    i32.const 112
    i32.const 14
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
 )
 (func $~lib/rt/pure/__release (param $0 i32)
  local.get $0
  i32.const 3716
  i32.gt_u
  if
   local.get $0
   i32.const 20
   i32.sub
   call $~lib/rt/pure/decrement
  end
 )
 (func $assembly/lib/candid/idl/types/Type#constructor (param $0 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else
   i32.const 0
   i32.const 7
   call $~lib/rt/pure/__new
   call $~lib/rt/pure/__retain
  end
 )
 (func $assembly/lib/candid/idl/types/TextClass#constructor (result i32)
  (local $0 i32)
  i32.const 0
  i32.const 9
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $0
  if (result i32)
   local.get $0
  else
   i32.const 0
   i32.const 10
   call $~lib/rt/pure/__new
   call $~lib/rt/pure/__retain
  end
  call $assembly/lib/candid/idl/types/Type#constructor
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<assembly/lib/candid/idl/types/Type> (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $2
  i32.const 8
  i32.const 8
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $2
  call $~lib/rt/pure/__retain
  local.tee $3
  local.tee $1
  local.get $0
  i32.load offset=4
  local.tee $4
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $1
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $3
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $0
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/assert/assert (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  i32.eqz
  if
   local.get $1
   i32.const 1760
   i32.const 2
   i32.const 19
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $~lib/array/Array<usize>#__uget (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/pairSeen (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  local.get $0
  local.get $2
  i32.eq
  local.get $1
  local.get $3
  i32.eq
  i32.and
  local.get $0
  local.get $3
  i32.eq
  local.get $1
  local.get $2
  i32.eq
  i32.and
  i32.or
 )
 (func $~lib/memory/memory.fill (param $0 i32) (param $1 i32)
  (local $2 i32)
  block $~lib/util/memory/memset|inlined.0
   local.get $1
   i32.eqz
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8
   local.get $0
   local.get $1
   i32.add
   i32.const 4
   i32.sub
   local.tee $2
   i32.const 0
   i32.store8 offset=3
   local.get $1
   i32.const 2
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=1
   local.get $0
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=2
   local.get $2
   i32.const 0
   i32.store8 offset=1
   local.get $1
   i32.const 6
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store8 offset=3
   local.get $2
   i32.const 0
   i32.store8
   local.get $1
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   local.get $0
   i32.sub
   i32.const 3
   i32.and
   local.tee $2
   i32.add
   local.tee $0
   i32.const 0
   i32.store
   local.get $0
   local.get $1
   local.get $2
   i32.sub
   i32.const -4
   i32.and
   local.tee $2
   i32.add
   i32.const 28
   i32.sub
   local.tee $1
   i32.const 0
   i32.store offset=24
   local.get $2
   i32.const 8
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=4
   local.get $0
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $2
   i32.const 24
   i32.le_u
   br_if $~lib/util/memory/memset|inlined.0
   local.get $0
   i32.const 0
   i32.store offset=12
   local.get $0
   i32.const 0
   i32.store offset=16
   local.get $0
   i32.const 0
   i32.store offset=20
   local.get $0
   i32.const 0
   i32.store offset=24
   local.get $1
   i32.const 0
   i32.store
   local.get $1
   i32.const 0
   i32.store offset=4
   local.get $1
   i32.const 0
   i32.store offset=8
   local.get $1
   i32.const 0
   i32.store offset=12
   local.get $0
   local.get $0
   i32.const 4
   i32.and
   i32.const 24
   i32.add
   local.tee $1
   i32.add
   local.set $0
   local.get $2
   local.get $1
   i32.sub
   local.set $1
   loop $while-continue|0
    local.get $1
    i32.const 32
    i32.ge_u
    if
     local.get $0
     i64.const 0
     i64.store
     local.get $0
     i64.const 0
     i64.store offset=8
     local.get $0
     i64.const 0
     i64.store offset=16
     local.get $0
     i64.const 0
     i64.store offset=24
     local.get $1
     i32.const 32
     i32.sub
     local.set $1
     local.get $0
     i32.const 32
     i32.add
     local.set $0
     br $while-continue|0
    end
   end
  end
 )
 (func $~lib/array/Array<usize>#push (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  i32.load offset=12
  local.tee $6
  i32.const 1
  i32.add
  local.tee $3
  local.set $2
  local.get $3
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.const 2
  i32.shr_u
  i32.gt_u
  if
   local.get $2
   i32.const 268435455
   i32.gt_u
   if
    i32.const 1904
    i32.const 1952
    i32.const 14
    i32.const 48
    call $~lib/builtins/abort
    unreachable
   end
   local.get $4
   local.get $0
   i32.load
   local.tee $7
   local.get $2
   i32.const 2
   i32.shl
   local.tee $5
   call $~lib/rt/pure/__renew
   local.tee $2
   i32.add
   local.get $5
   local.get $4
   i32.sub
   call $~lib/memory/memory.fill
   local.get $2
   local.get $7
   i32.ne
   if
    local.get $0
    local.get $2
    i32.store
    local.get $0
    local.get $2
    i32.store offset=4
   end
   local.get $0
   local.get $5
   i32.store offset=8
  end
  local.get $0
  i32.load offset=4
  local.get $6
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
 )
 (func $~lib/rt/__newBuffer (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  local.get $1
  call $~lib/rt/pure/__new
  local.set $1
  local.get $2
  if
   local.get $1
   local.get $2
   local.get $0
   call $~lib/memory/memory.copy
  end
  local.get $1
 )
 (func $~lib/staticarray/StaticArray<i64>#indexOf (param $0 i32) (param $1 i64) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 3
  i32.shr_u
  local.tee $3
  i32.eqz
  i32.const 1
  local.get $3
  select
  if
   i32.const -1
   return
  end
  loop $while-continue|0
   local.get $2
   local.get $3
   i32.lt_s
   if
    local.get $1
    local.get $0
    local.get $2
    i32.const 3
    i32.shl
    i32.add
    i64.load
    i64.eq
    if
     local.get $2
     return
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    br $while-continue|0
   end
  end
  i32.const -1
 )
 (func $~lib/util/string/compareImpl (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $3
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $3
  local.tee $0
  i32.const 7
  i32.and
  local.get $4
  local.tee $1
  i32.const 7
  i32.and
  i32.or
  i32.eqz
  i32.const 0
  local.get $2
  i32.const 4
  i32.ge_u
  select
  if
   loop $do-continue|0
    local.get $0
    i64.load
    local.get $1
    i64.load
    i64.eq
    if
     local.get $0
     i32.const 8
     i32.add
     local.set $0
     local.get $1
     i32.const 8
     i32.add
     local.set $1
     local.get $2
     i32.const 4
     i32.sub
     local.tee $2
     i32.const 4
     i32.ge_u
     br_if $do-continue|0
    end
   end
  end
  loop $while-continue|1
   local.get $2
   local.tee $5
   i32.const 1
   i32.sub
   local.set $2
   local.get $5
   if
    local.get $0
    i32.load16_u
    local.tee $5
    local.get $1
    i32.load16_u
    local.tee $6
    i32.ne
    if
     local.get $5
     local.get $6
     i32.sub
     local.get $3
     call $~lib/rt/pure/__release
     local.get $4
     call $~lib/rt/pure/__release
     return
    end
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    local.get $1
    i32.const 2
    i32.add
    local.set $1
    br $while-continue|1
   end
  end
  local.get $3
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  i32.const 0
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/string/String> (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $5
  local.get $3
  call $~lib/rt/pure/__retain
  local.set $6
  block $__inlined_func$~lib/string/String.__eq
   local.get $4
   call $~lib/rt/pure/__retain
   local.tee $2
   local.get $1
   call $~lib/rt/pure/__retain
   local.tee $3
   i32.eq
   if
    local.get $2
    call $~lib/rt/pure/__release
    local.get $3
    call $~lib/rt/pure/__release
    i32.const 1
    local.set $0
    br $__inlined_func$~lib/string/String.__eq
   end
   block $folding-inner0
    local.get $3
    i32.eqz
    i32.const 1
    local.get $2
    select
    br_if $folding-inner0
    local.get $2
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    local.tee $0
    local.get $3
    i32.const 20
    i32.sub
    i32.load offset=16
    i32.const 1
    i32.shr_u
    i32.ne
    br_if $folding-inner0
    local.get $2
    local.get $3
    local.get $0
    call $~lib/util/string/compareImpl
    i32.eqz
    local.set $0
    local.get $2
    call $~lib/rt/pure/__release
    local.get $3
    call $~lib/rt/pure/__release
    br $__inlined_func$~lib/string/String.__eq
   end
   local.get $2
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   i32.const 0
   local.set $0
  end
  local.get $0
  if
   local.get $4
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $5
   call $~lib/rt/pure/__release
   local.get $6
   call $~lib/rt/pure/__release
   i32.const 1
   return
  end
  local.get $4
  i32.eqz
  local.get $1
  i32.eqz
  i32.xor
  if
   local.get $4
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $5
   call $~lib/rt/pure/__release
   local.get $6
   call $~lib/rt/pure/__release
   i32.const 0
   return
  end
  local.get $4
  call $~lib/rt/pure/__retain
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $5
  call $~lib/rt/pure/__retain
  local.set $3
  local.get $6
  call $~lib/rt/pure/__retain
  local.tee $7
  i32.load offset=12
  i32.const 1
  i32.and
  i32.eqz
  i32.const 1680
  call $node_modules/@as-pect/assembly/assembly/internal/assert/assert
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  local.get $7
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
  local.get $6
  call $~lib/rt/pure/__release
  i32.const 0
 )
 (func $assembly/lib/candid/idl/types/Type#__aspectStrictEquals (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $3
  call $~lib/rt/pure/__retain
  local.set $3
  local.get $4
  call $~lib/rt/pure/__retain
  local.tee $4
  i64.const 4746555151525871616
  call $~lib/staticarray/StaticArray<i64>#indexOf
  i32.const 0
  i32.lt_s
  if
   local.get $0
   call $assembly/lib/candid/idl/types/Type#get:name@virtual
   local.tee $0
   local.get $1
   call $assembly/lib/candid/idl/types/Type#get:name@virtual
   local.tee $5
   local.get $2
   local.get $3
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/string/String>
   i32.eqz
   local.set $6
   local.get $0
   call $~lib/rt/pure/__release
   local.get $5
   call $~lib/rt/pure/__release
  end
  local.get $6
  if
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   local.get $4
   call $~lib/rt/pure/__release
   i32.const 0
   return
  end
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  i32.const 1
 )
 (func $~lib/array/Array<usize>#pop (param $0 i32)
  (local $1 i32)
  local.get $0
  i32.load offset=12
  local.tee $1
  i32.const 1
  i32.lt_s
  if
   i32.const 2064
   i32.const 1952
   i32.const 300
   i32.const 21
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 1
  i32.sub
  local.tee $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  drop
  local.get $0
  local.get $1
  i32.store offset=12
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/referencesEqual<assembly/lib/candid/idl/types/Type> (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $4
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $3
  call $~lib/rt/pure/__retain
  local.tee $2
  i32.load offset=12
  local.tee $3
  local.set $6
  local.get $3
  i32.const 1
  i32.and
  i32.eqz
  i32.const 1680
  call $node_modules/@as-pect/assembly/assembly/internal/assert/assert
  loop $for-loop|0
   local.get $5
   local.get $6
   i32.lt_s
   if
    local.get $0
    local.get $4
    local.get $2
    local.get $5
    call $~lib/array/Array<usize>#__uget
    local.get $2
    local.get $5
    i32.const 1
    i32.add
    call $~lib/array/Array<usize>#__uget
    call $node_modules/@as-pect/assembly/assembly/internal/Reflect/pairSeen
    if
     local.get $0
     call $~lib/rt/pure/__release
     local.get $4
     call $~lib/rt/pure/__release
     local.get $1
     call $~lib/rt/pure/__release
     local.get $2
     call $~lib/rt/pure/__release
     i32.const 1
     return
    end
    local.get $5
    i32.const 2
    i32.add
    local.set $5
    br $for-loop|0
   end
  end
  local.get $1
  i32.load offset=12
  local.set $3
  i32.const 0
  local.set $5
  loop $for-loop|1
   local.get $3
   local.get $5
   i32.gt_s
   if
    local.get $0
    local.get $4
    local.get $1
    local.get $5
    call $~lib/array/Array<usize>#__uget
    local.get $1
    local.get $5
    i32.const 1
    i32.add
    call $~lib/array/Array<usize>#__uget
    call $node_modules/@as-pect/assembly/assembly/internal/Reflect/pairSeen
    if
     local.get $0
     call $~lib/rt/pure/__release
     local.get $4
     call $~lib/rt/pure/__release
     local.get $1
     call $~lib/rt/pure/__release
     local.get $2
     call $~lib/rt/pure/__release
     i32.const 2
     return
    end
    local.get $5
    i32.const 2
    i32.add
    local.set $5
    br $for-loop|1
   end
  end
  local.get $1
  local.get $0
  call $~lib/array/Array<usize>#push
  local.get $1
  local.get $4
  call $~lib/array/Array<usize>#push
  block $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectStrictEquals@virtual (result i32)
   local.get $0
   local.set $3
   i32.const 0
   i32.const 12
   i32.const 2000
   call $~lib/rt/__newBuffer
   call $~lib/rt/pure/__retain
   local.tee $5
   local.set $0
   block $default
    block $case3
     block $case2
      block $case1
       block $case0
        local.get $3
        i32.const 8
        i32.sub
        i32.load
        i32.const 9
        i32.sub
        br_table $case3 $case0 $default $default $default $default $default $case2 $case1 $default
       end
       local.get $3
       local.get $4
       local.get $1
       local.get $2
       local.get $0
       call $assembly/lib/candid/idl/types/PrimitiveType#__aspectStrictEquals
       br $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectStrictEquals@virtual
      end
      local.get $3
      local.get $4
      local.get $1
      local.get $2
      local.get $0
      call $assembly/lib/candid/idl/types/ConstructType#__aspectStrictEquals
      br $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectStrictEquals@virtual
     end
     local.get $3
     local.get $4
     local.get $1
     local.get $2
     local.get $0
     call $assembly/lib/candid/idl/types/VecClass#__aspectStrictEquals
     br $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectStrictEquals@virtual
    end
    local.get $3
    local.get $4
    local.get $1
    local.get $2
    local.get $0
    call $assembly/lib/candid/idl/types/TextClass#__aspectStrictEquals
    br $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectStrictEquals@virtual
   end
   local.get $3
   local.get $4
   local.get $1
   local.get $2
   local.get $0
   call $assembly/lib/candid/idl/types/Type#__aspectStrictEquals
  end
  local.tee $0
  if
   local.get $2
   local.get $3
   call $~lib/array/Array<usize>#push
   local.get $2
   local.get $4
   call $~lib/array/Array<usize>#push
  end
  local.get $1
  call $~lib/array/Array<usize>#pop
  local.get $1
  call $~lib/array/Array<usize>#pop
  local.get $5
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $0
  i32.eqz
  i32.eqz
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<assembly/lib/candid/idl/types/Type> (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $3
  call $~lib/rt/pure/__retain
  local.set $3
  local.get $0
  local.get $1
  i32.eq
  if
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   i32.const 1
   return
  end
  local.get $0
  i32.eqz
  local.get $1
  i32.eqz
  i32.xor
  if
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   i32.const 0
   return
  end
  local.get $0
  local.get $1
  local.get $2
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/referencesEqual<assembly/lib/candid/idl/types/Type>
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $~lib/rt/__newArray (param $0 i32) (result i32)
  (local $1 i32)
  i32.const 16
  i32.const 11
  call $~lib/rt/pure/__new
  local.tee $1
  i32.const 0
  i32.const 0
  local.get $0
  call $~lib/rt/__newBuffer
  local.tee $0
  call $~lib/rt/pure/__retain
  i32.store
  local.get $1
  local.get $0
  i32.store offset=4
  local.get $1
  i32.const 0
  i32.store offset=8
  local.get $1
  i32.const 0
  i32.store offset=12
  local.get $1
 )
 (func $~lib/util/hash/hash32 (param $0 i32) (result i32)
  local.get $0
  i32.const 255
  i32.and
  i32.const -2128831035
  i32.xor
  i32.const 16777619
  i32.mul
  local.get $0
  i32.const 8
  i32.shr_u
  i32.const 255
  i32.and
  i32.xor
  i32.const 16777619
  i32.mul
  local.get $0
  i32.const 16
  i32.shr_u
  i32.const 255
  i32.and
  i32.xor
  i32.const 16777619
  i32.mul
  local.get $0
  i32.const 24
  i32.shr_u
  i32.xor
  i32.const 16777619
  i32.mul
 )
 (func $~lib/map/Map<usize,i32>#find (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $0
  loop $while-continue|0
   local.get $0
   if
    local.get $0
    i32.load offset=8
    i32.const 1
    i32.and
    if (result i32)
     i32.const 0
    else
     local.get $1
     local.get $0
     i32.load
     i32.eq
    end
    if
     local.get $0
     return
    end
    local.get $0
    i32.load offset=8
    i32.const -2
    i32.and
    local.set $0
    br $while-continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/map/Map<usize,i32>#has (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/hash32
  call $~lib/map/Map<usize,i32>#find
  i32.const 0
  i32.ne
 )
 (func $~lib/map/Map<usize,i32>#get (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/hash32
  call $~lib/map/Map<usize,i32>#find
  local.tee $0
  i32.eqz
  if
   i32.const 2208
   i32.const 2272
   i32.const 104
   i32.const 17
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 1073741820
  i32.gt_u
  if
   i32.const 1904
   i32.const 2320
   i32.const 49
   i32.const 43
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 0
  call $~lib/rt/pure/__new
  local.tee $1
  local.get $0
  call $~lib/memory/memory.fill
  local.get $1
  call $~lib/rt/pure/__retain
 )
 (func $~lib/map/Map<usize,i32>#rehash (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  i32.const 1
  i32.add
  local.tee $3
  i32.const 2
  i32.shl
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $5
  local.get $3
  i32.const 3
  i32.shl
  i32.const 3
  i32.div_s
  local.tee $6
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $3
  local.get $0
  i32.load offset=8
  local.tee $4
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $3
  local.set $2
  loop $while-continue|0
   local.get $4
   local.get $7
   i32.ne
   if
    local.get $4
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $2
     local.get $4
     i32.load
     i32.store
     local.get $2
     local.get $4
     i32.load offset=4
     i32.store offset=4
     local.get $2
     local.get $5
     local.get $4
     i32.load
     call $~lib/util/hash/hash32
     local.get $1
     i32.and
     i32.const 2
     i32.shl
     i32.add
     local.tee $8
     i32.load
     i32.store offset=8
     local.get $8
     local.get $2
     i32.store
     local.get $2
     i32.const 12
     i32.add
     local.set $2
    end
    local.get $4
    i32.const 12
    i32.add
    local.set $4
    br $while-continue|0
   end
  end
  local.get $5
  local.tee $4
  local.get $0
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $4
   call $~lib/rt/pure/__retain
   local.set $4
   local.get $2
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $4
  i32.store
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $3
  local.tee $1
  local.get $0
  i32.load offset=8
  local.tee $4
  i32.ne
  if
   local.get $1
   call $~lib/rt/pure/__retain
   local.set $1
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
  local.get $6
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  local.get $5
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $~lib/map/Map<usize,i32>#set (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  local.get $1
  local.get $1
  call $~lib/util/hash/hash32
  local.tee $5
  call $~lib/map/Map<usize,i32>#find
  local.tee $3
  if
   local.get $3
   local.get $2
   i32.store offset=4
  else
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    i32.const 3
    i32.mul
    i32.const 4
    i32.div_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<usize,i32>#rehash
   end
   local.get $0
   i32.load offset=8
   call $~lib/rt/pure/__retain
   local.set $4
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $3
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $4
   local.get $3
   i32.const 12
   i32.mul
   i32.add
   local.tee $3
   local.get $1
   i32.store
   local.get $3
   local.get $2
   i32.store offset=4
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $3
   local.get $0
   i32.load
   local.get $5
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 2
   i32.shl
   i32.add
   local.tee $1
   i32.load
   i32.store offset=8
   local.get $1
   local.get $3
   i32.store
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $0
  call $~lib/rt/pure/__retain
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  block $folding-inner0
   local.get $0
   i32.eqz
   if
    i32.const 1
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 4
    i32.const 1
    i32.const 1
    i32.const 2448
    i32.const 0
    i32.const 0
    i32.const 1
    call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
    local.set $2
    br $folding-inner0
   end
   local.get $1
   local.get $0
   call $~lib/map/Map<usize,i32>#has
   if
    local.get $1
    local.get $0
    call $~lib/map/Map<usize,i32>#get
    local.set $2
    br $folding-inner0
   end
   local.get $1
   local.get $0
   i32.const 0
   i32.const 0
   i32.const 0
   i32.const 0
   local.get $0
   i32.const 0
   local.get $0
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 2
   i32.const 1
   i32.const 2448
   local.get $0
   i32.const 0
   i32.const 1
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
   local.tee $2
   call $~lib/map/Map<usize,i32>#set
   call $~lib/rt/pure/__release
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   return
  end
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
 )
 (func $assembly/lib/candid/idl/types/Type#__aspectAddReflectedValueKeyValuePairs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $3
  call $~lib/rt/pure/__retain
  local.tee $3
  i64.const 4746555151525871616
  call $~lib/staticarray/StaticArray<i64>#indexOf
  i32.const 0
  i32.lt_s
  if
   local.get $1
   i32.const 2416
   local.get $2
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectKey
   local.get $1
   local.get $0
   call $assembly/lib/candid/idl/types/Type#get:name@virtual
   local.tee $0
   local.get $2
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectValue
   local.get $0
   call $~lib/rt/pure/__release
  end
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<assembly/lib/candid/idl/types/Type> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  block $folding-inner0
   local.get $2
   i32.eqz
   if
    i32.const 1
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 0
    i32.const 4
    i32.const 1
    i32.const 7
    i32.const 2176
    i32.const 0
    i32.const 0
    i32.const 1
    call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
    local.set $0
    br $folding-inner0
   end
   local.get $1
   local.get $2
   call $~lib/map/Map<usize,i32>#has
   if
    local.get $1
    local.get $2
    call $~lib/map/Map<usize,i32>#get
    local.set $0
    br $folding-inner0
   end
   local.get $1
   local.get $2
   i32.const 0
   i32.const 1
   i32.const 0
   i32.const 0
   local.get $2
   i32.const 0
   local.get $2
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.const 7
   i32.const 2176
   i32.const 0
   i32.const 1
   i32.const 1
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/createReflectedValue
   local.tee $0
   call $~lib/map/Map<usize,i32>#set
   call $~lib/rt/pure/__release
   i32.const 0
   i32.const 12
   i32.const 2384
   call $~lib/rt/__newBuffer
   call $~lib/rt/pure/__retain
   local.tee $7
   local.set $3
   block $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectAddReflectedValueKeyValuePairs@virtual
    block $default
     block $case3
      block $case2
       block $case1
        block $case0
         local.get $2
         i32.const 8
         i32.sub
         i32.load
         i32.const 9
         i32.sub
         br_table $case3 $case0 $default $default $default $default $default $case2 $case1 $default
        end
        local.get $2
        local.get $0
        local.get $1
        local.get $3
        call $assembly/lib/candid/idl/types/PrimitiveType#__aspectAddReflectedValueKeyValuePairs
        br $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectAddReflectedValueKeyValuePairs@virtual
       end
       local.get $2
       local.get $0
       local.get $1
       local.get $3
       call $assembly/lib/candid/idl/types/ConstructType#__aspectAddReflectedValueKeyValuePairs
       br $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectAddReflectedValueKeyValuePairs@virtual
      end
      local.get $2
      local.get $0
      local.get $1
      call $~lib/rt/pure/__retain
      local.tee $4
      local.get $3
      call $~lib/rt/pure/__retain
      local.tee $3
      i32.const 16
      i32.const 12
      i32.const 3456
      call $~lib/rt/__newBuffer
      call $~lib/rt/pure/__retain
      local.tee $5
      call $~lib/staticarray/StaticArray.concat<i64>
      local.tee $6
      call $assembly/lib/candid/idl/types/ConstructType#__aspectAddReflectedValueKeyValuePairs
      local.get $5
      call $~lib/rt/pure/__release
      local.get $6
      call $~lib/rt/pure/__release
      local.get $3
      i64.const 4746556165947654144
      call $~lib/staticarray/StaticArray<i64>#indexOf
      i32.const 0
      i32.lt_s
      if
       local.get $0
       i32.const 3504
       local.get $4
       call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>
       call $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectKey
       local.get $0
       local.get $2
       i32.load
       local.get $4
       call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<assembly/lib/candid/idl/types/Type>
       call $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectValue
      end
      local.get $3
      i64.const 4746555151525871616
      call $~lib/staticarray/StaticArray<i64>#indexOf
      i32.const 0
      i32.lt_s
      if
       local.get $0
       i32.const 2416
       local.get $4
       call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>
       call $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectKey
       local.get $0
       local.get $2
       call $assembly/lib/candid/idl/types/VecClass#get:name
       local.tee $5
       local.get $4
       call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>
       call $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectValue
       local.get $5
       call $~lib/rt/pure/__release
      end
      local.get $4
      call $~lib/rt/pure/__release
      local.get $3
      call $~lib/rt/pure/__release
      br $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectAddReflectedValueKeyValuePairs@virtual
     end
     local.get $2
     local.get $0
     local.get $1
     call $~lib/rt/pure/__retain
     local.tee $4
     local.get $3
     call $~lib/rt/pure/__retain
     local.tee $3
     i32.const 8
     i32.const 12
     i32.const 3536
     call $~lib/rt/__newBuffer
     call $~lib/rt/pure/__retain
     local.tee $5
     call $~lib/staticarray/StaticArray.concat<i64>
     local.tee $6
     call $assembly/lib/candid/idl/types/PrimitiveType#__aspectAddReflectedValueKeyValuePairs
     local.get $5
     call $~lib/rt/pure/__release
     local.get $6
     call $~lib/rt/pure/__release
     local.get $3
     i64.const 4746555151525871616
     call $~lib/staticarray/StaticArray<i64>#indexOf
     i32.const 0
     i32.lt_s
     if
      local.get $0
      i32.const 2416
      local.get $4
      call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>
      call $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectKey
      local.get $0
      i32.const 3152
      local.get $4
      call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<~lib/string/String>
      call $node_modules/@as-pect/assembly/assembly/internal/Reflect/__aspectPushReflectedObjectValue
     end
     local.get $4
     call $~lib/rt/pure/__release
     local.get $3
     call $~lib/rt/pure/__release
     br $__inlined_func$assembly/lib/candid/idl/types/Type#__aspectAddReflectedValueKeyValuePairs@virtual
    end
    local.get $2
    local.get $0
    local.get $1
    local.get $3
    call $assembly/lib/candid/idl/types/Type#__aspectAddReflectedValueKeyValuePairs
   end
   local.get $7
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $0
   return
  end
  local.get $2
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $0
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<assembly/lib/candid/idl/types/Type>@varargs (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~argumentsLength
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const 24
   i32.const 14
   call $~lib/rt/pure/__new
   call $~lib/rt/pure/__retain
   local.tee $1
   i32.const 16
   call $~lib/arraybuffer/ArrayBuffer#constructor
   i32.store
   local.get $1
   i32.const 3
   i32.store offset=4
   local.get $1
   i32.const 48
   call $~lib/arraybuffer/ArrayBuffer#constructor
   i32.store offset=8
   local.get $1
   i32.const 4
   i32.store offset=12
   local.get $1
   i32.const 0
   i32.store offset=16
   local.get $1
   i32.const 0
   i32.store offset=20
   local.get $1
   local.set $2
  end
  local.get $0
  local.get $2
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<assembly/lib/candid/idl/types/Type>
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<assembly/lib/candid/idl/types/Type>#toStrictEqual (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $0
  i32.load offset=4
  i32.const 2
  global.set $~argumentsLength
  local.get $1
  i32.const 2112
  call $~lib/rt/__newArray
  call $~lib/rt/pure/__retain
  local.tee $5
  i32.const 2144
  call $~lib/rt/__newArray
  call $~lib/rt/pure/__retain
  local.tee $4
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<assembly/lib/candid/idl/types/Type>
  local.get $5
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  i32.const 1
  i32.eq
  local.set $5
  local.get $0
  i32.load offset=4
  call $~lib/rt/pure/__retain
  local.set $3
  i32.const 1
  global.set $~argumentsLength
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<assembly/lib/candid/idl/types/Type>@varargs
  local.tee $4
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue
  local.get $4
  call $node_modules/@as-pect/assembly/assembly/internal/Actual/reportActualReflectedValue
  local.get $3
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $3
  i32.const 1
  global.set $~argumentsLength
  local.get $3
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.toReflectedValue<assembly/lib/candid/idl/types/Type>@varargs
  local.tee $4
  call $node_modules/@as-pect/assembly/assembly/internal/Reflect/attachStackTraceToReflectedValue
  local.get $4
  i32.const 0
  call $node_modules/@as-pect/assembly/assembly/internal/Expected/reportExpectedReflectedValue
  local.get $3
  call $~lib/rt/pure/__release
  local.get $0
  i32.load
  local.get $5
  i32.xor
  local.get $2
  call $node_modules/@as-pect/assembly/assembly/internal/assert/assert
  call $node_modules/@as-pect/assembly/assembly/internal/Actual/clearActual
  call $node_modules/@as-pect/assembly/assembly/internal/Expected/clearExpected
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/lib/__tests__/types.spec~anonymous|0~anonymous|0
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  call $assembly/lib/candid/idl/types/TextClass#constructor
  local.tee $0
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<assembly/lib/candid/idl/types/Type>
  local.tee $1
  call $assembly/lib/candid/idl/types/TextClass#constructor
  local.tee $2
  i32.const 1584
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<assembly/lib/candid/idl/types/Type>#toStrictEqual
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
 )
 (func $assembly/lib/candid/idl/types/Vec (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $2
  i32.const 4
  i32.const 16
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $0
  i32.const 0
  i32.store
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $0
  if (result i32)
   local.get $0
  else
   i32.const 0
   i32.const 17
   call $~lib/rt/pure/__new
   call $~lib/rt/pure/__retain
  end
  call $assembly/lib/candid/idl/types/Type#constructor
  local.tee $3
  i32.load
  local.tee $4
  local.get $1
  local.tee $0
  i32.ne
  if
   local.get $0
   call $~lib/rt/pure/__retain
   local.set $0
   local.get $4
   call $~lib/rt/pure/__release
  end
  local.get $3
  local.get $0
  i32.store
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
 )
 (func $assembly/lib/candid/idl/types/getType<~lib/array/Array<~lib/string/String>> (result i32)
  (local $0 i32)
  (local $1 i32)
  call $assembly/lib/candid/idl/types/TextClass#constructor
  local.tee $0
  call $assembly/lib/candid/idl/types/Vec
  local.get $0
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/lib/__tests__/types.spec~anonymous|0~anonymous|1
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/lib/candid/idl/types/TextClass#constructor
  local.tee $1
  call $assembly/lib/candid/idl/types/Vec
  local.set $0
  call $assembly/lib/candid/idl/types/getType<~lib/array/Array<~lib/string/String>>
  local.tee $2
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<assembly/lib/candid/idl/types/Type>
  local.tee $3
  local.get $0
  i32.const 2656
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<assembly/lib/candid/idl/types/Type>#toStrictEqual
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  local.get $0
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/lib/__tests__/types.spec~anonymous|0~anonymous|2
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  call $assembly/lib/candid/idl/types/TextClass#constructor
  local.tee $3
  call $assembly/lib/candid/idl/types/Vec
  local.tee $4
  call $assembly/lib/candid/idl/types/Vec
  local.set $2
  call $assembly/lib/candid/idl/types/getType<~lib/array/Array<~lib/string/String>>
  local.tee $0
  call $assembly/lib/candid/idl/types/Vec
  local.get $0
  call $~lib/rt/pure/__release
  local.tee $0
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/expect<assembly/lib/candid/idl/types/Type>
  local.tee $1
  local.get $2
  i32.const 2656
  call $node_modules/@as-pect/assembly/assembly/internal/Expectation/Expectation<assembly/lib/candid/idl/types/Type>#toStrictEqual
  local.get $3
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
 )
 (func $start:assembly/lib/__tests__/types.spec~anonymous|0
  i32.const 1456
  i32.const 2480
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 2512
  i32.const 2752
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 2784
  i32.const 2960
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
  i32.const 2784
  i32.const 2992
  call $node_modules/@as-pect/assembly/assembly/internal/Test/it
 )
 (func $start:node_modules/@as-pect/assembly/assembly/internal/noOp~anonymous|0
  nop
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/call/__call (param $0 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  i32.const 0
  global.set $~argumentsLength
  local.get $0
  i32.load
  call_indirect (type $none_=>_none)
  local.get $0
  call $~lib/rt/pure/__release
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/log/__ignoreLogs (param $0 i32)
  nop
 )
 (func $node_modules/@as-pect/assembly/assembly/internal/RTrace/__getUsizeArrayId (result i32)
  i32.const 11
 )
 (func $~start
  global.get $~started
  if
   return
  else
   i32.const 1
   global.set $~started
  end
  i32.const 1360
  i32.const 3024
  call $node_modules/@as-pect/assembly/assembly/internal/Test/describe
 )
 (func $~lib/rt/pure/decrement (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  i32.load offset=4
  local.tee $4
  i32.const 268435455
  i32.and
  local.set $1
  local.get $0
  i32.load
  i32.const 1
  i32.and
  if
   i32.const 0
   i32.const 1120
   i32.const 122
   i32.const 14
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 1
  i32.eq
  if
   block $__inlined_func$~lib/rt/__visit_members
    block $folding-inner2
     block $folding-inner1
      block $folding-inner0
       block $switch$1$default
        block $switch$1$case$17
         block $switch$1$case$16
          block $switch$1$case$10
           block $switch$1$case$8
            local.get $0
            i32.const 12
            i32.add
            i32.load
            br_table $__inlined_func$~lib/rt/__visit_members $__inlined_func$~lib/rt/__visit_members $folding-inner2 $folding-inner0 $folding-inner2 $__inlined_func$~lib/rt/__visit_members $switch$1$case$8 $__inlined_func$~lib/rt/__visit_members $switch$1$case$10 $__inlined_func$~lib/rt/__visit_members $__inlined_func$~lib/rt/__visit_members $folding-inner0 $__inlined_func$~lib/rt/__visit_members $folding-inner0 $switch$1$case$16 $switch$1$case$17 $folding-inner2 $__inlined_func$~lib/rt/__visit_members $folding-inner1 $folding-inner1 $switch$1$default
           end
           local.get $0
           i32.load offset=20
           call $~lib/rt/pure/__visit
           local.get $0
           i32.load offset=28
           local.tee $3
           local.tee $2
           local.get $0
           i32.load offset=36
           i32.const 12
           i32.mul
           i32.add
           local.set $1
           loop $while-continue|0
            local.get $1
            local.get $2
            i32.gt_u
            if
             local.get $2
             i32.load offset=8
             i32.const 1
             i32.and
             i32.eqz
             if
              local.get $2
              i32.load offset=4
              call $~lib/rt/pure/__visit
             end
             local.get $2
             i32.const 12
             i32.add
             local.set $2
             br $while-continue|0
            end
           end
           local.get $3
           call $~lib/rt/pure/__visit
           br $__inlined_func$~lib/rt/__visit_members
          end
          local.get $0
          i32.load offset=24
          local.tee $1
          if
           local.get $1
           call $~lib/rt/pure/__visit
          end
          br $__inlined_func$~lib/rt/__visit_members
         end
         local.get $0
         i32.load offset=20
         call $~lib/rt/pure/__visit
         local.get $0
         i32.load offset=28
         call $~lib/rt/pure/__visit
         br $__inlined_func$~lib/rt/__visit_members
        end
        local.get $0
        i32.load offset=24
        call $~lib/rt/pure/__visit
        br $__inlined_func$~lib/rt/__visit_members
       end
       unreachable
      end
      local.get $0
      i32.load offset=20
      call $~lib/rt/pure/__visit
      br $__inlined_func$~lib/rt/__visit_members
     end
     local.get $0
     i32.load offset=24
     local.tee $2
     local.get $0
     i32.load offset=32
     i32.const 2
     i32.shl
     i32.add
     local.set $3
     loop $while-continue|00
      local.get $2
      local.get $3
      i32.lt_u
      if
       local.get $2
       i32.load
       local.tee $1
       if
        local.get $1
        call $~lib/rt/pure/__visit
       end
       local.get $2
       i32.const 4
       i32.add
       local.set $2
       br $while-continue|00
      end
     end
     local.get $0
     i32.load offset=20
     call $~lib/rt/pure/__visit
     br $__inlined_func$~lib/rt/__visit_members
    end
    local.get $0
    i32.load offset=20
    local.tee $1
    if
     local.get $1
     call $~lib/rt/pure/__visit
    end
   end
   local.get $4
   i32.const -2147483648
   i32.and
   if
    i32.const 0
    i32.const 1120
    i32.const 126
    i32.const 18
    call $~lib/builtins/abort
    unreachable
   end
   global.get $~lib/rt/tlsf/ROOT
   local.get $0
   call $~lib/rt/tlsf/freeBlock
  else
   local.get $1
   i32.eqz
   if
    i32.const 0
    i32.const 1120
    i32.const 136
    i32.const 16
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   local.get $1
   i32.const 1
   i32.sub
   local.get $4
   i32.const -268435456
   i32.and
   i32.or
   i32.store offset=4
  end
 )
 (func $assembly/lib/candid/idl/types/VecClass#get:name (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  block $__inlined_func$~lib/string/String#concat
   local.get $0
   i32.load
   call $assembly/lib/candid/idl/types/Type#get:name@virtual
   local.tee $2
   call $~lib/rt/pure/__retain
   local.tee $4
   call $~lib/rt/pure/__retain
   local.tee $1
   i32.eqz
   if
    local.get $1
    i32.const 3120
    i32.ne
    if
     local.get $1
     call $~lib/rt/pure/__release
    end
    i32.const 3120
    local.set $1
   end
   local.get $1
   i32.const 20
   i32.sub
   i32.load offset=16
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $5
   i32.const 3084
   i32.load
   i32.const 1
   i32.shr_u
   i32.const 1
   i32.shl
   local.tee $3
   i32.add
   local.tee $0
   i32.eqz
   if
    i32.const 2032
    local.set $0
    br $__inlined_func$~lib/string/String#concat
   end
   local.get $0
   i32.const 1
   call $~lib/rt/pure/__new
   call $~lib/rt/pure/__retain
   local.tee $0
   i32.const 3088
   local.get $3
   call $~lib/memory/memory.copy
   local.get $0
   local.get $3
   i32.add
   local.get $1
   local.get $5
   call $~lib/memory/memory.copy
  end
  local.get $1
  call $~lib/rt/pure/__release
  i32.const 3088
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $0
 )
 (func $assembly/lib/candid/idl/types/Type#get:name@virtual (param $0 i32) (result i32)
  (local $1 i32)
  block $default
   block $case1
    local.get $0
    i32.const 8
    i32.sub
    i32.load
    local.tee $1
    i32.const 16
    i32.ne
    if
     local.get $1
     i32.const 9
     i32.eq
     br_if $case1
     br $default
    end
    local.get $0
    call $assembly/lib/candid/idl/types/VecClass#get:name
    return
   end
   i32.const 3152
   return
  end
  i32.const 2032
 )
 (func $~lib/staticarray/StaticArray.concat<i64> (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/pure/__retain
  local.set $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.tee $1
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 3
  i32.shr_u
  i32.const 0
  local.get $1
  select
  local.tee $4
  local.get $0
  i32.const 20
  i32.sub
  i32.load offset=16
  i32.const 3
  i32.shr_u
  local.tee $3
  i32.add
  local.tee $2
  i32.const 134217727
  i32.gt_u
  if
   i32.const 1904
   i32.const 3216
   i32.const 39
   i32.const 60
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  i32.const 3
  i32.shl
  i32.const 12
  call $~lib/rt/pure/__new
  call $~lib/rt/pure/__retain
  local.tee $2
  local.get $0
  local.get $3
  i32.const 3
  i32.shl
  local.tee $3
  call $~lib/memory/memory.copy
  local.get $2
  local.get $3
  i32.add
  local.get $1
  local.get $4
  i32.const 3
  i32.shl
  call $~lib/memory/memory.copy
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
 )
 (func $assembly/lib/candid/idl/types/PrimitiveType#__aspectStrictEquals (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  local.get $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.tee $0
  local.get $2
  call $~lib/rt/pure/__retain
  local.tee $1
  local.get $3
  call $~lib/rt/pure/__retain
  local.tee $2
  local.get $4
  call $~lib/rt/pure/__retain
  local.tee $3
  i32.const 0
  i32.const 12
  i32.const 3184
  call $~lib/rt/__newBuffer
  call $~lib/rt/pure/__retain
  local.tee $4
  call $~lib/staticarray/StaticArray.concat<i64>
  local.tee $5
  call $assembly/lib/candid/idl/types/Type#__aspectStrictEquals
  i32.eqz
  if
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   local.get $4
   call $~lib/rt/pure/__release
   local.get $5
   call $~lib/rt/pure/__release
   i32.const 0
   return
  end
  local.get $4
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  i32.const 1
 )
 (func $assembly/lib/candid/idl/types/ConstructType#__aspectStrictEquals (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  local.get $0
  local.get $1
  call $~lib/rt/pure/__retain
  local.tee $0
  local.get $2
  call $~lib/rt/pure/__retain
  local.tee $1
  local.get $3
  call $~lib/rt/pure/__retain
  local.tee $2
  local.get $4
  call $~lib/rt/pure/__retain
  local.tee $3
  i32.const 0
  i32.const 12
  i32.const 3280
  call $~lib/rt/__newBuffer
  call $~lib/rt/pure/__retain
  local.tee $4
  call $~lib/staticarray/StaticArray.concat<i64>
  local.tee $5
  call $assembly/lib/candid/idl/types/Type#__aspectStrictEquals
  i32.eqz
  if
   local.get $0
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   local.get $4
   call $~lib/rt/pure/__release
   local.get $5
   call $~lib/rt/pure/__release
   i32.const 0
   return
  end
  local.get $4
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  i32.const 1
 )
 (func $assembly/lib/candid/idl/types/VecClass#__aspectStrictEquals (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $3
  call $~lib/rt/pure/__retain
  local.set $3
  block $folding-inner0
   local.get $4
   call $~lib/rt/pure/__retain
   local.tee $4
   i64.const 4746556165947654144
   call $~lib/staticarray/StaticArray<i64>#indexOf
   i32.const 0
   i32.ge_s
   if (result i32)
    i32.const 0
   else
    local.get $0
    i32.load
    local.get $1
    i32.load
    local.get $2
    local.get $3
    call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<assembly/lib/candid/idl/types/Type>
    i32.eqz
   end
   br_if $folding-inner0
   local.get $4
   i64.const 4746555151525871616
   call $~lib/staticarray/StaticArray<i64>#indexOf
   i32.const 0
   i32.lt_s
   if
    local.get $0
    call $assembly/lib/candid/idl/types/VecClass#get:name
    local.tee $5
    local.get $1
    call $assembly/lib/candid/idl/types/VecClass#get:name
    local.tee $6
    local.get $2
    local.get $3
    call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/string/String>
    i32.eqz
    local.set $7
    local.get $5
    call $~lib/rt/pure/__release
    local.get $6
    call $~lib/rt/pure/__release
   end
   local.get $7
   br_if $folding-inner0
   local.get $0
   local.get $1
   local.get $2
   local.get $3
   local.get $4
   i32.const 16
   i32.const 12
   i32.const 3312
   call $~lib/rt/__newBuffer
   call $~lib/rt/pure/__retain
   local.tee $0
   call $~lib/staticarray/StaticArray.concat<i64>
   local.tee $5
   call $assembly/lib/candid/idl/types/ConstructType#__aspectStrictEquals
   i32.eqz
   if
    local.get $1
    call $~lib/rt/pure/__release
    local.get $2
    call $~lib/rt/pure/__release
    local.get $3
    call $~lib/rt/pure/__release
    local.get $4
    call $~lib/rt/pure/__release
    local.get $5
    call $~lib/rt/pure/__release
    local.get $0
    call $~lib/rt/pure/__release
    i32.const 0
    return
   end
   local.get $0
   call $~lib/rt/pure/__release
   local.get $5
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   local.get $4
   call $~lib/rt/pure/__release
   i32.const 1
   return
  end
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  i32.const 0
 )
 (func $assembly/lib/candid/idl/types/TextClass#__aspectStrictEquals (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  local.get $1
  call $~lib/rt/pure/__retain
  local.set $5
  local.get $2
  call $~lib/rt/pure/__retain
  local.set $1
  local.get $3
  call $~lib/rt/pure/__retain
  local.set $2
  local.get $4
  call $~lib/rt/pure/__retain
  local.tee $3
  i64.const 4746555151525871616
  call $~lib/staticarray/StaticArray<i64>#indexOf
  i32.const 0
  i32.lt_s
  if (result i32)
   i32.const 3152
   i32.const 3152
   local.get $1
   local.get $2
   call $node_modules/@as-pect/assembly/assembly/internal/Reflect/Reflect.equals<~lib/string/String>
   i32.eqz
  else
   i32.const 0
  end
  if
   local.get $5
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   i32.const 0
   return
  end
  local.get $0
  local.get $5
  local.get $1
  local.get $2
  local.get $3
  i32.const 8
  i32.const 12
  i32.const 3360
  call $~lib/rt/__newBuffer
  call $~lib/rt/pure/__retain
  local.tee $0
  call $~lib/staticarray/StaticArray.concat<i64>
  local.tee $4
  call $assembly/lib/candid/idl/types/PrimitiveType#__aspectStrictEquals
  i32.eqz
  if
   local.get $5
   call $~lib/rt/pure/__release
   local.get $1
   call $~lib/rt/pure/__release
   local.get $2
   call $~lib/rt/pure/__release
   local.get $3
   call $~lib/rt/pure/__release
   local.get $4
   call $~lib/rt/pure/__release
   local.get $0
   call $~lib/rt/pure/__release
   i32.const 0
   return
  end
  local.get $0
  call $~lib/rt/pure/__release
  local.get $4
  call $~lib/rt/pure/__release
  local.get $5
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  i32.const 1
 )
 (func $assembly/lib/candid/idl/types/PrimitiveType#__aspectAddReflectedValueKeyValuePairs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  local.get $0
  local.get $1
  local.get $2
  call $~lib/rt/pure/__retain
  local.tee $0
  local.get $3
  call $~lib/rt/pure/__retain
  local.tee $1
  i32.const 0
  i32.const 12
  i32.const 3392
  call $~lib/rt/__newBuffer
  call $~lib/rt/pure/__retain
  local.tee $2
  call $~lib/staticarray/StaticArray.concat<i64>
  local.tee $3
  call $assembly/lib/candid/idl/types/Type#__aspectAddReflectedValueKeyValuePairs
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $assembly/lib/candid/idl/types/ConstructType#__aspectAddReflectedValueKeyValuePairs (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32)
  local.get $0
  local.get $1
  local.get $2
  call $~lib/rt/pure/__retain
  local.tee $0
  local.get $3
  call $~lib/rt/pure/__retain
  local.tee $1
  i32.const 0
  i32.const 12
  i32.const 3424
  call $~lib/rt/__newBuffer
  call $~lib/rt/pure/__retain
  local.tee $2
  call $~lib/staticarray/StaticArray.concat<i64>
  local.tee $3
  call $assembly/lib/candid/idl/types/Type#__aspectAddReflectedValueKeyValuePairs
  local.get $2
  call $~lib/rt/pure/__release
  local.get $3
  call $~lib/rt/pure/__release
  local.get $0
  call $~lib/rt/pure/__release
  local.get $1
  call $~lib/rt/pure/__release
 )
 (func $~lib/rt/pure/__visit (param $0 i32)
  local.get $0
  i32.const 3716
  i32.lt_u
  if
   return
  end
  local.get $0
  i32.const 20
  i32.sub
  call $~lib/rt/pure/decrement
 )
)
