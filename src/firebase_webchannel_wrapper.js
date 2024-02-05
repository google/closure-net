/**
 * @license
 * Copyright 2024 Google LLC.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';
var $JSCompiler_prototypeAlias$$;
function $$jscomp$arrayIteratorImpl$$($array$jscomp$6$$) {
  var $index$jscomp$101$$ = 0;
  return function() {
    return $index$jscomp$101$$ < $array$jscomp$6$$.length ? {done:!1, value:$array$jscomp$6$$[$index$jscomp$101$$++]} : {done:!0};
  };
}
var $$jscomp$defineProperty$$ = "function" == typeof Object.defineProperties ? Object.defineProperty : function($target$jscomp$92$$, $property$jscomp$5$$, $descriptor$jscomp$1$$) {
  if ($target$jscomp$92$$ == Array.prototype || $target$jscomp$92$$ == Object.prototype) {
    return $target$jscomp$92$$;
  }
  $target$jscomp$92$$[$property$jscomp$5$$] = $descriptor$jscomp$1$$.value;
  return $target$jscomp$92$$;
};
function $$jscomp$getGlobal$$($passedInThis_possibleGlobals$$) {
  $passedInThis_possibleGlobals$$ = ["object" == typeof globalThis && globalThis, $passedInThis_possibleGlobals$$, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
  for (var $i$jscomp$3$$ = 0; $i$jscomp$3$$ < $passedInThis_possibleGlobals$$.length; ++$i$jscomp$3$$) {
    var $maybeGlobal$$ = $passedInThis_possibleGlobals$$[$i$jscomp$3$$];
    if ($maybeGlobal$$ && $maybeGlobal$$.Math == Math) {
      return $maybeGlobal$$;
    }
  }
  throw Error("Cannot find global object");
}
var $$jscomp$global$$ = $$jscomp$getGlobal$$(this);
function $$jscomp$polyfill$$($property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$, $impl$jscomp$inline_83_polyfill$jscomp$1$$) {
  if ($impl$jscomp$inline_83_polyfill$jscomp$1$$) {
    a: {
      var $obj$jscomp$inline_77$$ = $$jscomp$global$$;
      $property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$ = $property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$.split(".");
      for (var $i$jscomp$inline_79_orig$jscomp$inline_82$$ = 0; $i$jscomp$inline_79_orig$jscomp$inline_82$$ < $property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$.length - 1; $i$jscomp$inline_79_orig$jscomp$inline_82$$++) {
        var $key$jscomp$inline_80$$ = $property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$[$i$jscomp$inline_79_orig$jscomp$inline_82$$];
        if (!($key$jscomp$inline_80$$ in $obj$jscomp$inline_77$$)) {
          break a;
        }
        $obj$jscomp$inline_77$$ = $obj$jscomp$inline_77$$[$key$jscomp$inline_80$$];
      }
      $property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$ = $property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$[$property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$.length - 1];
      $i$jscomp$inline_79_orig$jscomp$inline_82$$ = $obj$jscomp$inline_77$$[$property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$];
      $impl$jscomp$inline_83_polyfill$jscomp$1$$ = $impl$jscomp$inline_83_polyfill$jscomp$1$$($i$jscomp$inline_79_orig$jscomp$inline_82$$);
      $impl$jscomp$inline_83_polyfill$jscomp$1$$ != $i$jscomp$inline_79_orig$jscomp$inline_82$$ && null != $impl$jscomp$inline_83_polyfill$jscomp$1$$ && $$jscomp$defineProperty$$($obj$jscomp$inline_77$$, $property$jscomp$inline_81_split$jscomp$inline_78_target$jscomp$94$$, {configurable:!0, writable:!0, value:$impl$jscomp$inline_83_polyfill$jscomp$1$$});
    }
  }
}
$$jscomp$polyfill$$("Symbol", function($orig$jscomp$1$$) {
  function $symbolPolyfill$$($opt_description$jscomp$2$$) {
    if (this instanceof $symbolPolyfill$$) {
      throw new TypeError("Symbol is not a constructor");
    }
    return new $SymbolClass$$($SYMBOL_PREFIX$$ + ($opt_description$jscomp$2$$ || "") + "_" + $counter$$++, $opt_description$jscomp$2$$);
  }
  function $SymbolClass$$($id$jscomp$5$$, $opt_description$jscomp$1$$) {
    this.$g$ = $id$jscomp$5$$;
    $$jscomp$defineProperty$$(this, "description", {configurable:!0, writable:!0, value:$opt_description$jscomp$1$$});
  }
  if ($orig$jscomp$1$$) {
    return $orig$jscomp$1$$;
  }
  $SymbolClass$$.prototype.toString = function() {
    return this.$g$;
  };
  var $SYMBOL_PREFIX$$ = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_", $counter$$ = 0;
  return $symbolPolyfill$$;
});
$$jscomp$polyfill$$("Symbol.iterator", function($orig$jscomp$2_symbolIterator$$) {
  if ($orig$jscomp$2_symbolIterator$$) {
    return $orig$jscomp$2_symbolIterator$$;
  }
  $orig$jscomp$2_symbolIterator$$ = Symbol("Symbol.iterator");
  for (var $arrayLikes$$ = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), $i$jscomp$6$$ = 0; $i$jscomp$6$$ < $arrayLikes$$.length; $i$jscomp$6$$++) {
    var $ArrayLikeCtor$$ = $$jscomp$global$$[$arrayLikes$$[$i$jscomp$6$$]];
    "function" === typeof $ArrayLikeCtor$$ && "function" != typeof $ArrayLikeCtor$$.prototype[$orig$jscomp$2_symbolIterator$$] && $$jscomp$defineProperty$$($ArrayLikeCtor$$.prototype, $orig$jscomp$2_symbolIterator$$, {configurable:!0, writable:!0, value:function() {
      return $$jscomp$iteratorPrototype$$($$jscomp$arrayIteratorImpl$$(this));
    }});
  }
  return $orig$jscomp$2_symbolIterator$$;
});
function $$jscomp$iteratorPrototype$$($iterator$jscomp$6_next$$) {
  $iterator$jscomp$6_next$$ = {next:$iterator$jscomp$6_next$$};
  $iterator$jscomp$6_next$$[Symbol.iterator] = function() {
    return this;
  };
  return $iterator$jscomp$6_next$$;
}
function $$jscomp$makeIterator$$($iterable$jscomp$4$$) {
  var $iteratorFunction$$ = "undefined" != typeof Symbol && Symbol.iterator && $iterable$jscomp$4$$[Symbol.iterator];
  if ($iteratorFunction$$) {
    return $iteratorFunction$$.call($iterable$jscomp$4$$);
  }
  if ("number" == typeof $iterable$jscomp$4$$.length) {
    return {next:$$jscomp$arrayIteratorImpl$$($iterable$jscomp$4$$)};
  }
  throw Error(String($iterable$jscomp$4$$) + " is not an iterable or ArrayLike");
}
var $$jscomp$objectCreate$$ = "function" == typeof Object.create ? Object.create : function($prototype$$) {
  function $ctor$$() {
  }
  $ctor$$.prototype = $prototype$$;
  return new $ctor$$();
}, $JSCompiler_temp$jscomp$17$$;
if ("function" == typeof Object.setPrototypeOf) {
  $JSCompiler_temp$jscomp$17$$ = Object.setPrototypeOf;
} else {
  var $JSCompiler_inline_result$jscomp$18$$;
  a: {
    var $x$jscomp$inline_85$$ = {a:!0}, $y$jscomp$inline_86$$ = {};
    try {
      $y$jscomp$inline_86$$.__proto__ = $x$jscomp$inline_85$$;
      $JSCompiler_inline_result$jscomp$18$$ = $y$jscomp$inline_86$$.a;
      break a;
    } catch ($e$jscomp$inline_87$$) {
    }
    $JSCompiler_inline_result$jscomp$18$$ = !1;
  }
  $JSCompiler_temp$jscomp$17$$ = $JSCompiler_inline_result$jscomp$18$$ ? function($target$jscomp$99$$, $proto$jscomp$4$$) {
    $target$jscomp$99$$.__proto__ = $proto$jscomp$4$$;
    if ($target$jscomp$99$$.__proto__ !== $proto$jscomp$4$$) {
      throw new TypeError($target$jscomp$99$$ + " is not extensible");
    }
    return $target$jscomp$99$$;
  } : null;
}
var $$jscomp$setPrototypeOf$$ = $JSCompiler_temp$jscomp$17$$;
function $$jscomp$owns$$($obj$jscomp$33$$, $prop$jscomp$2$$) {
  return Object.prototype.hasOwnProperty.call($obj$jscomp$33$$, $prop$jscomp$2$$);
}
$$jscomp$polyfill$$("WeakMap", function($NativeWeakMap$$) {
  function $PolyfillWeakMap$$($iter$jscomp$1_opt_iterable$jscomp$4$$) {
    this.$g$ = ($index$jscomp$102$$ += Math.random() + 1).toString();
    if ($iter$jscomp$1_opt_iterable$jscomp$4$$) {
      $iter$jscomp$1_opt_iterable$jscomp$4$$ = $$jscomp$makeIterator$$($iter$jscomp$1_opt_iterable$jscomp$4$$);
      for (var $entry_item$jscomp$21$$; !($entry_item$jscomp$21$$ = $iter$jscomp$1_opt_iterable$jscomp$4$$.next()).done;) {
        $entry_item$jscomp$21$$ = $entry_item$jscomp$21$$.value, this.set($entry_item$jscomp$21$$[0], $entry_item$jscomp$21$$[1]);
      }
    }
  }
  function $WeakMapMembership$$() {
  }
  function $isValidKey$$($key$jscomp$42$$) {
    var $type$jscomp$163$$ = typeof $key$jscomp$42$$;
    return "object" === $type$jscomp$163$$ && null !== $key$jscomp$42$$ || "function" === $type$jscomp$163$$;
  }
  function $insert$$($target$jscomp$102$$) {
    if (!$$jscomp$owns$$($target$jscomp$102$$, $prop$jscomp$3$$)) {
      var $obj$jscomp$34$$ = new $WeakMapMembership$$();
      $$jscomp$defineProperty$$($target$jscomp$102$$, $prop$jscomp$3$$, {value:$obj$jscomp$34$$});
    }
  }
  function $patch$$($name$jscomp$75$$) {
    var $prev$$ = Object[$name$jscomp$75$$];
    $prev$$ && (Object[$name$jscomp$75$$] = function($target$jscomp$103$$) {
      if ($target$jscomp$103$$ instanceof $WeakMapMembership$$) {
        return $target$jscomp$103$$;
      }
      Object.isExtensible($target$jscomp$103$$) && $insert$$($target$jscomp$103$$);
      return $prev$$($target$jscomp$103$$);
    });
  }
  if (function() {
    if (!$NativeWeakMap$$ || !Object.seal) {
      return !1;
    }
    try {
      var $x$jscomp$95$$ = Object.seal({}), $y$jscomp$78$$ = Object.seal({}), $map$$ = new $NativeWeakMap$$([[$x$jscomp$95$$, 2], [$y$jscomp$78$$, 3]]);
      if (2 != $map$$.get($x$jscomp$95$$) || 3 != $map$$.get($y$jscomp$78$$)) {
        return !1;
      }
      $map$$.delete($x$jscomp$95$$);
      $map$$.set($y$jscomp$78$$, 4);
      return !$map$$.has($x$jscomp$95$$) && 4 == $map$$.get($y$jscomp$78$$);
    } catch ($err$jscomp$4$$) {
      return !1;
    }
  }()) {
    return $NativeWeakMap$$;
  }
  var $prop$jscomp$3$$ = "$jscomp_hidden_" + Math.random();
  $patch$$("freeze");
  $patch$$("preventExtensions");
  $patch$$("seal");
  var $index$jscomp$102$$ = 0;
  $PolyfillWeakMap$$.prototype.set = function($key$jscomp$43$$, $value$jscomp$104$$) {
    if (!$isValidKey$$($key$jscomp$43$$)) {
      throw Error("Invalid WeakMap key");
    }
    $insert$$($key$jscomp$43$$);
    if (!$$jscomp$owns$$($key$jscomp$43$$, $prop$jscomp$3$$)) {
      throw Error("WeakMap key fail: " + $key$jscomp$43$$);
    }
    $key$jscomp$43$$[$prop$jscomp$3$$][this.$g$] = $value$jscomp$104$$;
    return this;
  };
  $PolyfillWeakMap$$.prototype.get = function($key$jscomp$44$$) {
    return $isValidKey$$($key$jscomp$44$$) && $$jscomp$owns$$($key$jscomp$44$$, $prop$jscomp$3$$) ? $key$jscomp$44$$[$prop$jscomp$3$$][this.$g$] : void 0;
  };
  $PolyfillWeakMap$$.prototype.has = function($key$jscomp$45$$) {
    return $isValidKey$$($key$jscomp$45$$) && $$jscomp$owns$$($key$jscomp$45$$, $prop$jscomp$3$$) && $$jscomp$owns$$($key$jscomp$45$$[$prop$jscomp$3$$], this.$g$);
  };
  $PolyfillWeakMap$$.prototype.delete = function($key$jscomp$46$$) {
    return $isValidKey$$($key$jscomp$46$$) && $$jscomp$owns$$($key$jscomp$46$$, $prop$jscomp$3$$) && $$jscomp$owns$$($key$jscomp$46$$[$prop$jscomp$3$$], this.$g$) ? delete $key$jscomp$46$$[$prop$jscomp$3$$][this.$g$] : !1;
  };
  return $PolyfillWeakMap$$;
});
$$jscomp$polyfill$$("Map", function($NativeMap$$) {
  function $createHead$$() {
    var $head$$ = {};
    return $head$$.$previous$ = $head$$.next = $head$$.head = $head$$;
  }
  function $makeIterator$$($map$jscomp$3$$, $func$jscomp$3$$) {
    var $entry$jscomp$8$$ = $map$jscomp$3$$[1];
    return $$jscomp$iteratorPrototype$$(function() {
      if ($entry$jscomp$8$$) {
        for (; $entry$jscomp$8$$.head != $map$jscomp$3$$[1];) {
          $entry$jscomp$8$$ = $entry$jscomp$8$$.$previous$;
        }
        for (; $entry$jscomp$8$$.next != $entry$jscomp$8$$.head;) {
          return $entry$jscomp$8$$ = $entry$jscomp$8$$.next, {done:!1, value:$func$jscomp$3$$($entry$jscomp$8$$)};
        }
        $entry$jscomp$8$$ = null;
      }
      return {done:!0, value:void 0};
    });
  }
  function $maybeGetEntry$$($index$jscomp$103_map$jscomp$2$$, $key$jscomp$52$$) {
    var $id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$ = $key$jscomp$52$$ && typeof $key$jscomp$52$$;
    "object" == $id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$ || "function" == $id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$ ? $idMap$$.has($key$jscomp$52$$) ? $id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$ = $idMap$$.get($key$jscomp$52$$) : ($id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$ = "" + ++$mapIndex$$, $idMap$$.set($key$jscomp$52$$, $id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$)) : $id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$ = 
    "p_" + $key$jscomp$52$$;
    var $list$$ = $index$jscomp$103_map$jscomp$2$$[0][$id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$];
    if ($list$$ && $$jscomp$owns$$($index$jscomp$103_map$jscomp$2$$[0], $id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$)) {
      for ($index$jscomp$103_map$jscomp$2$$ = 0; $index$jscomp$103_map$jscomp$2$$ < $list$$.length; $index$jscomp$103_map$jscomp$2$$++) {
        var $entry$jscomp$7$$ = $list$$[$index$jscomp$103_map$jscomp$2$$];
        if ($key$jscomp$52$$ !== $key$jscomp$52$$ && $entry$jscomp$7$$.key !== $entry$jscomp$7$$.key || $key$jscomp$52$$ === $entry$jscomp$7$$.key) {
          return {id:$id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$, list:$list$$, index:$index$jscomp$103_map$jscomp$2$$, $entry$:$entry$jscomp$7$$};
        }
      }
    }
    return {id:$id$jscomp$6_id$jscomp$inline_91_type$jscomp$inline_90$$, list:$list$$, index:-1, $entry$:void 0};
  }
  function $PolyfillMap$$($iter$jscomp$3_opt_iterable$jscomp$5$$) {
    this[0] = {};
    this[1] = $createHead$$();
    this.size = 0;
    if ($iter$jscomp$3_opt_iterable$jscomp$5$$) {
      $iter$jscomp$3_opt_iterable$jscomp$5$$ = $$jscomp$makeIterator$$($iter$jscomp$3_opt_iterable$jscomp$5$$);
      for (var $entry$jscomp$1_item$jscomp$23$$; !($entry$jscomp$1_item$jscomp$23$$ = $iter$jscomp$3_opt_iterable$jscomp$5$$.next()).done;) {
        $entry$jscomp$1_item$jscomp$23$$ = $entry$jscomp$1_item$jscomp$23$$.value, this.set($entry$jscomp$1_item$jscomp$23$$[0], $entry$jscomp$1_item$jscomp$23$$[1]);
      }
    }
  }
  if (function() {
    if (!$NativeMap$$ || "function" != typeof $NativeMap$$ || !$NativeMap$$.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var $key$jscomp$47$$ = Object.seal({x:4}), $map$jscomp$1$$ = new $NativeMap$$($$jscomp$makeIterator$$([[$key$jscomp$47$$, "s"]]));
      if ("s" != $map$jscomp$1$$.get($key$jscomp$47$$) || 1 != $map$jscomp$1$$.size || $map$jscomp$1$$.get({x:4}) || $map$jscomp$1$$.set({x:4}, "t") != $map$jscomp$1$$ || 2 != $map$jscomp$1$$.size) {
        return !1;
      }
      var $iter$jscomp$2$$ = $map$jscomp$1$$.entries(), $item$jscomp$22$$ = $iter$jscomp$2$$.next();
      if ($item$jscomp$22$$.done || $item$jscomp$22$$.value[0] != $key$jscomp$47$$ || "s" != $item$jscomp$22$$.value[1]) {
        return !1;
      }
      $item$jscomp$22$$ = $iter$jscomp$2$$.next();
      return $item$jscomp$22$$.done || 4 != $item$jscomp$22$$.value[0].x || "t" != $item$jscomp$22$$.value[1] || !$iter$jscomp$2$$.next().done ? !1 : !0;
    } catch ($err$jscomp$5$$) {
      return !1;
    }
  }()) {
    return $NativeMap$$;
  }
  var $idMap$$ = new WeakMap();
  $PolyfillMap$$.prototype.set = function($key$jscomp$48$$, $value$jscomp$105$$) {
    $key$jscomp$48$$ = 0 === $key$jscomp$48$$ ? 0 : $key$jscomp$48$$;
    var $r$jscomp$1$$ = $maybeGetEntry$$(this, $key$jscomp$48$$);
    $r$jscomp$1$$.list || ($r$jscomp$1$$.list = this[0][$r$jscomp$1$$.id] = []);
    $r$jscomp$1$$.$entry$ ? $r$jscomp$1$$.$entry$.value = $value$jscomp$105$$ : ($r$jscomp$1$$.$entry$ = {next:this[1], $previous$:this[1].$previous$, head:this[1], key:$key$jscomp$48$$, value:$value$jscomp$105$$}, $r$jscomp$1$$.list.push($r$jscomp$1$$.$entry$), this[1].$previous$.next = $r$jscomp$1$$.$entry$, this[1].$previous$ = $r$jscomp$1$$.$entry$, this.size++);
    return this;
  };
  $PolyfillMap$$.prototype.delete = function($key$jscomp$49_r$jscomp$2$$) {
    $key$jscomp$49_r$jscomp$2$$ = $maybeGetEntry$$(this, $key$jscomp$49_r$jscomp$2$$);
    return $key$jscomp$49_r$jscomp$2$$.$entry$ && $key$jscomp$49_r$jscomp$2$$.list ? ($key$jscomp$49_r$jscomp$2$$.list.splice($key$jscomp$49_r$jscomp$2$$.index, 1), $key$jscomp$49_r$jscomp$2$$.list.length || delete this[0][$key$jscomp$49_r$jscomp$2$$.id], $key$jscomp$49_r$jscomp$2$$.$entry$.$previous$.next = $key$jscomp$49_r$jscomp$2$$.$entry$.next, $key$jscomp$49_r$jscomp$2$$.$entry$.next.$previous$ = $key$jscomp$49_r$jscomp$2$$.$entry$.$previous$, $key$jscomp$49_r$jscomp$2$$.$entry$.head = null, 
    this.size--, !0) : !1;
  };
  $PolyfillMap$$.prototype.clear = function() {
    this[0] = {};
    this[1] = this[1].$previous$ = $createHead$$();
    this.size = 0;
  };
  $PolyfillMap$$.prototype.has = function($key$jscomp$50$$) {
    return !!$maybeGetEntry$$(this, $key$jscomp$50$$).$entry$;
  };
  $PolyfillMap$$.prototype.get = function($entry$jscomp$2_key$jscomp$51$$) {
    return ($entry$jscomp$2_key$jscomp$51$$ = $maybeGetEntry$$(this, $entry$jscomp$2_key$jscomp$51$$).$entry$) && $entry$jscomp$2_key$jscomp$51$$.value;
  };
  $PolyfillMap$$.prototype.entries = function() {
    return $makeIterator$$(this, function($entry$jscomp$3$$) {
      return [$entry$jscomp$3$$.key, $entry$jscomp$3$$.value];
    });
  };
  $PolyfillMap$$.prototype.keys = function() {
    return $makeIterator$$(this, function($entry$jscomp$4$$) {
      return $entry$jscomp$4$$.key;
    });
  };
  $PolyfillMap$$.prototype.values = function() {
    return $makeIterator$$(this, function($entry$jscomp$5$$) {
      return $entry$jscomp$5$$.value;
    });
  };
  $PolyfillMap$$.prototype.forEach = function($callback$jscomp$67$$, $opt_thisArg$jscomp$12$$) {
    for (var $iter$jscomp$4$$ = this.entries(), $entry$jscomp$6_item$jscomp$24$$; !($entry$jscomp$6_item$jscomp$24$$ = $iter$jscomp$4$$.next()).done;) {
      $entry$jscomp$6_item$jscomp$24$$ = $entry$jscomp$6_item$jscomp$24$$.value, $callback$jscomp$67$$.call($opt_thisArg$jscomp$12$$, $entry$jscomp$6_item$jscomp$24$$[1], $entry$jscomp$6_item$jscomp$24$$[0], this);
    }
  };
  $PolyfillMap$$.prototype[Symbol.iterator] = $PolyfillMap$$.prototype.entries;
  var $mapIndex$$ = 0;
  return $PolyfillMap$$;
});
$$jscomp$polyfill$$("Array.prototype.find", function($orig$jscomp$9$$) {
  return $orig$jscomp$9$$ ? $orig$jscomp$9$$ : function($JSCompiler_object_inline_v_536_callback$jscomp$69$$, $opt_thisArg$jscomp$13$$) {
    a: {
      var $array$jscomp$inline_93$$ = this;
      $array$jscomp$inline_93$$ instanceof String && ($array$jscomp$inline_93$$ = String($array$jscomp$inline_93$$));
      for (var $len$jscomp$inline_96$$ = $array$jscomp$inline_93$$.length, $i$jscomp$inline_97$$ = 0; $i$jscomp$inline_97$$ < $len$jscomp$inline_96$$; $i$jscomp$inline_97$$++) {
        var $value$jscomp$inline_98$$ = $array$jscomp$inline_93$$[$i$jscomp$inline_97$$];
        if ($JSCompiler_object_inline_v_536_callback$jscomp$69$$.call($opt_thisArg$jscomp$13$$, $value$jscomp$inline_98$$, $i$jscomp$inline_97$$, $array$jscomp$inline_93$$)) {
          $JSCompiler_object_inline_v_536_callback$jscomp$69$$ = $value$jscomp$inline_98$$;
          break a;
        }
      }
      $JSCompiler_object_inline_v_536_callback$jscomp$69$$ = void 0;
    }
    return $JSCompiler_object_inline_v_536_callback$jscomp$69$$;
  };
});
function $$jscomp$iteratorFromArray$$($array$jscomp$9$$, $transform$jscomp$1$$) {
  $array$jscomp$9$$ instanceof String && ($array$jscomp$9$$ += "");
  var $i$jscomp$14$$ = 0, $done$$ = !1, $iter$jscomp$5$$ = {next:function() {
    if (!$done$$ && $i$jscomp$14$$ < $array$jscomp$9$$.length) {
      var $index$jscomp$104$$ = $i$jscomp$14$$++;
      return {value:$transform$jscomp$1$$($index$jscomp$104$$, $array$jscomp$9$$[$index$jscomp$104$$]), done:!1};
    }
    $done$$ = !0;
    return {done:!0, value:void 0};
  }};
  $iter$jscomp$5$$[Symbol.iterator] = function() {
    return $iter$jscomp$5$$;
  };
  return $iter$jscomp$5$$;
}
$$jscomp$polyfill$$("Array.prototype.values", function($orig$jscomp$10$$) {
  return $orig$jscomp$10$$ ? $orig$jscomp$10$$ : function() {
    return $$jscomp$iteratorFromArray$$(this, function($k$$, $v$jscomp$1$$) {
      return $v$jscomp$1$$;
    });
  };
});
$$jscomp$polyfill$$("Array.prototype.keys", function($orig$jscomp$11$$) {
  return $orig$jscomp$11$$ ? $orig$jscomp$11$$ : function() {
    return $$jscomp$iteratorFromArray$$(this, function($i$jscomp$15$$) {
      return $i$jscomp$15$$;
    });
  };
});
$$jscomp$polyfill$$("Array.prototype.entries", function($orig$jscomp$18$$) {
  return $orig$jscomp$18$$ ? $orig$jscomp$18$$ : function() {
    return $$jscomp$iteratorFromArray$$(this, function($i$jscomp$18$$, $v$jscomp$2$$) {
      return [$i$jscomp$18$$, $v$jscomp$2$$];
    });
  };
});
$$jscomp$polyfill$$("Set", function($NativeSet$$) {
  function $PolyfillSet$$($iter$jscomp$7_opt_iterable$jscomp$6$$) {
    this.$g$ = new Map();
    if ($iter$jscomp$7_opt_iterable$jscomp$6$$) {
      $iter$jscomp$7_opt_iterable$jscomp$6$$ = $$jscomp$makeIterator$$($iter$jscomp$7_opt_iterable$jscomp$6$$);
      for (var $entry$jscomp$9$$; !($entry$jscomp$9$$ = $iter$jscomp$7_opt_iterable$jscomp$6$$.next()).done;) {
        this.add($entry$jscomp$9$$.value);
      }
    }
    this.size = this.$g$.size;
  }
  if (function() {
    if (!$NativeSet$$ || "function" != typeof $NativeSet$$ || !$NativeSet$$.prototype.entries || "function" != typeof Object.seal) {
      return !1;
    }
    try {
      var $value$jscomp$107$$ = Object.seal({x:4}), $set$$ = new $NativeSet$$($$jscomp$makeIterator$$([$value$jscomp$107$$]));
      if (!$set$$.has($value$jscomp$107$$) || 1 != $set$$.size || $set$$.add($value$jscomp$107$$) != $set$$ || 1 != $set$$.size || $set$$.add({x:4}) != $set$$ || 2 != $set$$.size) {
        return !1;
      }
      var $iter$jscomp$6$$ = $set$$.entries(), $item$jscomp$25$$ = $iter$jscomp$6$$.next();
      if ($item$jscomp$25$$.done || $item$jscomp$25$$.value[0] != $value$jscomp$107$$ || $item$jscomp$25$$.value[1] != $value$jscomp$107$$) {
        return !1;
      }
      $item$jscomp$25$$ = $iter$jscomp$6$$.next();
      return $item$jscomp$25$$.done || $item$jscomp$25$$.value[0] == $value$jscomp$107$$ || 4 != $item$jscomp$25$$.value[0].x || $item$jscomp$25$$.value[1] != $item$jscomp$25$$.value[0] ? !1 : $iter$jscomp$6$$.next().done;
    } catch ($err$jscomp$6$$) {
      return !1;
    }
  }()) {
    return $NativeSet$$;
  }
  $PolyfillSet$$.prototype.add = function($value$jscomp$108$$) {
    $value$jscomp$108$$ = 0 === $value$jscomp$108$$ ? 0 : $value$jscomp$108$$;
    this.$g$.set($value$jscomp$108$$, $value$jscomp$108$$);
    this.size = this.$g$.size;
    return this;
  };
  $PolyfillSet$$.prototype.delete = function($result$jscomp$6_value$jscomp$109$$) {
    $result$jscomp$6_value$jscomp$109$$ = this.$g$.delete($result$jscomp$6_value$jscomp$109$$);
    this.size = this.$g$.size;
    return $result$jscomp$6_value$jscomp$109$$;
  };
  $PolyfillSet$$.prototype.clear = function() {
    this.$g$.clear();
    this.size = 0;
  };
  $PolyfillSet$$.prototype.has = function($value$jscomp$110$$) {
    return this.$g$.has($value$jscomp$110$$);
  };
  $PolyfillSet$$.prototype.entries = function() {
    return this.$g$.entries();
  };
  $PolyfillSet$$.prototype.values = function() {
    return this.$g$.values();
  };
  $PolyfillSet$$.prototype.keys = $PolyfillSet$$.prototype.values;
  $PolyfillSet$$.prototype[Symbol.iterator] = $PolyfillSet$$.prototype.values;
  $PolyfillSet$$.prototype.forEach = function($callback$jscomp$70$$, $opt_thisArg$jscomp$14$$) {
    var $set$jscomp$1$$ = this;
    this.$g$.forEach(function($value$jscomp$111$$) {
      return $callback$jscomp$70$$.call($opt_thisArg$jscomp$14$$, $value$jscomp$111$$, $value$jscomp$111$$, $set$jscomp$1$$);
    });
  };
  return $PolyfillSet$$;
});
$$jscomp$polyfill$$("Array.from", function($orig$jscomp$19$$) {
  return $orig$jscomp$19$$ ? $orig$jscomp$19$$ : function($arrayLike$jscomp$1$$, $opt_mapFn$jscomp$1$$, $opt_thisArg$jscomp$15$$) {
    $opt_mapFn$jscomp$1$$ = null != $opt_mapFn$jscomp$1$$ ? $opt_mapFn$jscomp$1$$ : function($x$jscomp$97$$) {
      return $x$jscomp$97$$;
    };
    var $result$jscomp$7$$ = [], $iteratorFunction$jscomp$1_len$jscomp$1_next$jscomp$1$$ = "undefined" != typeof Symbol && Symbol.iterator && $arrayLike$jscomp$1$$[Symbol.iterator];
    if ("function" == typeof $iteratorFunction$jscomp$1_len$jscomp$1_next$jscomp$1$$) {
      $arrayLike$jscomp$1$$ = $iteratorFunction$jscomp$1_len$jscomp$1_next$jscomp$1$$.call($arrayLike$jscomp$1$$);
      for (var $i$jscomp$19_k$jscomp$1$$ = 0; !($iteratorFunction$jscomp$1_len$jscomp$1_next$jscomp$1$$ = $arrayLike$jscomp$1$$.next()).done;) {
        $result$jscomp$7$$.push($opt_mapFn$jscomp$1$$.call($opt_thisArg$jscomp$15$$, $iteratorFunction$jscomp$1_len$jscomp$1_next$jscomp$1$$.value, $i$jscomp$19_k$jscomp$1$$++));
      }
    } else {
      for ($iteratorFunction$jscomp$1_len$jscomp$1_next$jscomp$1$$ = $arrayLike$jscomp$1$$.length, $i$jscomp$19_k$jscomp$1$$ = 0; $i$jscomp$19_k$jscomp$1$$ < $iteratorFunction$jscomp$1_len$jscomp$1_next$jscomp$1$$; $i$jscomp$19_k$jscomp$1$$++) {
        $result$jscomp$7$$.push($opt_mapFn$jscomp$1$$.call($opt_thisArg$jscomp$15$$, $arrayLike$jscomp$1$$[$i$jscomp$19_k$jscomp$1$$], $i$jscomp$19_k$jscomp$1$$));
      }
    }
    return $result$jscomp$7$$;
  };
});
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var $goog$$ = $goog$$ || {}, $goog$global$$ = this || self;
function $goog$isArrayLike$$($val$jscomp$1$$) {
  var $s$jscomp$inline_105_type$jscomp$165$$ = typeof $val$jscomp$1$$;
  $s$jscomp$inline_105_type$jscomp$165$$ = "object" != $s$jscomp$inline_105_type$jscomp$165$$ ? $s$jscomp$inline_105_type$jscomp$165$$ : $val$jscomp$1$$ ? Array.isArray($val$jscomp$1$$) ? "array" : $s$jscomp$inline_105_type$jscomp$165$$ : "null";
  return "array" == $s$jscomp$inline_105_type$jscomp$165$$ || "object" == $s$jscomp$inline_105_type$jscomp$165$$ && "number" == typeof $val$jscomp$1$$.length;
}
function $goog$isObject$$($val$jscomp$3$$) {
  var $type$jscomp$166$$ = typeof $val$jscomp$3$$;
  return "object" == $type$jscomp$166$$ && null != $val$jscomp$3$$ || "function" == $type$jscomp$166$$;
}
function $goog$bindNative_$$($fn$jscomp$2$$, $selfObj$jscomp$2$$, $var_args$jscomp$36$$) {
  return $fn$jscomp$2$$.call.apply($fn$jscomp$2$$.bind, arguments);
}
function $goog$bindJs_$$($fn$jscomp$3$$, $selfObj$jscomp$3$$, $var_args$jscomp$37$$) {
  if (!$fn$jscomp$3$$) {
    throw Error();
  }
  if (2 < arguments.length) {
    var $boundArgs$$ = Array.prototype.slice.call(arguments, 2);
    return function() {
      var $newArgs$$ = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply($newArgs$$, $boundArgs$$);
      return $fn$jscomp$3$$.apply($selfObj$jscomp$3$$, $newArgs$$);
    };
  }
  return function() {
    return $fn$jscomp$3$$.apply($selfObj$jscomp$3$$, arguments);
  };
}
function $goog$bind$$($fn$jscomp$4$$, $selfObj$jscomp$4$$, $var_args$jscomp$38$$) {
  $goog$bind$$ = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? $goog$bindNative_$$ : $goog$bindJs_$$;
  return $goog$bind$$.apply(null, arguments);
}
function $goog$partial$$($fn$jscomp$5$$, $var_args$jscomp$39$$) {
  var $args$jscomp$3$$ = Array.prototype.slice.call(arguments, 1);
  return function() {
    var $newArgs$jscomp$1$$ = $args$jscomp$3$$.slice();
    $newArgs$jscomp$1$$.push.apply($newArgs$jscomp$1$$, arguments);
    return $fn$jscomp$5$$.apply(this, $newArgs$jscomp$1$$);
  };
}
function $goog$inherits$$($childCtor$jscomp$1$$, $parentCtor$jscomp$1$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.$superClass_$ = $parentCtor$jscomp$1$$.prototype;
  $childCtor$jscomp$1$$.prototype = new $tempCtor$$();
  $childCtor$jscomp$1$$.prototype.constructor = $childCtor$jscomp$1$$;
  $childCtor$jscomp$1$$.$base$ = function($me$$, $methodName$$, $var_args$jscomp$40$$) {
    for (var $args$jscomp$4$$ = Array(arguments.length - 2), $i$jscomp$23$$ = 2; $i$jscomp$23$$ < arguments.length; $i$jscomp$23$$++) {
      $args$jscomp$4$$[$i$jscomp$23$$ - 2] = arguments[$i$jscomp$23$$];
    }
    return $parentCtor$jscomp$1$$.prototype[$methodName$$].apply($me$$, $args$jscomp$4$$);
  };
}
;function $goog$crypt$Hash$$() {
  this.blockSize = -1;
}
;function $goog$crypt$Md5$$() {
  this.blockSize = -1;
  this.blockSize = 64;
  this.$g$ = Array(4);
  this.$m$ = Array(this.blockSize);
  this.$i$ = this.$h$ = 0;
  this.reset();
}
$goog$inherits$$($goog$crypt$Md5$$, $goog$crypt$Hash$$);
$goog$crypt$Md5$$.prototype.reset = function() {
  this.$g$[0] = 1732584193;
  this.$g$[1] = 4023233417;
  this.$g$[2] = 2562383102;
  this.$g$[3] = 271733878;
  this.$i$ = this.$h$ = 0;
};
function $JSCompiler_StaticMethods_compress_$$($JSCompiler_StaticMethods_compress_$self$$, $A_buf$$, $B_opt_offset$jscomp$13$$) {
  $B_opt_offset$jscomp$13$$ || ($B_opt_offset$jscomp$13$$ = 0);
  var $X$$ = Array(16);
  if ("string" === typeof $A_buf$$) {
    for (var $C_i$jscomp$34$$ = 0; 16 > $C_i$jscomp$34$$; ++$C_i$jscomp$34$$) {
      $X$$[$C_i$jscomp$34$$] = $A_buf$$.charCodeAt($B_opt_offset$jscomp$13$$++) | $A_buf$$.charCodeAt($B_opt_offset$jscomp$13$$++) << 8 | $A_buf$$.charCodeAt($B_opt_offset$jscomp$13$$++) << 16 | $A_buf$$.charCodeAt($B_opt_offset$jscomp$13$$++) << 24;
    }
  } else {
    for ($C_i$jscomp$34$$ = 0; 16 > $C_i$jscomp$34$$; ++$C_i$jscomp$34$$) {
      $X$$[$C_i$jscomp$34$$] = $A_buf$$[$B_opt_offset$jscomp$13$$++] | $A_buf$$[$B_opt_offset$jscomp$13$$++] << 8 | $A_buf$$[$B_opt_offset$jscomp$13$$++] << 16 | $A_buf$$[$B_opt_offset$jscomp$13$$++] << 24;
    }
  }
  $A_buf$$ = $JSCompiler_StaticMethods_compress_$self$$.$g$[0];
  $B_opt_offset$jscomp$13$$ = $JSCompiler_StaticMethods_compress_$self$$.$g$[1];
  $C_i$jscomp$34$$ = $JSCompiler_StaticMethods_compress_$self$$.$g$[2];
  var $D$$ = $JSCompiler_StaticMethods_compress_$self$$.$g$[3];
  var $sum$$ = $A_buf$$ + ($D$$ ^ $B_opt_offset$jscomp$13$$ & ($C_i$jscomp$34$$ ^ $D$$)) + $X$$[0] + 3614090360 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 7 & 4294967295 | $sum$$ >>> 25);
  $sum$$ = $D$$ + ($C_i$jscomp$34$$ ^ $A_buf$$ & ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$)) + $X$$[1] + 3905402710 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 12 & 4294967295 | $sum$$ >>> 20);
  $sum$$ = $C_i$jscomp$34$$ + ($B_opt_offset$jscomp$13$$ ^ $D$$ & ($A_buf$$ ^ $B_opt_offset$jscomp$13$$)) + $X$$[2] + 606105819 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 17 & 4294967295 | $sum$$ >>> 15);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($A_buf$$ ^ $C_i$jscomp$34$$ & ($D$$ ^ $A_buf$$)) + $X$$[3] + 3250441966 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 22 & 4294967295 | $sum$$ >>> 10);
  $sum$$ = $A_buf$$ + ($D$$ ^ $B_opt_offset$jscomp$13$$ & ($C_i$jscomp$34$$ ^ $D$$)) + $X$$[4] + 4118548399 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 7 & 4294967295 | $sum$$ >>> 25);
  $sum$$ = $D$$ + ($C_i$jscomp$34$$ ^ $A_buf$$ & ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$)) + $X$$[5] + 1200080426 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 12 & 4294967295 | $sum$$ >>> 20);
  $sum$$ = $C_i$jscomp$34$$ + ($B_opt_offset$jscomp$13$$ ^ $D$$ & ($A_buf$$ ^ $B_opt_offset$jscomp$13$$)) + $X$$[6] + 2821735955 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 17 & 4294967295 | $sum$$ >>> 15);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($A_buf$$ ^ $C_i$jscomp$34$$ & ($D$$ ^ $A_buf$$)) + $X$$[7] + 4249261313 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 22 & 4294967295 | $sum$$ >>> 10);
  $sum$$ = $A_buf$$ + ($D$$ ^ $B_opt_offset$jscomp$13$$ & ($C_i$jscomp$34$$ ^ $D$$)) + $X$$[8] + 1770035416 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 7 & 4294967295 | $sum$$ >>> 25);
  $sum$$ = $D$$ + ($C_i$jscomp$34$$ ^ $A_buf$$ & ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$)) + $X$$[9] + 2336552879 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 12 & 4294967295 | $sum$$ >>> 20);
  $sum$$ = $C_i$jscomp$34$$ + ($B_opt_offset$jscomp$13$$ ^ $D$$ & ($A_buf$$ ^ $B_opt_offset$jscomp$13$$)) + $X$$[10] + 4294925233 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 17 & 4294967295 | $sum$$ >>> 15);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($A_buf$$ ^ $C_i$jscomp$34$$ & ($D$$ ^ $A_buf$$)) + $X$$[11] + 2304563134 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 22 & 4294967295 | $sum$$ >>> 10);
  $sum$$ = $A_buf$$ + ($D$$ ^ $B_opt_offset$jscomp$13$$ & ($C_i$jscomp$34$$ ^ $D$$)) + $X$$[12] + 1804603682 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 7 & 4294967295 | $sum$$ >>> 25);
  $sum$$ = $D$$ + ($C_i$jscomp$34$$ ^ $A_buf$$ & ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$)) + $X$$[13] + 4254626195 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 12 & 4294967295 | $sum$$ >>> 20);
  $sum$$ = $C_i$jscomp$34$$ + ($B_opt_offset$jscomp$13$$ ^ $D$$ & ($A_buf$$ ^ $B_opt_offset$jscomp$13$$)) + $X$$[14] + 2792965006 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 17 & 4294967295 | $sum$$ >>> 15);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($A_buf$$ ^ $C_i$jscomp$34$$ & ($D$$ ^ $A_buf$$)) + $X$$[15] + 1236535329 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 22 & 4294967295 | $sum$$ >>> 10);
  $sum$$ = $A_buf$$ + ($C_i$jscomp$34$$ ^ $D$$ & ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$)) + $X$$[1] + 4129170786 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 5 & 4294967295 | $sum$$ >>> 27);
  $sum$$ = $D$$ + ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$ & ($A_buf$$ ^ $B_opt_offset$jscomp$13$$)) + $X$$[6] + 3225465664 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 9 & 4294967295 | $sum$$ >>> 23);
  $sum$$ = $C_i$jscomp$34$$ + ($A_buf$$ ^ $B_opt_offset$jscomp$13$$ & ($D$$ ^ $A_buf$$)) + $X$$[11] + 643717713 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 14 & 4294967295 | $sum$$ >>> 18);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($D$$ ^ $A_buf$$ & ($C_i$jscomp$34$$ ^ $D$$)) + $X$$[0] + 3921069994 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 20 & 4294967295 | $sum$$ >>> 12);
  $sum$$ = $A_buf$$ + ($C_i$jscomp$34$$ ^ $D$$ & ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$)) + $X$$[5] + 3593408605 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 5 & 4294967295 | $sum$$ >>> 27);
  $sum$$ = $D$$ + ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$ & ($A_buf$$ ^ $B_opt_offset$jscomp$13$$)) + $X$$[10] + 38016083 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 9 & 4294967295 | $sum$$ >>> 23);
  $sum$$ = $C_i$jscomp$34$$ + ($A_buf$$ ^ $B_opt_offset$jscomp$13$$ & ($D$$ ^ $A_buf$$)) + $X$$[15] + 3634488961 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 14 & 4294967295 | $sum$$ >>> 18);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($D$$ ^ $A_buf$$ & ($C_i$jscomp$34$$ ^ $D$$)) + $X$$[4] + 3889429448 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 20 & 4294967295 | $sum$$ >>> 12);
  $sum$$ = $A_buf$$ + ($C_i$jscomp$34$$ ^ $D$$ & ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$)) + $X$$[9] + 568446438 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 5 & 4294967295 | $sum$$ >>> 27);
  $sum$$ = $D$$ + ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$ & ($A_buf$$ ^ $B_opt_offset$jscomp$13$$)) + $X$$[14] + 3275163606 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 9 & 4294967295 | $sum$$ >>> 23);
  $sum$$ = $C_i$jscomp$34$$ + ($A_buf$$ ^ $B_opt_offset$jscomp$13$$ & ($D$$ ^ $A_buf$$)) + $X$$[3] + 4107603335 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 14 & 4294967295 | $sum$$ >>> 18);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($D$$ ^ $A_buf$$ & ($C_i$jscomp$34$$ ^ $D$$)) + $X$$[8] + 1163531501 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 20 & 4294967295 | $sum$$ >>> 12);
  $sum$$ = $A_buf$$ + ($C_i$jscomp$34$$ ^ $D$$ & ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$)) + $X$$[13] + 2850285829 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 5 & 4294967295 | $sum$$ >>> 27);
  $sum$$ = $D$$ + ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$ & ($A_buf$$ ^ $B_opt_offset$jscomp$13$$)) + $X$$[2] + 4243563512 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 9 & 4294967295 | $sum$$ >>> 23);
  $sum$$ = $C_i$jscomp$34$$ + ($A_buf$$ ^ $B_opt_offset$jscomp$13$$ & ($D$$ ^ $A_buf$$)) + $X$$[7] + 1735328473 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 14 & 4294967295 | $sum$$ >>> 18);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($D$$ ^ $A_buf$$ & ($C_i$jscomp$34$$ ^ $D$$)) + $X$$[12] + 2368359562 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 20 & 4294967295 | $sum$$ >>> 12);
  $sum$$ = $A_buf$$ + ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$ ^ $D$$) + $X$$[5] + 4294588738 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 4 & 4294967295 | $sum$$ >>> 28);
  $sum$$ = $D$$ + ($A_buf$$ ^ $B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$) + $X$$[8] + 2272392833 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 11 & 4294967295 | $sum$$ >>> 21);
  $sum$$ = $C_i$jscomp$34$$ + ($D$$ ^ $A_buf$$ ^ $B_opt_offset$jscomp$13$$) + $X$$[11] + 1839030562 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 16 & 4294967295 | $sum$$ >>> 16);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($C_i$jscomp$34$$ ^ $D$$ ^ $A_buf$$) + $X$$[14] + 4259657740 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 23 & 4294967295 | $sum$$ >>> 9);
  $sum$$ = $A_buf$$ + ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$ ^ $D$$) + $X$$[1] + 2763975236 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 4 & 4294967295 | $sum$$ >>> 28);
  $sum$$ = $D$$ + ($A_buf$$ ^ $B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$) + $X$$[4] + 1272893353 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 11 & 4294967295 | $sum$$ >>> 21);
  $sum$$ = $C_i$jscomp$34$$ + ($D$$ ^ $A_buf$$ ^ $B_opt_offset$jscomp$13$$) + $X$$[7] + 4139469664 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 16 & 4294967295 | $sum$$ >>> 16);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($C_i$jscomp$34$$ ^ $D$$ ^ $A_buf$$) + $X$$[10] + 3200236656 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 23 & 4294967295 | $sum$$ >>> 9);
  $sum$$ = $A_buf$$ + ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$ ^ $D$$) + $X$$[13] + 681279174 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 4 & 4294967295 | $sum$$ >>> 28);
  $sum$$ = $D$$ + ($A_buf$$ ^ $B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$) + $X$$[0] + 3936430074 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 11 & 4294967295 | $sum$$ >>> 21);
  $sum$$ = $C_i$jscomp$34$$ + ($D$$ ^ $A_buf$$ ^ $B_opt_offset$jscomp$13$$) + $X$$[3] + 3572445317 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 16 & 4294967295 | $sum$$ >>> 16);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($C_i$jscomp$34$$ ^ $D$$ ^ $A_buf$$) + $X$$[6] + 76029189 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 23 & 4294967295 | $sum$$ >>> 9);
  $sum$$ = $A_buf$$ + ($B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$ ^ $D$$) + $X$$[9] + 3654602809 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 4 & 4294967295 | $sum$$ >>> 28);
  $sum$$ = $D$$ + ($A_buf$$ ^ $B_opt_offset$jscomp$13$$ ^ $C_i$jscomp$34$$) + $X$$[12] + 3873151461 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 11 & 4294967295 | $sum$$ >>> 21);
  $sum$$ = $C_i$jscomp$34$$ + ($D$$ ^ $A_buf$$ ^ $B_opt_offset$jscomp$13$$) + $X$$[15] + 530742520 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 16 & 4294967295 | $sum$$ >>> 16);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($C_i$jscomp$34$$ ^ $D$$ ^ $A_buf$$) + $X$$[2] + 3299628645 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 23 & 4294967295 | $sum$$ >>> 9);
  $sum$$ = $A_buf$$ + ($C_i$jscomp$34$$ ^ ($B_opt_offset$jscomp$13$$ | ~$D$$)) + $X$$[0] + 4096336452 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 6 & 4294967295 | $sum$$ >>> 26);
  $sum$$ = $D$$ + ($B_opt_offset$jscomp$13$$ ^ ($A_buf$$ | ~$C_i$jscomp$34$$)) + $X$$[7] + 1126891415 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 10 & 4294967295 | $sum$$ >>> 22);
  $sum$$ = $C_i$jscomp$34$$ + ($A_buf$$ ^ ($D$$ | ~$B_opt_offset$jscomp$13$$)) + $X$$[14] + 2878612391 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 15 & 4294967295 | $sum$$ >>> 17);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($D$$ ^ ($C_i$jscomp$34$$ | ~$A_buf$$)) + $X$$[5] + 4237533241 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 21 & 4294967295 | $sum$$ >>> 11);
  $sum$$ = $A_buf$$ + ($C_i$jscomp$34$$ ^ ($B_opt_offset$jscomp$13$$ | ~$D$$)) + $X$$[12] + 1700485571 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 6 & 4294967295 | $sum$$ >>> 26);
  $sum$$ = $D$$ + ($B_opt_offset$jscomp$13$$ ^ ($A_buf$$ | ~$C_i$jscomp$34$$)) + $X$$[3] + 2399980690 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 10 & 4294967295 | $sum$$ >>> 22);
  $sum$$ = $C_i$jscomp$34$$ + ($A_buf$$ ^ ($D$$ | ~$B_opt_offset$jscomp$13$$)) + $X$$[10] + 4293915773 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 15 & 4294967295 | $sum$$ >>> 17);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($D$$ ^ ($C_i$jscomp$34$$ | ~$A_buf$$)) + $X$$[1] + 2240044497 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 21 & 4294967295 | $sum$$ >>> 11);
  $sum$$ = $A_buf$$ + ($C_i$jscomp$34$$ ^ ($B_opt_offset$jscomp$13$$ | ~$D$$)) + $X$$[8] + 1873313359 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 6 & 4294967295 | $sum$$ >>> 26);
  $sum$$ = $D$$ + ($B_opt_offset$jscomp$13$$ ^ ($A_buf$$ | ~$C_i$jscomp$34$$)) + $X$$[15] + 4264355552 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 10 & 4294967295 | $sum$$ >>> 22);
  $sum$$ = $C_i$jscomp$34$$ + ($A_buf$$ ^ ($D$$ | ~$B_opt_offset$jscomp$13$$)) + $X$$[6] + 2734768916 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 15 & 4294967295 | $sum$$ >>> 17);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($D$$ ^ ($C_i$jscomp$34$$ | ~$A_buf$$)) + $X$$[13] + 1309151649 & 4294967295;
  $B_opt_offset$jscomp$13$$ = $C_i$jscomp$34$$ + ($sum$$ << 21 & 4294967295 | $sum$$ >>> 11);
  $sum$$ = $A_buf$$ + ($C_i$jscomp$34$$ ^ ($B_opt_offset$jscomp$13$$ | ~$D$$)) + $X$$[4] + 4149444226 & 4294967295;
  $A_buf$$ = $B_opt_offset$jscomp$13$$ + ($sum$$ << 6 & 4294967295 | $sum$$ >>> 26);
  $sum$$ = $D$$ + ($B_opt_offset$jscomp$13$$ ^ ($A_buf$$ | ~$C_i$jscomp$34$$)) + $X$$[11] + 3174756917 & 4294967295;
  $D$$ = $A_buf$$ + ($sum$$ << 10 & 4294967295 | $sum$$ >>> 22);
  $sum$$ = $C_i$jscomp$34$$ + ($A_buf$$ ^ ($D$$ | ~$B_opt_offset$jscomp$13$$)) + $X$$[2] + 718787259 & 4294967295;
  $C_i$jscomp$34$$ = $D$$ + ($sum$$ << 15 & 4294967295 | $sum$$ >>> 17);
  $sum$$ = $B_opt_offset$jscomp$13$$ + ($D$$ ^ ($C_i$jscomp$34$$ | ~$A_buf$$)) + $X$$[9] + 3951481745 & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$g$[0] = $JSCompiler_StaticMethods_compress_$self$$.$g$[0] + $A_buf$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$g$[1] = $JSCompiler_StaticMethods_compress_$self$$.$g$[1] + ($C_i$jscomp$34$$ + ($sum$$ << 21 & 4294967295 | $sum$$ >>> 11)) & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$g$[2] = $JSCompiler_StaticMethods_compress_$self$$.$g$[2] + $C_i$jscomp$34$$ & 4294967295;
  $JSCompiler_StaticMethods_compress_$self$$.$g$[3] = $JSCompiler_StaticMethods_compress_$self$$.$g$[3] + $D$$ & 4294967295;
}
$goog$crypt$Md5$$.prototype.$j$ = function($bytes$jscomp$3$$, $opt_length$jscomp$15$$) {
  void 0 === $opt_length$jscomp$15$$ && ($opt_length$jscomp$15$$ = $bytes$jscomp$3$$.length);
  for (var $lengthMinusBlock$$ = $opt_length$jscomp$15$$ - this.blockSize, $block$$ = this.$m$, $blockLength$$ = this.$h$, $i$jscomp$35$$ = 0; $i$jscomp$35$$ < $opt_length$jscomp$15$$;) {
    if (0 == $blockLength$$) {
      for (; $i$jscomp$35$$ <= $lengthMinusBlock$$;) {
        $JSCompiler_StaticMethods_compress_$$(this, $bytes$jscomp$3$$, $i$jscomp$35$$), $i$jscomp$35$$ += this.blockSize;
      }
    }
    if ("string" === typeof $bytes$jscomp$3$$) {
      for (; $i$jscomp$35$$ < $opt_length$jscomp$15$$;) {
        if ($block$$[$blockLength$$++] = $bytes$jscomp$3$$.charCodeAt($i$jscomp$35$$++), $blockLength$$ == this.blockSize) {
          $JSCompiler_StaticMethods_compress_$$(this, $block$$);
          $blockLength$$ = 0;
          break;
        }
      }
    } else {
      for (; $i$jscomp$35$$ < $opt_length$jscomp$15$$;) {
        if ($block$$[$blockLength$$++] = $bytes$jscomp$3$$[$i$jscomp$35$$++], $blockLength$$ == this.blockSize) {
          $JSCompiler_StaticMethods_compress_$$(this, $block$$);
          $blockLength$$ = 0;
          break;
        }
      }
    }
  }
  this.$h$ = $blockLength$$;
  this.$i$ += $opt_length$jscomp$15$$;
};
$goog$crypt$Md5$$.prototype.$l$ = function() {
  var $digest_pad$$ = Array((56 > this.$h$ ? this.blockSize : 2 * this.blockSize) - this.$h$);
  $digest_pad$$[0] = 128;
  for (var $i$jscomp$36$$ = 1; $i$jscomp$36$$ < $digest_pad$$.length - 8; ++$i$jscomp$36$$) {
    $digest_pad$$[$i$jscomp$36$$] = 0;
  }
  var $n$jscomp$2_totalBits$$ = 8 * this.$i$;
  for ($i$jscomp$36$$ = $digest_pad$$.length - 8; $i$jscomp$36$$ < $digest_pad$$.length; ++$i$jscomp$36$$) {
    $digest_pad$$[$i$jscomp$36$$] = $n$jscomp$2_totalBits$$ & 255, $n$jscomp$2_totalBits$$ /= 256;
  }
  this.$j$($digest_pad$$);
  $digest_pad$$ = Array(16);
  for ($i$jscomp$36$$ = $n$jscomp$2_totalBits$$ = 0; 4 > $i$jscomp$36$$; ++$i$jscomp$36$$) {
    for (var $j$jscomp$3$$ = 0; 32 > $j$jscomp$3$$; $j$jscomp$3$$ += 8) {
      $digest_pad$$[$n$jscomp$2_totalBits$$++] = this.$g$[$i$jscomp$36$$] >>> $j$jscomp$3$$ & 255;
    }
  }
  return $digest_pad$$;
};
function $goog$Disposable$$() {
  this.$o$ = this.$o$;
  this.$v$ = this.$v$;
}
$goog$Disposable$$.prototype.$o$ = !1;
$goog$Disposable$$.prototype.$dispose$ = function() {
  this.$o$ || (this.$o$ = !0, this.$disposeInternal$());
};
$goog$Disposable$$.prototype.$disposeInternal$ = function() {
  if (this.$v$) {
    for (; this.$v$.length;) {
      this.$v$.shift()();
    }
  }
};
function $goog$events$Event$$($type$jscomp$171$$, $opt_target$$) {
  this.type = $type$jscomp$171$$;
  this.$g$ = this.target = $opt_target$$;
  this.defaultPrevented = !1;
}
$goog$events$Event$$.prototype.$h$ = function() {
  this.defaultPrevented = !0;
};
var $module$contents$goog$array_indexOf$$ = Array.prototype.indexOf ? function($arr$jscomp$2$$, $obj$jscomp$43$$) {
  return Array.prototype.indexOf.call($arr$jscomp$2$$, $obj$jscomp$43$$, void 0);
} : function($arr$jscomp$3$$, $obj$jscomp$44$$) {
  if ("string" === typeof $arr$jscomp$3$$) {
    return "string" !== typeof $obj$jscomp$44$$ || 1 != $obj$jscomp$44$$.length ? -1 : $arr$jscomp$3$$.indexOf($obj$jscomp$44$$, 0);
  }
  for (var $i$jscomp$42$$ = 0; $i$jscomp$42$$ < $arr$jscomp$3$$.length; $i$jscomp$42$$++) {
    if ($i$jscomp$42$$ in $arr$jscomp$3$$ && $arr$jscomp$3$$[$i$jscomp$42$$] === $obj$jscomp$44$$) {
      return $i$jscomp$42$$;
    }
  }
  return -1;
};
function $module$contents$goog$array_toArray$$($object$jscomp$6$$) {
  var $length$jscomp$16$$ = $object$jscomp$6$$.length;
  if (0 < $length$jscomp$16$$) {
    for (var $rv$jscomp$1$$ = Array($length$jscomp$16$$), $i$jscomp$60$$ = 0; $i$jscomp$60$$ < $length$jscomp$16$$; $i$jscomp$60$$++) {
      $rv$jscomp$1$$[$i$jscomp$60$$] = $object$jscomp$6$$[$i$jscomp$60$$];
    }
    return $rv$jscomp$1$$;
  }
  return [];
}
function $module$contents$goog$array_extend$$($arr1$$, $var_args$jscomp$57$$) {
  for (var $i$jscomp$61$$ = 1; $i$jscomp$61$$ < arguments.length; $i$jscomp$61$$++) {
    var $arr2$jscomp$8$$ = arguments[$i$jscomp$61$$];
    if ($goog$isArrayLike$$($arr2$jscomp$8$$)) {
      var $len1$$ = $arr1$$.length || 0, $len2$$ = $arr2$jscomp$8$$.length || 0;
      $arr1$$.length = $len1$$ + $len2$$;
      for (var $j$jscomp$4$$ = 0; $j$jscomp$4$$ < $len2$$; $j$jscomp$4$$++) {
        $arr1$$[$len1$$ + $j$jscomp$4$$] = $arr2$jscomp$8$$[$j$jscomp$4$$];
      }
    } else {
      $arr1$$.push($arr2$jscomp$8$$);
    }
  }
}
;var $goog$events$BrowserFeature$PASSIVE_EVENTS$$ = function() {
  if (!$goog$global$$.addEventListener || !Object.defineProperty) {
    return !1;
  }
  var $passive$$ = !1, $options$jscomp$65$$ = Object.defineProperty({}, "passive", {get:function() {
    $passive$$ = !0;
  }});
  try {
    var $nullFunction$$ = function() {
    };
    $goog$global$$.addEventListener("test", $nullFunction$$, $options$jscomp$65$$);
    $goog$global$$.removeEventListener("test", $nullFunction$$, $options$jscomp$65$$);
  } catch ($e$jscomp$28$$) {
  }
  return $passive$$;
}();
var $JSCompiler_inline_result$jscomp$20$$, $obj$jscomp$inline_110$$;
a: {
  for (var $parts$jscomp$inline_551$$ = ["CLOSURE_FLAGS"], $cur$jscomp$inline_552$$ = $goog$global$$, $i$jscomp$inline_553$$ = 0; $i$jscomp$inline_553$$ < $parts$jscomp$inline_551$$.length; $i$jscomp$inline_553$$++) {
    if ($cur$jscomp$inline_552$$ = $cur$jscomp$inline_552$$[$parts$jscomp$inline_551$$[$i$jscomp$inline_553$$]], null == $cur$jscomp$inline_552$$) {
      $obj$jscomp$inline_110$$ = null;
      break a;
    }
  }
  $obj$jscomp$inline_110$$ = $cur$jscomp$inline_552$$;
}
var $val$jscomp$inline_111$$ = $obj$jscomp$inline_110$$ && $obj$jscomp$inline_110$$[610401301];
$JSCompiler_inline_result$jscomp$20$$ = null != $val$jscomp$inline_111$$ ? $val$jscomp$inline_111$$ : !1;
function $goog$string$internal$isEmptyOrWhitespace$$($str$jscomp$16$$) {
  return /^[\s\xa0]*$/.test($str$jscomp$16$$);
}
;function $module$contents$goog$labs$userAgent$util_getNativeUserAgentString$$() {
  var $navigator$jscomp$1_userAgent$jscomp$1$$ = $goog$global$$.navigator;
  return $navigator$jscomp$1_userAgent$jscomp$1$$ && ($navigator$jscomp$1_userAgent$jscomp$1$$ = $navigator$jscomp$1_userAgent$jscomp$1$$.userAgent) ? $navigator$jscomp$1_userAgent$jscomp$1$$ : "";
}
var $module$contents$goog$labs$userAgent$util_userAgentDataInternal$$, $navigator$jscomp$inline_113$$ = $goog$global$$.navigator;
$module$contents$goog$labs$userAgent$util_userAgentDataInternal$$ = $navigator$jscomp$inline_113$$ ? $navigator$jscomp$inline_113$$.userAgentData || null : null;
function $module$contents$goog$labs$userAgent$util_matchUserAgent$$($str$jscomp$25$$) {
  return -1 != $module$contents$goog$labs$userAgent$util_getNativeUserAgentString$$().indexOf($str$jscomp$25$$);
}
;function $module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand$$() {
  return $JSCompiler_inline_result$jscomp$20$$ ? !!$module$contents$goog$labs$userAgent$util_userAgentDataInternal$$ && 0 < $module$contents$goog$labs$userAgent$util_userAgentDataInternal$$.brands.length : !1;
}
function $module$contents$goog$labs$userAgent$browser_matchIE$$() {
  return $module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand$$() ? !1 : $module$contents$goog$labs$userAgent$util_matchUserAgent$$("Trident") || $module$contents$goog$labs$userAgent$util_matchUserAgent$$("MSIE");
}
;function $goog$reflect$sinkValue$$($x$jscomp$101$$) {
  $goog$reflect$sinkValue$$[" "]($x$jscomp$101$$);
  return $x$jscomp$101$$;
}
$goog$reflect$sinkValue$$[" "] = function() {
};
function $goog$reflect$cache$$($key$jscomp$73$$, $valueFn$$) {
  var $cacheObj$$ = $goog$math$Integer$IntCache_$$;
  return Object.prototype.hasOwnProperty.call($cacheObj$$, $key$jscomp$73$$) ? $cacheObj$$[$key$jscomp$73$$] : $cacheObj$$[$key$jscomp$73$$] = $valueFn$$($key$jscomp$73$$);
}
;var $goog$userAgent$OPERA$$ = $module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand$$() ? !1 : $module$contents$goog$labs$userAgent$util_matchUserAgent$$("Opera"), $goog$userAgent$IE$$ = $module$contents$goog$labs$userAgent$browser_matchIE$$(), $goog$userAgent$EDGE$$ = $module$contents$goog$labs$userAgent$util_matchUserAgent$$("Edge"), $goog$userAgent$EDGE_OR_IE$$ = $goog$userAgent$EDGE$$ || $goog$userAgent$IE$$, $goog$userAgent$GECKO$$ = $module$contents$goog$labs$userAgent$util_matchUserAgent$$("Gecko") && 
!(-1 != $module$contents$goog$labs$userAgent$util_getNativeUserAgentString$$().toLowerCase().indexOf("webkit") && !$module$contents$goog$labs$userAgent$util_matchUserAgent$$("Edge")) && !($module$contents$goog$labs$userAgent$util_matchUserAgent$$("Trident") || $module$contents$goog$labs$userAgent$util_matchUserAgent$$("MSIE")) && !$module$contents$goog$labs$userAgent$util_matchUserAgent$$("Edge"), $goog$userAgent$WEBKIT$$ = -1 != $module$contents$goog$labs$userAgent$util_getNativeUserAgentString$$().toLowerCase().indexOf("webkit") && 
!$module$contents$goog$labs$userAgent$util_matchUserAgent$$("Edge");
function $goog$userAgent$getDocumentMode_$$() {
  var $doc$jscomp$9$$ = $goog$global$$.document;
  return $doc$jscomp$9$$ ? $doc$jscomp$9$$.documentMode : void 0;
}
var $JSCompiler_inline_result$jscomp$22$$;
a: {
  var $version$jscomp$inline_115$$ = "", $arr$jscomp$inline_116$$ = function() {
    var $userAgent$jscomp$7$$ = $module$contents$goog$labs$userAgent$util_getNativeUserAgentString$$();
    if ($goog$userAgent$GECKO$$) {
      return /rv:([^\);]+)(\)|;)/.exec($userAgent$jscomp$7$$);
    }
    if ($goog$userAgent$EDGE$$) {
      return /Edge\/([\d\.]+)/.exec($userAgent$jscomp$7$$);
    }
    if ($goog$userAgent$IE$$) {
      return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec($userAgent$jscomp$7$$);
    }
    if ($goog$userAgent$WEBKIT$$) {
      return /WebKit\/(\S+)/.exec($userAgent$jscomp$7$$);
    }
    if ($goog$userAgent$OPERA$$) {
      return /(?:Version)[ \/]?(\S+)/.exec($userAgent$jscomp$7$$);
    }
  }();
  $arr$jscomp$inline_116$$ && ($version$jscomp$inline_115$$ = $arr$jscomp$inline_116$$ ? $arr$jscomp$inline_116$$[1] : "");
  if ($goog$userAgent$IE$$) {
    var $docMode$jscomp$inline_117$$ = $goog$userAgent$getDocumentMode_$$();
    if (null != $docMode$jscomp$inline_117$$ && $docMode$jscomp$inline_117$$ > parseFloat($version$jscomp$inline_115$$)) {
      $JSCompiler_inline_result$jscomp$22$$ = String($docMode$jscomp$inline_117$$);
      break a;
    }
  }
  $JSCompiler_inline_result$jscomp$22$$ = $version$jscomp$inline_115$$;
}
var $goog$userAgent$VERSION$$ = $JSCompiler_inline_result$jscomp$22$$, $JSCompiler_inline_result$jscomp$23$$;
if ($goog$global$$.document && $goog$userAgent$IE$$) {
  var $documentMode$jscomp$inline_119$$ = $goog$userAgent$getDocumentMode_$$();
  $JSCompiler_inline_result$jscomp$23$$ = $documentMode$jscomp$inline_119$$ ? $documentMode$jscomp$inline_119$$ : parseInt($goog$userAgent$VERSION$$, 10) || void 0;
} else {
  $JSCompiler_inline_result$jscomp$23$$ = void 0;
}
var $goog$userAgent$DOCUMENT_MODE$$ = $JSCompiler_inline_result$jscomp$23$$;
function $goog$events$BrowserEvent$$($opt_e$jscomp$2$$, $opt_currentTarget_relatedTarget$jscomp$inline_126$$) {
  $goog$events$Event$$.call(this, $opt_e$jscomp$2$$ ? $opt_e$jscomp$2$$.type : "");
  this.relatedTarget = this.$g$ = this.target = null;
  this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
  this.key = "";
  this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
  this.state = null;
  this.pointerId = 0;
  this.pointerType = "";
  this.$i$ = null;
  if ($opt_e$jscomp$2$$) {
    var $type$jscomp$inline_124$$ = this.type = $opt_e$jscomp$2$$.type, $relevantTouch$jscomp$inline_125$$ = $opt_e$jscomp$2$$.changedTouches && $opt_e$jscomp$2$$.changedTouches.length ? $opt_e$jscomp$2$$.changedTouches[0] : null;
    this.target = $opt_e$jscomp$2$$.target || $opt_e$jscomp$2$$.srcElement;
    this.$g$ = $opt_currentTarget_relatedTarget$jscomp$inline_126$$;
    if ($opt_currentTarget_relatedTarget$jscomp$inline_126$$ = $opt_e$jscomp$2$$.relatedTarget) {
      if ($goog$userAgent$GECKO$$) {
        a: {
          try {
            $goog$reflect$sinkValue$$($opt_currentTarget_relatedTarget$jscomp$inline_126$$.nodeName);
            var $JSCompiler_inline_result$jscomp$538$$ = !0;
            break a;
          } catch ($e$jscomp$inline_556$$) {
          }
          $JSCompiler_inline_result$jscomp$538$$ = !1;
        }
        $JSCompiler_inline_result$jscomp$538$$ || ($opt_currentTarget_relatedTarget$jscomp$inline_126$$ = null);
      }
    } else {
      "mouseover" == $type$jscomp$inline_124$$ ? $opt_currentTarget_relatedTarget$jscomp$inline_126$$ = $opt_e$jscomp$2$$.fromElement : "mouseout" == $type$jscomp$inline_124$$ && ($opt_currentTarget_relatedTarget$jscomp$inline_126$$ = $opt_e$jscomp$2$$.toElement);
    }
    this.relatedTarget = $opt_currentTarget_relatedTarget$jscomp$inline_126$$;
    $relevantTouch$jscomp$inline_125$$ ? (this.clientX = void 0 !== $relevantTouch$jscomp$inline_125$$.clientX ? $relevantTouch$jscomp$inline_125$$.clientX : $relevantTouch$jscomp$inline_125$$.pageX, this.clientY = void 0 !== $relevantTouch$jscomp$inline_125$$.clientY ? $relevantTouch$jscomp$inline_125$$.clientY : $relevantTouch$jscomp$inline_125$$.pageY, this.screenX = $relevantTouch$jscomp$inline_125$$.screenX || 0, this.screenY = $relevantTouch$jscomp$inline_125$$.screenY || 0) : (this.clientX = 
    void 0 !== $opt_e$jscomp$2$$.clientX ? $opt_e$jscomp$2$$.clientX : $opt_e$jscomp$2$$.pageX, this.clientY = void 0 !== $opt_e$jscomp$2$$.clientY ? $opt_e$jscomp$2$$.clientY : $opt_e$jscomp$2$$.pageY, this.screenX = $opt_e$jscomp$2$$.screenX || 0, this.screenY = $opt_e$jscomp$2$$.screenY || 0);
    this.button = $opt_e$jscomp$2$$.button;
    this.key = $opt_e$jscomp$2$$.key || "";
    this.ctrlKey = $opt_e$jscomp$2$$.ctrlKey;
    this.altKey = $opt_e$jscomp$2$$.altKey;
    this.shiftKey = $opt_e$jscomp$2$$.shiftKey;
    this.metaKey = $opt_e$jscomp$2$$.metaKey;
    this.pointerId = $opt_e$jscomp$2$$.pointerId || 0;
    this.pointerType = "string" === typeof $opt_e$jscomp$2$$.pointerType ? $opt_e$jscomp$2$$.pointerType : $goog$events$BrowserEvent$IE_POINTER_TYPE_MAP$$[$opt_e$jscomp$2$$.pointerType] || "";
    this.state = $opt_e$jscomp$2$$.state;
    this.$i$ = $opt_e$jscomp$2$$;
    $opt_e$jscomp$2$$.defaultPrevented && $goog$events$BrowserEvent$$.$superClass_$.$h$.call(this);
  }
}
$goog$inherits$$($goog$events$BrowserEvent$$, $goog$events$Event$$);
var $goog$events$BrowserEvent$IE_POINTER_TYPE_MAP$$ = {2:"touch", 3:"pen", 4:"mouse"};
$goog$events$BrowserEvent$$.prototype.$h$ = function() {
  $goog$events$BrowserEvent$$.$superClass_$.$h$.call(this);
  var $be$$ = this.$i$;
  $be$$.preventDefault ? $be$$.preventDefault() : $be$$.returnValue = !1;
};
var $goog$events$Listenable$IMPLEMENTED_BY_PROP$$ = "closure_listenable_" + (1E6 * Math.random() | 0);
var $goog$events$ListenableKey$counter_$$ = 0;
function $goog$events$Listener$$($listener$jscomp$75$$, $src$jscomp$9$$, $type$jscomp$180$$, $capture$jscomp$3$$, $opt_handler$$) {
  this.listener = $listener$jscomp$75$$;
  this.proxy = null;
  this.src = $src$jscomp$9$$;
  this.type = $type$jscomp$180$$;
  this.capture = !!$capture$jscomp$3$$;
  this.$handler$ = $opt_handler$$;
  this.key = ++$goog$events$ListenableKey$counter_$$;
  this.$removed$ = this.$callOnce$ = !1;
}
function $JSCompiler_StaticMethods_markAsRemoved$$($JSCompiler_StaticMethods_markAsRemoved$self$$) {
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$removed$ = !0;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.listener = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.proxy = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.src = null;
  $JSCompiler_StaticMethods_markAsRemoved$self$$.$handler$ = null;
}
;function $module$contents$goog$object_forEach$$($obj$jscomp$59$$, $f$jscomp$33$$, $opt_obj$jscomp$27$$) {
  for (var $key$jscomp$75$$ in $obj$jscomp$59$$) {
    $f$jscomp$33$$.call($opt_obj$jscomp$27$$, $obj$jscomp$59$$[$key$jscomp$75$$], $key$jscomp$75$$, $obj$jscomp$59$$);
  }
}
function $module$contents$goog$object_map$$($obj$jscomp$61$$, $f$jscomp$35$$) {
  for (var $key$jscomp$77$$ in $obj$jscomp$61$$) {
    $f$jscomp$35$$.call(void 0, $obj$jscomp$61$$[$key$jscomp$77$$], $key$jscomp$77$$, $obj$jscomp$61$$);
  }
}
function $module$contents$goog$object_clone$$($obj$jscomp$83$$) {
  var $res$jscomp$6$$ = {}, $key$jscomp$96$$;
  for ($key$jscomp$96$$ in $obj$jscomp$83$$) {
    $res$jscomp$6$$[$key$jscomp$96$$] = $obj$jscomp$83$$[$key$jscomp$96$$];
  }
  return $res$jscomp$6$$;
}
var $module$contents$goog$object_PROTOTYPE_FIELDS$$ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function $module$contents$goog$object_extend$$($target$jscomp$110$$, $var_args$jscomp$62$$) {
  for (var $key$jscomp$99$$, $source$jscomp$19$$, $i$jscomp$96$$ = 1; $i$jscomp$96$$ < arguments.length; $i$jscomp$96$$++) {
    $source$jscomp$19$$ = arguments[$i$jscomp$96$$];
    for ($key$jscomp$99$$ in $source$jscomp$19$$) {
      $target$jscomp$110$$[$key$jscomp$99$$] = $source$jscomp$19$$[$key$jscomp$99$$];
    }
    for (var $j$jscomp$8$$ = 0; $j$jscomp$8$$ < $module$contents$goog$object_PROTOTYPE_FIELDS$$.length; $j$jscomp$8$$++) {
      $key$jscomp$99$$ = $module$contents$goog$object_PROTOTYPE_FIELDS$$[$j$jscomp$8$$], Object.prototype.hasOwnProperty.call($source$jscomp$19$$, $key$jscomp$99$$) && ($target$jscomp$110$$[$key$jscomp$99$$] = $source$jscomp$19$$[$key$jscomp$99$$]);
    }
  }
}
;function $goog$events$ListenerMap$$($src$jscomp$10$$) {
  this.src = $src$jscomp$10$$;
  this.$g$ = {};
  this.$h$ = 0;
}
$goog$events$ListenerMap$$.prototype.add = function($listenerArray_type$jscomp$182$$, $listener$jscomp$76_listenerObj$$, $callOnce$$, $opt_useCapture$jscomp$15$$, $opt_listenerScope$jscomp$4$$) {
  var $typeStr$$ = $listenerArray_type$jscomp$182$$.toString();
  $listenerArray_type$jscomp$182$$ = this.$g$[$typeStr$$];
  $listenerArray_type$jscomp$182$$ || ($listenerArray_type$jscomp$182$$ = this.$g$[$typeStr$$] = [], this.$h$++);
  var $index$jscomp$114$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray_type$jscomp$182$$, $listener$jscomp$76_listenerObj$$, $opt_useCapture$jscomp$15$$, $opt_listenerScope$jscomp$4$$);
  -1 < $index$jscomp$114$$ ? ($listener$jscomp$76_listenerObj$$ = $listenerArray_type$jscomp$182$$[$index$jscomp$114$$], $callOnce$$ || ($listener$jscomp$76_listenerObj$$.$callOnce$ = !1)) : ($listener$jscomp$76_listenerObj$$ = new $goog$events$Listener$$($listener$jscomp$76_listenerObj$$, this.src, $typeStr$$, !!$opt_useCapture$jscomp$15$$, $opt_listenerScope$jscomp$4$$), $listener$jscomp$76_listenerObj$$.$callOnce$ = $callOnce$$, $listenerArray_type$jscomp$182$$.push($listener$jscomp$76_listenerObj$$));
  return $listener$jscomp$76_listenerObj$$;
};
function $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_removeByKey$self$$, $listener$jscomp$78$$) {
  var $type$jscomp$184$$ = $listener$jscomp$78$$.type;
  if ($type$jscomp$184$$ in $JSCompiler_StaticMethods_removeByKey$self$$.$g$) {
    var $arr$jscomp$inline_128$$ = $JSCompiler_StaticMethods_removeByKey$self$$.$g$[$type$jscomp$184$$], $i$jscomp$inline_130$$ = $module$contents$goog$array_indexOf$$($arr$jscomp$inline_128$$, $listener$jscomp$78$$), $rv$jscomp$inline_131$$;
    ($rv$jscomp$inline_131$$ = 0 <= $i$jscomp$inline_130$$) && Array.prototype.splice.call($arr$jscomp$inline_128$$, $i$jscomp$inline_130$$, 1);
    $rv$jscomp$inline_131$$ && ($JSCompiler_StaticMethods_markAsRemoved$$($listener$jscomp$78$$), 0 == $JSCompiler_StaticMethods_removeByKey$self$$.$g$[$type$jscomp$184$$].length && (delete $JSCompiler_StaticMethods_removeByKey$self$$.$g$[$type$jscomp$184$$], $JSCompiler_StaticMethods_removeByKey$self$$.$h$--));
  }
}
function $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$jscomp$6$$, $listener$jscomp$80$$, $opt_useCapture$jscomp$17$$, $opt_listenerScope$jscomp$7$$) {
  for (var $i$jscomp$104$$ = 0; $i$jscomp$104$$ < $listenerArray$jscomp$6$$.length; ++$i$jscomp$104$$) {
    var $listenerObj$jscomp$3$$ = $listenerArray$jscomp$6$$[$i$jscomp$104$$];
    if (!$listenerObj$jscomp$3$$.$removed$ && $listenerObj$jscomp$3$$.listener == $listener$jscomp$80$$ && $listenerObj$jscomp$3$$.capture == !!$opt_useCapture$jscomp$17$$ && $listenerObj$jscomp$3$$.$handler$ == $opt_listenerScope$jscomp$7$$) {
      return $i$jscomp$104$$;
    }
  }
  return -1;
}
;var $goog$events$LISTENER_MAP_PROP_$$ = "closure_lm_" + (1E6 * Math.random() | 0), $goog$events$onStringMap_$$ = {}, $goog$events$listenerCountEstimate_$$ = 0;
function $goog$events$listen$$($src$jscomp$11$$, $type$jscomp$189$$, $listener$jscomp$81$$, $opt_options$jscomp$94$$, $opt_handler$jscomp$1$$) {
  if ($opt_options$jscomp$94$$ && $opt_options$jscomp$94$$.once) {
    return $goog$events$listenOnce$$($src$jscomp$11$$, $type$jscomp$189$$, $listener$jscomp$81$$, $opt_options$jscomp$94$$, $opt_handler$jscomp$1$$);
  }
  if (Array.isArray($type$jscomp$189$$)) {
    for (var $i$jscomp$105$$ = 0; $i$jscomp$105$$ < $type$jscomp$189$$.length; $i$jscomp$105$$++) {
      $goog$events$listen$$($src$jscomp$11$$, $type$jscomp$189$$[$i$jscomp$105$$], $listener$jscomp$81$$, $opt_options$jscomp$94$$, $opt_handler$jscomp$1$$);
    }
    return null;
  }
  $listener$jscomp$81$$ = $goog$events$wrapListener$$($listener$jscomp$81$$);
  return $src$jscomp$11$$ && $src$jscomp$11$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$] ? $src$jscomp$11$$.$L$($type$jscomp$189$$, $listener$jscomp$81$$, $goog$isObject$$($opt_options$jscomp$94$$) ? !!$opt_options$jscomp$94$$.capture : !!$opt_options$jscomp$94$$, $opt_handler$jscomp$1$$) : $goog$events$listen_$$($src$jscomp$11$$, $type$jscomp$189$$, $listener$jscomp$81$$, !1, $opt_options$jscomp$94$$, $opt_handler$jscomp$1$$);
}
function $goog$events$listen_$$($src$jscomp$12$$, $type$jscomp$190$$, $listener$jscomp$82_listenerObj$jscomp$4$$, $callOnce$jscomp$1_proxy$jscomp$2$$, $opt_options$jscomp$95$$, $opt_handler$jscomp$2$$) {
  if (!$type$jscomp$190$$) {
    throw Error("Invalid event type");
  }
  var $capture$jscomp$7$$ = $goog$isObject$$($opt_options$jscomp$95$$) ? !!$opt_options$jscomp$95$$.capture : !!$opt_options$jscomp$95$$, $listenerMap$$ = $goog$events$getListenerMap_$$($src$jscomp$12$$);
  $listenerMap$$ || ($src$jscomp$12$$[$goog$events$LISTENER_MAP_PROP_$$] = $listenerMap$$ = new $goog$events$ListenerMap$$($src$jscomp$12$$));
  $listener$jscomp$82_listenerObj$jscomp$4$$ = $listenerMap$$.add($type$jscomp$190$$, $listener$jscomp$82_listenerObj$jscomp$4$$, $callOnce$jscomp$1_proxy$jscomp$2$$, $capture$jscomp$7$$, $opt_handler$jscomp$2$$);
  if ($listener$jscomp$82_listenerObj$jscomp$4$$.proxy) {
    return $listener$jscomp$82_listenerObj$jscomp$4$$;
  }
  $callOnce$jscomp$1_proxy$jscomp$2$$ = $goog$events$getProxy$$();
  $listener$jscomp$82_listenerObj$jscomp$4$$.proxy = $callOnce$jscomp$1_proxy$jscomp$2$$;
  $callOnce$jscomp$1_proxy$jscomp$2$$.src = $src$jscomp$12$$;
  $callOnce$jscomp$1_proxy$jscomp$2$$.listener = $listener$jscomp$82_listenerObj$jscomp$4$$;
  if ($src$jscomp$12$$.addEventListener) {
    $goog$events$BrowserFeature$PASSIVE_EVENTS$$ || ($opt_options$jscomp$95$$ = $capture$jscomp$7$$), void 0 === $opt_options$jscomp$95$$ && ($opt_options$jscomp$95$$ = !1), $src$jscomp$12$$.addEventListener($type$jscomp$190$$.toString(), $callOnce$jscomp$1_proxy$jscomp$2$$, $opt_options$jscomp$95$$);
  } else if ($src$jscomp$12$$.attachEvent) {
    $src$jscomp$12$$.attachEvent($goog$events$getOnString_$$($type$jscomp$190$$.toString()), $callOnce$jscomp$1_proxy$jscomp$2$$);
  } else if ($src$jscomp$12$$.addListener && $src$jscomp$12$$.removeListener) {
    $src$jscomp$12$$.addListener($callOnce$jscomp$1_proxy$jscomp$2$$);
  } else {
    throw Error("addEventListener and attachEvent are unavailable.");
  }
  $goog$events$listenerCountEstimate_$$++;
  return $listener$jscomp$82_listenerObj$jscomp$4$$;
}
function $goog$events$getProxy$$() {
  function $f$jscomp$41$$($eventObject$jscomp$1$$) {
    return $proxyCallbackFunction$$.call($f$jscomp$41$$.src, $f$jscomp$41$$.listener, $eventObject$jscomp$1$$);
  }
  var $proxyCallbackFunction$$ = $goog$events$handleBrowserEvent_$$;
  return $f$jscomp$41$$;
}
function $goog$events$listenOnce$$($src$jscomp$13$$, $type$jscomp$191$$, $listener$jscomp$83$$, $opt_options$jscomp$96$$, $opt_handler$jscomp$3$$) {
  if (Array.isArray($type$jscomp$191$$)) {
    for (var $i$jscomp$106$$ = 0; $i$jscomp$106$$ < $type$jscomp$191$$.length; $i$jscomp$106$$++) {
      $goog$events$listenOnce$$($src$jscomp$13$$, $type$jscomp$191$$[$i$jscomp$106$$], $listener$jscomp$83$$, $opt_options$jscomp$96$$, $opt_handler$jscomp$3$$);
    }
    return null;
  }
  $listener$jscomp$83$$ = $goog$events$wrapListener$$($listener$jscomp$83$$);
  return $src$jscomp$13$$ && $src$jscomp$13$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$] ? $src$jscomp$13$$.$M$($type$jscomp$191$$, $listener$jscomp$83$$, $goog$isObject$$($opt_options$jscomp$96$$) ? !!$opt_options$jscomp$96$$.capture : !!$opt_options$jscomp$96$$, $opt_handler$jscomp$3$$) : $goog$events$listen_$$($src$jscomp$13$$, $type$jscomp$191$$, $listener$jscomp$83$$, !0, $opt_options$jscomp$96$$, $opt_handler$jscomp$3$$);
}
function $goog$events$unlisten$$($JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$, $listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$, $index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$, $capture$jscomp$9_opt_options$jscomp$97$$, $opt_handler$jscomp$5$$) {
  if (Array.isArray($listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$)) {
    for (var $i$jscomp$107_listenerArray$jscomp$inline_564$$ = 0; $i$jscomp$107_listenerArray$jscomp$inline_564$$ < $listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$.length; $i$jscomp$107_listenerArray$jscomp$inline_564$$++) {
      $goog$events$unlisten$$($JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$, $listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$[$i$jscomp$107_listenerArray$jscomp$inline_564$$], $index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$, $capture$jscomp$9_opt_options$jscomp$97$$, $opt_handler$jscomp$5$$);
    }
  } else {
    ($capture$jscomp$9_opt_options$jscomp$97$$ = $goog$isObject$$($capture$jscomp$9_opt_options$jscomp$97$$) ? !!$capture$jscomp$9_opt_options$jscomp$97$$.capture : !!$capture$jscomp$9_opt_options$jscomp$97$$, $index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$ = $goog$events$wrapListener$$($index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$), $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$ && 
    $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]) ? ($JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$ = $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$.$i$, $listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$ = 
    String($listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$).toString(), $listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$ in $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$.$g$ && ($i$jscomp$107_listenerArray$jscomp$inline_564$$ = $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$.$g$[$listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$], 
    $index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$ = $goog$events$ListenerMap$findListenerIndex_$$($i$jscomp$107_listenerArray$jscomp$inline_564$$, $index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$, $capture$jscomp$9_opt_options$jscomp$97$$, $opt_handler$jscomp$5$$), -1 < $index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$ && ($JSCompiler_StaticMethods_markAsRemoved$$($i$jscomp$107_listenerArray$jscomp$inline_564$$[$index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$]), 
    Array.prototype.splice.call($i$jscomp$107_listenerArray$jscomp$inline_564$$, $index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$, 1), 0 == $i$jscomp$107_listenerArray$jscomp$inline_564$$.length && (delete $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$.$g$[$listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$], $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$.$h$--)))) : 
    $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$ && ($JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$ = $goog$events$getListenerMap_$$($JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$)) && ($listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$ = $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$.$g$[$listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$.toString()], 
    $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$ = -1, $listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$ && ($JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$ = $goog$events$ListenerMap$findListenerIndex_$$($listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$, $index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$, 
    $capture$jscomp$9_opt_options$jscomp$97$$, $opt_handler$jscomp$5$$)), ($index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$ = -1 < $JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$ ? $listenerArray$jscomp$inline_138_type$jscomp$192_typeStr$jscomp$inline_563$$[$JSCompiler_StaticMethods_JSC$2297_remove$self$jscomp$inline_558_i$jscomp$inline_139_listenerMap$jscomp$1_src$jscomp$15$$] : null) && $goog$events$unlistenByKey$$($index$jscomp$inline_565_listener$jscomp$85_listenerObj$jscomp$5$$));
  }
}
function $goog$events$unlistenByKey$$($key$jscomp$100$$) {
  if ("number" !== typeof $key$jscomp$100$$ && $key$jscomp$100$$ && !$key$jscomp$100$$.$removed$) {
    var $src$jscomp$16$$ = $key$jscomp$100$$.src;
    if ($src$jscomp$16$$ && $src$jscomp$16$$[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$]) {
      $JSCompiler_StaticMethods_removeByKey$$($src$jscomp$16$$.$i$, $key$jscomp$100$$);
    } else {
      var $listenerMap$jscomp$2_type$jscomp$193$$ = $key$jscomp$100$$.type, $proxy$jscomp$3$$ = $key$jscomp$100$$.proxy;
      $src$jscomp$16$$.removeEventListener ? $src$jscomp$16$$.removeEventListener($listenerMap$jscomp$2_type$jscomp$193$$, $proxy$jscomp$3$$, $key$jscomp$100$$.capture) : $src$jscomp$16$$.detachEvent ? $src$jscomp$16$$.detachEvent($goog$events$getOnString_$$($listenerMap$jscomp$2_type$jscomp$193$$), $proxy$jscomp$3$$) : $src$jscomp$16$$.addListener && $src$jscomp$16$$.removeListener && $src$jscomp$16$$.removeListener($proxy$jscomp$3$$);
      $goog$events$listenerCountEstimate_$$--;
      ($listenerMap$jscomp$2_type$jscomp$193$$ = $goog$events$getListenerMap_$$($src$jscomp$16$$)) ? ($JSCompiler_StaticMethods_removeByKey$$($listenerMap$jscomp$2_type$jscomp$193$$, $key$jscomp$100$$), 0 == $listenerMap$jscomp$2_type$jscomp$193$$.$h$ && ($listenerMap$jscomp$2_type$jscomp$193$$.src = null, $src$jscomp$16$$[$goog$events$LISTENER_MAP_PROP_$$] = null)) : $JSCompiler_StaticMethods_markAsRemoved$$($key$jscomp$100$$);
    }
  }
}
function $goog$events$getOnString_$$($type$jscomp$197$$) {
  return $type$jscomp$197$$ in $goog$events$onStringMap_$$ ? $goog$events$onStringMap_$$[$type$jscomp$197$$] : $goog$events$onStringMap_$$[$type$jscomp$197$$] = "on" + $type$jscomp$197$$;
}
function $goog$events$handleBrowserEvent_$$($JSCompiler_temp$jscomp$38_listener$jscomp$91$$, $eventObject$jscomp$inline_142_opt_evt$$) {
  if ($JSCompiler_temp$jscomp$38_listener$jscomp$91$$.$removed$) {
    $JSCompiler_temp$jscomp$38_listener$jscomp$91$$ = !0;
  } else {
    $eventObject$jscomp$inline_142_opt_evt$$ = new $goog$events$BrowserEvent$$($eventObject$jscomp$inline_142_opt_evt$$, this);
    var $listenerFn$jscomp$inline_143$$ = $JSCompiler_temp$jscomp$38_listener$jscomp$91$$.listener, $listenerHandler$jscomp$inline_144$$ = $JSCompiler_temp$jscomp$38_listener$jscomp$91$$.$handler$ || $JSCompiler_temp$jscomp$38_listener$jscomp$91$$.src;
    $JSCompiler_temp$jscomp$38_listener$jscomp$91$$.$callOnce$ && $goog$events$unlistenByKey$$($JSCompiler_temp$jscomp$38_listener$jscomp$91$$);
    $JSCompiler_temp$jscomp$38_listener$jscomp$91$$ = $listenerFn$jscomp$inline_143$$.call($listenerHandler$jscomp$inline_144$$, $eventObject$jscomp$inline_142_opt_evt$$);
  }
  return $JSCompiler_temp$jscomp$38_listener$jscomp$91$$;
}
function $goog$events$getListenerMap_$$($listenerMap$jscomp$8_src$jscomp$20$$) {
  $listenerMap$jscomp$8_src$jscomp$20$$ = $listenerMap$jscomp$8_src$jscomp$20$$[$goog$events$LISTENER_MAP_PROP_$$];
  return $listenerMap$jscomp$8_src$jscomp$20$$ instanceof $goog$events$ListenerMap$$ ? $listenerMap$jscomp$8_src$jscomp$20$$ : null;
}
var $goog$events$LISTENER_WRAPPER_PROP_$$ = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function $goog$events$wrapListener$$($listener$jscomp$92$$) {
  if ("function" === typeof $listener$jscomp$92$$) {
    return $listener$jscomp$92$$;
  }
  $listener$jscomp$92$$[$goog$events$LISTENER_WRAPPER_PROP_$$] || ($listener$jscomp$92$$[$goog$events$LISTENER_WRAPPER_PROP_$$] = function($e$jscomp$44$$) {
    return $listener$jscomp$92$$.handleEvent($e$jscomp$44$$);
  });
  return $listener$jscomp$92$$[$goog$events$LISTENER_WRAPPER_PROP_$$];
}
;function $goog$events$EventTarget$$() {
  $goog$Disposable$$.call(this);
  this.$i$ = new $goog$events$ListenerMap$$(this);
  this.$N$ = this;
  this.$H$ = null;
}
$goog$inherits$$($goog$events$EventTarget$$, $goog$Disposable$$);
$goog$events$EventTarget$$.prototype[$goog$events$Listenable$IMPLEMENTED_BY_PROP$$] = !0;
$goog$events$EventTarget$$.prototype.removeEventListener = function($type$jscomp$201$$, $handler$jscomp$4$$, $opt_capture$jscomp$4$$, $opt_handlerScope$jscomp$1$$) {
  $goog$events$unlisten$$(this, $type$jscomp$201$$, $handler$jscomp$4$$, $opt_capture$jscomp$4$$, $opt_handlerScope$jscomp$1$$);
};
function $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($JSCompiler_StaticMethods_JSC$2514_dispatchEvent$self_target$jscomp$inline_148$$, $e$jscomp$45_e$jscomp$inline_149$$) {
  var $ancestorsTree_opt_ancestorsTree$jscomp$inline_150$$, $ancestor_type$jscomp$inline_151$$ = $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$self_target$jscomp$inline_148$$.$H$;
  if ($ancestor_type$jscomp$inline_151$$) {
    for ($ancestorsTree_opt_ancestorsTree$jscomp$inline_150$$ = []; $ancestor_type$jscomp$inline_151$$; $ancestor_type$jscomp$inline_151$$ = $ancestor_type$jscomp$inline_151$$.$H$) {
      $ancestorsTree_opt_ancestorsTree$jscomp$inline_150$$.push($ancestor_type$jscomp$inline_151$$);
    }
  }
  $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$self_target$jscomp$inline_148$$ = $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$self_target$jscomp$inline_148$$.$N$;
  $ancestor_type$jscomp$inline_151$$ = $e$jscomp$45_e$jscomp$inline_149$$.type || $e$jscomp$45_e$jscomp$inline_149$$;
  if ("string" === typeof $e$jscomp$45_e$jscomp$inline_149$$) {
    $e$jscomp$45_e$jscomp$inline_149$$ = new $goog$events$Event$$($e$jscomp$45_e$jscomp$inline_149$$, $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$self_target$jscomp$inline_148$$);
  } else if ($e$jscomp$45_e$jscomp$inline_149$$ instanceof $goog$events$Event$$) {
    $e$jscomp$45_e$jscomp$inline_149$$.target = $e$jscomp$45_e$jscomp$inline_149$$.target || $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$self_target$jscomp$inline_148$$;
  } else {
    var $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$ = $e$jscomp$45_e$jscomp$inline_149$$;
    $e$jscomp$45_e$jscomp$inline_149$$ = new $goog$events$Event$$($ancestor_type$jscomp$inline_151$$, $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$self_target$jscomp$inline_148$$);
    $module$contents$goog$object_extend$$($e$jscomp$45_e$jscomp$inline_149$$, $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$);
  }
  $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$ = !0;
  if ($ancestorsTree_opt_ancestorsTree$jscomp$inline_150$$) {
    for (var $i$jscomp$inline_155$$ = $ancestorsTree_opt_ancestorsTree$jscomp$inline_150$$.length - 1; 0 <= $i$jscomp$inline_155$$; $i$jscomp$inline_155$$--) {
      var $currentTarget$jscomp$inline_154$$ = $e$jscomp$45_e$jscomp$inline_149$$.$g$ = $ancestorsTree_opt_ancestorsTree$jscomp$inline_150$$[$i$jscomp$inline_155$$];
      $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_154$$, $ancestor_type$jscomp$inline_151$$, !0, $e$jscomp$45_e$jscomp$inline_149$$) && $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$;
    }
  }
  $currentTarget$jscomp$inline_154$$ = $e$jscomp$45_e$jscomp$inline_149$$.$g$ = $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$self_target$jscomp$inline_148$$;
  $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_154$$, $ancestor_type$jscomp$inline_151$$, !0, $e$jscomp$45_e$jscomp$inline_149$$) && $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$;
  $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_154$$, $ancestor_type$jscomp$inline_151$$, !1, $e$jscomp$45_e$jscomp$inline_149$$) && $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$;
  if ($ancestorsTree_opt_ancestorsTree$jscomp$inline_150$$) {
    for ($i$jscomp$inline_155$$ = 0; $i$jscomp$inline_155$$ < $ancestorsTree_opt_ancestorsTree$jscomp$inline_150$$.length; $i$jscomp$inline_155$$++) {
      $currentTarget$jscomp$inline_154$$ = $e$jscomp$45_e$jscomp$inline_149$$.$g$ = $ancestorsTree_opt_ancestorsTree$jscomp$inline_150$$[$i$jscomp$inline_155$$], $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$ = $JSCompiler_StaticMethods_fireListeners$$($currentTarget$jscomp$inline_154$$, $ancestor_type$jscomp$inline_151$$, !1, $e$jscomp$45_e$jscomp$inline_149$$) && $oldEvent$jscomp$inline_152_rv$jscomp$inline_153$$;
    }
  }
}
$goog$events$EventTarget$$.prototype.$disposeInternal$ = function() {
  $goog$events$EventTarget$$.$superClass_$.$disposeInternal$.call(this);
  if (this.$i$) {
    var $JSCompiler_StaticMethods_JSC$2297_removeAll$self$jscomp$inline_567$$ = this.$i$, $count$jscomp$inline_570$$ = 0, $type$jscomp$inline_571$$;
    for ($type$jscomp$inline_571$$ in $JSCompiler_StaticMethods_JSC$2297_removeAll$self$jscomp$inline_567$$.$g$) {
      for (var $listenerArray$jscomp$inline_572$$ = $JSCompiler_StaticMethods_JSC$2297_removeAll$self$jscomp$inline_567$$.$g$[$type$jscomp$inline_571$$], $i$jscomp$inline_573$$ = 0; $i$jscomp$inline_573$$ < $listenerArray$jscomp$inline_572$$.length; $i$jscomp$inline_573$$++) {
        ++$count$jscomp$inline_570$$, $JSCompiler_StaticMethods_markAsRemoved$$($listenerArray$jscomp$inline_572$$[$i$jscomp$inline_573$$]);
      }
      delete $JSCompiler_StaticMethods_JSC$2297_removeAll$self$jscomp$inline_567$$.$g$[$type$jscomp$inline_571$$];
      $JSCompiler_StaticMethods_JSC$2297_removeAll$self$jscomp$inline_567$$.$h$--;
    }
  }
  this.$H$ = null;
};
$goog$events$EventTarget$$.prototype.$L$ = function($type$jscomp$202$$, $listener$jscomp$93$$, $opt_useCapture$jscomp$18$$, $opt_listenerScope$jscomp$8$$) {
  return this.$i$.add(String($type$jscomp$202$$), $listener$jscomp$93$$, !1, $opt_useCapture$jscomp$18$$, $opt_listenerScope$jscomp$8$$);
};
$goog$events$EventTarget$$.prototype.$M$ = function($type$jscomp$203$$, $listener$jscomp$94$$, $opt_useCapture$jscomp$19$$, $opt_listenerScope$jscomp$9$$) {
  return this.$i$.add(String($type$jscomp$203$$), $listener$jscomp$94$$, !0, $opt_useCapture$jscomp$19$$, $opt_listenerScope$jscomp$9$$);
};
function $JSCompiler_StaticMethods_fireListeners$$($JSCompiler_StaticMethods_fireListeners$self$$, $listenerArray$jscomp$8_type$jscomp$205$$, $capture$jscomp$14$$, $eventObject$jscomp$5$$) {
  $listenerArray$jscomp$8_type$jscomp$205$$ = $JSCompiler_StaticMethods_fireListeners$self$$.$i$.$g$[String($listenerArray$jscomp$8_type$jscomp$205$$)];
  if (!$listenerArray$jscomp$8_type$jscomp$205$$) {
    return !0;
  }
  $listenerArray$jscomp$8_type$jscomp$205$$ = $listenerArray$jscomp$8_type$jscomp$205$$.concat();
  for (var $rv$jscomp$8$$ = !0, $i$jscomp$110$$ = 0; $i$jscomp$110$$ < $listenerArray$jscomp$8_type$jscomp$205$$.length; ++$i$jscomp$110$$) {
    var $listener$jscomp$96$$ = $listenerArray$jscomp$8_type$jscomp$205$$[$i$jscomp$110$$];
    if ($listener$jscomp$96$$ && !$listener$jscomp$96$$.$removed$ && $listener$jscomp$96$$.capture == $capture$jscomp$14$$) {
      var $listenerFn$jscomp$1$$ = $listener$jscomp$96$$.listener, $listenerHandler$jscomp$1$$ = $listener$jscomp$96$$.$handler$ || $listener$jscomp$96$$.src;
      $listener$jscomp$96$$.$callOnce$ && $JSCompiler_StaticMethods_removeByKey$$($JSCompiler_StaticMethods_fireListeners$self$$.$i$, $listener$jscomp$96$$);
      $rv$jscomp$8$$ = !1 !== $listenerFn$jscomp$1$$.call($listenerHandler$jscomp$1$$, $eventObject$jscomp$5$$) && $rv$jscomp$8$$;
    }
  }
  return $rv$jscomp$8$$ && !$eventObject$jscomp$5$$.defaultPrevented;
}
;function $goog$net$XmlHttpFactory$$() {
}
$goog$net$XmlHttpFactory$$.prototype.$h$ = null;
function $JSCompiler_StaticMethods_getOptions$$($JSCompiler_StaticMethods_getOptions$self$$) {
  return $JSCompiler_StaticMethods_getOptions$self$$.$h$ || ($JSCompiler_StaticMethods_getOptions$self$$.$h$ = $JSCompiler_StaticMethods_getOptions$self$$.$j$());
}
;function $goog$net$WebChannel$$() {
}
var $goog$net$WebChannel$EventType$$ = {OPEN:"open$0", $CLOSE$:"close$1", $ERROR$:"error$2", $MESSAGE$:"message$3"};
function $goog$net$WebChannel$MessageEvent$$() {
  $goog$events$Event$$.call(this, "message$3");
}
$goog$inherits$$($goog$net$WebChannel$MessageEvent$$, $goog$events$Event$$);
function $goog$net$WebChannel$ErrorEvent$$() {
  $goog$events$Event$$.call(this, "error$2");
}
$goog$inherits$$($goog$net$WebChannel$ErrorEvent$$, $goog$events$Event$$);
var $goog$labs$net$webChannel$requestStats$Event$$ = {}, $goog$labs$net$webChannel$requestStats$eventTarget_$$ = null;
function $goog$labs$net$webChannel$requestStats$getStatEventTarget_$$() {
  return $goog$labs$net$webChannel$requestStats$eventTarget_$$ = $goog$labs$net$webChannel$requestStats$eventTarget_$$ || new $goog$events$EventTarget$$();
}
$goog$labs$net$webChannel$requestStats$Event$$.$SERVER_REACHABILITY_EVENT$ = "serverreachability";
function $goog$labs$net$webChannel$requestStats$ServerReachabilityEvent$$($target$jscomp$113$$) {
  $goog$events$Event$$.call(this, $goog$labs$net$webChannel$requestStats$Event$$.$SERVER_REACHABILITY_EVENT$, $target$jscomp$113$$);
}
$goog$inherits$$($goog$labs$net$webChannel$requestStats$ServerReachabilityEvent$$, $goog$events$Event$$);
function $goog$labs$net$webChannel$requestStats$notifyServerReachabilityEvent$$($reachabilityType$jscomp$1$$) {
  var $target$jscomp$114$$ = $goog$labs$net$webChannel$requestStats$getStatEventTarget_$$();
  $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($target$jscomp$114$$, new $goog$labs$net$webChannel$requestStats$ServerReachabilityEvent$$($target$jscomp$114$$, $reachabilityType$jscomp$1$$));
}
$goog$labs$net$webChannel$requestStats$Event$$.$STAT_EVENT$ = "statevent";
function $goog$labs$net$webChannel$requestStats$StatEvent$$($eventTarget$$) {
  $goog$events$Event$$.call(this, $goog$labs$net$webChannel$requestStats$Event$$.$STAT_EVENT$, $eventTarget$$);
}
$goog$inherits$$($goog$labs$net$webChannel$requestStats$StatEvent$$, $goog$events$Event$$);
function $goog$labs$net$webChannel$requestStats$notifyStatEvent$$($stat$jscomp$1$$) {
  var $target$jscomp$115$$ = $goog$labs$net$webChannel$requestStats$getStatEventTarget_$$();
  $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($target$jscomp$115$$, new $goog$labs$net$webChannel$requestStats$StatEvent$$($target$jscomp$115$$, $stat$jscomp$1$$));
}
$goog$labs$net$webChannel$requestStats$Event$$.$TIMING_EVENT$ = "timingevent";
function $goog$labs$net$webChannel$requestStats$TimingEvent$$($target$jscomp$116$$, $size$jscomp$21$$) {
  $goog$events$Event$$.call(this, $goog$labs$net$webChannel$requestStats$Event$$.$TIMING_EVENT$, $target$jscomp$116$$);
  this.size = $size$jscomp$21$$;
}
$goog$inherits$$($goog$labs$net$webChannel$requestStats$TimingEvent$$, $goog$events$Event$$);
function $goog$labs$net$webChannel$requestStats$setTimeout$$($fn$jscomp$13$$, $ms$$) {
  if ("function" !== typeof $fn$jscomp$13$$) {
    throw Error("Fn must not be null and must be a function");
  }
  return $goog$global$$.setTimeout(function() {
    $fn$jscomp$13$$();
  }, $ms$$);
}
;function $goog$json$parse$$($o$jscomp$5_s$jscomp$12$$) {
  try {
    return $goog$global$$.JSON.parse($o$jscomp$5_s$jscomp$12$$);
  } catch ($ex$jscomp$2$$) {
  }
  $o$jscomp$5_s$jscomp$12$$ = String($o$jscomp$5_s$jscomp$12$$);
  if (/^\s*$/.test($o$jscomp$5_s$jscomp$12$$) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test($o$jscomp$5_s$jscomp$12$$.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))) {
    try {
      return eval("(" + $o$jscomp$5_s$jscomp$12$$ + ")");
    } catch ($ex$jscomp$3$$) {
    }
  }
  throw Error("Invalid JSON string: " + $o$jscomp$5_s$jscomp$12$$);
}
function $goog$json$serialize$$($object$jscomp$9$$) {
  var $sb$jscomp$inline_162$$ = [];
  $JSCompiler_StaticMethods_serializeInternal$$(new $goog$json$Serializer$$(), $object$jscomp$9$$, $sb$jscomp$inline_162$$);
  return $sb$jscomp$inline_162$$.join("");
}
function $goog$json$Serializer$$() {
}
function $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$, $sb$jscomp$3$$) {
  if (null == $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$) {
    $sb$jscomp$3$$.push("null");
  } else {
    if ("object" == typeof $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$) {
      if (Array.isArray($l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$)) {
        var $arr$jscomp$inline_165_key$jscomp$inline_176$$ = $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$;
        $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$ = $arr$jscomp$inline_165_key$jscomp$inline_176$$.length;
        $sb$jscomp$3$$.push("[");
        for (var $sep$jscomp$inline_168_sep$jscomp$inline_175$$ = "", $i$jscomp$inline_169_value$jscomp$inline_177$$ = 0; $i$jscomp$inline_169_value$jscomp$inline_177$$ < $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$; $i$jscomp$inline_169_value$jscomp$inline_177$$++) {
          $sb$jscomp$3$$.push($sep$jscomp$inline_168_sep$jscomp$inline_175$$), $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $arr$jscomp$inline_165_key$jscomp$inline_176$$[$i$jscomp$inline_169_value$jscomp$inline_177$$], $sb$jscomp$3$$), $sep$jscomp$inline_168_sep$jscomp$inline_175$$ = ",";
        }
        $sb$jscomp$3$$.push("]");
        return;
      }
      if ($l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$ instanceof String || $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$ instanceof Number || $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$ instanceof Boolean) {
        $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$ = $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$.valueOf();
      } else {
        $sb$jscomp$3$$.push("{");
        $sep$jscomp$inline_168_sep$jscomp$inline_175$$ = "";
        for ($arr$jscomp$inline_165_key$jscomp$inline_176$$ in $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$) {
          Object.prototype.hasOwnProperty.call($l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$, $arr$jscomp$inline_165_key$jscomp$inline_176$$) && ($i$jscomp$inline_169_value$jscomp$inline_177$$ = $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$[$arr$jscomp$inline_165_key$jscomp$inline_176$$], "function" != typeof $i$jscomp$inline_169_value$jscomp$inline_177$$ && ($sb$jscomp$3$$.push($sep$jscomp$inline_168_sep$jscomp$inline_175$$), $JSCompiler_StaticMethods_serializeString_$$($arr$jscomp$inline_165_key$jscomp$inline_176$$, 
          $sb$jscomp$3$$), $sb$jscomp$3$$.push(":"), $JSCompiler_StaticMethods_serializeInternal$$($JSCompiler_StaticMethods_serializeInternal$self$$, $i$jscomp$inline_169_value$jscomp$inline_177$$, $sb$jscomp$3$$), $sep$jscomp$inline_168_sep$jscomp$inline_175$$ = ","));
        }
        $sb$jscomp$3$$.push("}");
        return;
      }
    }
    switch(typeof $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$) {
      case "string":
        $JSCompiler_StaticMethods_serializeString_$$($l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$, $sb$jscomp$3$$);
        break;
      case "number":
        $sb$jscomp$3$$.push(isFinite($l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$) && !isNaN($l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$) ? String($l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$) : "null");
        break;
      case "boolean":
        $sb$jscomp$3$$.push(String($l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$));
        break;
      case "function":
        $sb$jscomp$3$$.push("null");
        break;
      default:
        throw Error("Unknown type: " + typeof $l$jscomp$inline_167_obj$jscomp$inline_173_object$jscomp$11$$);
    }
  }
}
var $goog$json$Serializer$charToJsonCharCache_$$ = {'"':'\\"', "\\":"\\\\", "/":"\\/", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\v":"\\u000b"}, $goog$json$Serializer$charsToReplace_$$ = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
function $JSCompiler_StaticMethods_serializeString_$$($s$jscomp$13$$, $sb$jscomp$4$$) {
  $sb$jscomp$4$$.push('"', $s$jscomp$13$$.replace($goog$json$Serializer$charsToReplace_$$, function($c$jscomp$2$$) {
    var $rv$jscomp$10$$ = $goog$json$Serializer$charToJsonCharCache_$$[$c$jscomp$2$$];
    $rv$jscomp$10$$ || ($rv$jscomp$10$$ = "\\u" + ($c$jscomp$2$$.charCodeAt(0) | 65536).toString(16).slice(1), $goog$json$Serializer$charToJsonCharCache_$$[$c$jscomp$2$$] = $rv$jscomp$10$$);
    return $rv$jscomp$10$$;
  }), '"');
}
;function $module$contents$goog$async$FreeList_FreeList$$($create$jscomp$1$$, $reset$$) {
  this.$i$ = $create$jscomp$1$$;
  this.$j$ = $reset$$;
  this.$h$ = 0;
  this.$g$ = null;
}
$module$contents$goog$async$FreeList_FreeList$$.prototype.get = function() {
  if (0 < this.$h$) {
    this.$h$--;
    var $item$jscomp$28$$ = this.$g$;
    this.$g$ = $item$jscomp$28$$.next;
    $item$jscomp$28$$.next = null;
  } else {
    $item$jscomp$28$$ = this.$i$();
  }
  return $item$jscomp$28$$;
};
function $goog$string$splitLimit$$($parts$jscomp$6_str$jscomp$66$$) {
  var $limit$jscomp$1$$ = 1;
  $parts$jscomp$6_str$jscomp$66$$ = $parts$jscomp$6_str$jscomp$66$$.split(":");
  for (var $returnVal$$ = []; 0 < $limit$jscomp$1$$ && $parts$jscomp$6_str$jscomp$66$$.length;) {
    $returnVal$$.push($parts$jscomp$6_str$jscomp$66$$.shift()), $limit$jscomp$1$$--;
  }
  $parts$jscomp$6_str$jscomp$66$$.length && $returnVal$$.push($parts$jscomp$6_str$jscomp$66$$.join(":"));
  return $returnVal$$;
}
;function $goog$dom$createElement$$() {
  var $doc$jscomp$inline_187$$ = document;
  var $name$jscomp$inline_186$$ = "IFRAME";
  "application/xhtml+xml" === $doc$jscomp$inline_187$$.contentType && ($name$jscomp$inline_186$$ = $name$jscomp$inline_186$$.toLowerCase());
  return $doc$jscomp$inline_187$$.createElement($name$jscomp$inline_186$$);
}
;var $goog$async$nextTick$nextTickImpl$$;
function $goog$async$nextTick$getNextTickImpl_$$() {
  var $Channel$$ = $goog$global$$.MessageChannel;
  "undefined" === typeof $Channel$$ && "undefined" !== typeof window && window.postMessage && window.addEventListener && !$module$contents$goog$labs$userAgent$util_matchUserAgent$$("Presto") && ($Channel$$ = function() {
    var $doc$jscomp$36_iframe$jscomp$2_onmessage$$ = $goog$dom$createElement$$();
    $doc$jscomp$36_iframe$jscomp$2_onmessage$$.style.display = "none";
    document.documentElement.appendChild($doc$jscomp$36_iframe$jscomp$2_onmessage$$);
    var $win$jscomp$13$$ = $doc$jscomp$36_iframe$jscomp$2_onmessage$$.contentWindow;
    $doc$jscomp$36_iframe$jscomp$2_onmessage$$ = $win$jscomp$13$$.document;
    $doc$jscomp$36_iframe$jscomp$2_onmessage$$.open();
    $doc$jscomp$36_iframe$jscomp$2_onmessage$$.close();
    var $message$jscomp$45$$ = "callImmediate" + Math.random(), $origin$jscomp$1$$ = "file:" == $win$jscomp$13$$.location.protocol ? "*" : $win$jscomp$13$$.location.protocol + "//" + $win$jscomp$13$$.location.host;
    $doc$jscomp$36_iframe$jscomp$2_onmessage$$ = $goog$bind$$(function($e$jscomp$54$$) {
      if (("*" == $origin$jscomp$1$$ || $e$jscomp$54$$.origin == $origin$jscomp$1$$) && $e$jscomp$54$$.data == $message$jscomp$45$$) {
        this.port1.onmessage();
      }
    }, this);
    $win$jscomp$13$$.addEventListener("message", $doc$jscomp$36_iframe$jscomp$2_onmessage$$, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      $win$jscomp$13$$.postMessage($message$jscomp$45$$, $origin$jscomp$1$$);
    }};
  });
  if ("undefined" !== typeof $Channel$$ && !$module$contents$goog$labs$userAgent$browser_matchIE$$()) {
    var $channel$jscomp$1$$ = new $Channel$$(), $head$jscomp$1$$ = {}, $tail$$ = $head$jscomp$1$$;
    $channel$jscomp$1$$.port1.onmessage = function() {
      if (void 0 !== $head$jscomp$1$$.next) {
        $head$jscomp$1$$ = $head$jscomp$1$$.next;
        var $cb$jscomp$1$$ = $head$jscomp$1$$.$cb$;
        $head$jscomp$1$$.$cb$ = null;
        $cb$jscomp$1$$();
      }
    };
    return function($cb$jscomp$2$$) {
      $tail$$.next = {$cb$:$cb$jscomp$2$$};
      $tail$$ = $tail$$.next;
      $channel$jscomp$1$$.port2.postMessage(0);
    };
  }
  return function($cb$jscomp$3$$) {
    $goog$global$$.setTimeout($cb$jscomp$3$$, 0);
  };
}
;function $module$contents$goog$async$throwException_throwException$$($exception$jscomp$6$$) {
  $goog$global$$.setTimeout(function() {
    throw $exception$jscomp$6$$;
  }, 0);
}
;function $module$contents$goog$async$WorkQueue_WorkQueue$$() {
  this.$h$ = this.$g$ = null;
}
$module$contents$goog$async$WorkQueue_WorkQueue$$.prototype.add = function($fn$jscomp$17$$, $scope$$) {
  var $item$jscomp$30$$ = $module$contents$goog$async$WorkQueue_WorkQueue$freelist_$$.get();
  $item$jscomp$30$$.set($fn$jscomp$17$$, $scope$$);
  this.$h$ ? this.$h$.next = $item$jscomp$30$$ : this.$g$ = $item$jscomp$30$$;
  this.$h$ = $item$jscomp$30$$;
};
function $JSCompiler_StaticMethods_JSC$2364_remove$$() {
  var $JSCompiler_StaticMethods_JSC$2364_remove$self$$ = $module$contents$goog$async$run_workQueue$$, $item$jscomp$31$$ = null;
  $JSCompiler_StaticMethods_JSC$2364_remove$self$$.$g$ && ($item$jscomp$31$$ = $JSCompiler_StaticMethods_JSC$2364_remove$self$$.$g$, $JSCompiler_StaticMethods_JSC$2364_remove$self$$.$g$ = $JSCompiler_StaticMethods_JSC$2364_remove$self$$.$g$.next, $JSCompiler_StaticMethods_JSC$2364_remove$self$$.$g$ || ($JSCompiler_StaticMethods_JSC$2364_remove$self$$.$h$ = null), $item$jscomp$31$$.next = null);
  return $item$jscomp$31$$;
}
var $module$contents$goog$async$WorkQueue_WorkQueue$freelist_$$ = new $module$contents$goog$async$FreeList_FreeList$$(function() {
  return new $module$contents$goog$async$WorkQueue_WorkItem$$();
}, function($item$jscomp$33$$) {
  return $item$jscomp$33$$.reset();
});
function $module$contents$goog$async$WorkQueue_WorkItem$$() {
  this.next = this.$g$ = this.$h$ = null;
}
$module$contents$goog$async$WorkQueue_WorkItem$$.prototype.set = function($fn$jscomp$18$$, $scope$jscomp$1$$) {
  this.$h$ = $fn$jscomp$18$$;
  this.$g$ = $scope$jscomp$1$$;
  this.next = null;
};
$module$contents$goog$async$WorkQueue_WorkItem$$.prototype.reset = function() {
  this.next = this.$g$ = this.$h$ = null;
};
var $module$contents$goog$async$run_schedule$$, $module$contents$goog$async$run_workQueueScheduled$$ = !1, $module$contents$goog$async$run_workQueue$$ = new $module$contents$goog$async$WorkQueue_WorkQueue$$();
function $module$contents$goog$async$run_run$$($callback$jscomp$82$$, $context$jscomp$5$$) {
  $module$contents$goog$async$run_schedule$$ || $module$contents$goog$async$run_initializeRunner$$();
  $module$contents$goog$async$run_workQueueScheduled$$ || ($module$contents$goog$async$run_schedule$$(), $module$contents$goog$async$run_workQueueScheduled$$ = !0);
  $module$contents$goog$async$run_workQueue$$.add($callback$jscomp$82$$, $context$jscomp$5$$);
}
function $module$contents$goog$async$run_initializeRunner$$() {
  if ($goog$global$$.Promise && $goog$global$$.Promise.resolve) {
    var $promise$jscomp$1$$ = $goog$global$$.Promise.resolve(void 0);
    $module$contents$goog$async$run_schedule$$ = function() {
      $promise$jscomp$1$$.then($module$contents$goog$async$run_run$processWorkQueue$$);
    };
  } else {
    $module$contents$goog$async$run_schedule$$ = function() {
      var $cb$jscomp$inline_192$$ = $module$contents$goog$async$run_run$processWorkQueue$$;
      "function" !== typeof $goog$global$$.setImmediate || $goog$global$$.Window && $goog$global$$.Window.prototype && ($module$contents$goog$labs$userAgent$browser_useUserAgentDataBrand$$() || !$module$contents$goog$labs$userAgent$util_matchUserAgent$$("Edge")) && $goog$global$$.Window.prototype.setImmediate == $goog$global$$.setImmediate ? ($goog$async$nextTick$nextTickImpl$$ || ($goog$async$nextTick$nextTickImpl$$ = $goog$async$nextTick$getNextTickImpl_$$()), $goog$async$nextTick$nextTickImpl$$($cb$jscomp$inline_192$$)) : 
      $goog$global$$.setImmediate($cb$jscomp$inline_192$$);
    };
  }
}
function $module$contents$goog$async$run_run$processWorkQueue$$() {
  for (var $item$jscomp$34_item$jscomp$inline_575$$; $item$jscomp$34_item$jscomp$inline_575$$ = $JSCompiler_StaticMethods_JSC$2364_remove$$();) {
    try {
      $item$jscomp$34_item$jscomp$inline_575$$.$h$.call($item$jscomp$34_item$jscomp$inline_575$$.$g$);
    } catch ($e$jscomp$55$$) {
      $module$contents$goog$async$throwException_throwException$$($e$jscomp$55$$);
    }
    var $JSCompiler_StaticMethods_JSC$2330_put$self$jscomp$inline_576$$ = $module$contents$goog$async$WorkQueue_WorkQueue$freelist_$$;
    $JSCompiler_StaticMethods_JSC$2330_put$self$jscomp$inline_576$$.$j$($item$jscomp$34_item$jscomp$inline_575$$);
    100 > $JSCompiler_StaticMethods_JSC$2330_put$self$jscomp$inline_576$$.$h$ && ($JSCompiler_StaticMethods_JSC$2330_put$self$jscomp$inline_576$$.$h$++, $item$jscomp$34_item$jscomp$inline_575$$.next = $JSCompiler_StaticMethods_JSC$2330_put$self$jscomp$inline_576$$.$g$, $JSCompiler_StaticMethods_JSC$2330_put$self$jscomp$inline_576$$.$g$ = $item$jscomp$34_item$jscomp$inline_575$$);
  }
  $module$contents$goog$async$run_workQueueScheduled$$ = !1;
}
;function $goog$Timer$$($opt_interval$$, $opt_timerObject$$) {
  $goog$events$EventTarget$$.call(this);
  this.$h$ = $opt_interval$$ || 1;
  this.$g$ = $opt_timerObject$$ || $goog$global$$;
  this.$j$ = $goog$bind$$(this.$tick_$, this);
  this.$l$ = Date.now();
}
$goog$inherits$$($goog$Timer$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$Timer$$.prototype;
$JSCompiler_prototypeAlias$$.$JSC$2380_enabled$ = !1;
$JSCompiler_prototypeAlias$$.$JSC$2380_timer_$ = null;
$JSCompiler_prototypeAlias$$.$tick_$ = function() {
  if (this.$JSC$2380_enabled$) {
    var $elapsed$$ = Date.now() - this.$l$;
    0 < $elapsed$$ && $elapsed$$ < .8 * this.$h$ ? this.$JSC$2380_timer_$ = this.$g$.setTimeout(this.$j$, this.$h$ - $elapsed$$) : (this.$JSC$2380_timer_$ && (this.$g$.clearTimeout(this.$JSC$2380_timer_$), this.$JSC$2380_timer_$ = null), $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$(this, "tick"), this.$JSC$2380_enabled$ && ($JSCompiler_StaticMethods_JSC$2380_stop$$(this), this.start()));
  }
};
$JSCompiler_prototypeAlias$$.start = function() {
  this.$JSC$2380_enabled$ = !0;
  this.$JSC$2380_timer_$ || (this.$JSC$2380_timer_$ = this.$g$.setTimeout(this.$j$, this.$h$), this.$l$ = Date.now());
};
function $JSCompiler_StaticMethods_JSC$2380_stop$$($JSCompiler_StaticMethods_JSC$2380_stop$self$$) {
  $JSCompiler_StaticMethods_JSC$2380_stop$self$$.$JSC$2380_enabled$ = !1;
  $JSCompiler_StaticMethods_JSC$2380_stop$self$$.$JSC$2380_timer_$ && ($JSCompiler_StaticMethods_JSC$2380_stop$self$$.$g$.clearTimeout($JSCompiler_StaticMethods_JSC$2380_stop$self$$.$JSC$2380_timer_$), $JSCompiler_StaticMethods_JSC$2380_stop$self$$.$JSC$2380_timer_$ = null);
}
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
  $goog$Timer$$.$superClass_$.$disposeInternal$.call(this);
  $JSCompiler_StaticMethods_JSC$2380_stop$$(this);
  delete this.$g$;
};
function $goog$Timer$callOnce$$($listener$jscomp$98$$, $opt_delay$jscomp$2$$, $opt_handler$jscomp$8$$) {
  if ("function" === typeof $listener$jscomp$98$$) {
    $opt_handler$jscomp$8$$ && ($listener$jscomp$98$$ = $goog$bind$$($listener$jscomp$98$$, $opt_handler$jscomp$8$$));
  } else if ($listener$jscomp$98$$ && "function" == typeof $listener$jscomp$98$$.handleEvent) {
    $listener$jscomp$98$$ = $goog$bind$$($listener$jscomp$98$$.handleEvent, $listener$jscomp$98$$);
  } else {
    throw Error("Invalid listener argument");
  }
  return 2147483647 < Number($opt_delay$jscomp$2$$) ? -1 : $goog$global$$.setTimeout($listener$jscomp$98$$, $opt_delay$jscomp$2$$ || 0);
}
;function $module$contents$goog$async$Throttle_Throttle$$($listener$jscomp$99$$, $interval$jscomp$4$$, $handler$jscomp$6$$) {
  $goog$Disposable$$.call(this);
  this.$m$ = null != $handler$jscomp$6$$ ? $listener$jscomp$99$$.bind($handler$jscomp$6$$) : $listener$jscomp$99$$;
  this.$j$ = $interval$jscomp$4$$;
  this.$h$ = null;
  this.$i$ = !1;
  this.$g$ = null;
}
$module$contents$goog$async$Throttle_Throttle$$.prototype = $$jscomp$objectCreate$$($goog$Disposable$$.prototype);
$module$contents$goog$async$Throttle_Throttle$$.prototype.constructor = $module$contents$goog$async$Throttle_Throttle$$;
if ($$jscomp$setPrototypeOf$$) {
  $$jscomp$setPrototypeOf$$($module$contents$goog$async$Throttle_Throttle$$, $goog$Disposable$$);
} else {
  for (var $p$jscomp$inline_226$$ in $goog$Disposable$$) {
    if ("prototype" != $p$jscomp$inline_226$$) {
      if (Object.defineProperties) {
        var $descriptor$jscomp$inline_227$$ = Object.getOwnPropertyDescriptor($goog$Disposable$$, $p$jscomp$inline_226$$);
        $descriptor$jscomp$inline_227$$ && Object.defineProperty($module$contents$goog$async$Throttle_Throttle$$, $p$jscomp$inline_226$$, $descriptor$jscomp$inline_227$$);
      } else {
        $module$contents$goog$async$Throttle_Throttle$$[$p$jscomp$inline_226$$] = $goog$Disposable$$[$p$jscomp$inline_226$$];
      }
    }
  }
}
$module$contents$goog$async$Throttle_Throttle$$.$superClass_$ = $goog$Disposable$$.prototype;
$module$contents$goog$async$Throttle_Throttle$$.prototype.$l$ = function($var_args$jscomp$88$$) {
  this.$h$ = arguments;
  this.$g$ ? this.$i$ = !0 : $JSCompiler_StaticMethods_doAction_$$(this);
};
$module$contents$goog$async$Throttle_Throttle$$.prototype.$disposeInternal$ = function() {
  $goog$Disposable$$.prototype.$disposeInternal$.call(this);
  this.$g$ && ($goog$global$$.clearTimeout(this.$g$), this.$g$ = null, this.$i$ = !1, this.$h$ = null);
};
function $JSCompiler_StaticMethods_doAction_$$($JSCompiler_StaticMethods_doAction_$self$$) {
  $JSCompiler_StaticMethods_doAction_$self$$.$g$ = $goog$Timer$callOnce$$(function() {
    $JSCompiler_StaticMethods_doAction_$self$$.$g$ = null;
    $JSCompiler_StaticMethods_doAction_$self$$.$i$ && ($JSCompiler_StaticMethods_doAction_$self$$.$i$ = !1, $JSCompiler_StaticMethods_doAction_$$($JSCompiler_StaticMethods_doAction_$self$$));
  }, $JSCompiler_StaticMethods_doAction_$self$$.$j$);
  var $args$jscomp$15$$ = $JSCompiler_StaticMethods_doAction_$self$$.$h$;
  $JSCompiler_StaticMethods_doAction_$self$$.$h$ = null;
  $JSCompiler_StaticMethods_doAction_$self$$.$m$.apply(null, $args$jscomp$15$$);
}
;function $goog$events$EventHandler$$($opt_scope$jscomp$4$$) {
  $goog$Disposable$$.call(this);
  this.$h$ = $opt_scope$jscomp$4$$;
  this.$g$ = {};
}
$goog$inherits$$($goog$events$EventHandler$$, $goog$Disposable$$);
var $goog$events$EventHandler$typeArray_$$ = [];
function $JSCompiler_StaticMethods_listen_$$($JSCompiler_StaticMethods_listen_$self$$, $src$jscomp$26$$, $type$jscomp$213$$, $opt_fn$jscomp$1$$) {
  Array.isArray($type$jscomp$213$$) || ($type$jscomp$213$$ && ($goog$events$EventHandler$typeArray_$$[0] = $type$jscomp$213$$.toString()), $type$jscomp$213$$ = $goog$events$EventHandler$typeArray_$$);
  for (var $i$jscomp$142$$ = 0; $i$jscomp$142$$ < $type$jscomp$213$$.length; $i$jscomp$142$$++) {
    var $listenerObj$jscomp$6$$ = $goog$events$listen$$($src$jscomp$26$$, $type$jscomp$213$$[$i$jscomp$142$$], $opt_fn$jscomp$1$$ || $JSCompiler_StaticMethods_listen_$self$$.handleEvent, !1, $JSCompiler_StaticMethods_listen_$self$$.$h$ || $JSCompiler_StaticMethods_listen_$self$$);
    if (!$listenerObj$jscomp$6$$) {
      break;
    }
    $JSCompiler_StaticMethods_listen_$self$$.$g$[$listenerObj$jscomp$6$$.key] = $listenerObj$jscomp$6$$;
  }
}
function $JSCompiler_StaticMethods_JSC$2388_removeAll$$($JSCompiler_StaticMethods_JSC$2388_removeAll$self$$) {
  $module$contents$goog$object_forEach$$($JSCompiler_StaticMethods_JSC$2388_removeAll$self$$.$g$, function($listenerObj$jscomp$8$$, $key$jscomp$115$$) {
    this.$g$.hasOwnProperty($key$jscomp$115$$) && $goog$events$unlistenByKey$$($listenerObj$jscomp$8$$);
  }, $JSCompiler_StaticMethods_JSC$2388_removeAll$self$$);
  $JSCompiler_StaticMethods_JSC$2388_removeAll$self$$.$g$ = {};
}
$goog$events$EventHandler$$.prototype.$disposeInternal$ = function() {
  $goog$events$EventHandler$$.$superClass_$.$disposeInternal$.call(this);
  $JSCompiler_StaticMethods_JSC$2388_removeAll$$(this);
};
$goog$events$EventHandler$$.prototype.handleEvent = function() {
  throw Error("EventHandler.handleEvent not implemented");
};
function $goog$labs$net$webChannel$WebChannelDebug$$() {
  this.$g$ = !0;
}
$goog$labs$net$webChannel$WebChannelDebug$$.prototype.$disableRedact$ = function() {
  this.$g$ = !1;
};
function $JSCompiler_StaticMethods_xmlHttpChannelRequest$$($JSCompiler_StaticMethods_xmlHttpChannelRequest$self$$, $verb$jscomp$4$$, $uri$jscomp$12$$, $id$jscomp$16$$, $attempt$$, $postData$$) {
  $JSCompiler_StaticMethods_xmlHttpChannelRequest$self$$.info(function() {
    if ($JSCompiler_StaticMethods_xmlHttpChannelRequest$self$$.$g$) {
      if ($postData$$) {
        var $JSCompiler_inline_result$jscomp$48_out$jscomp$inline_235$$ = "";
        for (var $params$jscomp$inline_236$$ = $postData$$.split("&"), $i$jscomp$inline_237$$ = 0; $i$jscomp$inline_237$$ < $params$jscomp$inline_236$$.length; $i$jscomp$inline_237$$++) {
          var $keyValue$jscomp$inline_238_value$jscomp$inline_240$$ = $params$jscomp$inline_236$$[$i$jscomp$inline_237$$].split("=");
          if (1 < $keyValue$jscomp$inline_238_value$jscomp$inline_240$$.length) {
            var $key$jscomp$inline_239$$ = $keyValue$jscomp$inline_238_value$jscomp$inline_240$$[0];
            $keyValue$jscomp$inline_238_value$jscomp$inline_240$$ = $keyValue$jscomp$inline_238_value$jscomp$inline_240$$[1];
            var $keyParts$jscomp$inline_241$$ = $key$jscomp$inline_239$$.split("_");
            $JSCompiler_inline_result$jscomp$48_out$jscomp$inline_235$$ = 2 <= $keyParts$jscomp$inline_241$$.length && "type" == $keyParts$jscomp$inline_241$$[1] ? $JSCompiler_inline_result$jscomp$48_out$jscomp$inline_235$$ + ($key$jscomp$inline_239$$ + "=" + $keyValue$jscomp$inline_238_value$jscomp$inline_240$$ + "&") : $JSCompiler_inline_result$jscomp$48_out$jscomp$inline_235$$ + ($key$jscomp$inline_239$$ + "=redacted&");
          }
        }
      } else {
        $JSCompiler_inline_result$jscomp$48_out$jscomp$inline_235$$ = null;
      }
    } else {
      $JSCompiler_inline_result$jscomp$48_out$jscomp$inline_235$$ = $postData$$;
    }
    return "XMLHTTP REQ (" + $id$jscomp$16$$ + ") [attempt " + $attempt$$ + "]: " + $verb$jscomp$4$$ + "\n" + $uri$jscomp$12$$ + "\n" + $JSCompiler_inline_result$jscomp$48_out$jscomp$inline_235$$;
  });
}
function $JSCompiler_StaticMethods_xmlHttpChannelResponseMetaData$$($JSCompiler_StaticMethods_xmlHttpChannelResponseMetaData$self$$, $verb$jscomp$5$$, $uri$jscomp$13$$, $id$jscomp$17$$, $attempt$jscomp$1$$, $readyState$$, $statusCode$$) {
  $JSCompiler_StaticMethods_xmlHttpChannelResponseMetaData$self$$.info(function() {
    return "XMLHTTP RESP (" + $id$jscomp$17$$ + ") [ attempt " + $attempt$jscomp$1$$ + "]: " + $verb$jscomp$5$$ + "\n" + $uri$jscomp$13$$ + "\n" + $readyState$$ + " " + $statusCode$$;
  });
}
function $JSCompiler_StaticMethods_xmlHttpChannelResponseText$$($JSCompiler_StaticMethods_xmlHttpChannelResponseText$self$$, $id$jscomp$18$$, $responseText$$, $opt_desc$$) {
  $JSCompiler_StaticMethods_xmlHttpChannelResponseText$self$$.info(function() {
    return "XMLHTTP TEXT (" + $id$jscomp$18$$ + "): " + $JSCompiler_StaticMethods_redactResponse_$$($JSCompiler_StaticMethods_xmlHttpChannelResponseText$self$$, $responseText$$) + ($opt_desc$$ ? " " + $opt_desc$$ : "");
  });
}
function $JSCompiler_StaticMethods_timeoutResponse$$($JSCompiler_StaticMethods_timeoutResponse$self$$, $uri$jscomp$14$$) {
  $JSCompiler_StaticMethods_timeoutResponse$self$$.info(function() {
    return "TIMEOUT: " + $uri$jscomp$14$$;
  });
}
$goog$labs$net$webChannel$WebChannelDebug$$.prototype.info = function() {
};
function $JSCompiler_StaticMethods_redactResponse_$$($JSCompiler_StaticMethods_redactResponse_$self_i$jscomp$148$$, $responseText$jscomp$1$$) {
  if (!$JSCompiler_StaticMethods_redactResponse_$self_i$jscomp$148$$.$g$) {
    return $responseText$jscomp$1$$;
  }
  if (!$responseText$jscomp$1$$) {
    return null;
  }
  try {
    var $responseArray$$ = JSON.parse($responseText$jscomp$1$$);
    if ($responseArray$$) {
      for ($JSCompiler_StaticMethods_redactResponse_$self_i$jscomp$148$$ = 0; $JSCompiler_StaticMethods_redactResponse_$self_i$jscomp$148$$ < $responseArray$$.length; $JSCompiler_StaticMethods_redactResponse_$self_i$jscomp$148$$++) {
        if (Array.isArray($responseArray$$[$JSCompiler_StaticMethods_redactResponse_$self_i$jscomp$148$$])) {
          var $array$jscomp$inline_244$$ = $responseArray$$[$JSCompiler_StaticMethods_redactResponse_$self_i$jscomp$148$$];
          if (!(2 > $array$jscomp$inline_244$$.length)) {
            var $dataPart$jscomp$inline_245$$ = $array$jscomp$inline_244$$[1];
            if (Array.isArray($dataPart$jscomp$inline_245$$) && !(1 > $dataPart$jscomp$inline_245$$.length)) {
              var $type$jscomp$inline_246$$ = $dataPart$jscomp$inline_245$$[0];
              if ("noop" != $type$jscomp$inline_246$$ && "stop" != $type$jscomp$inline_246$$ && "close" != $type$jscomp$inline_246$$) {
                for (var $i$jscomp$inline_247$$ = 1; $i$jscomp$inline_247$$ < $dataPart$jscomp$inline_245$$.length; $i$jscomp$inline_247$$++) {
                  $dataPart$jscomp$inline_245$$[$i$jscomp$inline_247$$] = "";
                }
              }
            }
          }
        }
      }
    }
    return $goog$json$serialize$$($responseArray$$);
  } catch ($e$jscomp$63$$) {
    return $responseText$jscomp$1$$;
  }
}
;var $goog$net$ErrorCode$$ = {NO_ERROR:0, $ACCESS_DENIED$:1, $FILE_NOT_FOUND$:2, $FF_SILENT_ERROR$:3, $CUSTOM_ERROR$:4, $EXCEPTION$:5, $HTTP_ERROR$:6, $ABORT$:7, TIMEOUT:8, $OFFLINE$:9};
var $goog$net$EventType$$ = {$COMPLETE$:"complete", $SUCCESS$:"success", $ERROR$:"error", $ABORT$:"abort", $READY$:"ready", $READY_STATE_CHANGE$:"readystatechange", TIMEOUT:"timeout", $INCREMENTAL_DATA$:"incrementaldata", $PROGRESS$:"progress", $DOWNLOAD_PROGRESS$:"downloadprogress", $UPLOAD_PROGRESS$:"uploadprogress"};
var $goog$net$XmlHttp$factory_$$;
function $goog$net$DefaultXmlHttpFactory$$() {
}
$goog$inherits$$($goog$net$DefaultXmlHttpFactory$$, $goog$net$XmlHttpFactory$$);
$goog$net$DefaultXmlHttpFactory$$.prototype.$g$ = function() {
  var $progId$jscomp$1$$ = $JSCompiler_StaticMethods_getProgId_$$(this);
  return $progId$jscomp$1$$ ? new ActiveXObject($progId$jscomp$1$$) : new XMLHttpRequest();
};
$goog$net$DefaultXmlHttpFactory$$.prototype.$j$ = function() {
  var $options$jscomp$73$$ = {};
  $JSCompiler_StaticMethods_getProgId_$$(this) && ($options$jscomp$73$$[0] = !0, $options$jscomp$73$$[1] = !0);
  return $options$jscomp$73$$;
};
function $JSCompiler_StaticMethods_getProgId_$$($JSCompiler_StaticMethods_getProgId_$self$$) {
  if (!$JSCompiler_StaticMethods_getProgId_$self$$.$i$ && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
    for (var $ACTIVE_X_IDENTS$$ = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], $i$jscomp$151$$ = 0; $i$jscomp$151$$ < $ACTIVE_X_IDENTS$$.length; $i$jscomp$151$$++) {
      var $candidate$jscomp$1$$ = $ACTIVE_X_IDENTS$$[$i$jscomp$151$$];
      try {
        return new ActiveXObject($candidate$jscomp$1$$), $JSCompiler_StaticMethods_getProgId_$self$$.$i$ = $candidate$jscomp$1$$;
      } catch ($e$jscomp$64$$) {
      }
    }
    throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
  }
  return $JSCompiler_StaticMethods_getProgId_$self$$.$i$;
}
$goog$net$XmlHttp$factory_$$ = new $goog$net$DefaultXmlHttpFactory$$();
function $goog$labs$net$webChannel$ChannelRequest$$($JSCompiler_inline_result$jscomp$44_channel$jscomp$2$$, $channelDebug$$, $opt_requestId$$, $opt_retryId$$) {
  this.$l$ = $JSCompiler_inline_result$jscomp$44_channel$jscomp$2$$;
  this.$j$ = $channelDebug$$;
  this.$m$ = $opt_requestId$$;
  this.$R$ = $opt_retryId$$ || 1;
  this.$O$ = new $goog$events$EventHandler$$(this);
  this.$M$ = 45E3;
  $JSCompiler_inline_result$jscomp$44_channel$jscomp$2$$ = $goog$userAgent$EDGE_OR_IE$$ ? 125 : void 0;
  this.$P$ = new $goog$Timer$$($JSCompiler_inline_result$jscomp$44_channel$jscomp$2$$);
  this.$G$ = null;
  this.$i$ = !1;
  this.$u$ = this.$B$ = this.$A$ = this.$J$ = this.$F$ = this.$S$ = this.$C$ = null;
  this.$D$ = [];
  this.$g$ = null;
  this.$o$ = 0;
  this.$s$ = this.$v$ = null;
  this.$V$ = -1;
  this.$H$ = !1;
  this.$L$ = 0;
  this.$K$ = null;
  this.$U$ = this.$I$ = this.$T$ = this.$N$ = !1;
  this.$h$ = new $goog$labs$net$webChannel$FetchResponseState$$();
}
function $goog$labs$net$webChannel$FetchResponseState$$() {
  this.$i$ = null;
  this.$g$ = "";
  this.$h$ = !1;
}
var $goog$labs$net$webChannel$ChannelRequest$INVALID_CHUNK_$$ = {}, $goog$labs$net$webChannel$ChannelRequest$INCOMPLETE_CHUNK_$$ = {};
$JSCompiler_prototypeAlias$$ = $goog$labs$net$webChannel$ChannelRequest$$.prototype;
$JSCompiler_prototypeAlias$$.setTimeout = function($timeout$jscomp$6$$) {
  this.$M$ = $timeout$jscomp$6$$;
};
function $JSCompiler_StaticMethods_xmlHttpPost$$($JSCompiler_StaticMethods_xmlHttpPost$self$$, $uri$jscomp$15$$, $postData$jscomp$1$$) {
  $JSCompiler_StaticMethods_xmlHttpPost$self$$.$J$ = 1;
  $JSCompiler_StaticMethods_xmlHttpPost$self$$.$A$ = $JSCompiler_StaticMethods_makeUnique$$($JSCompiler_StaticMethods_JSC$2431_clone$$($uri$jscomp$15$$));
  $JSCompiler_StaticMethods_xmlHttpPost$self$$.$u$ = $postData$jscomp$1$$;
  $JSCompiler_StaticMethods_xmlHttpPost$self$$.$N$ = !0;
  $JSCompiler_StaticMethods_sendXmlHttp_$$($JSCompiler_StaticMethods_xmlHttpPost$self$$, null);
}
function $JSCompiler_StaticMethods_sendXmlHttp_$$($JSCompiler_StaticMethods_sendXmlHttp_$self$$, $headers_hostPrefix$jscomp$1$$) {
  $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$F$ = Date.now();
  $JSCompiler_StaticMethods_ensureWatchDogTimer_$$($JSCompiler_StaticMethods_sendXmlHttp_$self$$);
  $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$B$ = $JSCompiler_StaticMethods_JSC$2431_clone$$($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$A$);
  var $JSCompiler_StaticMethods_setParameterValues$self$jscomp$inline_252_useSecondaryDomains$$ = $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$B$, $values$jscomp$inline_253$$ = $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$R$;
  Array.isArray($values$jscomp$inline_253$$) || ($values$jscomp$inline_253$$ = [String($values$jscomp$inline_253$$)]);
  $JSCompiler_StaticMethods_setValues$$($JSCompiler_StaticMethods_setParameterValues$self$jscomp$inline_252_useSecondaryDomains$$.$i$, "t", $values$jscomp$inline_253$$);
  $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$o$ = 0;
  $JSCompiler_StaticMethods_setParameterValues$self$jscomp$inline_252_useSecondaryDomains$$ = $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$l$.$I$;
  $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$h$ = new $goog$labs$net$webChannel$FetchResponseState$$();
  $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$g$ = $JSCompiler_StaticMethods_createXhrIo$$($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$l$, $JSCompiler_StaticMethods_setParameterValues$self$jscomp$inline_252_useSecondaryDomains$$ ? $headers_hostPrefix$jscomp$1$$ : null, !$JSCompiler_StaticMethods_sendXmlHttp_$self$$.$u$);
  0 < $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$L$ && ($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$K$ = new $module$contents$goog$async$Throttle_Throttle$$($goog$bind$$($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$xmlHttpHandler_$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$g$), $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$L$));
  $JSCompiler_StaticMethods_listen_$$($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$O$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$g$, "readystatechange", $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$readyStateChangeHandler_$);
  $headers_hostPrefix$jscomp$1$$ = $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$G$ ? $module$contents$goog$object_clone$$($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$G$) : {};
  $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$u$ ? ($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$v$ || ($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$v$ = "POST"), $headers_hostPrefix$jscomp$1$$["Content-Type"] = "application/x-www-form-urlencoded", $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$g$.$JSC$2457_send$($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$B$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$v$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$u$, $headers_hostPrefix$jscomp$1$$)) : 
  ($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$v$ = "GET", $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$g$.$JSC$2457_send$($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$B$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$v$, null, $headers_hostPrefix$jscomp$1$$));
  $goog$labs$net$webChannel$requestStats$notifyServerReachabilityEvent$$(1);
  $JSCompiler_StaticMethods_xmlHttpChannelRequest$$($JSCompiler_StaticMethods_sendXmlHttp_$self$$.$j$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$v$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$B$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$m$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$R$, $JSCompiler_StaticMethods_sendXmlHttp_$self$$.$u$);
}
$JSCompiler_prototypeAlias$$.$readyStateChangeHandler_$ = function($evt$jscomp$34_xhr$jscomp$1$$) {
  $evt$jscomp$34_xhr$jscomp$1$$ = $evt$jscomp$34_xhr$jscomp$1$$.target;
  var $throttle$jscomp$1$$ = this.$K$;
  $throttle$jscomp$1$$ && 3 == $JSCompiler_StaticMethods_getReadyState$$($evt$jscomp$34_xhr$jscomp$1$$) ? $throttle$jscomp$1$$.$l$() : this.$xmlHttpHandler_$($evt$jscomp$34_xhr$jscomp$1$$);
};
$JSCompiler_prototypeAlias$$.$xmlHttpHandler_$ = function($responseText$jscomp$inline_585_xmlhttp$$) {
  try {
    if ($responseText$jscomp$inline_585_xmlhttp$$ == this.$g$) {
      a: {
        var $readyState$jscomp$inline_263$$ = $JSCompiler_StaticMethods_getReadyState$$(this.$g$), $errorCode$jscomp$inline_264_i$jscomp$inline_588$$ = this.$g$.$getLastErrorCode$(), $statusCode$jscomp$inline_265$$ = this.$g$.$getStatus$();
        if (!(3 > $readyState$jscomp$inline_263$$) && (3 != $readyState$jscomp$inline_263$$ || $goog$userAgent$EDGE_OR_IE$$ || this.$g$ && (this.$h$.$h$ || this.$g$.$getResponseText$() || $JSCompiler_StaticMethods_getResponse$$(this.$g$)))) {
          this.$H$ || 4 != $readyState$jscomp$inline_263$$ || 7 == $errorCode$jscomp$inline_264_i$jscomp$inline_588$$ || (8 == $errorCode$jscomp$inline_264_i$jscomp$inline_588$$ || 0 >= $statusCode$jscomp$inline_265$$ ? $goog$labs$net$webChannel$requestStats$notifyServerReachabilityEvent$$(3) : $goog$labs$net$webChannel$requestStats$notifyServerReachabilityEvent$$(2));
          $JSCompiler_StaticMethods_cancelWatchDogTimer_$$(this);
          var $initialResponse$jscomp$inline_268_status$jscomp$inline_266$$ = this.$g$.$getStatus$();
          this.$V$ = $initialResponse$jscomp$inline_268_status$jscomp$inline_266$$;
          b: {
            if ($JSCompiler_StaticMethods_useFetchStreamsForResponse_$$(this)) {
              var $responseChunks$jscomp$inline_584$$ = $JSCompiler_StaticMethods_getResponse$$(this.$g$);
              $responseText$jscomp$inline_585_xmlhttp$$ = "";
              var $responseLength$jscomp$inline_586$$ = $responseChunks$jscomp$inline_584$$.length, $requestCompleted$jscomp$inline_587$$ = 4 == $JSCompiler_StaticMethods_getReadyState$$(this.$g$);
              if (!this.$h$.$i$) {
                if ("undefined" === typeof TextDecoder) {
                  $JSCompiler_StaticMethods_cleanup_$$(this);
                  $JSCompiler_StaticMethods_dispatchFailure_$$(this);
                  var $JSCompiler_inline_result$jscomp$542_responseText$jscomp$inline_267$$ = "";
                  break b;
                }
                this.$h$.$i$ = new $goog$global$$.TextDecoder();
              }
              for ($errorCode$jscomp$inline_264_i$jscomp$inline_588$$ = 0; $errorCode$jscomp$inline_264_i$jscomp$inline_588$$ < $responseLength$jscomp$inline_586$$; $errorCode$jscomp$inline_264_i$jscomp$inline_588$$++) {
                this.$h$.$h$ = !0, $responseText$jscomp$inline_585_xmlhttp$$ += this.$h$.$i$.decode($responseChunks$jscomp$inline_584$$[$errorCode$jscomp$inline_264_i$jscomp$inline_588$$], {stream:$requestCompleted$jscomp$inline_587$$ && $errorCode$jscomp$inline_264_i$jscomp$inline_588$$ == $responseLength$jscomp$inline_586$$ - 1});
              }
              $responseChunks$jscomp$inline_584$$.length = 0;
              this.$h$.$g$ += $responseText$jscomp$inline_585_xmlhttp$$;
              this.$o$ = 0;
              $JSCompiler_inline_result$jscomp$542_responseText$jscomp$inline_267$$ = this.$h$.$g$;
            } else {
              $JSCompiler_inline_result$jscomp$542_responseText$jscomp$inline_267$$ = this.$g$.$getResponseText$();
            }
          }
          this.$i$ = 200 == $initialResponse$jscomp$inline_268_status$jscomp$inline_266$$;
          $JSCompiler_StaticMethods_xmlHttpChannelResponseMetaData$$(this.$j$, this.$v$, this.$B$, this.$m$, this.$R$, $readyState$jscomp$inline_263$$, $initialResponse$jscomp$inline_268_status$jscomp$inline_266$$);
          if (this.$i$) {
            if (this.$T$ && !this.$I$) {
              b: {
                if (this.$g$) {
                  var $JSCompiler_inline_result$jscomp$686$$, $JSCompiler_StaticMethods_getStreamingResponseHeader$self$jscomp$inline_693$$ = this.$g$;
                  if (($JSCompiler_inline_result$jscomp$686$$ = $JSCompiler_StaticMethods_getStreamingResponseHeader$self$jscomp$inline_693$$.$g$ ? $JSCompiler_StaticMethods_getStreamingResponseHeader$self$jscomp$inline_693$$.$g$.getResponseHeader("X-HTTP-Initial-Response") : null) && !$goog$string$internal$isEmptyOrWhitespace$$($JSCompiler_inline_result$jscomp$686$$)) {
                    var $JSCompiler_inline_result$jscomp$541$$ = $JSCompiler_inline_result$jscomp$686$$;
                    break b;
                  }
                }
                $JSCompiler_inline_result$jscomp$541$$ = null;
              }
              if ($initialResponse$jscomp$inline_268_status$jscomp$inline_266$$ = $JSCompiler_inline_result$jscomp$541$$) {
                $JSCompiler_StaticMethods_xmlHttpChannelResponseText$$(this.$j$, this.$m$, $initialResponse$jscomp$inline_268_status$jscomp$inline_266$$, "Initial handshake response via X-HTTP-Initial-Response"), this.$I$ = !0, $JSCompiler_StaticMethods_safeOnRequestData_$$(this, $initialResponse$jscomp$inline_268_status$jscomp$inline_266$$);
              } else {
                this.$i$ = !1;
                this.$s$ = 3;
                $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(12);
                $JSCompiler_StaticMethods_cleanup_$$(this);
                $JSCompiler_StaticMethods_dispatchFailure_$$(this);
                break a;
              }
            }
            this.$N$ ? ($JSCompiler_StaticMethods_decodeNextChunks_$$(this, $readyState$jscomp$inline_263$$, $JSCompiler_inline_result$jscomp$542_responseText$jscomp$inline_267$$), $goog$userAgent$EDGE_OR_IE$$ && this.$i$ && 3 == $readyState$jscomp$inline_263$$ && ($JSCompiler_StaticMethods_listen_$$(this.$O$, this.$P$, "tick", this.$pollResponse_$), this.$P$.start())) : ($JSCompiler_StaticMethods_xmlHttpChannelResponseText$$(this.$j$, this.$m$, $JSCompiler_inline_result$jscomp$542_responseText$jscomp$inline_267$$, 
            null), $JSCompiler_StaticMethods_safeOnRequestData_$$(this, $JSCompiler_inline_result$jscomp$542_responseText$jscomp$inline_267$$));
            4 == $readyState$jscomp$inline_263$$ && $JSCompiler_StaticMethods_cleanup_$$(this);
            this.$i$ && !this.$H$ && (4 == $readyState$jscomp$inline_263$$ ? $JSCompiler_StaticMethods_onRequestComplete$$(this.$l$, this) : (this.$i$ = !1, $JSCompiler_StaticMethods_ensureWatchDogTimer_$$(this)));
          } else {
            $JSCompiler_StaticMethods_getResponseHeaders$$(this.$g$), 400 == $initialResponse$jscomp$inline_268_status$jscomp$inline_266$$ && 0 < $JSCompiler_inline_result$jscomp$542_responseText$jscomp$inline_267$$.indexOf("Unknown SID") ? (this.$s$ = 3, $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(12)) : (this.$s$ = 0, $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(13)), $JSCompiler_StaticMethods_cleanup_$$(this), $JSCompiler_StaticMethods_dispatchFailure_$$(this);
          }
        }
      }
    }
  } catch ($ex$jscomp$6$$) {
  } finally {
  }
};
function $JSCompiler_StaticMethods_useFetchStreamsForResponse_$$($JSCompiler_StaticMethods_useFetchStreamsForResponse_$self$$) {
  return $JSCompiler_StaticMethods_useFetchStreamsForResponse_$self$$.$g$ ? "GET" == $JSCompiler_StaticMethods_useFetchStreamsForResponse_$self$$.$v$ && 2 != $JSCompiler_StaticMethods_useFetchStreamsForResponse_$self$$.$J$ && $JSCompiler_StaticMethods_useFetchStreamsForResponse_$self$$.$l$.$ha$ : !1;
}
function $JSCompiler_StaticMethods_decodeNextChunks_$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$, $JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$, $responseText$jscomp$4$$) {
  for (var $decodeNextChunksSuccessful$$ = !0, $chunkText$$; !$JSCompiler_StaticMethods_decodeNextChunks_$self$$.$H$ && $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$o$ < $responseText$jscomp$4$$.length;) {
    if ($chunkText$$ = $JSCompiler_StaticMethods_getNextChunk_$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$, $responseText$jscomp$4$$), $chunkText$$ == $goog$labs$net$webChannel$ChannelRequest$INCOMPLETE_CHUNK_$$) {
      4 == $JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$ && ($JSCompiler_StaticMethods_decodeNextChunks_$self$$.$s$ = 4, $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(14), $decodeNextChunksSuccessful$$ = !1);
      $JSCompiler_StaticMethods_xmlHttpChannelResponseText$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$.$j$, $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$m$, null, "[Incomplete Response]");
      break;
    } else if ($chunkText$$ == $goog$labs$net$webChannel$ChannelRequest$INVALID_CHUNK_$$) {
      $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$s$ = 4;
      $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(15);
      $JSCompiler_StaticMethods_xmlHttpChannelResponseText$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$.$j$, $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$m$, $responseText$jscomp$4$$, "[Invalid Chunk]");
      $decodeNextChunksSuccessful$$ = !1;
      break;
    } else {
      $JSCompiler_StaticMethods_xmlHttpChannelResponseText$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$.$j$, $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$m$, $chunkText$$, null), $JSCompiler_StaticMethods_safeOnRequestData_$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$, $chunkText$$);
    }
  }
  $JSCompiler_StaticMethods_useFetchStreamsForResponse_$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$) && 0 != $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$o$ && ($JSCompiler_StaticMethods_decodeNextChunks_$self$$.$h$.$g$ = $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$h$.$g$.slice($JSCompiler_StaticMethods_decodeNextChunks_$self$$.$o$), $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$o$ = 0);
  4 != $JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$ || 0 != $responseText$jscomp$4$$.length || $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$h$.$h$ || ($JSCompiler_StaticMethods_decodeNextChunks_$self$$.$s$ = 1, $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(16), $decodeNextChunksSuccessful$$ = !1);
  $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$i$ = $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$i$ && $decodeNextChunksSuccessful$$;
  $decodeNextChunksSuccessful$$ ? 0 < $responseText$jscomp$4$$.length && !$JSCompiler_StaticMethods_decodeNextChunks_$self$$.$U$ && ($JSCompiler_StaticMethods_decodeNextChunks_$self$$.$U$ = !0, $JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$ = $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$l$, $JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$.$g$ == $JSCompiler_StaticMethods_decodeNextChunks_$self$$ && $JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$.$W$ && 
  !$JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$.$L$ && ($JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$.$j$.info("Great, no buffering proxy detected. Bytes received: " + $responseText$jscomp$4$$.length), $JSCompiler_StaticMethods_clearBpDetectionTimer_$$($JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$), $JSCompiler_StaticMethods_onFirstByteReceived$self$jscomp$inline_270_readyState$jscomp$2$$.$L$ = 
  !0, $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(11))) : ($JSCompiler_StaticMethods_xmlHttpChannelResponseText$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$.$j$, $JSCompiler_StaticMethods_decodeNextChunks_$self$$.$m$, $responseText$jscomp$4$$, "[Invalid Chunked Response]"), $JSCompiler_StaticMethods_cleanup_$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$), $JSCompiler_StaticMethods_dispatchFailure_$$($JSCompiler_StaticMethods_decodeNextChunks_$self$$));
}
$JSCompiler_prototypeAlias$$.$pollResponse_$ = function() {
  if (this.$g$) {
    var $readyState$jscomp$3$$ = $JSCompiler_StaticMethods_getReadyState$$(this.$g$), $responseText$jscomp$5$$ = this.$g$.$getResponseText$();
    this.$o$ < $responseText$jscomp$5$$.length && ($JSCompiler_StaticMethods_cancelWatchDogTimer_$$(this), $JSCompiler_StaticMethods_decodeNextChunks_$$(this, $readyState$jscomp$3$$, $responseText$jscomp$5$$), this.$i$ && 4 != $readyState$jscomp$3$$ && $JSCompiler_StaticMethods_ensureWatchDogTimer_$$(this));
  }
};
function $JSCompiler_StaticMethods_getNextChunk_$$($JSCompiler_StaticMethods_getNextChunk_$self$$, $chunkText$jscomp$1_responseText$jscomp$6$$) {
  var $size$jscomp$23_sizeStartIndex$$ = $JSCompiler_StaticMethods_getNextChunk_$self$$.$o$, $chunkStartIndex_sizeEndIndex$$ = $chunkText$jscomp$1_responseText$jscomp$6$$.indexOf("\n", $size$jscomp$23_sizeStartIndex$$);
  if (-1 == $chunkStartIndex_sizeEndIndex$$) {
    return $goog$labs$net$webChannel$ChannelRequest$INCOMPLETE_CHUNK_$$;
  }
  $size$jscomp$23_sizeStartIndex$$ = Number($chunkText$jscomp$1_responseText$jscomp$6$$.substring($size$jscomp$23_sizeStartIndex$$, $chunkStartIndex_sizeEndIndex$$));
  if (isNaN($size$jscomp$23_sizeStartIndex$$)) {
    return $goog$labs$net$webChannel$ChannelRequest$INVALID_CHUNK_$$;
  }
  $chunkStartIndex_sizeEndIndex$$ += 1;
  if ($chunkStartIndex_sizeEndIndex$$ + $size$jscomp$23_sizeStartIndex$$ > $chunkText$jscomp$1_responseText$jscomp$6$$.length) {
    return $goog$labs$net$webChannel$ChannelRequest$INCOMPLETE_CHUNK_$$;
  }
  $chunkText$jscomp$1_responseText$jscomp$6$$ = $chunkText$jscomp$1_responseText$jscomp$6$$.slice($chunkStartIndex_sizeEndIndex$$, $chunkStartIndex_sizeEndIndex$$ + $size$jscomp$23_sizeStartIndex$$);
  $JSCompiler_StaticMethods_getNextChunk_$self$$.$o$ = $chunkStartIndex_sizeEndIndex$$ + $size$jscomp$23_sizeStartIndex$$;
  return $chunkText$jscomp$1_responseText$jscomp$6$$;
}
$JSCompiler_prototypeAlias$$.cancel = function() {
  this.$H$ = !0;
  $JSCompiler_StaticMethods_cleanup_$$(this);
};
function $JSCompiler_StaticMethods_ensureWatchDogTimer_$$($JSCompiler_StaticMethods_ensureWatchDogTimer_$self$$) {
  $JSCompiler_StaticMethods_ensureWatchDogTimer_$self$$.$S$ = Date.now() + $JSCompiler_StaticMethods_ensureWatchDogTimer_$self$$.$M$;
  $JSCompiler_StaticMethods_startWatchDogTimer_$$($JSCompiler_StaticMethods_ensureWatchDogTimer_$self$$, $JSCompiler_StaticMethods_ensureWatchDogTimer_$self$$.$M$);
}
function $JSCompiler_StaticMethods_startWatchDogTimer_$$($JSCompiler_StaticMethods_startWatchDogTimer_$self$$, $time$jscomp$3$$) {
  if (null != $JSCompiler_StaticMethods_startWatchDogTimer_$self$$.$C$) {
    throw Error("WatchDog timer not null");
  }
  $JSCompiler_StaticMethods_startWatchDogTimer_$self$$.$C$ = $goog$labs$net$webChannel$requestStats$setTimeout$$($goog$bind$$($JSCompiler_StaticMethods_startWatchDogTimer_$self$$.$onWatchDogTimeout_$, $JSCompiler_StaticMethods_startWatchDogTimer_$self$$), $time$jscomp$3$$);
}
function $JSCompiler_StaticMethods_cancelWatchDogTimer_$$($JSCompiler_StaticMethods_cancelWatchDogTimer_$self$$) {
  $JSCompiler_StaticMethods_cancelWatchDogTimer_$self$$.$C$ && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_cancelWatchDogTimer_$self$$.$C$), $JSCompiler_StaticMethods_cancelWatchDogTimer_$self$$.$C$ = null);
}
$JSCompiler_prototypeAlias$$.$onWatchDogTimeout_$ = function() {
  this.$C$ = null;
  var $now$$ = Date.now();
  0 <= $now$$ - this.$S$ ? ($JSCompiler_StaticMethods_timeoutResponse$$(this.$j$, this.$B$), 2 != this.$J$ && ($goog$labs$net$webChannel$requestStats$notifyServerReachabilityEvent$$(3), $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(17)), $JSCompiler_StaticMethods_cleanup_$$(this), this.$s$ = 2, $JSCompiler_StaticMethods_dispatchFailure_$$(this)) : $JSCompiler_StaticMethods_startWatchDogTimer_$$(this, this.$S$ - $now$$);
};
function $JSCompiler_StaticMethods_dispatchFailure_$$($JSCompiler_StaticMethods_dispatchFailure_$self$$) {
  0 == $JSCompiler_StaticMethods_dispatchFailure_$self$$.$l$.$JSC$2464_state_$ || $JSCompiler_StaticMethods_dispatchFailure_$self$$.$H$ || $JSCompiler_StaticMethods_onRequestComplete$$($JSCompiler_StaticMethods_dispatchFailure_$self$$.$l$, $JSCompiler_StaticMethods_dispatchFailure_$self$$);
}
function $JSCompiler_StaticMethods_cleanup_$$($JSCompiler_StaticMethods_cleanup_$self$$) {
  $JSCompiler_StaticMethods_cancelWatchDogTimer_$$($JSCompiler_StaticMethods_cleanup_$self$$);
  var $obj$jscomp$inline_282_xmlhttp$jscomp$1$$ = $JSCompiler_StaticMethods_cleanup_$self$$.$K$;
  $obj$jscomp$inline_282_xmlhttp$jscomp$1$$ && "function" == typeof $obj$jscomp$inline_282_xmlhttp$jscomp$1$$.$dispose$ && $obj$jscomp$inline_282_xmlhttp$jscomp$1$$.$dispose$();
  $JSCompiler_StaticMethods_cleanup_$self$$.$K$ = null;
  $JSCompiler_StaticMethods_JSC$2380_stop$$($JSCompiler_StaticMethods_cleanup_$self$$.$P$);
  $JSCompiler_StaticMethods_JSC$2388_removeAll$$($JSCompiler_StaticMethods_cleanup_$self$$.$O$);
  $JSCompiler_StaticMethods_cleanup_$self$$.$g$ && ($obj$jscomp$inline_282_xmlhttp$jscomp$1$$ = $JSCompiler_StaticMethods_cleanup_$self$$.$g$, $JSCompiler_StaticMethods_cleanup_$self$$.$g$ = null, $obj$jscomp$inline_282_xmlhttp$jscomp$1$$.abort(), $obj$jscomp$inline_282_xmlhttp$jscomp$1$$.$dispose$());
}
function $JSCompiler_StaticMethods_safeOnRequestData_$$($JSCompiler_StaticMethods_safeOnRequestData_$self$$, $data$jscomp$87_i$jscomp$inline_607$$) {
  try {
    var $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$ = $JSCompiler_StaticMethods_safeOnRequestData_$self$$.$l$;
    if (0 != $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$JSC$2464_state_$ && ($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$g$ == $JSCompiler_StaticMethods_safeOnRequestData_$self$$ || $JSCompiler_StaticMethods_hasRequest$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$h$, $JSCompiler_StaticMethods_safeOnRequestData_$self$$))) {
      if (!$JSCompiler_StaticMethods_safeOnRequestData_$self$$.$I$ && $JSCompiler_StaticMethods_hasRequest$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$h$, $JSCompiler_StaticMethods_safeOnRequestData_$self$$) && 3 == $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$JSC$2464_state_$) {
        try {
          var $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$ = $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$ia$.$g$.parse($data$jscomp$87_i$jscomp$inline_607$$);
        } catch ($ex$jscomp$inline_289$$) {
          $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$ = null;
        }
        if (Array.isArray($JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$) && 3 == $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.length) {
          var $response$jscomp$inline_288_responseValues$jscomp$inline_596$$ = $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$;
          if (0 == $response$jscomp$inline_288_responseValues$jscomp$inline_596$$[0]) {
            a: {
              if (!$JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$u$) {
                if ($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$g$) {
                  if ($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$g$.$F$ + 3E3 < $JSCompiler_StaticMethods_safeOnRequestData_$self$$.$F$) {
                    $JSCompiler_StaticMethods_clearDeadBackchannelTimer_$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$), $JSCompiler_StaticMethods_cancelBackChannelRequest_$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$);
                  } else {
                    break a;
                  }
                }
                $JSCompiler_StaticMethods_maybeRetryBackChannel_$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$);
                $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(18);
              }
            }
          } else {
            $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$fa$ = $response$jscomp$inline_288_responseValues$jscomp$inline_596$$[1], 0 < $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$fa$ - $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$R$ && 37500 > $response$jscomp$inline_288_responseValues$jscomp$inline_596$$[2] && $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$F$ && 0 == $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$A$ && 
            !$JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$v$ && ($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$v$ = $goog$labs$net$webChannel$requestStats$setTimeout$$($goog$bind$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$onBackChannelDead_$, $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$), 6E3));
          }
          if (1 >= $JSCompiler_StaticMethods_getRequestCount$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$h$) && $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$X$) {
            try {
              $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$X$();
            } catch ($ex$jscomp$inline_601$$) {
            }
            $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$X$ = void 0;
          }
        } else {
          $JSCompiler_StaticMethods_signalError_$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$, 11);
        }
      } else {
        if (($JSCompiler_StaticMethods_safeOnRequestData_$self$$.$I$ || $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$g$ == $JSCompiler_StaticMethods_safeOnRequestData_$self$$) && $JSCompiler_StaticMethods_clearDeadBackchannelTimer_$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$), !$goog$string$internal$isEmptyOrWhitespace$$($data$jscomp$87_i$jscomp$inline_607$$)) {
          for ($response$jscomp$inline_288_responseValues$jscomp$inline_596$$ = $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$ia$.$g$.parse($data$jscomp$87_i$jscomp$inline_607$$), $data$jscomp$87_i$jscomp$inline_607$$ = 0; $data$jscomp$87_i$jscomp$inline_607$$ < $response$jscomp$inline_288_responseValues$jscomp$inline_596$$.length; $data$jscomp$87_i$jscomp$inline_607$$++) {
            var $nextArray$jscomp$inline_608$$ = $response$jscomp$inline_288_responseValues$jscomp$inline_596$$[$data$jscomp$87_i$jscomp$inline_607$$];
            $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$R$ = $nextArray$jscomp$inline_608$$[0];
            $nextArray$jscomp$inline_608$$ = $nextArray$jscomp$inline_608$$[1];
            if (2 == $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$JSC$2464_state_$) {
              if ("c" == $nextArray$jscomp$inline_608$$[0]) {
                $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$J$ = $nextArray$jscomp$inline_608$$[1];
                $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$Y$ = $nextArray$jscomp$inline_608$$[2];
                var $negotiatedVersion$jscomp$inline_612$$ = $nextArray$jscomp$inline_608$$[3];
                null != $negotiatedVersion$jscomp$inline_612$$ && ($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$channelVersion_$ = $negotiatedVersion$jscomp$inline_612$$, $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$j$.info("VER=" + $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$channelVersion_$));
                var $negotiatedServerVersion$jscomp$inline_613$$ = $nextArray$jscomp$inline_608$$[4];
                null != $negotiatedServerVersion$jscomp$inline_613$$ && ($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$ga$ = $negotiatedServerVersion$jscomp$inline_613$$, $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$j$.info("SVER=" + $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$ga$));
                var $serverKeepaliveMs$jscomp$inline_614$$ = $nextArray$jscomp$inline_608$$[5];
                null != $serverKeepaliveMs$jscomp$inline_614$$ && "number" === typeof $serverKeepaliveMs$jscomp$inline_614$$ && 0 < $serverKeepaliveMs$jscomp$inline_614$$ && ($JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$ = 1.5 * $serverKeepaliveMs$jscomp$inline_614$$, $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$K$ = $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$, 
                $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$j$.info("backChannelRequestTimeoutMs_=" + $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$));
                $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$ = $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$;
                var $xhr$jscomp$inline_617$$ = $JSCompiler_StaticMethods_safeOnRequestData_$self$$.$g$;
                if ($xhr$jscomp$inline_617$$) {
                  var $clientProtocol$jscomp$inline_618$$ = $xhr$jscomp$inline_617$$.$g$ ? $xhr$jscomp$inline_617$$.$g$.getResponseHeader("X-Client-Wire-Protocol") : null;
                  if ($clientProtocol$jscomp$inline_618$$) {
                    var $JSCompiler_StaticMethods_applyClientProtocol$self$jscomp$inline_696$$ = $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$h$;
                    $JSCompiler_StaticMethods_applyClientProtocol$self$jscomp$inline_696$$.$g$ || -1 == $clientProtocol$jscomp$inline_618$$.indexOf("spdy") && -1 == $clientProtocol$jscomp$inline_618$$.indexOf("quic") && -1 == $clientProtocol$jscomp$inline_618$$.indexOf("h2") || ($JSCompiler_StaticMethods_applyClientProtocol$self$jscomp$inline_696$$.$j$ = $JSCompiler_StaticMethods_applyClientProtocol$self$jscomp$inline_696$$.$l$, $JSCompiler_StaticMethods_applyClientProtocol$self$jscomp$inline_696$$.$g$ = 
                    new Set(), $JSCompiler_StaticMethods_applyClientProtocol$self$jscomp$inline_696$$.$h$ && ($JSCompiler_StaticMethods_addRequest$$($JSCompiler_StaticMethods_applyClientProtocol$self$jscomp$inline_696$$, $JSCompiler_StaticMethods_applyClientProtocol$self$jscomp$inline_696$$.$h$), $JSCompiler_StaticMethods_applyClientProtocol$self$jscomp$inline_696$$.$h$ = null));
                  }
                  if ($JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$D$) {
                    var $httpSessionIdHeader$jscomp$inline_619$$ = $xhr$jscomp$inline_617$$.$g$ ? $xhr$jscomp$inline_617$$.$g$.getResponseHeader("X-HTTP-Session-Id") : null;
                    $httpSessionIdHeader$jscomp$inline_619$$ && ($JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$ea$ = $httpSessionIdHeader$jscomp$inline_619$$, $JSCompiler_StaticMethods_setParameterValue$$($JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$H$, 
                    $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$D$, $httpSessionIdHeader$jscomp$inline_619$$));
                  }
                }
                $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$JSC$2464_state_$ = 3;
                $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$l$ && $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$l$.$channelOpened$();
                $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$W$ && ($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$O$ = Date.now() - $JSCompiler_StaticMethods_safeOnRequestData_$self$$.$F$, $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$j$.info("Handshake RTT: " + $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$O$ + "ms"));
                $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$ = $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$;
                var $request$jscomp$inline_621$$ = $JSCompiler_StaticMethods_safeOnRequestData_$self$$;
                $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$ca$ = $JSCompiler_StaticMethods_createDataUri$$($JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$, $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$I$ ? 
                $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$Y$ : null, $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$T$);
                if ($request$jscomp$inline_621$$.$I$) {
                  $JSCompiler_StaticMethods_removeRequest$$($JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$h$, $request$jscomp$inline_621$$);
                  var $JSCompiler_StaticMethods_resetTimeout$self$jscomp$inline_702$$ = $request$jscomp$inline_621$$, $opt_timeout$jscomp$inline_703$$ = $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$K$;
                  $opt_timeout$jscomp$inline_703$$ && $JSCompiler_StaticMethods_resetTimeout$self$jscomp$inline_702$$.setTimeout($opt_timeout$jscomp$inline_703$$);
                  $JSCompiler_StaticMethods_resetTimeout$self$jscomp$inline_702$$.$C$ && ($JSCompiler_StaticMethods_cancelWatchDogTimer_$$($JSCompiler_StaticMethods_resetTimeout$self$jscomp$inline_702$$), $JSCompiler_StaticMethods_ensureWatchDogTimer_$$($JSCompiler_StaticMethods_resetTimeout$self$jscomp$inline_702$$));
                  $JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$.$g$ = $request$jscomp$inline_621$$;
                } else {
                  $JSCompiler_StaticMethods_ensureBackChannel_$$($JSCompiler_StaticMethods_applyControlHeaders_$self$jscomp$inline_616_JSCompiler_StaticMethods_startBackchannelAfterHandshake_$self$jscomp$inline_620_response$jscomp$inline_287_timeout$jscomp$inline_615$$);
                }
                0 < $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$i$.length && $JSCompiler_StaticMethods_ensureForwardChannel_$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$);
              } else {
                "stop" != $nextArray$jscomp$inline_608$$[0] && "close" != $nextArray$jscomp$inline_608$$[0] || $JSCompiler_StaticMethods_signalError_$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$, 7);
              }
            } else {
              3 == $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$JSC$2464_state_$ && ("stop" == $nextArray$jscomp$inline_608$$[0] || "close" == $nextArray$jscomp$inline_608$$[0] ? "stop" == $nextArray$jscomp$inline_608$$[0] ? $JSCompiler_StaticMethods_signalError_$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$, 7) : $JSCompiler_StaticMethods_JSC$2464_disconnect$$($JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$) : "noop" != $nextArray$jscomp$inline_608$$[0] && 
              $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$l$ && $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$l$.$channelHandleArray$($nextArray$jscomp$inline_608$$), $JSCompiler_StaticMethods_onRequestData$self$jscomp$inline_284$$.$A$ = 0);
            }
          }
        }
      }
    }
    $goog$labs$net$webChannel$requestStats$notifyServerReachabilityEvent$$(4);
  } catch ($e$jscomp$65$$) {
  }
}
;function $goog$labs$net$webChannel$Wire$QueuedMap$$($mapId$$, $map$jscomp$11$$) {
  this.$g$ = $mapId$$;
  this.map = $map$jscomp$11$$;
}
;function $module$contents$goog$labs$net$webChannel$ForwardChannelRequestPool_ForwardChannelRequestPool$$($JSCompiler_inline_result$jscomp$52_entrys$jscomp$inline_291_opt_maxPoolSize$$) {
  this.$l$ = $JSCompiler_inline_result$jscomp$52_entrys$jscomp$inline_291_opt_maxPoolSize$$ || 10;
  $goog$global$$.PerformanceNavigationTiming ? ($JSCompiler_inline_result$jscomp$52_entrys$jscomp$inline_291_opt_maxPoolSize$$ = $goog$global$$.performance.getEntriesByType("navigation"), $JSCompiler_inline_result$jscomp$52_entrys$jscomp$inline_291_opt_maxPoolSize$$ = 0 < $JSCompiler_inline_result$jscomp$52_entrys$jscomp$inline_291_opt_maxPoolSize$$.length && ("hq" == $JSCompiler_inline_result$jscomp$52_entrys$jscomp$inline_291_opt_maxPoolSize$$[0].nextHopProtocol || "h2" == $JSCompiler_inline_result$jscomp$52_entrys$jscomp$inline_291_opt_maxPoolSize$$[0].nextHopProtocol)) : 
  $JSCompiler_inline_result$jscomp$52_entrys$jscomp$inline_291_opt_maxPoolSize$$ = !!($goog$global$$.chrome && $goog$global$$.chrome.loadTimes && $goog$global$$.chrome.loadTimes() && $goog$global$$.chrome.loadTimes().wasFetchedViaSpdy);
  this.$j$ = $JSCompiler_inline_result$jscomp$52_entrys$jscomp$inline_291_opt_maxPoolSize$$ ? this.$l$ : 1;
  this.$g$ = null;
  1 < this.$j$ && (this.$g$ = new Set());
  this.$h$ = null;
  this.$i$ = [];
}
function $JSCompiler_StaticMethods_isFull$$($JSCompiler_StaticMethods_isFull$self$$) {
  return $JSCompiler_StaticMethods_isFull$self$$.$h$ ? !0 : $JSCompiler_StaticMethods_isFull$self$$.$g$ ? $JSCompiler_StaticMethods_isFull$self$$.$g$.size >= $JSCompiler_StaticMethods_isFull$self$$.$j$ : !1;
}
function $JSCompiler_StaticMethods_getRequestCount$$($JSCompiler_StaticMethods_getRequestCount$self$$) {
  return $JSCompiler_StaticMethods_getRequestCount$self$$.$h$ ? 1 : $JSCompiler_StaticMethods_getRequestCount$self$$.$g$ ? $JSCompiler_StaticMethods_getRequestCount$self$$.$g$.size : 0;
}
function $JSCompiler_StaticMethods_hasRequest$$($JSCompiler_StaticMethods_hasRequest$self$$, $req$$) {
  return $JSCompiler_StaticMethods_hasRequest$self$$.$h$ ? $JSCompiler_StaticMethods_hasRequest$self$$.$h$ == $req$$ : $JSCompiler_StaticMethods_hasRequest$self$$.$g$ ? $JSCompiler_StaticMethods_hasRequest$self$$.$g$.has($req$$) : !1;
}
function $JSCompiler_StaticMethods_addRequest$$($JSCompiler_StaticMethods_addRequest$self$$, $req$jscomp$1$$) {
  $JSCompiler_StaticMethods_addRequest$self$$.$g$ ? $JSCompiler_StaticMethods_addRequest$self$$.$g$.add($req$jscomp$1$$) : $JSCompiler_StaticMethods_addRequest$self$$.$h$ = $req$jscomp$1$$;
}
function $JSCompiler_StaticMethods_removeRequest$$($JSCompiler_StaticMethods_removeRequest$self$$, $req$jscomp$2$$) {
  $JSCompiler_StaticMethods_removeRequest$self$$.$h$ && $JSCompiler_StaticMethods_removeRequest$self$$.$h$ == $req$jscomp$2$$ ? $JSCompiler_StaticMethods_removeRequest$self$$.$h$ = null : $JSCompiler_StaticMethods_removeRequest$self$$.$g$ && $JSCompiler_StaticMethods_removeRequest$self$$.$g$.has($req$jscomp$2$$) && $JSCompiler_StaticMethods_removeRequest$self$$.$g$.delete($req$jscomp$2$$);
}
$module$contents$goog$labs$net$webChannel$ForwardChannelRequestPool_ForwardChannelRequestPool$$.prototype.cancel = function() {
  this.$i$ = $JSCompiler_StaticMethods_JSC$2427_getPendingMessages$$(this);
  if (this.$h$) {
    this.$h$.cancel(), this.$h$ = null;
  } else {
    if (this.$g$ && 0 !== this.$g$.size) {
      for (var $$jscomp$iter$6$$ = $$jscomp$makeIterator$$(this.$g$.values()), $$jscomp$key$m208496220$0$val$jscomp$24$$ = $$jscomp$iter$6$$.next(); !$$jscomp$key$m208496220$0$val$jscomp$24$$.done; $$jscomp$key$m208496220$0$val$jscomp$24$$ = $$jscomp$iter$6$$.next()) {
        $$jscomp$key$m208496220$0$val$jscomp$24$$.value.cancel();
      }
      this.$g$.clear();
    }
  }
};
function $JSCompiler_StaticMethods_JSC$2427_getPendingMessages$$($$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$) {
  if (null != $$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.$h$) {
    return $$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.$i$.concat($$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.$h$.$D$);
  }
  if (null != $$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.$g$ && 0 !== $$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.$g$.size) {
    var $result$jscomp$32$$ = $$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.$i$;
    $$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$ = $$jscomp$makeIterator$$($$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.$g$.values());
    for (var $$jscomp$key$m208496220$1$val$jscomp$25$$ = $$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.next(); !$$jscomp$key$m208496220$1$val$jscomp$25$$.done; $$jscomp$key$m208496220$1$val$jscomp$25$$ = $$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.next()) {
      $result$jscomp$32$$ = $result$jscomp$32$$.concat($$jscomp$key$m208496220$1$val$jscomp$25$$.value.$D$);
    }
    return $result$jscomp$32$$;
  }
  return $module$contents$goog$array_toArray$$($$jscomp$iter$7_JSCompiler_StaticMethods_JSC$2427_getPendingMessages$self$$.$i$);
}
;function $goog$structs$getValues$$($col$jscomp$1$$) {
  if ($col$jscomp$1$$.$getValues$ && "function" == typeof $col$jscomp$1$$.$getValues$) {
    return $col$jscomp$1$$.$getValues$();
  }
  if ("undefined" !== typeof Map && $col$jscomp$1$$ instanceof Map || "undefined" !== typeof Set && $col$jscomp$1$$ instanceof Set) {
    return Array.from($col$jscomp$1$$.values());
  }
  if ("string" === typeof $col$jscomp$1$$) {
    return $col$jscomp$1$$.split("");
  }
  if ($goog$isArrayLike$$($col$jscomp$1$$)) {
    for (var $res$jscomp$inline_294_rv$jscomp$15$$ = [], $i$jscomp$inline_295_l$jscomp$14$$ = $col$jscomp$1$$.length, $i$jscomp$153_key$jscomp$inline_296$$ = 0; $i$jscomp$153_key$jscomp$inline_296$$ < $i$jscomp$inline_295_l$jscomp$14$$; $i$jscomp$153_key$jscomp$inline_296$$++) {
      $res$jscomp$inline_294_rv$jscomp$15$$.push($col$jscomp$1$$[$i$jscomp$153_key$jscomp$inline_296$$]);
    }
    return $res$jscomp$inline_294_rv$jscomp$15$$;
  }
  $res$jscomp$inline_294_rv$jscomp$15$$ = [];
  $i$jscomp$inline_295_l$jscomp$14$$ = 0;
  for ($i$jscomp$153_key$jscomp$inline_296$$ in $col$jscomp$1$$) {
    $res$jscomp$inline_294_rv$jscomp$15$$[$i$jscomp$inline_295_l$jscomp$14$$++] = $col$jscomp$1$$[$i$jscomp$153_key$jscomp$inline_296$$];
  }
  return $res$jscomp$inline_294_rv$jscomp$15$$;
}
function $goog$structs$getKeys$$($col$jscomp$2_l$jscomp$15$$) {
  if ($col$jscomp$2_l$jscomp$15$$.$getKeys$ && "function" == typeof $col$jscomp$2_l$jscomp$15$$.$getKeys$) {
    return $col$jscomp$2_l$jscomp$15$$.$getKeys$();
  }
  if (!$col$jscomp$2_l$jscomp$15$$.$getValues$ || "function" != typeof $col$jscomp$2_l$jscomp$15$$.$getValues$) {
    if ("undefined" !== typeof Map && $col$jscomp$2_l$jscomp$15$$ instanceof Map) {
      return Array.from($col$jscomp$2_l$jscomp$15$$.keys());
    }
    if (!("undefined" !== typeof Set && $col$jscomp$2_l$jscomp$15$$ instanceof Set)) {
      if ($goog$isArrayLike$$($col$jscomp$2_l$jscomp$15$$) || "string" === typeof $col$jscomp$2_l$jscomp$15$$) {
        var $res$jscomp$inline_299_rv$jscomp$16$$ = [];
        $col$jscomp$2_l$jscomp$15$$ = $col$jscomp$2_l$jscomp$15$$.length;
        for (var $i$jscomp$154_i$jscomp$inline_300$$ = 0; $i$jscomp$154_i$jscomp$inline_300$$ < $col$jscomp$2_l$jscomp$15$$; $i$jscomp$154_i$jscomp$inline_300$$++) {
          $res$jscomp$inline_299_rv$jscomp$16$$.push($i$jscomp$154_i$jscomp$inline_300$$);
        }
        return $res$jscomp$inline_299_rv$jscomp$16$$;
      }
      $res$jscomp$inline_299_rv$jscomp$16$$ = [];
      $i$jscomp$154_i$jscomp$inline_300$$ = 0;
      for (var $key$jscomp$inline_301$$ in $col$jscomp$2_l$jscomp$15$$) {
        $res$jscomp$inline_299_rv$jscomp$16$$[$i$jscomp$154_i$jscomp$inline_300$$++] = $key$jscomp$inline_301$$;
      }
      return $res$jscomp$inline_299_rv$jscomp$16$$;
    }
  }
}
function $goog$structs$forEach$$($col$jscomp$6$$, $f$jscomp$49$$) {
  if ($col$jscomp$6$$.forEach && "function" == typeof $col$jscomp$6$$.forEach) {
    $col$jscomp$6$$.forEach($f$jscomp$49$$, void 0);
  } else if ($goog$isArrayLike$$($col$jscomp$6$$) || "string" === typeof $col$jscomp$6$$) {
    Array.prototype.forEach.call($col$jscomp$6$$, $f$jscomp$49$$, void 0);
  } else {
    for (var $keys$jscomp$2$$ = $goog$structs$getKeys$$($col$jscomp$6$$), $values$jscomp$11$$ = $goog$structs$getValues$$($col$jscomp$6$$), $l$jscomp$16$$ = $values$jscomp$11$$.length, $i$jscomp$155$$ = 0; $i$jscomp$155$$ < $l$jscomp$16$$; $i$jscomp$155$$++) {
      $f$jscomp$49$$.call(void 0, $values$jscomp$11$$[$i$jscomp$155$$], $keys$jscomp$2$$ && $keys$jscomp$2$$[$i$jscomp$155$$], $col$jscomp$6$$);
    }
  }
}
;var $goog$uri$utils$splitRe_$$ = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
function $goog$uri$utils$parseQueryData$$($encodedQuery_pairs$$, $callback$jscomp$83$$) {
  if ($encodedQuery_pairs$$) {
    $encodedQuery_pairs$$ = $encodedQuery_pairs$$.split("&");
    for (var $i$jscomp$160$$ = 0; $i$jscomp$160$$ < $encodedQuery_pairs$$.length; $i$jscomp$160$$++) {
      var $indexOfEquals$$ = $encodedQuery_pairs$$[$i$jscomp$160$$].indexOf("="), $value$jscomp$228$$ = null;
      if (0 <= $indexOfEquals$$) {
        var $name$jscomp$108$$ = $encodedQuery_pairs$$[$i$jscomp$160$$].substring(0, $indexOfEquals$$);
        $value$jscomp$228$$ = $encodedQuery_pairs$$[$i$jscomp$160$$].substring($indexOfEquals$$ + 1);
      } else {
        $name$jscomp$108$$ = $encodedQuery_pairs$$[$i$jscomp$160$$];
      }
      $callback$jscomp$83$$($name$jscomp$108$$, $value$jscomp$228$$ ? decodeURIComponent($value$jscomp$228$$.replace(/\+/g, " ")) : "");
    }
  }
}
;function $goog$Uri$$($opt_uri$$) {
  this.$g$ = this.$s$ = this.$j$ = "";
  this.$o$ = null;
  this.$m$ = this.$h$ = "";
  this.$l$ = !1;
  var $m$jscomp$4$$;
  $opt_uri$$ instanceof $goog$Uri$$ ? (this.$l$ = $opt_uri$$.$l$, $JSCompiler_StaticMethods_setScheme$$(this, $opt_uri$$.$j$), this.$s$ = $opt_uri$$.$s$, this.$g$ = $opt_uri$$.$g$, $JSCompiler_StaticMethods_setPort$$(this, $opt_uri$$.$o$), this.$h$ = $opt_uri$$.$h$, $JSCompiler_StaticMethods_setQueryData$$(this, $JSCompiler_StaticMethods_JSC$2433_clone$$($opt_uri$$.$i$)), this.$m$ = $opt_uri$$.$m$) : $opt_uri$$ && ($m$jscomp$4$$ = String($opt_uri$$).match($goog$uri$utils$splitRe_$$)) ? (this.$l$ = 
  !1, $JSCompiler_StaticMethods_setScheme$$(this, $m$jscomp$4$$[1] || "", !0), this.$s$ = $goog$Uri$decodeOrEmpty_$$($m$jscomp$4$$[2] || ""), this.$g$ = $goog$Uri$decodeOrEmpty_$$($m$jscomp$4$$[3] || "", !0), $JSCompiler_StaticMethods_setPort$$(this, $m$jscomp$4$$[4]), this.$h$ = $goog$Uri$decodeOrEmpty_$$($m$jscomp$4$$[5] || "", !0), $JSCompiler_StaticMethods_setQueryData$$(this, $m$jscomp$4$$[6] || "", !0), this.$m$ = $goog$Uri$decodeOrEmpty_$$($m$jscomp$4$$[7] || "")) : (this.$l$ = !1, this.$i$ = 
  new $goog$Uri$QueryData$$(null, this.$l$));
}
$goog$Uri$$.prototype.toString = function() {
  var $out$jscomp$4$$ = [], $scheme$jscomp$4_userInfo$$ = this.$j$;
  $scheme$jscomp$4_userInfo$$ && $out$jscomp$4$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$4_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), ":");
  var $domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$ = this.$g$;
  if ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$ || "file" == $scheme$jscomp$4_userInfo$$) {
    $out$jscomp$4$$.push("//"), ($scheme$jscomp$4_userInfo$$ = this.$s$) && $out$jscomp$4$$.push($goog$Uri$encodeSpecialChars_$$($scheme$jscomp$4_userInfo$$, $goog$Uri$reDisallowedInSchemeOrUserInfo_$$, !0), "@"), $out$jscomp$4$$.push(encodeURIComponent(String($domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$ = this.$o$, null != $domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$ && 
    $out$jscomp$4$$.push(":", String($domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$));
  }
  if ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$ = this.$h$) {
    this.$g$ && "/" != $domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$.charAt(0) && $out$jscomp$4$$.push("/"), $out$jscomp$4$$.push($goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$, "/" == $domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$.charAt(0) ? $goog$Uri$reDisallowedInAbsolutePath_$$ : $goog$Uri$reDisallowedInRelativePath_$$, !0));
  }
  ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$ = this.$i$.toString()) && $out$jscomp$4$$.push("?", $domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$);
  ($domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$ = this.$m$) && $out$jscomp$4$$.push("#", $goog$Uri$encodeSpecialChars_$$($domain$jscomp$2_fragment$jscomp$2_path$jscomp$21_port_query$jscomp$14$$, $goog$Uri$reDisallowedInFragment_$$));
  return $out$jscomp$4$$.join("");
};
$goog$Uri$$.prototype.resolve = function($relativeUri$$) {
  var $absoluteUri$$ = $JSCompiler_StaticMethods_JSC$2431_clone$$(this), $overridden$$ = !!$relativeUri$$.$j$;
  $overridden$$ ? $JSCompiler_StaticMethods_setScheme$$($absoluteUri$$, $relativeUri$$.$j$) : $overridden$$ = !!$relativeUri$$.$s$;
  $overridden$$ ? $absoluteUri$$.$s$ = $relativeUri$$.$s$ : $overridden$$ = !!$relativeUri$$.$g$;
  $overridden$$ ? $absoluteUri$$.$g$ = $relativeUri$$.$g$ : $overridden$$ = null != $relativeUri$$.$o$;
  var $leadingSlash$jscomp$inline_304_path$jscomp$22$$ = $relativeUri$$.$h$;
  if ($overridden$$) {
    $JSCompiler_StaticMethods_setPort$$($absoluteUri$$, $relativeUri$$.$o$);
  } else {
    if ($overridden$$ = !!$relativeUri$$.$h$) {
      if ("/" != $leadingSlash$jscomp$inline_304_path$jscomp$22$$.charAt(0)) {
        if (this.$g$ && !this.$h$) {
          $leadingSlash$jscomp$inline_304_path$jscomp$22$$ = "/" + $leadingSlash$jscomp$inline_304_path$jscomp$22$$;
        } else {
          var $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$ = $absoluteUri$$.$h$.lastIndexOf("/");
          -1 != $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$ && ($leadingSlash$jscomp$inline_304_path$jscomp$22$$ = $absoluteUri$$.$h$.slice(0, $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$ + 1) + $leadingSlash$jscomp$inline_304_path$jscomp$22$$);
        }
      }
      $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$ = $leadingSlash$jscomp$inline_304_path$jscomp$22$$;
      if (".." == $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$ || "." == $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$) {
        $leadingSlash$jscomp$inline_304_path$jscomp$22$$ = "";
      } else {
        if (-1 != $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$.indexOf("./") || -1 != $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$.indexOf("/.")) {
          $leadingSlash$jscomp$inline_304_path$jscomp$22$$ = 0 == $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$.lastIndexOf("/", 0);
          $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$ = $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$.split("/");
          for (var $out$jscomp$inline_306$$ = [], $pos$jscomp$inline_307$$ = 0; $pos$jscomp$inline_307$$ < $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$.length;) {
            var $segment$jscomp$inline_308$$ = $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$[$pos$jscomp$inline_307$$++];
            "." == $segment$jscomp$inline_308$$ ? $leadingSlash$jscomp$inline_304_path$jscomp$22$$ && $pos$jscomp$inline_307$$ == $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$.length && $out$jscomp$inline_306$$.push("") : ".." == $segment$jscomp$inline_308$$ ? ((1 < $out$jscomp$inline_306$$.length || 1 == $out$jscomp$inline_306$$.length && "" != $out$jscomp$inline_306$$[0]) && $out$jscomp$inline_306$$.pop(), $leadingSlash$jscomp$inline_304_path$jscomp$22$$ && $pos$jscomp$inline_307$$ == 
            $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$.length && $out$jscomp$inline_306$$.push("")) : ($out$jscomp$inline_306$$.push($segment$jscomp$inline_308$$), $leadingSlash$jscomp$inline_304_path$jscomp$22$$ = !0);
          }
          $leadingSlash$jscomp$inline_304_path$jscomp$22$$ = $out$jscomp$inline_306$$.join("/");
        } else {
          $leadingSlash$jscomp$inline_304_path$jscomp$22$$ = $lastSlashIndex_path$jscomp$inline_303_segments$jscomp$inline_305$$;
        }
      }
    }
  }
  $overridden$$ ? $absoluteUri$$.$h$ = $leadingSlash$jscomp$inline_304_path$jscomp$22$$ : $overridden$$ = "" !== $relativeUri$$.$i$.toString();
  $overridden$$ ? $JSCompiler_StaticMethods_setQueryData$$($absoluteUri$$, $JSCompiler_StaticMethods_JSC$2433_clone$$($relativeUri$$.$i$)) : $overridden$$ = !!$relativeUri$$.$m$;
  $overridden$$ && ($absoluteUri$$.$m$ = $relativeUri$$.$m$);
  return $absoluteUri$$;
};
function $JSCompiler_StaticMethods_JSC$2431_clone$$($JSCompiler_StaticMethods_JSC$2431_clone$self$$) {
  return new $goog$Uri$$($JSCompiler_StaticMethods_JSC$2431_clone$self$$);
}
function $JSCompiler_StaticMethods_setScheme$$($JSCompiler_StaticMethods_setScheme$self$$, $newScheme$$, $opt_decode$$) {
  $JSCompiler_StaticMethods_setScheme$self$$.$j$ = $opt_decode$$ ? $goog$Uri$decodeOrEmpty_$$($newScheme$$, !0) : $newScheme$$;
  $JSCompiler_StaticMethods_setScheme$self$$.$j$ && ($JSCompiler_StaticMethods_setScheme$self$$.$j$ = $JSCompiler_StaticMethods_setScheme$self$$.$j$.replace(/:$/, ""));
}
function $JSCompiler_StaticMethods_setPort$$($JSCompiler_StaticMethods_setPort$self$$, $newPort$$) {
  if ($newPort$$) {
    $newPort$$ = Number($newPort$$);
    if (isNaN($newPort$$) || 0 > $newPort$$) {
      throw Error("Bad port number " + $newPort$$);
    }
    $JSCompiler_StaticMethods_setPort$self$$.$o$ = $newPort$$;
  } else {
    $JSCompiler_StaticMethods_setPort$self$$.$o$ = null;
  }
}
function $JSCompiler_StaticMethods_setQueryData$$($JSCompiler_StaticMethods_setQueryData$self$$, $queryData$jscomp$6$$, $opt_decode$jscomp$4$$) {
  $queryData$jscomp$6$$ instanceof $goog$Uri$QueryData$$ ? ($JSCompiler_StaticMethods_setQueryData$self$$.$i$ = $queryData$jscomp$6$$, $JSCompiler_StaticMethods_JSC$2433_setIgnoreCase$$($JSCompiler_StaticMethods_setQueryData$self$$.$i$, $JSCompiler_StaticMethods_setQueryData$self$$.$l$)) : ($opt_decode$jscomp$4$$ || ($queryData$jscomp$6$$ = $goog$Uri$encodeSpecialChars_$$($queryData$jscomp$6$$, $goog$Uri$reDisallowedInQuery_$$)), $JSCompiler_StaticMethods_setQueryData$self$$.$i$ = new $goog$Uri$QueryData$$($queryData$jscomp$6$$, 
  $JSCompiler_StaticMethods_setQueryData$self$$.$l$));
}
function $JSCompiler_StaticMethods_setParameterValue$$($JSCompiler_StaticMethods_setParameterValue$self$$, $key$jscomp$121$$, $value$jscomp$232$$) {
  $JSCompiler_StaticMethods_setParameterValue$self$$.$i$.set($key$jscomp$121$$, $value$jscomp$232$$);
}
function $JSCompiler_StaticMethods_makeUnique$$($JSCompiler_StaticMethods_makeUnique$self$$) {
  $JSCompiler_StaticMethods_setParameterValue$$($JSCompiler_StaticMethods_makeUnique$self$$, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
  return $JSCompiler_StaticMethods_makeUnique$self$$;
}
function $goog$Uri$decodeOrEmpty_$$($val$jscomp$28$$, $opt_preserveReserved$jscomp$1$$) {
  return $val$jscomp$28$$ ? $opt_preserveReserved$jscomp$1$$ ? decodeURI($val$jscomp$28$$.replace(/%25/g, "%2525")) : decodeURIComponent($val$jscomp$28$$) : "";
}
function $goog$Uri$encodeSpecialChars_$$($encoded_unescapedPart$$, $extra$$, $opt_removeDoubleEncoding$$) {
  return "string" === typeof $encoded_unescapedPart$$ ? ($encoded_unescapedPart$$ = encodeURI($encoded_unescapedPart$$).replace($extra$$, $goog$Uri$encodeChar_$$), $opt_removeDoubleEncoding$$ && ($encoded_unescapedPart$$ = $encoded_unescapedPart$$.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), $encoded_unescapedPart$$) : null;
}
function $goog$Uri$encodeChar_$$($ch$jscomp$4_n$jscomp$16$$) {
  $ch$jscomp$4_n$jscomp$16$$ = $ch$jscomp$4_n$jscomp$16$$.charCodeAt(0);
  return "%" + ($ch$jscomp$4_n$jscomp$16$$ >> 4 & 15).toString(16) + ($ch$jscomp$4_n$jscomp$16$$ & 15).toString(16);
}
var $goog$Uri$reDisallowedInSchemeOrUserInfo_$$ = /[#\/\?@]/g, $goog$Uri$reDisallowedInRelativePath_$$ = /[#\?:]/g, $goog$Uri$reDisallowedInAbsolutePath_$$ = /[#\?]/g, $goog$Uri$reDisallowedInQuery_$$ = /[#\?@]/g, $goog$Uri$reDisallowedInFragment_$$ = /#/g;
function $goog$Uri$QueryData$$($opt_query$jscomp$1$$, $opt_ignoreCase$jscomp$3$$) {
  this.$h$ = this.$g$ = null;
  this.$i$ = $opt_query$jscomp$1$$ || null;
  this.$j$ = !!$opt_ignoreCase$jscomp$3$$;
}
function $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$g$ || ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$g$ = new Map(), $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$h$ = 0, $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$i$ && $goog$uri$utils$parseQueryData$$($JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.$i$, function($name$jscomp$111$$, $value$jscomp$233$$) {
    $JSCompiler_StaticMethods_ensureKeyMapInitialized_$self$$.add(decodeURIComponent($name$jscomp$111$$.replace(/\+/g, " ")), $value$jscomp$233$$);
  }));
}
$JSCompiler_prototypeAlias$$ = $goog$Uri$QueryData$$.prototype;
$JSCompiler_prototypeAlias$$.add = function($key$jscomp$125$$, $value$jscomp$235$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$i$ = null;
  $key$jscomp$125$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$125$$);
  var $values$jscomp$19$$ = this.$g$.get($key$jscomp$125$$);
  $values$jscomp$19$$ || this.$g$.set($key$jscomp$125$$, $values$jscomp$19$$ = []);
  $values$jscomp$19$$.push($value$jscomp$235$$);
  this.$h$ += 1;
  return this;
};
function $JSCompiler_StaticMethods_JSC$2433_remove$$($JSCompiler_StaticMethods_JSC$2433_remove$self$$, $key$jscomp$126$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_JSC$2433_remove$self$$);
  $key$jscomp$126$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_JSC$2433_remove$self$$, $key$jscomp$126$$);
  $JSCompiler_StaticMethods_JSC$2433_remove$self$$.$g$.has($key$jscomp$126$$) && ($JSCompiler_StaticMethods_JSC$2433_remove$self$$.$i$ = null, $JSCompiler_StaticMethods_JSC$2433_remove$self$$.$h$ -= $JSCompiler_StaticMethods_JSC$2433_remove$self$$.$g$.get($key$jscomp$126$$).length, $JSCompiler_StaticMethods_JSC$2433_remove$self$$.$g$.delete($key$jscomp$126$$));
}
function $JSCompiler_StaticMethods_containsKey$$($JSCompiler_StaticMethods_containsKey$self$$, $key$jscomp$127$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_containsKey$self$$);
  $key$jscomp$127$$ = $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_containsKey$self$$, $key$jscomp$127$$);
  return $JSCompiler_StaticMethods_containsKey$self$$.$g$.has($key$jscomp$127$$);
}
$JSCompiler_prototypeAlias$$.forEach = function($f$jscomp$54$$, $opt_scope$jscomp$10$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$g$.forEach(function($values$jscomp$20$$, $key$jscomp$128$$) {
    $values$jscomp$20$$.forEach(function($value$jscomp$237$$) {
      $f$jscomp$54$$.call($opt_scope$jscomp$10$$, $value$jscomp$237$$, $key$jscomp$128$$, this);
    }, this);
  }, this);
};
$JSCompiler_prototypeAlias$$.$getKeys$ = function() {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  for (var $vals$jscomp$1$$ = Array.from(this.$g$.values()), $keys$jscomp$9$$ = Array.from(this.$g$.keys()), $rv$jscomp$19$$ = [], $i$jscomp$164$$ = 0; $i$jscomp$164$$ < $keys$jscomp$9$$.length; $i$jscomp$164$$++) {
    for (var $val$jscomp$29$$ = $vals$jscomp$1$$[$i$jscomp$164$$], $j$jscomp$15$$ = 0; $j$jscomp$15$$ < $val$jscomp$29$$.length; $j$jscomp$15$$++) {
      $rv$jscomp$19$$.push($keys$jscomp$9$$[$i$jscomp$164$$]);
    }
  }
  return $rv$jscomp$19$$;
};
$JSCompiler_prototypeAlias$$.$getValues$ = function($opt_key$jscomp$2_values$jscomp$21$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  var $rv$jscomp$20$$ = [];
  if ("string" === typeof $opt_key$jscomp$2_values$jscomp$21$$) {
    $JSCompiler_StaticMethods_containsKey$$(this, $opt_key$jscomp$2_values$jscomp$21$$) && ($rv$jscomp$20$$ = $rv$jscomp$20$$.concat(this.$g$.get($JSCompiler_StaticMethods_getKeyName_$$(this, $opt_key$jscomp$2_values$jscomp$21$$))));
  } else {
    $opt_key$jscomp$2_values$jscomp$21$$ = Array.from(this.$g$.values());
    for (var $i$jscomp$165$$ = 0; $i$jscomp$165$$ < $opt_key$jscomp$2_values$jscomp$21$$.length; $i$jscomp$165$$++) {
      $rv$jscomp$20$$ = $rv$jscomp$20$$.concat($opt_key$jscomp$2_values$jscomp$21$$[$i$jscomp$165$$]);
    }
  }
  return $rv$jscomp$20$$;
};
$JSCompiler_prototypeAlias$$.set = function($key$jscomp$129$$, $value$jscomp$238$$) {
  $JSCompiler_StaticMethods_ensureKeyMapInitialized_$$(this);
  this.$i$ = null;
  $key$jscomp$129$$ = $JSCompiler_StaticMethods_getKeyName_$$(this, $key$jscomp$129$$);
  $JSCompiler_StaticMethods_containsKey$$(this, $key$jscomp$129$$) && (this.$h$ -= this.$g$.get($key$jscomp$129$$).length);
  this.$g$.set($key$jscomp$129$$, [$value$jscomp$238$$]);
  this.$h$ += 1;
  return this;
};
$JSCompiler_prototypeAlias$$.get = function($key$jscomp$130_values$jscomp$22$$, $opt_default$$) {
  if (!$key$jscomp$130_values$jscomp$22$$) {
    return $opt_default$$;
  }
  $key$jscomp$130_values$jscomp$22$$ = this.$getValues$($key$jscomp$130_values$jscomp$22$$);
  return 0 < $key$jscomp$130_values$jscomp$22$$.length ? String($key$jscomp$130_values$jscomp$22$$[0]) : $opt_default$$;
};
function $JSCompiler_StaticMethods_setValues$$($JSCompiler_StaticMethods_setValues$self$$, $key$jscomp$131$$, $values$jscomp$23$$) {
  $JSCompiler_StaticMethods_JSC$2433_remove$$($JSCompiler_StaticMethods_setValues$self$$, $key$jscomp$131$$);
  0 < $values$jscomp$23$$.length && ($JSCompiler_StaticMethods_setValues$self$$.$i$ = null, $JSCompiler_StaticMethods_setValues$self$$.$g$.set($JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_setValues$self$$, $key$jscomp$131$$), $module$contents$goog$array_toArray$$($values$jscomp$23$$)), $JSCompiler_StaticMethods_setValues$self$$.$h$ += $values$jscomp$23$$.length);
}
$JSCompiler_prototypeAlias$$.toString = function() {
  if (this.$i$) {
    return this.$i$;
  }
  if (!this.$g$) {
    return "";
  }
  for (var $sb$jscomp$10$$ = [], $keys$jscomp$10$$ = Array.from(this.$g$.keys()), $i$jscomp$166$$ = 0; $i$jscomp$166$$ < $keys$jscomp$10$$.length; $i$jscomp$166$$++) {
    var $key$jscomp$132_val$jscomp$30$$ = $keys$jscomp$10$$[$i$jscomp$166$$], $encodedKey$$ = encodeURIComponent(String($key$jscomp$132_val$jscomp$30$$));
    $key$jscomp$132_val$jscomp$30$$ = this.$getValues$($key$jscomp$132_val$jscomp$30$$);
    for (var $j$jscomp$16$$ = 0; $j$jscomp$16$$ < $key$jscomp$132_val$jscomp$30$$.length; $j$jscomp$16$$++) {
      var $param$jscomp$8$$ = $encodedKey$$;
      "" !== $key$jscomp$132_val$jscomp$30$$[$j$jscomp$16$$] && ($param$jscomp$8$$ += "=" + encodeURIComponent(String($key$jscomp$132_val$jscomp$30$$[$j$jscomp$16$$])));
      $sb$jscomp$10$$.push($param$jscomp$8$$);
    }
  }
  return this.$i$ = $sb$jscomp$10$$.join("&");
};
function $JSCompiler_StaticMethods_JSC$2433_clone$$($JSCompiler_StaticMethods_JSC$2433_clone$self$$) {
  var $rv$jscomp$21$$ = new $goog$Uri$QueryData$$();
  $rv$jscomp$21$$.$i$ = $JSCompiler_StaticMethods_JSC$2433_clone$self$$.$i$;
  $JSCompiler_StaticMethods_JSC$2433_clone$self$$.$g$ && ($rv$jscomp$21$$.$g$ = new Map($JSCompiler_StaticMethods_JSC$2433_clone$self$$.$g$), $rv$jscomp$21$$.$h$ = $JSCompiler_StaticMethods_JSC$2433_clone$self$$.$h$);
  return $rv$jscomp$21$$;
}
function $JSCompiler_StaticMethods_getKeyName_$$($JSCompiler_StaticMethods_getKeyName_$self$$, $arg$jscomp$15_keyName$$) {
  $arg$jscomp$15_keyName$$ = String($arg$jscomp$15_keyName$$);
  $JSCompiler_StaticMethods_getKeyName_$self$$.$j$ && ($arg$jscomp$15_keyName$$ = $arg$jscomp$15_keyName$$.toLowerCase());
  return $arg$jscomp$15_keyName$$;
}
function $JSCompiler_StaticMethods_JSC$2433_setIgnoreCase$$($JSCompiler_StaticMethods_JSC$2433_setIgnoreCase$self$$, $ignoreCase$jscomp$1$$) {
  $ignoreCase$jscomp$1$$ && !$JSCompiler_StaticMethods_JSC$2433_setIgnoreCase$self$$.$j$ && ($JSCompiler_StaticMethods_ensureKeyMapInitialized_$$($JSCompiler_StaticMethods_JSC$2433_setIgnoreCase$self$$), $JSCompiler_StaticMethods_JSC$2433_setIgnoreCase$self$$.$i$ = null, $JSCompiler_StaticMethods_JSC$2433_setIgnoreCase$self$$.$g$.forEach(function($value$jscomp$240$$, $key$jscomp$134$$) {
    var $lowerCase$$ = $key$jscomp$134$$.toLowerCase();
    $key$jscomp$134$$ != $lowerCase$$ && ($JSCompiler_StaticMethods_JSC$2433_remove$$(this, $key$jscomp$134$$), $JSCompiler_StaticMethods_setValues$$(this, $lowerCase$$, $value$jscomp$240$$));
  }, $JSCompiler_StaticMethods_JSC$2433_setIgnoreCase$self$$));
  $JSCompiler_StaticMethods_JSC$2433_setIgnoreCase$self$$.$j$ = $ignoreCase$jscomp$1$$;
}
;function $goog$labs$net$webChannel$netUtils$testLoadImage$$($url$jscomp$65$$, $callback$jscomp$85$$) {
  var $channelDebug$jscomp$2$$ = new $goog$labs$net$webChannel$WebChannelDebug$$();
  if ($goog$global$$.Image) {
    var $img$jscomp$2$$ = new Image();
    $img$jscomp$2$$.onload = $goog$partial$$($goog$labs$net$webChannel$netUtils$networkTestCallback_$$, $channelDebug$jscomp$2$$, "TestLoadImage: loaded", !0, $callback$jscomp$85$$, $img$jscomp$2$$);
    $img$jscomp$2$$.onerror = $goog$partial$$($goog$labs$net$webChannel$netUtils$networkTestCallback_$$, $channelDebug$jscomp$2$$, "TestLoadImage: error", !1, $callback$jscomp$85$$, $img$jscomp$2$$);
    $img$jscomp$2$$.onabort = $goog$partial$$($goog$labs$net$webChannel$netUtils$networkTestCallback_$$, $channelDebug$jscomp$2$$, "TestLoadImage: abort", !1, $callback$jscomp$85$$, $img$jscomp$2$$);
    $img$jscomp$2$$.ontimeout = $goog$partial$$($goog$labs$net$webChannel$netUtils$networkTestCallback_$$, $channelDebug$jscomp$2$$, "TestLoadImage: timeout", !1, $callback$jscomp$85$$, $img$jscomp$2$$);
    $goog$global$$.setTimeout(function() {
      if ($img$jscomp$2$$.ontimeout) {
        $img$jscomp$2$$.ontimeout();
      }
    }, 1E4);
    $img$jscomp$2$$.src = $url$jscomp$65$$;
  } else {
    $callback$jscomp$85$$(!1);
  }
}
function $goog$labs$net$webChannel$netUtils$testPingServer$$($url$jscomp$66$$, $callback$jscomp$86$$) {
  var $channelDebug$jscomp$3$$ = new $goog$labs$net$webChannel$WebChannelDebug$$(), $controller$jscomp$5$$ = new AbortController(), $timeoutId$$ = setTimeout(function() {
    $controller$jscomp$5$$.abort();
    $goog$labs$net$webChannel$netUtils$networkTestCallback_$$($channelDebug$jscomp$3$$, "TestPingServer: timeout", !1, $callback$jscomp$86$$);
  }, 1E4);
  fetch($url$jscomp$66$$, {signal:$controller$jscomp$5$$.signal}).then(function($response$jscomp$2$$) {
    clearTimeout($timeoutId$$);
    $response$jscomp$2$$.ok ? $goog$labs$net$webChannel$netUtils$networkTestCallback_$$($channelDebug$jscomp$3$$, "TestPingServer: ok", !0, $callback$jscomp$86$$) : $goog$labs$net$webChannel$netUtils$networkTestCallback_$$($channelDebug$jscomp$3$$, "TestPingServer: server error", !1, $callback$jscomp$86$$);
  }).catch(function() {
    clearTimeout($timeoutId$$);
    $goog$labs$net$webChannel$netUtils$networkTestCallback_$$($channelDebug$jscomp$3$$, "TestPingServer: error", !1, $callback$jscomp$86$$);
  });
}
function $goog$labs$net$webChannel$netUtils$networkTestCallback_$$($channelDebug$jscomp$4$$, $debugText$$, $result$jscomp$35$$, $callback$jscomp$87$$, $opt_img$$) {
  try {
    $opt_img$$ && ($opt_img$$.onload = null, $opt_img$$.onerror = null, $opt_img$$.onabort = null, $opt_img$$.ontimeout = null), $callback$jscomp$87$$($result$jscomp$35$$);
  } catch ($e$jscomp$66$$) {
  }
}
;function $goog$json$NativeJsonProcessor$$() {
}
$goog$json$NativeJsonProcessor$$.prototype.stringify = function($object$jscomp$13$$) {
  return $goog$global$$.JSON.stringify($object$jscomp$13$$, void 0);
};
$goog$json$NativeJsonProcessor$$.prototype.parse = function($s$jscomp$29$$) {
  return $goog$global$$.JSON.parse($s$jscomp$29$$, void 0);
};
function $goog$labs$net$webChannel$WireV8$$() {
  this.$g$ = new $goog$json$NativeJsonProcessor$$();
}
function $JSCompiler_StaticMethods_encodeMessage$$($message$jscomp$47$$, $buffer$jscomp$21$$, $opt_prefix$$) {
  var $prefix$jscomp$6$$ = $opt_prefix$$ || "";
  try {
    $goog$structs$forEach$$($message$jscomp$47$$, function($value$jscomp$242$$, $key$jscomp$136$$) {
      var $encodedValue$$ = $value$jscomp$242$$;
      $goog$isObject$$($value$jscomp$242$$) && ($encodedValue$$ = $goog$json$serialize$$($value$jscomp$242$$));
      $buffer$jscomp$21$$.push($prefix$jscomp$6$$ + $key$jscomp$136$$ + "=" + encodeURIComponent($encodedValue$$));
    });
  } catch ($ex$jscomp$7$$) {
    throw $buffer$jscomp$21$$.push($prefix$jscomp$6$$ + "type=" + encodeURIComponent("_badmap")), $ex$jscomp$7$$;
  }
}
;function $goog$net$FetchXmlHttpFactory$$($opts$jscomp$1$$) {
  this.$l$ = $opts$jscomp$1$$.$worker$ || null;
  this.$i$ = $opts$jscomp$1$$.$streamBinaryChunks$ || !1;
}
$goog$inherits$$($goog$net$FetchXmlHttpFactory$$, $goog$net$XmlHttpFactory$$);
$goog$net$FetchXmlHttpFactory$$.prototype.$g$ = function() {
  return new $goog$net$FetchXmlHttp$$(this.$l$, this.$i$);
};
$goog$net$FetchXmlHttpFactory$$.prototype.$j$ = function($retValue$$) {
  return function() {
    return $retValue$$;
  };
}({});
function $goog$net$FetchXmlHttp$$($worker$$, $streamBinaryChunks$$) {
  $goog$events$EventTarget$$.call(this);
  this.$D$ = $worker$$;
  this.$s$ = $streamBinaryChunks$$;
  this.$m$ = void 0;
  this.status = this.readyState = 0;
  this.responseType = this.responseText = this.response = this.statusText = "";
  this.onreadystatechange = null;
  this.$u$ = new Headers();
  this.$h$ = null;
  this.$C$ = "GET";
  this.$B$ = "";
  this.$g$ = !1;
  this.$A$ = this.$j$ = this.$l$ = null;
}
$goog$inherits$$($goog$net$FetchXmlHttp$$, $goog$events$EventTarget$$);
$JSCompiler_prototypeAlias$$ = $goog$net$FetchXmlHttp$$.prototype;
$JSCompiler_prototypeAlias$$.open = function($method$jscomp$4$$, $url$jscomp$67$$) {
  if (0 != this.readyState) {
    throw this.abort(), Error("Error reopening a connection");
  }
  this.$C$ = $method$jscomp$4$$;
  this.$B$ = $url$jscomp$67$$;
  this.readyState = 1;
  $JSCompiler_StaticMethods_dispatchCallback_$$(this);
};
$JSCompiler_prototypeAlias$$.send = function($opt_data$jscomp$3$$) {
  if (1 != this.readyState) {
    throw this.abort(), Error("need to call open() first. ");
  }
  this.$g$ = !0;
  var $requestInit$$ = {headers:this.$u$, method:this.$C$, credentials:this.$m$, cache:void 0};
  $opt_data$jscomp$3$$ && ($requestInit$$.body = $opt_data$jscomp$3$$);
  (this.$D$ || $goog$global$$).fetch(new Request(this.$B$, $requestInit$$)).then(this.$handleResponse_$.bind(this), this.$handleSendFailure_$.bind(this));
};
$JSCompiler_prototypeAlias$$.abort = function() {
  this.response = this.responseText = "";
  this.$u$ = new Headers();
  this.status = 0;
  this.$j$ && this.$j$.cancel("Request was aborted.").catch(function() {
  });
  1 <= this.readyState && this.$g$ && 4 != this.readyState && (this.$g$ = !1, $JSCompiler_StaticMethods_requestDone_$$(this));
  this.readyState = 0;
};
$JSCompiler_prototypeAlias$$.$handleResponse_$ = function($response$jscomp$4$$) {
  if (this.$g$ && (this.$l$ = $response$jscomp$4$$, this.$h$ || (this.status = this.$l$.status, this.statusText = this.$l$.statusText, this.$h$ = $response$jscomp$4$$.headers, this.readyState = 2, $JSCompiler_StaticMethods_dispatchCallback_$$(this)), this.$g$ && (this.readyState = 3, $JSCompiler_StaticMethods_dispatchCallback_$$(this), this.$g$))) {
    if ("arraybuffer" === this.responseType) {
      $response$jscomp$4$$.arrayBuffer().then(this.$handleResponseArrayBuffer_$.bind(this), this.$handleSendFailure_$.bind(this));
    } else if ("undefined" !== typeof $goog$global$$.ReadableStream && "body" in $response$jscomp$4$$) {
      this.$j$ = $response$jscomp$4$$.body.getReader();
      if (this.$s$) {
        if (this.responseType) {
          throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
        }
        this.response = [];
      } else {
        this.response = this.responseText = "", this.$A$ = new TextDecoder();
      }
      $JSCompiler_StaticMethods_readInputFromFetch_$$(this);
    } else {
      $response$jscomp$4$$.text().then(this.$handleResponseText_$.bind(this), this.$handleSendFailure_$.bind(this));
    }
  }
};
function $JSCompiler_StaticMethods_readInputFromFetch_$$($JSCompiler_StaticMethods_readInputFromFetch_$self$$) {
  $JSCompiler_StaticMethods_readInputFromFetch_$self$$.$j$.read().then($JSCompiler_StaticMethods_readInputFromFetch_$self$$.$handleDataFromStream_$.bind($JSCompiler_StaticMethods_readInputFromFetch_$self$$)).catch($JSCompiler_StaticMethods_readInputFromFetch_$self$$.$handleSendFailure_$.bind($JSCompiler_StaticMethods_readInputFromFetch_$self$$));
}
$JSCompiler_prototypeAlias$$.$handleDataFromStream_$ = function($result$jscomp$36$$) {
  if (this.$g$) {
    if (this.$s$ && $result$jscomp$36$$.value) {
      this.response.push($result$jscomp$36$$.value);
    } else if (!this.$s$) {
      var $dataPacket_newText$$ = $result$jscomp$36$$.value ? $result$jscomp$36$$.value : new Uint8Array(0);
      if ($dataPacket_newText$$ = this.$A$.decode($dataPacket_newText$$, {stream:!$result$jscomp$36$$.done})) {
        this.response = this.responseText += $dataPacket_newText$$;
      }
    }
    $result$jscomp$36$$.done ? $JSCompiler_StaticMethods_requestDone_$$(this) : $JSCompiler_StaticMethods_dispatchCallback_$$(this);
    3 == this.readyState && $JSCompiler_StaticMethods_readInputFromFetch_$$(this);
  }
};
$JSCompiler_prototypeAlias$$.$handleResponseText_$ = function($responseText$jscomp$7$$) {
  this.$g$ && (this.response = this.responseText = $responseText$jscomp$7$$, $JSCompiler_StaticMethods_requestDone_$$(this));
};
$JSCompiler_prototypeAlias$$.$handleResponseArrayBuffer_$ = function($responseArrayBuffer$$) {
  this.$g$ && (this.response = $responseArrayBuffer$$, $JSCompiler_StaticMethods_requestDone_$$(this));
};
$JSCompiler_prototypeAlias$$.$handleSendFailure_$ = function() {
  this.$g$ && $JSCompiler_StaticMethods_requestDone_$$(this);
};
function $JSCompiler_StaticMethods_requestDone_$$($JSCompiler_StaticMethods_requestDone_$self$$) {
  $JSCompiler_StaticMethods_requestDone_$self$$.readyState = 4;
  $JSCompiler_StaticMethods_requestDone_$self$$.$l$ = null;
  $JSCompiler_StaticMethods_requestDone_$self$$.$j$ = null;
  $JSCompiler_StaticMethods_requestDone_$self$$.$A$ = null;
  $JSCompiler_StaticMethods_dispatchCallback_$$($JSCompiler_StaticMethods_requestDone_$self$$);
}
$JSCompiler_prototypeAlias$$.setRequestHeader = function($header$jscomp$4$$, $value$jscomp$243$$) {
  this.$u$.append($header$jscomp$4$$, $value$jscomp$243$$);
};
$JSCompiler_prototypeAlias$$.getResponseHeader = function($header$jscomp$5$$) {
  return this.$h$ ? this.$h$.get($header$jscomp$5$$.toLowerCase()) || "" : "";
};
$JSCompiler_prototypeAlias$$.getAllResponseHeaders = function() {
  if (!this.$h$) {
    return "";
  }
  for (var $lines$$ = [], $iter$jscomp$8$$ = this.$h$.entries(), $entry$jscomp$18_pair$jscomp$3$$ = $iter$jscomp$8$$.next(); !$entry$jscomp$18_pair$jscomp$3$$.done;) {
    $entry$jscomp$18_pair$jscomp$3$$ = $entry$jscomp$18_pair$jscomp$3$$.value, $lines$$.push($entry$jscomp$18_pair$jscomp$3$$[0] + ": " + $entry$jscomp$18_pair$jscomp$3$$[1]), $entry$jscomp$18_pair$jscomp$3$$ = $iter$jscomp$8$$.next();
  }
  return $lines$$.join("\r\n");
};
function $JSCompiler_StaticMethods_dispatchCallback_$$($JSCompiler_StaticMethods_dispatchCallback_$self$$) {
  $JSCompiler_StaticMethods_dispatchCallback_$self$$.onreadystatechange && $JSCompiler_StaticMethods_dispatchCallback_$self$$.onreadystatechange.call($JSCompiler_StaticMethods_dispatchCallback_$self$$);
}
Object.defineProperty($goog$net$FetchXmlHttp$$.prototype, "withCredentials", {get:function() {
  return "include" === this.$m$;
}, set:function($value$jscomp$244$$) {
  this.$m$ = $value$jscomp$244$$ ? "include" : "same-origin";
}});
function $module$exports$goog$net$rpc$HttpCors$generateHttpHeadersOverwriteParam$$($headers$jscomp$1$$) {
  var $result$jscomp$37$$ = "";
  $module$contents$goog$object_forEach$$($headers$jscomp$1$$, function($value$jscomp$245$$, $key$jscomp$137$$) {
    $result$jscomp$37$$ += $key$jscomp$137$$;
    $result$jscomp$37$$ += ":";
    $result$jscomp$37$$ += $value$jscomp$245$$;
    $result$jscomp$37$$ += "\r\n";
  });
  return $result$jscomp$37$$;
}
function $module$exports$goog$net$rpc$HttpCors$setHttpHeadersWithOverwriteParam$$($url$jscomp$68$$, $urlParam$$, $extraHeaders$jscomp$1_httpHeaders$$) {
  a: {
    for ($JSCompiler_inline_result$jscomp$29_key$jscomp$inline_334$$ in $extraHeaders$jscomp$1_httpHeaders$$) {
      var $JSCompiler_inline_result$jscomp$29_key$jscomp$inline_334$$ = !1;
      break a;
    }
    $JSCompiler_inline_result$jscomp$29_key$jscomp$inline_334$$ = !0;
  }
  $JSCompiler_inline_result$jscomp$29_key$jscomp$inline_334$$ || ($extraHeaders$jscomp$1_httpHeaders$$ = $module$exports$goog$net$rpc$HttpCors$generateHttpHeadersOverwriteParam$$($extraHeaders$jscomp$1_httpHeaders$$), "string" === typeof $url$jscomp$68$$ ? (encodeURIComponent(String($urlParam$$)), null != $extraHeaders$jscomp$1_httpHeaders$$ && encodeURIComponent(String($extraHeaders$jscomp$1_httpHeaders$$))) : $JSCompiler_StaticMethods_setParameterValue$$($url$jscomp$68$$, $urlParam$$, $extraHeaders$jscomp$1_httpHeaders$$));
}
;function $goog$net$XhrIo$$($opt_xmlHttpFactory$$) {
  $goog$events$EventTarget$$.call(this);
  this.headers = new Map();
  this.$s$ = $opt_xmlHttpFactory$$ || null;
  this.$h$ = !1;
  this.$C$ = this.$g$ = null;
  this.$G$ = "";
  this.$m$ = 0;
  this.$j$ = "";
  this.$l$ = this.$F$ = this.$u$ = this.$D$ = !1;
  this.$B$ = 0;
  this.$A$ = null;
  this.$I$ = "";
  this.$J$ = this.$K$ = !1;
}
$goog$inherits$$($goog$net$XhrIo$$, $goog$events$EventTarget$$);
var $goog$net$XhrIo$HTTP_SCHEME_PATTERN$$ = /^https?$/i, $goog$net$XhrIo$METHODS_WITH_FORM_DATA$$ = ["POST", "PUT"];
$JSCompiler_prototypeAlias$$ = $goog$net$XhrIo$$.prototype;
$JSCompiler_prototypeAlias$$.$setWithCredentials$ = function($withCredentials$$) {
  this.$K$ = $withCredentials$$;
};
$JSCompiler_prototypeAlias$$.$JSC$2457_send$ = function($content$jscomp$9_url$jscomp$70$$, $$jscomp$iter$10_method$jscomp$5_opt_method$jscomp$1$$, $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$, $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$) {
  if (this.$g$) {
    throw Error("[goog.net.XhrIo] Object is active with another request=" + this.$G$ + "; newUri=" + $content$jscomp$9_url$jscomp$70$$);
  }
  $$jscomp$iter$10_method$jscomp$5_opt_method$jscomp$1$$ = $$jscomp$iter$10_method$jscomp$5_opt_method$jscomp$1$$ ? $$jscomp$iter$10_method$jscomp$5_opt_method$jscomp$1$$.toUpperCase() : "GET";
  this.$G$ = $content$jscomp$9_url$jscomp$70$$;
  this.$j$ = "";
  this.$m$ = 0;
  this.$D$ = !1;
  this.$h$ = !0;
  this.$g$ = this.$s$ ? this.$s$.$g$() : $goog$net$XmlHttp$factory_$$.$g$();
  this.$C$ = this.$s$ ? $JSCompiler_StaticMethods_getOptions$$(this.$s$) : $JSCompiler_StaticMethods_getOptions$$($goog$net$XmlHttp$factory_$$);
  this.$g$.onreadystatechange = $goog$bind$$(this.$onReadyStateChange_$, this);
  try {
    this.$F$ = !0, this.$g$.open($$jscomp$iter$10_method$jscomp$5_opt_method$jscomp$1$$, String($content$jscomp$9_url$jscomp$70$$), !0), this.$F$ = !1;
  } catch ($err$jscomp$23$$) {
    $JSCompiler_StaticMethods_error_$$(this, $err$jscomp$23$$);
    return;
  }
  $content$jscomp$9_url$jscomp$70$$ = $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$ || "";
  $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$ = new Map(this.headers);
  if ($$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$) {
    if (Object.getPrototypeOf($$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$) === Object.prototype) {
      for (var $$jscomp$iter$9_contentIsFormData_key$jscomp$138$$ in $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$) {
        $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$.set($$jscomp$iter$9_contentIsFormData_key$jscomp$138$$, $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$[$$jscomp$iter$9_contentIsFormData_key$jscomp$138$$]);
      }
    } else if ("function" === typeof $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$.keys && "function" === typeof $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$.get) {
      $$jscomp$iter$9_contentIsFormData_key$jscomp$138$$ = $$jscomp$makeIterator$$($$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$.keys());
      for (var $$jscomp$key$m71669834$55$key$jscomp$139_key$jscomp$139$$ = $$jscomp$iter$9_contentIsFormData_key$jscomp$138$$.next(); !$$jscomp$key$m71669834$55$key$jscomp$139_key$jscomp$139$$.done; $$jscomp$key$m71669834$55$key$jscomp$139_key$jscomp$139$$ = $$jscomp$iter$9_contentIsFormData_key$jscomp$138$$.next()) {
        $$jscomp$key$m71669834$55$key$jscomp$139_key$jscomp$139$$ = $$jscomp$key$m71669834$55$key$jscomp$139_key$jscomp$139$$.value, $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$.set($$jscomp$key$m71669834$55$key$jscomp$139_key$jscomp$139$$, $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$.get($$jscomp$key$m71669834$55$key$jscomp$139_key$jscomp$139$$));
      }
    } else {
      throw Error("Unknown input type for opt_headers: " + String($$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$));
    }
  }
  $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$ = Array.from($$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$.keys()).find(function($header$jscomp$6$$) {
    return "content-type" == $header$jscomp$6$$.toLowerCase();
  });
  $$jscomp$iter$9_contentIsFormData_key$jscomp$138$$ = $goog$global$$.FormData && $content$jscomp$9_url$jscomp$70$$ instanceof $goog$global$$.FormData;
  !(0 <= $module$contents$goog$array_indexOf$$($goog$net$XhrIo$METHODS_WITH_FORM_DATA$$, $$jscomp$iter$10_method$jscomp$5_opt_method$jscomp$1$$)) || $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$ || $$jscomp$iter$9_contentIsFormData_key$jscomp$138$$ || $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
  $$jscomp$iter$10_method$jscomp$5_opt_method$jscomp$1$$ = $$jscomp$makeIterator$$($$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$);
  for ($$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$ = $$jscomp$iter$10_method$jscomp$5_opt_method$jscomp$1$$.next(); !$$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$.done; $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$ = $$jscomp$iter$10_method$jscomp$5_opt_method$jscomp$1$$.next()) {
    $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$ = $$jscomp$makeIterator$$($$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$.value), $$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$ = $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$.next().value, $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$ = 
    $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$.next().value, this.$g$.setRequestHeader($$jscomp$key$m71669834$56$$jscomp$destructuring$var14_contentTypeKey_key$jscomp$140_opt_headers$jscomp$1$$, $$jscomp$destructuring$var15_headers$jscomp$3_opt_content$jscomp$2_value$jscomp$246$$);
  }
  this.$I$ && (this.$g$.responseType = this.$I$);
  "withCredentials" in this.$g$ && this.$g$.withCredentials !== this.$K$ && (this.$g$.withCredentials = this.$K$);
  try {
    $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$(this), 0 < this.$B$ && ((this.$J$ = $goog$net$XhrIo$shouldUseXhr2Timeout_$$(this.$g$)) ? (this.$g$.timeout = this.$B$, this.$g$.ontimeout = $goog$bind$$(this.$JSC$2457_timeout_$, this)) : this.$A$ = $goog$Timer$callOnce$$(this.$JSC$2457_timeout_$, this.$B$, this)), this.$u$ = !0, this.$g$.send($content$jscomp$9_url$jscomp$70$$), this.$u$ = !1;
  } catch ($err$jscomp$26$$) {
    $JSCompiler_StaticMethods_error_$$(this, $err$jscomp$26$$);
  }
};
function $goog$net$XhrIo$shouldUseXhr2Timeout_$$($xhr$jscomp$2$$) {
  return $goog$userAgent$IE$$ && "number" === typeof $xhr$jscomp$2$$.timeout && void 0 !== $xhr$jscomp$2$$.ontimeout;
}
$JSCompiler_prototypeAlias$$.$JSC$2457_timeout_$ = function() {
  "undefined" != typeof $goog$$ && this.$g$ && (this.$j$ = "Timed out after " + this.$B$ + "ms, aborting", this.$m$ = 8, $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$(this, "timeout"), this.abort(8));
};
function $JSCompiler_StaticMethods_error_$$($JSCompiler_StaticMethods_error_$self$$, $err$jscomp$27$$) {
  $JSCompiler_StaticMethods_error_$self$$.$h$ = !1;
  $JSCompiler_StaticMethods_error_$self$$.$g$ && ($JSCompiler_StaticMethods_error_$self$$.$l$ = !0, $JSCompiler_StaticMethods_error_$self$$.$g$.abort(), $JSCompiler_StaticMethods_error_$self$$.$l$ = !1);
  $JSCompiler_StaticMethods_error_$self$$.$j$ = $err$jscomp$27$$;
  $JSCompiler_StaticMethods_error_$self$$.$m$ = 5;
  $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_error_$self$$);
  $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_error_$self$$);
}
function $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_dispatchErrors_$self$$) {
  $JSCompiler_StaticMethods_dispatchErrors_$self$$.$D$ || ($JSCompiler_StaticMethods_dispatchErrors_$self$$.$D$ = !0, $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($JSCompiler_StaticMethods_dispatchErrors_$self$$, "complete"), $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($JSCompiler_StaticMethods_dispatchErrors_$self$$, "error"));
}
$JSCompiler_prototypeAlias$$.abort = function($opt_failureCode$$) {
  this.$g$ && this.$h$ && (this.$h$ = !1, this.$l$ = !0, this.$g$.abort(), this.$l$ = !1, this.$m$ = $opt_failureCode$$ || 7, $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$(this, "complete"), $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$(this, "abort"), $JSCompiler_StaticMethods_cleanUpXhr_$$(this));
};
$JSCompiler_prototypeAlias$$.$disposeInternal$ = function() {
  this.$g$ && (this.$h$ && (this.$h$ = !1, this.$l$ = !0, this.$g$.abort(), this.$l$ = !1), $JSCompiler_StaticMethods_cleanUpXhr_$$(this, !0));
  $goog$net$XhrIo$$.$superClass_$.$disposeInternal$.call(this);
};
$JSCompiler_prototypeAlias$$.$onReadyStateChange_$ = function() {
  this.$o$ || (this.$F$ || this.$u$ || this.$l$ ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this) : this.$onReadyStateChangeEntryPoint_$());
};
$JSCompiler_prototypeAlias$$.$onReadyStateChangeEntryPoint_$ = function() {
  $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$(this);
};
function $JSCompiler_StaticMethods_onReadyStateChangeHelper_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) {
  if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$h$ && "undefined" != typeof $goog$$ && (!$JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$C$[1] || 4 != $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) || 2 != $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$getStatus$())) {
    if ($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$u$ && 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
      $goog$Timer$callOnce$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$onReadyStateChange_$, 0, $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
    } else {
      if ($JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "readystatechange"), 4 == $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$)) {
        $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$h$ = !1;
        try {
          var $status$jscomp$inline_345$$ = $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$getStatus$();
          a: {
            switch($status$jscomp$inline_345$$) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var $JSCompiler_inline_result$jscomp$547$$ = !0;
                break a;
              default:
                $JSCompiler_inline_result$jscomp$547$$ = !1;
            }
          }
          var $JSCompiler_temp$jscomp$548$$;
          if (!($JSCompiler_temp$jscomp$548$$ = $JSCompiler_inline_result$jscomp$547$$)) {
            var $JSCompiler_temp$jscomp$549$$;
            if ($JSCompiler_temp$jscomp$549$$ = 0 === $status$jscomp$inline_345$$) {
              var $scheme$jscomp$inline_655$$ = String($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$G$).match($goog$uri$utils$splitRe_$$)[1] || null;
              !$scheme$jscomp$inline_655$$ && $goog$global$$.self && $goog$global$$.self.location && ($scheme$jscomp$inline_655$$ = $goog$global$$.self.location.protocol.slice(0, -1));
              $JSCompiler_temp$jscomp$549$$ = !$goog$net$XhrIo$HTTP_SCHEME_PATTERN$$.test($scheme$jscomp$inline_655$$ ? $scheme$jscomp$inline_655$$.toLowerCase() : "");
            }
            $JSCompiler_temp$jscomp$548$$ = $JSCompiler_temp$jscomp$549$$;
          }
          if ($JSCompiler_temp$jscomp$548$$) {
            $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "complete"), $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$, "success");
          } else {
            $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$m$ = 6;
            try {
              var $JSCompiler_inline_result$jscomp$61$$ = 2 < $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$) ? $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$g$.statusText : "";
            } catch ($e$jscomp$inline_348$$) {
              $JSCompiler_inline_result$jscomp$61$$ = "";
            }
            $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$j$ = $JSCompiler_inline_result$jscomp$61$$ + " [" + $JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$.$getStatus$() + "]";
            $JSCompiler_StaticMethods_dispatchErrors_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
          }
        } finally {
          $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_onReadyStateChangeHelper_$self$$);
        }
      }
    }
  }
}
function $JSCompiler_StaticMethods_cleanUpXhr_$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$, $opt_fromDispose$$) {
  if ($JSCompiler_StaticMethods_cleanUpXhr_$self$$.$g$) {
    $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$);
    var $xhr$jscomp$3$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$g$, $clearedOnReadyStateChange$$ = $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$C$[0] ? function() {
    } : null;
    $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$g$ = null;
    $JSCompiler_StaticMethods_cleanUpXhr_$self$$.$C$ = null;
    $opt_fromDispose$$ || $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($JSCompiler_StaticMethods_cleanUpXhr_$self$$, "ready");
    try {
      $xhr$jscomp$3$$.onreadystatechange = $clearedOnReadyStateChange$$;
    } catch ($e$jscomp$74$$) {
    }
  }
}
function $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$$($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$) {
  $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$g$ && $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$J$ && ($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$g$.ontimeout = null);
  $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$A$ && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$A$), $JSCompiler_StaticMethods_cleanUpTimeoutTimer_$self$$.$A$ = null);
}
$JSCompiler_prototypeAlias$$.isActive = function() {
  return !!this.$g$;
};
function $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getReadyState$self$$) {
  return $JSCompiler_StaticMethods_getReadyState$self$$.$g$ ? $JSCompiler_StaticMethods_getReadyState$self$$.$g$.readyState : 0;
}
$JSCompiler_prototypeAlias$$.$getStatus$ = function() {
  try {
    return 2 < $JSCompiler_StaticMethods_getReadyState$$(this) ? this.$g$.status : -1;
  } catch ($e$jscomp$75$$) {
    return -1;
  }
};
$JSCompiler_prototypeAlias$$.$getResponseText$ = function() {
  try {
    return this.$g$ ? this.$g$.responseText : "";
  } catch ($e$jscomp$77$$) {
    return "";
  }
};
$JSCompiler_prototypeAlias$$.$getResponseJson$ = function($jsonString$jscomp$inline_659_opt_xssiPrefix$$) {
  if (this.$g$) {
    var $responseText$jscomp$8$$ = this.$g$.responseText;
    $jsonString$jscomp$inline_659_opt_xssiPrefix$$ && 0 == $responseText$jscomp$8$$.indexOf($jsonString$jscomp$inline_659_opt_xssiPrefix$$) && ($responseText$jscomp$8$$ = $responseText$jscomp$8$$.substring($jsonString$jscomp$inline_659_opt_xssiPrefix$$.length));
    a: {
      $jsonString$jscomp$inline_659_opt_xssiPrefix$$ = $responseText$jscomp$8$$;
      if ($goog$global$$.JSON) {
        try {
          var $JSCompiler_inline_result$jscomp$546$$ = $goog$global$$.JSON.parse($jsonString$jscomp$inline_659_opt_xssiPrefix$$);
          break a;
        } catch ($e$jscomp$inline_660$$) {
        }
      }
      $JSCompiler_inline_result$jscomp$546$$ = $goog$json$parse$$($jsonString$jscomp$inline_659_opt_xssiPrefix$$);
    }
    return $JSCompiler_inline_result$jscomp$546$$;
  }
};
function $JSCompiler_StaticMethods_getResponse$$($JSCompiler_StaticMethods_getResponse$self$$) {
  try {
    if (!$JSCompiler_StaticMethods_getResponse$self$$.$g$) {
      return null;
    }
    if ("response" in $JSCompiler_StaticMethods_getResponse$self$$.$g$) {
      return $JSCompiler_StaticMethods_getResponse$self$$.$g$.response;
    }
    switch($JSCompiler_StaticMethods_getResponse$self$$.$I$) {
      case "":
      case "text":
        return $JSCompiler_StaticMethods_getResponse$self$$.$g$.responseText;
      case "arraybuffer":
        if ("mozResponseArrayBuffer" in $JSCompiler_StaticMethods_getResponse$self$$.$g$) {
          return $JSCompiler_StaticMethods_getResponse$self$$.$g$.mozResponseArrayBuffer;
        }
    }
    return null;
  } catch ($e$jscomp$80$$) {
    return null;
  }
}
function $JSCompiler_StaticMethods_getResponseHeaders$$($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$) {
  var $headersObject$$ = {};
  $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$ = ($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$.$g$ && 2 <= $JSCompiler_StaticMethods_getReadyState$$($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$) ? $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$.$g$.getAllResponseHeaders() || "" : "").split("\r\n");
  for (var $i$jscomp$169$$ = 0; $i$jscomp$169$$ < $JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$.length; $i$jscomp$169$$++) {
    if (!$goog$string$internal$isEmptyOrWhitespace$$($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$[$i$jscomp$169$$])) {
      var $keyValue$jscomp$1_value$jscomp$248$$ = $goog$string$splitLimit$$($JSCompiler_StaticMethods_getResponseHeaders$self_headersArray$$[$i$jscomp$169$$]), $key$jscomp$142$$ = $keyValue$jscomp$1_value$jscomp$248$$[0];
      $keyValue$jscomp$1_value$jscomp$248$$ = $keyValue$jscomp$1_value$jscomp$248$$[1];
      if ("string" === typeof $keyValue$jscomp$1_value$jscomp$248$$) {
        $keyValue$jscomp$1_value$jscomp$248$$ = $keyValue$jscomp$1_value$jscomp$248$$.trim();
        var $values$jscomp$24$$ = $headersObject$$[$key$jscomp$142$$] || [];
        $headersObject$$[$key$jscomp$142$$] = $values$jscomp$24$$;
        $values$jscomp$24$$.push($keyValue$jscomp$1_value$jscomp$248$$);
      }
    }
  }
  $module$contents$goog$object_map$$($headersObject$$, function($values$jscomp$25$$) {
    return $values$jscomp$25$$.join(", ");
  });
}
$JSCompiler_prototypeAlias$$.$getLastErrorCode$ = function() {
  return this.$m$;
};
$JSCompiler_prototypeAlias$$.$JSC$2457_getLastError$ = function() {
  return "string" === typeof this.$j$ ? this.$j$ : String(this.$j$);
};
function $$jscomp$scope$1070566173$1$getInternalChannelParam$$($paramName$jscomp$1$$, $defaultValue$jscomp$4$$, $options$jscomp$74$$) {
  return $options$jscomp$74$$ && $options$jscomp$74$$.$internalChannelParams$ ? $options$jscomp$74$$.$internalChannelParams$[$paramName$jscomp$1$$] || $defaultValue$jscomp$4$$ : $defaultValue$jscomp$4$$;
}
function $goog$labs$net$webChannel$WebChannelBase$$($opt_options$jscomp$103$$) {
  this.$ga$ = 0;
  this.$i$ = [];
  this.$j$ = new $goog$labs$net$webChannel$WebChannelDebug$$();
  this.$Y$ = this.$ca$ = this.$H$ = this.$T$ = this.$g$ = this.$ea$ = this.$D$ = this.$G$ = this.$o$ = this.$P$ = this.$s$ = null;
  this.$oa$ = this.$S$ = 0;
  this.$la$ = $$jscomp$scope$1070566173$1$getInternalChannelParam$$("failFast", !1, $opt_options$jscomp$103$$);
  this.$F$ = this.$v$ = this.$u$ = this.$m$ = this.$l$ = null;
  this.$U$ = !0;
  this.$fa$ = this.$R$ = -1;
  this.$V$ = this.$A$ = this.$C$ = 0;
  this.$ja$ = $$jscomp$scope$1070566173$1$getInternalChannelParam$$("baseRetryDelayMs", 5E3, $opt_options$jscomp$103$$);
  this.$pa$ = $$jscomp$scope$1070566173$1$getInternalChannelParam$$("retryDelaySeedMs", 1E4, $opt_options$jscomp$103$$);
  this.$ma$ = $$jscomp$scope$1070566173$1$getInternalChannelParam$$("forwardChannelMaxRetries", 2, $opt_options$jscomp$103$$);
  this.$da$ = $$jscomp$scope$1070566173$1$getInternalChannelParam$$("forwardChannelRequestTimeoutMs", 2E4, $opt_options$jscomp$103$$);
  this.$ba$ = $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$xmlHttpFactory$ || void 0;
  this.$na$ = $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$networkTestUrl$ || void 0;
  this.$ha$ = $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$useFetchStreams$ || !1;
  this.$K$ = void 0;
  this.$I$ = $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$supportsCrossDomainXhr$ || !1;
  this.$J$ = "";
  this.$h$ = new $module$contents$goog$labs$net$webChannel$ForwardChannelRequestPool_ForwardChannelRequestPool$$($opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$concurrentRequestLimit$);
  this.$ia$ = new $goog$labs$net$webChannel$WireV8$$();
  this.$N$ = $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$fastHandshake$ || !1;
  this.$M$ = $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$encodeInitMessageHeaders$ || !1;
  this.$N$ && this.$M$ && (this.$M$ = !1);
  this.$ka$ = $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$blockingHandshake$ || !1;
  $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$disableRedact$ && this.$j$.$disableRedact$();
  $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$forceLongPolling$ && (this.$U$ = !1);
  this.$W$ = !this.$N$ && this.$U$ && $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$detectBufferingProxy$ || !1;
  this.$Z$ = void 0;
  $opt_options$jscomp$103$$ && $opt_options$jscomp$103$$.$longPollingTimeout$ && 0 < $opt_options$jscomp$103$$.$longPollingTimeout$ && (this.$Z$ = $opt_options$jscomp$103$$.$longPollingTimeout$);
  this.$X$ = void 0;
  this.$O$ = 0;
  this.$L$ = !1;
  this.$aa$ = this.$B$ = null;
}
$JSCompiler_prototypeAlias$$ = $goog$labs$net$webChannel$WebChannelBase$$.prototype;
$JSCompiler_prototypeAlias$$.$channelVersion_$ = 8;
$JSCompiler_prototypeAlias$$.$JSC$2464_state_$ = 1;
$JSCompiler_prototypeAlias$$.connect = function($channelPath$$, $opt_extraParams$$, $opt_oldSessionId$$, $opt_oldArrayId$$) {
  $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(0);
  this.$T$ = $channelPath$$;
  this.$G$ = $opt_extraParams$$ || {};
  $opt_oldSessionId$$ && void 0 !== $opt_oldArrayId$$ && (this.$G$.OSID = $opt_oldSessionId$$, this.$G$.OAID = $opt_oldArrayId$$);
  this.$F$ = this.$U$;
  this.$H$ = $JSCompiler_StaticMethods_createDataUri$$(this, null, this.$T$);
  $JSCompiler_StaticMethods_ensureForwardChannel_$$(this);
};
function $JSCompiler_StaticMethods_JSC$2464_disconnect$$($JSCompiler_StaticMethods_JSC$2464_disconnect$self$$) {
  $JSCompiler_StaticMethods_cancelRequests_$$($JSCompiler_StaticMethods_JSC$2464_disconnect$self$$);
  if (3 == $JSCompiler_StaticMethods_JSC$2464_disconnect$self$$.$JSC$2464_state_$) {
    var $JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$ = $JSCompiler_StaticMethods_JSC$2464_disconnect$self$$.$S$++, $requestSent$jscomp$inline_360_uri$jscomp$56$$ = $JSCompiler_StaticMethods_JSC$2431_clone$$($JSCompiler_StaticMethods_JSC$2464_disconnect$self$$.$H$);
    $JSCompiler_StaticMethods_setParameterValue$$($requestSent$jscomp$inline_360_uri$jscomp$56$$, "SID", $JSCompiler_StaticMethods_JSC$2464_disconnect$self$$.$J$);
    $JSCompiler_StaticMethods_setParameterValue$$($requestSent$jscomp$inline_360_uri$jscomp$56$$, "RID", $JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$);
    $JSCompiler_StaticMethods_setParameterValue$$($requestSent$jscomp$inline_360_uri$jscomp$56$$, "TYPE", "terminate");
    $JSCompiler_StaticMethods_addAdditionalParams_$$($JSCompiler_StaticMethods_JSC$2464_disconnect$self$$, $requestSent$jscomp$inline_360_uri$jscomp$56$$);
    $JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$ = new $goog$labs$net$webChannel$ChannelRequest$$($JSCompiler_StaticMethods_JSC$2464_disconnect$self$$, $JSCompiler_StaticMethods_JSC$2464_disconnect$self$$.$j$, $JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$);
    $JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$.$J$ = 2;
    $JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$.$A$ = $JSCompiler_StaticMethods_makeUnique$$($JSCompiler_StaticMethods_JSC$2431_clone$$($requestSent$jscomp$inline_360_uri$jscomp$56$$));
    $requestSent$jscomp$inline_360_uri$jscomp$56$$ = !1;
    if ($goog$global$$.navigator && $goog$global$$.navigator.sendBeacon) {
      try {
        $requestSent$jscomp$inline_360_uri$jscomp$56$$ = $goog$global$$.navigator.sendBeacon($JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$.$A$.toString(), "");
      } catch ($$jscomp$inline_361$$) {
      }
    }
    !$requestSent$jscomp$inline_360_uri$jscomp$56$$ && $goog$global$$.Image && ((new Image()).src = $JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$.$A$, $requestSent$jscomp$inline_360_uri$jscomp$56$$ = !0);
    $requestSent$jscomp$inline_360_uri$jscomp$56$$ || ($JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$.$g$ = $JSCompiler_StaticMethods_createXhrIo$$($JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$.$l$, null), $JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$.$g$.$JSC$2457_send$($JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$.$A$));
    $JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$.$F$ = Date.now();
    $JSCompiler_StaticMethods_ensureWatchDogTimer_$$($JSCompiler_StaticMethods_sendCloseRequest$self$jscomp$inline_358_rid$$);
  }
  $JSCompiler_StaticMethods_onClose_$$($JSCompiler_StaticMethods_JSC$2464_disconnect$self$$);
}
function $JSCompiler_StaticMethods_cancelBackChannelRequest_$$($JSCompiler_StaticMethods_cancelBackChannelRequest_$self$$) {
  $JSCompiler_StaticMethods_cancelBackChannelRequest_$self$$.$g$ && ($JSCompiler_StaticMethods_clearBpDetectionTimer_$$($JSCompiler_StaticMethods_cancelBackChannelRequest_$self$$), $JSCompiler_StaticMethods_cancelBackChannelRequest_$self$$.$g$.cancel(), $JSCompiler_StaticMethods_cancelBackChannelRequest_$self$$.$g$ = null);
}
function $JSCompiler_StaticMethods_cancelRequests_$$($JSCompiler_StaticMethods_cancelRequests_$self$$) {
  $JSCompiler_StaticMethods_cancelBackChannelRequest_$$($JSCompiler_StaticMethods_cancelRequests_$self$$);
  $JSCompiler_StaticMethods_cancelRequests_$self$$.$u$ && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_cancelRequests_$self$$.$u$), $JSCompiler_StaticMethods_cancelRequests_$self$$.$u$ = null);
  $JSCompiler_StaticMethods_clearDeadBackchannelTimer_$$($JSCompiler_StaticMethods_cancelRequests_$self$$);
  $JSCompiler_StaticMethods_cancelRequests_$self$$.$h$.cancel();
  $JSCompiler_StaticMethods_cancelRequests_$self$$.$m$ && ("number" === typeof $JSCompiler_StaticMethods_cancelRequests_$self$$.$m$ && $goog$global$$.clearTimeout($JSCompiler_StaticMethods_cancelRequests_$self$$.$m$), $JSCompiler_StaticMethods_cancelRequests_$self$$.$m$ = null);
}
function $JSCompiler_StaticMethods_ensureForwardChannel_$$($JSCompiler_StaticMethods_ensureForwardChannel_$self$$) {
  $JSCompiler_StaticMethods_isFull$$($JSCompiler_StaticMethods_ensureForwardChannel_$self$$.$h$) || $JSCompiler_StaticMethods_ensureForwardChannel_$self$$.$m$ || ($JSCompiler_StaticMethods_ensureForwardChannel_$self$$.$m$ = !0, $module$contents$goog$async$run_run$$($JSCompiler_StaticMethods_ensureForwardChannel_$self$$.$onStartForwardChannelTimer_$, $JSCompiler_StaticMethods_ensureForwardChannel_$self$$), $JSCompiler_StaticMethods_ensureForwardChannel_$self$$.$C$ = 0);
}
function $JSCompiler_StaticMethods_maybeRetryForwardChannel_$$($JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$, $request$jscomp$6$$) {
  if ($JSCompiler_StaticMethods_getRequestCount$$($JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$h$) >= $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$h$.$j$ - ($JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$m$ ? 1 : 0)) {
    return !1;
  }
  if ($JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$m$) {
    return $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$i$ = $request$jscomp$6$$.$D$.concat($JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$i$), !0;
  }
  if (1 == $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$JSC$2464_state_$ || 2 == $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$JSC$2464_state_$ || $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$C$ >= ($JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$la$ ? 0 : $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$ma$)) {
    return !1;
  }
  $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$m$ = $goog$labs$net$webChannel$requestStats$setTimeout$$($goog$bind$$($JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$onStartForwardChannelTimer_$, $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$, $request$jscomp$6$$), $JSCompiler_StaticMethods_getRetryTime_$$($JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$, $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$C$));
  $JSCompiler_StaticMethods_maybeRetryForwardChannel_$self$$.$C$++;
  return !0;
}
$JSCompiler_prototypeAlias$$.$onStartForwardChannelTimer_$ = function($opt_retryRequest_rid$jscomp$inline_663$$) {
  if (this.$m$) {
    if (this.$m$ = null, 1 == this.$JSC$2464_state_$) {
      if (!$opt_retryRequest_rid$jscomp$inline_663$$) {
        this.$S$ = Math.floor(1E5 * Math.random());
        $opt_retryRequest_rid$jscomp$inline_663$$ = this.$S$++;
        var $request$jscomp$inline_664$$ = new $goog$labs$net$webChannel$ChannelRequest$$(this, this.$j$, $opt_retryRequest_rid$jscomp$inline_663$$), $extraHeaders$jscomp$inline_665$$ = this.$s$;
        this.$P$ && ($extraHeaders$jscomp$inline_665$$ ? ($extraHeaders$jscomp$inline_665$$ = $module$contents$goog$object_clone$$($extraHeaders$jscomp$inline_665$$), $module$contents$goog$object_extend$$($extraHeaders$jscomp$inline_665$$, this.$P$)) : $extraHeaders$jscomp$inline_665$$ = this.$P$);
        null !== this.$o$ || this.$M$ || ($request$jscomp$inline_664$$.$G$ = $extraHeaders$jscomp$inline_665$$, $extraHeaders$jscomp$inline_665$$ = null);
        var $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$;
        if (this.$N$) {
          a: {
            for (var $i$jscomp$inline_668_uri$jscomp$inline_671$$ = $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ = 0; $i$jscomp$inline_668_uri$jscomp$inline_671$$ < this.$i$.length; $i$jscomp$inline_668_uri$jscomp$inline_671$$++) {
              b: {
                var $JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$ = this.$i$[$i$jscomp$inline_668_uri$jscomp$inline_671$$];
                if ("__data__" in $JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$.map && ($JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$ = $JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$.map.__data__, 
                "string" === typeof $JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$)) {
                  $JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$ = $JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$.length;
                  break b;
                }
                $JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$ = void 0;
              }
              if (void 0 === $JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$) {
                break;
              }
              $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ += $JSCompiler_StaticMethods_getRawDataSize$self$jscomp$inline_737_JSCompiler_inline_result$jscomp$678_data$jscomp$inline_738_size$jscomp$inline_669$$;
              if (4096 < $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$) {
                $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ = $i$jscomp$inline_668_uri$jscomp$inline_671$$;
                break a;
              }
              if (4096 === $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ || $i$jscomp$inline_668_uri$jscomp$inline_671$$ === this.$i$.length - 1) {
                $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ = $i$jscomp$inline_668_uri$jscomp$inline_671$$ + 1;
                break a;
              }
            }
            $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ = 1E3;
          }
        } else {
          $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ = 1E3;
        }
        $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ = $JSCompiler_StaticMethods_dequeueOutgoingMaps_$$(this, $request$jscomp$inline_664$$, $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$);
        $i$jscomp$inline_668_uri$jscomp$inline_671$$ = $JSCompiler_StaticMethods_JSC$2431_clone$$(this.$H$);
        $JSCompiler_StaticMethods_setParameterValue$$($i$jscomp$inline_668_uri$jscomp$inline_671$$, "RID", $opt_retryRequest_rid$jscomp$inline_663$$);
        $JSCompiler_StaticMethods_setParameterValue$$($i$jscomp$inline_668_uri$jscomp$inline_671$$, "CVER", 22);
        this.$D$ && $JSCompiler_StaticMethods_setParameterValue$$($i$jscomp$inline_668_uri$jscomp$inline_671$$, "X-HTTP-Session-Id", this.$D$);
        $JSCompiler_StaticMethods_addAdditionalParams_$$(this, $i$jscomp$inline_668_uri$jscomp$inline_671$$);
        $extraHeaders$jscomp$inline_665$$ && (this.$M$ ? $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ = "headers=" + encodeURIComponent(String($module$exports$goog$net$rpc$HttpCors$generateHttpHeadersOverwriteParam$$($extraHeaders$jscomp$inline_665$$))) + "&" + $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$ : this.$o$ && $module$exports$goog$net$rpc$HttpCors$setHttpHeadersWithOverwriteParam$$($i$jscomp$inline_668_uri$jscomp$inline_671$$, 
        this.$o$, $extraHeaders$jscomp$inline_665$$));
        $JSCompiler_StaticMethods_addRequest$$(this.$h$, $request$jscomp$inline_664$$);
        this.$ka$ && $JSCompiler_StaticMethods_setParameterValue$$($i$jscomp$inline_668_uri$jscomp$inline_671$$, "TYPE", "init");
        this.$N$ ? ($JSCompiler_StaticMethods_setParameterValue$$($i$jscomp$inline_668_uri$jscomp$inline_671$$, "$req", $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$), $JSCompiler_StaticMethods_setParameterValue$$($i$jscomp$inline_668_uri$jscomp$inline_671$$, "SID", "null"), $request$jscomp$inline_664$$.$T$ = !0, $JSCompiler_StaticMethods_xmlHttpPost$$($request$jscomp$inline_664$$, $i$jscomp$inline_668_uri$jscomp$inline_671$$, null)) : $JSCompiler_StaticMethods_xmlHttpPost$$($request$jscomp$inline_664$$, 
        $i$jscomp$inline_668_uri$jscomp$inline_671$$, $JSCompiler_temp$jscomp$inline_666_requestText$jscomp$inline_670_total$jscomp$inline_667$$);
        this.$JSC$2464_state_$ = 2;
      }
    } else {
      3 == this.$JSC$2464_state_$ && ($opt_retryRequest_rid$jscomp$inline_663$$ ? $JSCompiler_StaticMethods_makeForwardChannelRequest_$$(this, $opt_retryRequest_rid$jscomp$inline_663$$) : 0 == this.$i$.length || $JSCompiler_StaticMethods_isFull$$(this.$h$) || $JSCompiler_StaticMethods_makeForwardChannelRequest_$$(this));
    }
  }
};
function $JSCompiler_StaticMethods_makeForwardChannelRequest_$$($JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$, $opt_retryRequest$jscomp$2_requestText$jscomp$1$$) {
  var $request$jscomp$8_rid$jscomp$2$$;
  $opt_retryRequest$jscomp$2_requestText$jscomp$1$$ ? $request$jscomp$8_rid$jscomp$2$$ = $opt_retryRequest$jscomp$2_requestText$jscomp$1$$.$m$ : $request$jscomp$8_rid$jscomp$2$$ = $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$S$++;
  var $uri$jscomp$58$$ = $JSCompiler_StaticMethods_JSC$2431_clone$$($JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$H$);
  $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$58$$, "SID", $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$J$);
  $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$58$$, "RID", $request$jscomp$8_rid$jscomp$2$$);
  $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$58$$, "AID", $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$R$);
  $JSCompiler_StaticMethods_addAdditionalParams_$$($JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$, $uri$jscomp$58$$);
  $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$o$ && $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$s$ && $module$exports$goog$net$rpc$HttpCors$setHttpHeadersWithOverwriteParam$$($uri$jscomp$58$$, $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$o$, $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$s$);
  $request$jscomp$8_rid$jscomp$2$$ = new $goog$labs$net$webChannel$ChannelRequest$$($JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$, $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$j$, $request$jscomp$8_rid$jscomp$2$$, $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$C$ + 1);
  null === $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$o$ && ($request$jscomp$8_rid$jscomp$2$$.$G$ = $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$s$);
  $opt_retryRequest$jscomp$2_requestText$jscomp$1$$ && ($JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$i$ = $opt_retryRequest$jscomp$2_requestText$jscomp$1$$.$D$.concat($JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$i$));
  $opt_retryRequest$jscomp$2_requestText$jscomp$1$$ = $JSCompiler_StaticMethods_dequeueOutgoingMaps_$$($JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$, $request$jscomp$8_rid$jscomp$2$$, 1E3);
  $request$jscomp$8_rid$jscomp$2$$.setTimeout(Math.round(.5 * $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$da$) + Math.round(.5 * $JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$da$ * Math.random()));
  $JSCompiler_StaticMethods_addRequest$$($JSCompiler_StaticMethods_makeForwardChannelRequest_$self$$.$h$, $request$jscomp$8_rid$jscomp$2$$);
  $JSCompiler_StaticMethods_xmlHttpPost$$($request$jscomp$8_rid$jscomp$2$$, $uri$jscomp$58$$, $opt_retryRequest$jscomp$2_requestText$jscomp$1$$);
}
function $JSCompiler_StaticMethods_addAdditionalParams_$$($JSCompiler_StaticMethods_addAdditionalParams_$self$$, $uri$jscomp$59$$) {
  $JSCompiler_StaticMethods_addAdditionalParams_$self$$.$G$ && $module$contents$goog$object_forEach$$($JSCompiler_StaticMethods_addAdditionalParams_$self$$.$G$, function($value$jscomp$249$$, $key$jscomp$144$$) {
    $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$59$$, $key$jscomp$144$$, $value$jscomp$249$$);
  });
  $JSCompiler_StaticMethods_addAdditionalParams_$self$$.$l$ && $goog$structs$forEach$$({}, function($value$jscomp$250$$, $key$jscomp$145$$) {
    $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$59$$, $key$jscomp$145$$, $value$jscomp$250$$);
  });
}
function $JSCompiler_StaticMethods_dequeueOutgoingMaps_$$($JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$, $request$jscomp$9$$, $count$jscomp$48_maxNum$$) {
  $count$jscomp$48_maxNum$$ = Math.min($JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$.$i$.length, $count$jscomp$48_maxNum$$);
  var $JSCompiler_inline_result$jscomp$57_badMapHandler$jscomp$1_result$jscomp$38$$ = $JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$.$l$ ? $goog$bind$$($JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$.$l$.$badMapError$, $JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$.$l$, $JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$) : null;
  a: {
    for (var $messageQueue$jscomp$inline_385$$ = $JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$.$i$, $offset$jscomp$inline_388$$ = -1;;) {
      var $sb$jscomp$inline_389$$ = ["count=" + $count$jscomp$48_maxNum$$];
      -1 == $offset$jscomp$inline_388$$ ? 0 < $count$jscomp$48_maxNum$$ ? ($offset$jscomp$inline_388$$ = $messageQueue$jscomp$inline_385$$[0].$g$, $sb$jscomp$inline_389$$.push("ofs=" + $offset$jscomp$inline_388$$)) : $offset$jscomp$inline_388$$ = 0 : $sb$jscomp$inline_389$$.push("ofs=" + $offset$jscomp$inline_388$$);
      for (var $done$jscomp$inline_390$$ = !0, $i$jscomp$inline_391$$ = 0; $i$jscomp$inline_391$$ < $count$jscomp$48_maxNum$$; $i$jscomp$inline_391$$++) {
        var $mapId$jscomp$inline_392$$ = $messageQueue$jscomp$inline_385$$[$i$jscomp$inline_391$$].$g$, $map$jscomp$inline_393$$ = $messageQueue$jscomp$inline_385$$[$i$jscomp$inline_391$$].map;
        $mapId$jscomp$inline_392$$ -= $offset$jscomp$inline_388$$;
        if (0 > $mapId$jscomp$inline_392$$) {
          $offset$jscomp$inline_388$$ = Math.max(0, $messageQueue$jscomp$inline_385$$[$i$jscomp$inline_391$$].$g$ - 100), $done$jscomp$inline_390$$ = !1;
        } else {
          try {
            $JSCompiler_StaticMethods_encodeMessage$$($map$jscomp$inline_393$$, $sb$jscomp$inline_389$$, "req" + $mapId$jscomp$inline_392$$ + "_");
          } catch ($ex$jscomp$inline_394$$) {
            $JSCompiler_inline_result$jscomp$57_badMapHandler$jscomp$1_result$jscomp$38$$ && $JSCompiler_inline_result$jscomp$57_badMapHandler$jscomp$1_result$jscomp$38$$($map$jscomp$inline_393$$);
          }
        }
      }
      if ($done$jscomp$inline_390$$) {
        $JSCompiler_inline_result$jscomp$57_badMapHandler$jscomp$1_result$jscomp$38$$ = $sb$jscomp$inline_389$$.join("&");
        break a;
      }
    }
  }
  $JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$ = $JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$.$i$.splice(0, $count$jscomp$48_maxNum$$);
  $request$jscomp$9$$.$D$ = $JSCompiler_StaticMethods_dequeueOutgoingMaps_$self_pendingMessages$jscomp$inline_397$$;
  return $JSCompiler_inline_result$jscomp$57_badMapHandler$jscomp$1_result$jscomp$38$$;
}
function $JSCompiler_StaticMethods_ensureBackChannel_$$($JSCompiler_StaticMethods_ensureBackChannel_$self$$) {
  $JSCompiler_StaticMethods_ensureBackChannel_$self$$.$g$ || $JSCompiler_StaticMethods_ensureBackChannel_$self$$.$u$ || ($JSCompiler_StaticMethods_ensureBackChannel_$self$$.$V$ = 1, $module$contents$goog$async$run_run$$($JSCompiler_StaticMethods_ensureBackChannel_$self$$.$onStartBackChannelTimer_$, $JSCompiler_StaticMethods_ensureBackChannel_$self$$), $JSCompiler_StaticMethods_ensureBackChannel_$self$$.$A$ = 0);
}
function $JSCompiler_StaticMethods_maybeRetryBackChannel_$$($JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$) {
  if ($JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$.$g$ || $JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$.$u$ || 3 <= $JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$.$A$) {
    return !1;
  }
  $JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$.$V$++;
  $JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$.$u$ = $goog$labs$net$webChannel$requestStats$setTimeout$$($goog$bind$$($JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$.$onStartBackChannelTimer_$, $JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$), $JSCompiler_StaticMethods_getRetryTime_$$($JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$, $JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$.$A$));
  $JSCompiler_StaticMethods_maybeRetryBackChannel_$self$$.$A$++;
  return !0;
}
$JSCompiler_prototypeAlias$$.$onStartBackChannelTimer_$ = function() {
  this.$u$ = null;
  $JSCompiler_StaticMethods_startBackChannel_$$(this);
  if (this.$W$ && !(this.$L$ || null == this.$g$ || 0 >= this.$O$)) {
    var $bpDetectionTimeout$$ = 2 * this.$O$;
    this.$j$.info("BP detection timer enabled: " + $bpDetectionTimeout$$);
    this.$B$ = $goog$labs$net$webChannel$requestStats$setTimeout$$($goog$bind$$(this.$onBpDetectionTimer_$, this), $bpDetectionTimeout$$);
  }
};
$JSCompiler_prototypeAlias$$.$onBpDetectionTimer_$ = function() {
  this.$B$ && (this.$B$ = null, this.$j$.info("BP detection timeout reached."), this.$j$.info("Buffering proxy detected and switch to long-polling!"), this.$F$ = !1, this.$L$ = !0, $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(10), $JSCompiler_StaticMethods_cancelBackChannelRequest_$$(this), $JSCompiler_StaticMethods_startBackChannel_$$(this));
};
function $JSCompiler_StaticMethods_clearBpDetectionTimer_$$($JSCompiler_StaticMethods_clearBpDetectionTimer_$self$$) {
  null != $JSCompiler_StaticMethods_clearBpDetectionTimer_$self$$.$B$ && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_clearBpDetectionTimer_$self$$.$B$), $JSCompiler_StaticMethods_clearBpDetectionTimer_$self$$.$B$ = null);
}
function $JSCompiler_StaticMethods_startBackChannel_$$($JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$) {
  $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$g$ = new $goog$labs$net$webChannel$ChannelRequest$$($JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$, $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$j$, "rpc", $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$V$);
  null === $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$o$ && ($JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$g$.$G$ = $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$s$);
  $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$g$.$L$ = 0;
  var $uri$jscomp$60$$ = $JSCompiler_StaticMethods_JSC$2431_clone$$($JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$ca$);
  $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$60$$, "RID", "rpc");
  $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$60$$, "SID", $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$J$);
  $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$60$$, "AID", $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$R$);
  $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$60$$, "CI", $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$F$ ? "0" : "1");
  !$JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$F$ && $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$Z$ && $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$60$$, "TO", $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$Z$);
  $JSCompiler_StaticMethods_setParameterValue$$($uri$jscomp$60$$, "TYPE", "xmlhttp");
  $JSCompiler_StaticMethods_addAdditionalParams_$$($JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$, $uri$jscomp$60$$);
  $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$o$ && $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$s$ && $module$exports$goog$net$rpc$HttpCors$setHttpHeadersWithOverwriteParam$$($uri$jscomp$60$$, $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$o$, $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$s$);
  $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$K$ && $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$g$.setTimeout($JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$K$);
  var $JSCompiler_StaticMethods_xmlHttpGet$self$jscomp$inline_405$$ = $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$g$;
  $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$ = $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$.$Y$;
  $JSCompiler_StaticMethods_xmlHttpGet$self$jscomp$inline_405$$.$J$ = 1;
  $JSCompiler_StaticMethods_xmlHttpGet$self$jscomp$inline_405$$.$A$ = $JSCompiler_StaticMethods_makeUnique$$($JSCompiler_StaticMethods_JSC$2431_clone$$($uri$jscomp$60$$));
  $JSCompiler_StaticMethods_xmlHttpGet$self$jscomp$inline_405$$.$u$ = null;
  $JSCompiler_StaticMethods_xmlHttpGet$self$jscomp$inline_405$$.$N$ = !0;
  $JSCompiler_StaticMethods_sendXmlHttp_$$($JSCompiler_StaticMethods_xmlHttpGet$self$jscomp$inline_405$$, $JSCompiler_StaticMethods_startBackChannel_$self_hostPrefix$jscomp$inline_407$$);
}
$JSCompiler_prototypeAlias$$.$onBackChannelDead_$ = function() {
  null != this.$v$ && (this.$v$ = null, $JSCompiler_StaticMethods_cancelBackChannelRequest_$$(this), $JSCompiler_StaticMethods_maybeRetryBackChannel_$$(this), $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(19));
};
function $JSCompiler_StaticMethods_clearDeadBackchannelTimer_$$($JSCompiler_StaticMethods_clearDeadBackchannelTimer_$self$$) {
  null != $JSCompiler_StaticMethods_clearDeadBackchannelTimer_$self$$.$v$ && ($goog$global$$.clearTimeout($JSCompiler_StaticMethods_clearDeadBackchannelTimer_$self$$.$v$), $JSCompiler_StaticMethods_clearDeadBackchannelTimer_$self$$.$v$ = null);
}
function $JSCompiler_StaticMethods_onRequestComplete$$($JSCompiler_StaticMethods_onRequestComplete$self$$, $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$) {
  var $pendingMessages$jscomp$1_size$jscomp$inline_413$$ = null;
  if ($JSCompiler_StaticMethods_onRequestComplete$self$$.$g$ == $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$) {
    $JSCompiler_StaticMethods_clearDeadBackchannelTimer_$$($JSCompiler_StaticMethods_onRequestComplete$self$$);
    $JSCompiler_StaticMethods_clearBpDetectionTimer_$$($JSCompiler_StaticMethods_onRequestComplete$self$$);
    $JSCompiler_StaticMethods_onRequestComplete$self$$.$g$ = null;
    var $target$jscomp$inline_416_type$jscomp$220$$ = 2;
  } else if ($JSCompiler_StaticMethods_hasRequest$$($JSCompiler_StaticMethods_onRequestComplete$self$$.$h$, $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$)) {
    $pendingMessages$jscomp$1_size$jscomp$inline_413$$ = $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$.$D$, $JSCompiler_StaticMethods_removeRequest$$($JSCompiler_StaticMethods_onRequestComplete$self$$.$h$, $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$), $target$jscomp$inline_416_type$jscomp$220$$ = 1;
  } else {
    return;
  }
  if (0 != $JSCompiler_StaticMethods_onRequestComplete$self$$.$JSC$2464_state_$) {
    if ($JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$.$i$) {
      if (1 == $target$jscomp$inline_416_type$jscomp$220$$) {
        $pendingMessages$jscomp$1_size$jscomp$inline_413$$ = $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$.$u$ ? $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$.$u$.length : 0;
        $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$ = Date.now() - $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$.$F$;
        var $lastError_retries$jscomp$inline_415$$ = $JSCompiler_StaticMethods_onRequestComplete$self$$.$C$;
        $target$jscomp$inline_416_type$jscomp$220$$ = $goog$labs$net$webChannel$requestStats$getStatEventTarget_$$();
        $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$($target$jscomp$inline_416_type$jscomp$220$$, new $goog$labs$net$webChannel$requestStats$TimingEvent$$($target$jscomp$inline_416_type$jscomp$220$$, $pendingMessages$jscomp$1_size$jscomp$inline_413$$, $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$, $lastError_retries$jscomp$inline_415$$));
        $JSCompiler_StaticMethods_ensureForwardChannel_$$($JSCompiler_StaticMethods_onRequestComplete$self$$);
      } else {
        $JSCompiler_StaticMethods_ensureBackChannel_$$($JSCompiler_StaticMethods_onRequestComplete$self$$);
      }
    } else {
      if ($lastError_retries$jscomp$inline_415$$ = $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$.$s$, 3 == $lastError_retries$jscomp$inline_415$$ || 0 == $lastError_retries$jscomp$inline_415$$ && 0 < $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$.$V$ || !(1 == $target$jscomp$inline_416_type$jscomp$220$$ && $JSCompiler_StaticMethods_maybeRetryForwardChannel_$$($JSCompiler_StaticMethods_onRequestComplete$self$$, 
      $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$) || 2 == $target$jscomp$inline_416_type$jscomp$220$$ && $JSCompiler_StaticMethods_maybeRetryBackChannel_$$($JSCompiler_StaticMethods_onRequestComplete$self$$))) {
        switch($pendingMessages$jscomp$1_size$jscomp$inline_413$$ && 0 < $pendingMessages$jscomp$1_size$jscomp$inline_413$$.length && ($JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$ = $JSCompiler_StaticMethods_onRequestComplete$self$$.$h$, $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$.$i$ = $JSCompiler_StaticMethods_addPendingMessages$self$jscomp$inline_418_request$jscomp$12_rtt$jscomp$inline_414$$.$i$.concat($pendingMessages$jscomp$1_size$jscomp$inline_413$$)), 
        $lastError_retries$jscomp$inline_415$$) {
          case 1:
            $JSCompiler_StaticMethods_signalError_$$($JSCompiler_StaticMethods_onRequestComplete$self$$, 5);
            break;
          case 4:
            $JSCompiler_StaticMethods_signalError_$$($JSCompiler_StaticMethods_onRequestComplete$self$$, 10);
            break;
          case 3:
            $JSCompiler_StaticMethods_signalError_$$($JSCompiler_StaticMethods_onRequestComplete$self$$, 6);
            break;
          default:
            $JSCompiler_StaticMethods_signalError_$$($JSCompiler_StaticMethods_onRequestComplete$self$$, 2);
        }
      }
    }
  }
}
function $JSCompiler_StaticMethods_getRetryTime_$$($JSCompiler_StaticMethods_getRetryTime_$self$$, $retryCount$$) {
  var $retryTime$$ = $JSCompiler_StaticMethods_getRetryTime_$self$$.$ja$ + Math.floor(Math.random() * $JSCompiler_StaticMethods_getRetryTime_$self$$.$pa$);
  $JSCompiler_StaticMethods_getRetryTime_$self$$.isActive() || ($retryTime$$ *= 2);
  return $retryTime$$ * $retryCount$$;
}
function $JSCompiler_StaticMethods_signalError_$$($JSCompiler_StaticMethods_signalError_$self$$, $error$jscomp$16$$) {
  $JSCompiler_StaticMethods_signalError_$self$$.$j$.info("Error code " + $error$jscomp$16$$);
  if (2 == $error$jscomp$16$$) {
    var $callback$jscomp$inline_436$$ = $goog$bind$$($JSCompiler_StaticMethods_signalError_$self$$.$testNetworkCallback_$, $JSCompiler_StaticMethods_signalError_$self$$), $opt_baseUrl$jscomp$inline_437_uri$jscomp$inline_439$$ = $JSCompiler_StaticMethods_signalError_$self$$.$na$, $useImageLoader$jscomp$inline_438$$ = !$opt_baseUrl$jscomp$inline_437_uri$jscomp$inline_439$$;
    $opt_baseUrl$jscomp$inline_437_uri$jscomp$inline_439$$ = new $goog$Uri$$($opt_baseUrl$jscomp$inline_437_uri$jscomp$inline_439$$ || "//www.google.com/images/cleardot.gif");
    $goog$global$$.location && "http" == $goog$global$$.location.protocol || $JSCompiler_StaticMethods_setScheme$$($opt_baseUrl$jscomp$inline_437_uri$jscomp$inline_439$$, "https");
    $JSCompiler_StaticMethods_makeUnique$$($opt_baseUrl$jscomp$inline_437_uri$jscomp$inline_439$$);
    $useImageLoader$jscomp$inline_438$$ ? $goog$labs$net$webChannel$netUtils$testLoadImage$$($opt_baseUrl$jscomp$inline_437_uri$jscomp$inline_439$$.toString(), $callback$jscomp$inline_436$$) : $goog$labs$net$webChannel$netUtils$testPingServer$$($opt_baseUrl$jscomp$inline_437_uri$jscomp$inline_439$$.toString(), $callback$jscomp$inline_436$$);
  } else {
    $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(2);
  }
  $JSCompiler_StaticMethods_signalError_$self$$.$JSC$2464_state_$ = 0;
  $JSCompiler_StaticMethods_signalError_$self$$.$l$ && $JSCompiler_StaticMethods_signalError_$self$$.$l$.$channelError$($error$jscomp$16$$);
  $JSCompiler_StaticMethods_onClose_$$($JSCompiler_StaticMethods_signalError_$self$$);
  $JSCompiler_StaticMethods_cancelRequests_$$($JSCompiler_StaticMethods_signalError_$self$$);
}
$JSCompiler_prototypeAlias$$.$testNetworkCallback_$ = function($networkUp$$) {
  $networkUp$$ ? (this.$j$.info("Successfully pinged google.com"), $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(2)) : (this.$j$.info("Failed to ping google.com"), $goog$labs$net$webChannel$requestStats$notifyStatEvent$$(1));
};
function $JSCompiler_StaticMethods_onClose_$$($JSCompiler_StaticMethods_onClose_$self$$) {
  $JSCompiler_StaticMethods_onClose_$self$$.$JSC$2464_state_$ = 0;
  $JSCompiler_StaticMethods_onClose_$self$$.$aa$ = [];
  if ($JSCompiler_StaticMethods_onClose_$self$$.$l$) {
    var $pendingMessages$jscomp$2$$ = $JSCompiler_StaticMethods_JSC$2427_getPendingMessages$$($JSCompiler_StaticMethods_onClose_$self$$.$h$);
    if (0 != $pendingMessages$jscomp$2$$.length || 0 != $JSCompiler_StaticMethods_onClose_$self$$.$i$.length) {
      $module$contents$goog$array_extend$$($JSCompiler_StaticMethods_onClose_$self$$.$aa$, $pendingMessages$jscomp$2$$), $module$contents$goog$array_extend$$($JSCompiler_StaticMethods_onClose_$self$$.$aa$, $JSCompiler_StaticMethods_onClose_$self$$.$i$), $JSCompiler_StaticMethods_onClose_$self$$.$h$.$i$.length = 0, $module$contents$goog$array_toArray$$($JSCompiler_StaticMethods_onClose_$self$$.$i$), $JSCompiler_StaticMethods_onClose_$self$$.$i$.length = 0;
    }
    $JSCompiler_StaticMethods_onClose_$self$$.$l$.$channelClosed$();
  }
}
function $JSCompiler_StaticMethods_createDataUri$$($JSCompiler_StaticMethods_createDataUri$self$$, $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$, $param$jscomp$9_path$jscomp$26$$) {
  var $opt_scheme$jscomp$inline_449_uri$jscomp$63$$ = $param$jscomp$9_path$jscomp$26$$ instanceof $goog$Uri$$ ? $JSCompiler_StaticMethods_JSC$2431_clone$$($param$jscomp$9_path$jscomp$26$$) : new $goog$Uri$$($param$jscomp$9_path$jscomp$26$$);
  if ("" != $opt_scheme$jscomp$inline_449_uri$jscomp$63$$.$g$) {
    $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$ && ($opt_scheme$jscomp$inline_449_uri$jscomp$63$$.$g$ = $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$ + "." + $opt_scheme$jscomp$inline_449_uri$jscomp$63$$.$g$), $JSCompiler_StaticMethods_setPort$$($opt_scheme$jscomp$inline_449_uri$jscomp$63$$, $opt_scheme$jscomp$inline_449_uri$jscomp$63$$.$o$);
  } else {
    var $locationPage_opt_port$jscomp$inline_451$$ = $goog$global$$.location;
    $opt_scheme$jscomp$inline_449_uri$jscomp$63$$ = $locationPage_opt_port$jscomp$inline_451$$.protocol;
    $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$ = $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$ ? $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$ + "." + $locationPage_opt_port$jscomp$inline_451$$.hostname : $locationPage_opt_port$jscomp$inline_451$$.hostname;
    $locationPage_opt_port$jscomp$inline_451$$ = +$locationPage_opt_port$jscomp$inline_451$$.port;
    var $uri$jscomp$inline_457$$ = new $goog$Uri$$(null);
    $opt_scheme$jscomp$inline_449_uri$jscomp$63$$ && $JSCompiler_StaticMethods_setScheme$$($uri$jscomp$inline_457$$, $opt_scheme$jscomp$inline_449_uri$jscomp$63$$);
    $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$ && ($uri$jscomp$inline_457$$.$g$ = $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$);
    $locationPage_opt_port$jscomp$inline_451$$ && $JSCompiler_StaticMethods_setPort$$($uri$jscomp$inline_457$$, $locationPage_opt_port$jscomp$inline_451$$);
    $param$jscomp$9_path$jscomp$26$$ && ($uri$jscomp$inline_457$$.$h$ = $param$jscomp$9_path$jscomp$26$$);
    $opt_scheme$jscomp$inline_449_uri$jscomp$63$$ = $uri$jscomp$inline_457$$;
  }
  $param$jscomp$9_path$jscomp$26$$ = $JSCompiler_StaticMethods_createDataUri$self$$.$D$;
  $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$ = $JSCompiler_StaticMethods_createDataUri$self$$.$ea$;
  $param$jscomp$9_path$jscomp$26$$ && $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$ && $JSCompiler_StaticMethods_setParameterValue$$($opt_scheme$jscomp$inline_449_uri$jscomp$63$$, $param$jscomp$9_path$jscomp$26$$, $hostPrefix$jscomp$3_opt_domain$jscomp$inline_450_value$jscomp$251$$);
  $JSCompiler_StaticMethods_setParameterValue$$($opt_scheme$jscomp$inline_449_uri$jscomp$63$$, "VER", $JSCompiler_StaticMethods_createDataUri$self$$.$channelVersion_$);
  $JSCompiler_StaticMethods_addAdditionalParams_$$($JSCompiler_StaticMethods_createDataUri$self$$, $opt_scheme$jscomp$inline_449_uri$jscomp$63$$);
  return $opt_scheme$jscomp$inline_449_uri$jscomp$63$$;
}
function $JSCompiler_StaticMethods_createXhrIo$$($JSCompiler_StaticMethods_createXhrIo$self$$, $hostPrefix$jscomp$4_xhr$jscomp$5$$, $isStreaming$$) {
  if ($hostPrefix$jscomp$4_xhr$jscomp$5$$ && !$JSCompiler_StaticMethods_createXhrIo$self$$.$I$) {
    throw Error("Can't create secondary domain capable XhrIo object.");
  }
  $hostPrefix$jscomp$4_xhr$jscomp$5$$ = $JSCompiler_StaticMethods_createXhrIo$self$$.$ha$ && !$JSCompiler_StaticMethods_createXhrIo$self$$.$ba$ ? new $goog$net$XhrIo$$(new $goog$net$FetchXmlHttpFactory$$({$streamBinaryChunks$:$isStreaming$$})) : new $goog$net$XhrIo$$($JSCompiler_StaticMethods_createXhrIo$self$$.$ba$);
  $hostPrefix$jscomp$4_xhr$jscomp$5$$.$setWithCredentials$($JSCompiler_StaticMethods_createXhrIo$self$$.$I$);
  return $hostPrefix$jscomp$4_xhr$jscomp$5$$;
}
$JSCompiler_prototypeAlias$$.isActive = function() {
  return !!this.$l$ && this.$l$.isActive(this);
};
function $goog$labs$net$webChannel$WebChannelBase$Handler$$() {
}
$JSCompiler_prototypeAlias$$ = $goog$labs$net$webChannel$WebChannelBase$Handler$$.prototype;
$JSCompiler_prototypeAlias$$.$channelOpened$ = function() {
};
$JSCompiler_prototypeAlias$$.$channelHandleArray$ = function() {
};
$JSCompiler_prototypeAlias$$.$channelError$ = function() {
};
$JSCompiler_prototypeAlias$$.$channelClosed$ = function() {
};
$JSCompiler_prototypeAlias$$.isActive = function() {
  return !0;
};
$JSCompiler_prototypeAlias$$.$badMapError$ = function() {
};
function $goog$labs$net$webChannel$WebChannelBaseTransport$$() {
  if ($goog$userAgent$IE$$ && !(10 <= Number($goog$userAgent$DOCUMENT_MODE$$))) {
    throw Error("Environmental error: no available transport.");
  }
}
$goog$labs$net$webChannel$WebChannelBaseTransport$$.prototype.$g$ = function($url$jscomp$71$$, $opt_options$jscomp$104$$) {
  return new $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$($url$jscomp$71$$, $opt_options$jscomp$104$$);
};
function $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$($httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$, $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$) {
  $goog$events$EventTarget$$.call(this);
  this.$g$ = new $goog$labs$net$webChannel$WebChannelBase$$($httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$);
  this.$l$ = $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$;
  this.$h$ = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$messageUrlParams$ || null;
  $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$messageHeaders$ || null;
  $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$clientProtocolHeaderRequired$ && ($httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ ? $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$["X-Client-Protocol"] = "webchannel" : $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ = 
  {"X-Client-Protocol":"webchannel"});
  this.$g$.$s$ = $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$;
  $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$initMessageHeaders$ || null;
  $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$messageContentType$ && ($httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ ? $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$["X-WebChannel-Content-Type"] = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$messageContentType$ : 
  $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ = {"X-WebChannel-Content-Type":$httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$messageContentType$});
  $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$clientProfile$ && ($httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ ? $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$["X-WebChannel-Client-Profile"] = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$clientProfile$ : 
  $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ = {"X-WebChannel-Client-Profile":$httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$clientProfile$});
  this.$g$.$P$ = $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$;
  ($httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$httpHeadersOverwriteParam$) && !$goog$string$internal$isEmptyOrWhitespace$$($httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$) && (this.$g$.$o$ = $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$);
  this.$A$ = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$supportsCrossDomainXhr$ || !1;
  this.$u$ = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$sendRawJson$ || !1;
  ($httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$.$httpSessionIdParam$) && !$goog$string$internal$isEmptyOrWhitespace$$($httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$) && (this.$g$.$D$ = $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$, $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ = 
  this.$h$, null !== $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ && $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ in $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ && ($httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ = this.$h$, $httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$ in 
  $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$ && delete $httpHeadersOverwriteParam$jscomp$1_initHeaders$jscomp$1_messageHeaders_obj$jscomp$inline_483_obj$jscomp$inline_486_url$jscomp$72$$[$httpSessionIdParam$jscomp$2_opt_options$jscomp$105$$]));
  this.$j$ = new $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$Handler_$$(this);
}
$goog$inherits$$($goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$, $goog$events$EventTarget$$);
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.$m$ = function() {
  this.$g$.$l$ = this.$j$;
  this.$A$ && (this.$g$.$I$ = !0);
  this.$g$.connect(this.$l$, this.$h$ || void 0);
};
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.close = function() {
  $JSCompiler_StaticMethods_JSC$2464_disconnect$$(this.$g$);
};
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.$s$ = function($JSCompiler_inline_result$jscomp$69_message$jscomp$48$$) {
  var $JSCompiler_temp_const$jscomp$68$$ = this.$g$;
  if ("string" === typeof $JSCompiler_inline_result$jscomp$69_message$jscomp$48$$) {
    var $rawJson$jscomp$inline_498_rawJson$jscomp$inline_499$$ = {};
    $rawJson$jscomp$inline_498_rawJson$jscomp$inline_499$$.__data__ = $JSCompiler_inline_result$jscomp$69_message$jscomp$48$$;
    $JSCompiler_inline_result$jscomp$69_message$jscomp$48$$ = $rawJson$jscomp$inline_498_rawJson$jscomp$inline_499$$;
  } else {
    this.$u$ && ($rawJson$jscomp$inline_498_rawJson$jscomp$inline_499$$ = {}, $rawJson$jscomp$inline_498_rawJson$jscomp$inline_499$$.__data__ = $goog$json$serialize$$($JSCompiler_inline_result$jscomp$69_message$jscomp$48$$), $JSCompiler_inline_result$jscomp$69_message$jscomp$48$$ = $rawJson$jscomp$inline_498_rawJson$jscomp$inline_499$$);
  }
  $JSCompiler_temp_const$jscomp$68$$.$i$.push(new $goog$labs$net$webChannel$Wire$QueuedMap$$($JSCompiler_temp_const$jscomp$68$$.$oa$++, $JSCompiler_inline_result$jscomp$69_message$jscomp$48$$));
  3 == $JSCompiler_temp_const$jscomp$68$$.$JSC$2464_state_$ && $JSCompiler_StaticMethods_ensureForwardChannel_$$($JSCompiler_temp_const$jscomp$68$$);
};
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.$disposeInternal$ = function() {
  this.$g$.$l$ = null;
  delete this.$j$;
  $JSCompiler_StaticMethods_JSC$2464_disconnect$$(this.$g$);
  delete this.$g$;
  $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.$superClass_$.$disposeInternal$.call(this);
};
function $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$MessageEvent$$($JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$) {
  $goog$net$WebChannel$MessageEvent$$.call(this);
  $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$.__headers__ && (this.headers = $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$.__headers__, this.statusCode = $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$.__status__, delete $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$.__headers__, delete $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$.__status__);
  var $JSCompiler_temp$jscomp$31_metadata$$ = $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$.__sm__;
  if ($JSCompiler_temp$jscomp$31_metadata$$) {
    a: {
      for (var $key$jscomp$inline_509$$ in $JSCompiler_temp$jscomp$31_metadata$$) {
        $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$ = $key$jscomp$inline_509$$;
        break a;
      }
      $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$ = void 0;
    }
    if (this.$i$ = $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$) {
      $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$ = this.$i$, $JSCompiler_temp$jscomp$31_metadata$$ = null !== $JSCompiler_temp$jscomp$31_metadata$$ && $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$ in $JSCompiler_temp$jscomp$31_metadata$$ ? $JSCompiler_temp$jscomp$31_metadata$$[$JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$] : void 0;
    }
    this.data = $JSCompiler_temp$jscomp$31_metadata$$;
  } else {
    this.data = $JSCompiler_inline_result$jscomp$25_array$jscomp$20_key$jscomp$inline_512$$;
  }
}
$goog$inherits$$($goog$labs$net$webChannel$WebChannelBaseTransport$Channel$MessageEvent$$, $goog$net$WebChannel$MessageEvent$$);
function $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$ErrorEvent$$() {
  $goog$net$WebChannel$ErrorEvent$$.call(this);
  this.status = 1;
}
$goog$inherits$$($goog$labs$net$webChannel$WebChannelBaseTransport$Channel$ErrorEvent$$, $goog$net$WebChannel$ErrorEvent$$);
function $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$Handler_$$($channel$jscomp$13$$) {
  this.$g$ = $channel$jscomp$13$$;
}
$goog$inherits$$($goog$labs$net$webChannel$WebChannelBaseTransport$Channel$Handler_$$, $goog$labs$net$webChannel$WebChannelBase$Handler$$);
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$Handler_$$.prototype.$channelOpened$ = function() {
  $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$(this.$g$, "open$0");
};
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$Handler_$$.prototype.$channelHandleArray$ = function($array$jscomp$21$$) {
  $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$(this.$g$, new $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$MessageEvent$$($array$jscomp$21$$));
};
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$Handler_$$.prototype.$channelError$ = function($error$jscomp$20$$) {
  $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$(this.$g$, new $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$ErrorEvent$$($error$jscomp$20$$));
};
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$Handler_$$.prototype.$channelClosed$ = function() {
  $JSCompiler_StaticMethods_JSC$2514_dispatchEvent$$(this.$g$, "close$1");
};
function $goog$math$Integer$$($bits$$, $sign$jscomp$1$$) {
  this.$h$ = $sign$jscomp$1$$;
  for (var $localBits$$ = [], $top$jscomp$3$$ = !0, $i$jscomp$172$$ = $bits$$.length - 1; 0 <= $i$jscomp$172$$; $i$jscomp$172$$--) {
    var $val$jscomp$31$$ = $bits$$[$i$jscomp$172$$] | 0;
    $top$jscomp$3$$ && $val$jscomp$31$$ == $sign$jscomp$1$$ || ($localBits$$[$i$jscomp$172$$] = $val$jscomp$31$$, $top$jscomp$3$$ = !1);
  }
  this.$g$ = $localBits$$;
}
var $goog$math$Integer$IntCache_$$ = {};
function $goog$math$Integer$fromInt$$($value$jscomp$252$$) {
  return -128 <= $value$jscomp$252$$ && 128 > $value$jscomp$252$$ ? $goog$reflect$cache$$($value$jscomp$252$$, function($val$jscomp$32$$) {
    return new $goog$math$Integer$$([$val$jscomp$32$$ | 0], 0 > $val$jscomp$32$$ ? -1 : 0);
  }) : new $goog$math$Integer$$([$value$jscomp$252$$ | 0], 0 > $value$jscomp$252$$ ? -1 : 0);
}
function $goog$math$Integer$fromNumber$$($value$jscomp$253$$) {
  if (isNaN($value$jscomp$253$$) || !isFinite($value$jscomp$253$$)) {
    return $goog$math$Integer$ZERO$$;
  }
  if (0 > $value$jscomp$253$$) {
    return $JSCompiler_StaticMethods_negate$$($goog$math$Integer$fromNumber$$(-$value$jscomp$253$$));
  }
  for (var $bits$jscomp$1$$ = [], $pow$$ = 1, $i$jscomp$173$$ = 0; $value$jscomp$253$$ >= $pow$$; $i$jscomp$173$$++) {
    $bits$jscomp$1$$[$i$jscomp$173$$] = $value$jscomp$253$$ / $pow$$ | 0, $pow$$ *= 4294967296;
  }
  return new $goog$math$Integer$$($bits$jscomp$1$$, 0);
}
function $goog$math$Integer$fromString$$($str$jscomp$69$$, $opt_radix$jscomp$1_radix$jscomp$2$$) {
  if (0 == $str$jscomp$69$$.length) {
    throw Error("number format error: empty string");
  }
  $opt_radix$jscomp$1_radix$jscomp$2$$ = $opt_radix$jscomp$1_radix$jscomp$2$$ || 10;
  if (2 > $opt_radix$jscomp$1_radix$jscomp$2$$ || 36 < $opt_radix$jscomp$1_radix$jscomp$2$$) {
    throw Error("radix out of range: " + $opt_radix$jscomp$1_radix$jscomp$2$$);
  }
  if ("-" == $str$jscomp$69$$.charAt(0)) {
    return $JSCompiler_StaticMethods_negate$$($goog$math$Integer$fromString$$($str$jscomp$69$$.substring(1), $opt_radix$jscomp$1_radix$jscomp$2$$));
  }
  if (0 <= $str$jscomp$69$$.indexOf("-")) {
    throw Error('number format error: interior "-" character');
  }
  for (var $radixToPower$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$1_radix$jscomp$2$$, 8)), $result$jscomp$40$$ = $goog$math$Integer$ZERO$$, $i$jscomp$174$$ = 0; $i$jscomp$174$$ < $str$jscomp$69$$.length; $i$jscomp$174$$ += 8) {
    var $power_size$jscomp$26$$ = Math.min(8, $str$jscomp$69$$.length - $i$jscomp$174$$), $value$jscomp$254$$ = parseInt($str$jscomp$69$$.substring($i$jscomp$174$$, $i$jscomp$174$$ + $power_size$jscomp$26$$), $opt_radix$jscomp$1_radix$jscomp$2$$);
    8 > $power_size$jscomp$26$$ ? ($power_size$jscomp$26$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$1_radix$jscomp$2$$, $power_size$jscomp$26$$)), $result$jscomp$40$$ = $result$jscomp$40$$.$JSC$2483_multiply$($power_size$jscomp$26$$).add($goog$math$Integer$fromNumber$$($value$jscomp$254$$))) : ($result$jscomp$40$$ = $result$jscomp$40$$.$JSC$2483_multiply$($radixToPower$$), $result$jscomp$40$$ = $result$jscomp$40$$.add($goog$math$Integer$fromNumber$$($value$jscomp$254$$)));
  }
  return $result$jscomp$40$$;
}
var $goog$math$Integer$ZERO$$ = $goog$math$Integer$fromInt$$(0), $goog$math$Integer$ONE$$ = $goog$math$Integer$fromInt$$(1), $goog$math$Integer$TWO_PWR_24_$$ = $goog$math$Integer$fromInt$$(16777216);
$JSCompiler_prototypeAlias$$ = $goog$math$Integer$$.prototype;
$JSCompiler_prototypeAlias$$.$toNumber$ = function() {
  if ($JSCompiler_StaticMethods_isNegative$$(this)) {
    return -$JSCompiler_StaticMethods_negate$$(this).$toNumber$();
  }
  for (var $val$jscomp$33$$ = 0, $pow$jscomp$1$$ = 1, $i$jscomp$175$$ = 0; $i$jscomp$175$$ < this.$g$.length; $i$jscomp$175$$++) {
    var $val$jscomp$inline_517$$ = this.$getBits$($i$jscomp$175$$);
    $val$jscomp$33$$ += (0 <= $val$jscomp$inline_517$$ ? $val$jscomp$inline_517$$ : 4294967296 + $val$jscomp$inline_517$$) * $pow$jscomp$1$$;
    $pow$jscomp$1$$ *= 4294967296;
  }
  return $val$jscomp$33$$;
};
$JSCompiler_prototypeAlias$$.toString = function($opt_radix$jscomp$2_radix$jscomp$3$$) {
  $opt_radix$jscomp$2_radix$jscomp$3$$ = $opt_radix$jscomp$2_radix$jscomp$3$$ || 10;
  if (2 > $opt_radix$jscomp$2_radix$jscomp$3$$ || 36 < $opt_radix$jscomp$2_radix$jscomp$3$$) {
    throw Error("radix out of range: " + $opt_radix$jscomp$2_radix$jscomp$3$$);
  }
  if ($JSCompiler_StaticMethods_isZero$$(this)) {
    return "0";
  }
  if ($JSCompiler_StaticMethods_isNegative$$(this)) {
    return "-" + $JSCompiler_StaticMethods_negate$$(this).toString($opt_radix$jscomp$2_radix$jscomp$3$$);
  }
  for (var $radixToPower$jscomp$1$$ = $goog$math$Integer$fromNumber$$(Math.pow($opt_radix$jscomp$2_radix$jscomp$3$$, 6)), $JSCompiler_StaticMethods_toInt$self$jscomp$inline_519_rem$$ = this, $result$jscomp$41$$ = "";;) {
    var $remDiv$$ = $JSCompiler_StaticMethods_divideAndRemainder$$($JSCompiler_StaticMethods_toInt$self$jscomp$inline_519_rem$$, $radixToPower$jscomp$1$$).$g$;
    $JSCompiler_StaticMethods_toInt$self$jscomp$inline_519_rem$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_toInt$self$jscomp$inline_519_rem$$, $remDiv$$.$JSC$2483_multiply$($radixToPower$jscomp$1$$));
    var $digits$$ = ((0 < $JSCompiler_StaticMethods_toInt$self$jscomp$inline_519_rem$$.$g$.length ? $JSCompiler_StaticMethods_toInt$self$jscomp$inline_519_rem$$.$g$[0] : $JSCompiler_StaticMethods_toInt$self$jscomp$inline_519_rem$$.$h$) >>> 0).toString($opt_radix$jscomp$2_radix$jscomp$3$$);
    $JSCompiler_StaticMethods_toInt$self$jscomp$inline_519_rem$$ = $remDiv$$;
    if ($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_toInt$self$jscomp$inline_519_rem$$)) {
      return $digits$$ + $result$jscomp$41$$;
    }
    for (; 6 > $digits$$.length;) {
      $digits$$ = "0" + $digits$$;
    }
    $result$jscomp$41$$ = $digits$$ + $result$jscomp$41$$;
  }
};
$JSCompiler_prototypeAlias$$.$getBits$ = function($index$jscomp$124$$) {
  return 0 > $index$jscomp$124$$ ? 0 : $index$jscomp$124$$ < this.$g$.length ? this.$g$[$index$jscomp$124$$] : this.$h$;
};
function $JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_isZero$self$$) {
  if (0 != $JSCompiler_StaticMethods_isZero$self$$.$h$) {
    return !1;
  }
  for (var $i$jscomp$176$$ = 0; $i$jscomp$176$$ < $JSCompiler_StaticMethods_isZero$self$$.$g$.length; $i$jscomp$176$$++) {
    if (0 != $JSCompiler_StaticMethods_isZero$self$$.$g$[$i$jscomp$176$$]) {
      return !1;
    }
  }
  return !0;
}
function $JSCompiler_StaticMethods_isNegative$$($JSCompiler_StaticMethods_isNegative$self$$) {
  return -1 == $JSCompiler_StaticMethods_isNegative$self$$.$h$;
}
$JSCompiler_prototypeAlias$$.$JSC$2483_compare$ = function($diff_other$jscomp$19$$) {
  $diff_other$jscomp$19$$ = $JSCompiler_StaticMethods_subtract$$(this, $diff_other$jscomp$19$$);
  return $JSCompiler_StaticMethods_isNegative$$($diff_other$jscomp$19$$) ? -1 : $JSCompiler_StaticMethods_isZero$$($diff_other$jscomp$19$$) ? 0 : 1;
};
function $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_negate$self$$) {
  for (var $len$jscomp$inline_522$$ = $JSCompiler_StaticMethods_negate$self$$.$g$.length, $arr$jscomp$inline_523$$ = [], $i$jscomp$inline_524$$ = 0; $i$jscomp$inline_524$$ < $len$jscomp$inline_522$$; $i$jscomp$inline_524$$++) {
    $arr$jscomp$inline_523$$[$i$jscomp$inline_524$$] = ~$JSCompiler_StaticMethods_negate$self$$.$g$[$i$jscomp$inline_524$$];
  }
  return (new $goog$math$Integer$$($arr$jscomp$inline_523$$, ~$JSCompiler_StaticMethods_negate$self$$.$h$)).add($goog$math$Integer$ONE$$);
}
$JSCompiler_prototypeAlias$$.abs = function() {
  return $JSCompiler_StaticMethods_isNegative$$(this) ? $JSCompiler_StaticMethods_negate$$(this) : this;
};
$JSCompiler_prototypeAlias$$.add = function($other$jscomp$20$$) {
  for (var $len$jscomp$5$$ = Math.max(this.$g$.length, $other$jscomp$20$$.$g$.length), $arr$jscomp$60$$ = [], $carry$$ = 0, $i$jscomp$179$$ = 0; $i$jscomp$179$$ <= $len$jscomp$5$$; $i$jscomp$179$$++) {
    var $c0$$ = $carry$$ + (this.$getBits$($i$jscomp$179$$) & 65535) + ($other$jscomp$20$$.$getBits$($i$jscomp$179$$) & 65535), $c1$$ = ($c0$$ >>> 16) + (this.$getBits$($i$jscomp$179$$) >>> 16) + ($other$jscomp$20$$.$getBits$($i$jscomp$179$$) >>> 16);
    $carry$$ = $c1$$ >>> 16;
    $c0$$ &= 65535;
    $c1$$ &= 65535;
    $arr$jscomp$60$$[$i$jscomp$179$$] = $c1$$ << 16 | $c0$$;
  }
  return new $goog$math$Integer$$($arr$jscomp$60$$, $arr$jscomp$60$$[$arr$jscomp$60$$.length - 1] & -2147483648 ? -1 : 0);
};
function $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_subtract$self$$, $other$jscomp$21$$) {
  return $JSCompiler_StaticMethods_subtract$self$$.add($JSCompiler_StaticMethods_negate$$($other$jscomp$21$$));
}
$JSCompiler_prototypeAlias$$.$JSC$2483_multiply$ = function($other$jscomp$22$$) {
  if ($JSCompiler_StaticMethods_isZero$$(this) || $JSCompiler_StaticMethods_isZero$$($other$jscomp$22$$)) {
    return $goog$math$Integer$ZERO$$;
  }
  if ($JSCompiler_StaticMethods_isNegative$$(this)) {
    return $JSCompiler_StaticMethods_isNegative$$($other$jscomp$22$$) ? $JSCompiler_StaticMethods_negate$$(this).$JSC$2483_multiply$($JSCompiler_StaticMethods_negate$$($other$jscomp$22$$)) : $JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_negate$$(this).$JSC$2483_multiply$($other$jscomp$22$$));
  }
  if ($JSCompiler_StaticMethods_isNegative$$($other$jscomp$22$$)) {
    return $JSCompiler_StaticMethods_negate$$(this.$JSC$2483_multiply$($JSCompiler_StaticMethods_negate$$($other$jscomp$22$$)));
  }
  if (0 > this.$JSC$2483_compare$($goog$math$Integer$TWO_PWR_24_$$) && 0 > $other$jscomp$22$$.$JSC$2483_compare$($goog$math$Integer$TWO_PWR_24_$$)) {
    return $goog$math$Integer$fromNumber$$(this.$toNumber$() * $other$jscomp$22$$.$toNumber$());
  }
  for (var $len$jscomp$6$$ = this.$g$.length + $other$jscomp$22$$.$g$.length, $arr$jscomp$61$$ = [], $i$jscomp$180$$ = 0; $i$jscomp$180$$ < 2 * $len$jscomp$6$$; $i$jscomp$180$$++) {
    $arr$jscomp$61$$[$i$jscomp$180$$] = 0;
  }
  for ($i$jscomp$180$$ = 0; $i$jscomp$180$$ < this.$g$.length; $i$jscomp$180$$++) {
    for (var $j$jscomp$17$$ = 0; $j$jscomp$17$$ < $other$jscomp$22$$.$g$.length; $j$jscomp$17$$++) {
      var $a1$jscomp$1$$ = this.$getBits$($i$jscomp$180$$) >>> 16, $a0$jscomp$1$$ = this.$getBits$($i$jscomp$180$$) & 65535, $b1$jscomp$1$$ = $other$jscomp$22$$.$getBits$($j$jscomp$17$$) >>> 16, $b0$jscomp$1$$ = $other$jscomp$22$$.$getBits$($j$jscomp$17$$) & 65535;
      $arr$jscomp$61$$[2 * $i$jscomp$180$$ + 2 * $j$jscomp$17$$] += $a0$jscomp$1$$ * $b0$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$61$$, 2 * $i$jscomp$180$$ + 2 * $j$jscomp$17$$);
      $arr$jscomp$61$$[2 * $i$jscomp$180$$ + 2 * $j$jscomp$17$$ + 1] += $a1$jscomp$1$$ * $b0$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$61$$, 2 * $i$jscomp$180$$ + 2 * $j$jscomp$17$$ + 1);
      $arr$jscomp$61$$[2 * $i$jscomp$180$$ + 2 * $j$jscomp$17$$ + 1] += $a0$jscomp$1$$ * $b1$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$61$$, 2 * $i$jscomp$180$$ + 2 * $j$jscomp$17$$ + 1);
      $arr$jscomp$61$$[2 * $i$jscomp$180$$ + 2 * $j$jscomp$17$$ + 2] += $a1$jscomp$1$$ * $b1$jscomp$1$$;
      $goog$math$Integer$carry16_$$($arr$jscomp$61$$, 2 * $i$jscomp$180$$ + 2 * $j$jscomp$17$$ + 2);
    }
  }
  for ($i$jscomp$180$$ = 0; $i$jscomp$180$$ < $len$jscomp$6$$; $i$jscomp$180$$++) {
    $arr$jscomp$61$$[$i$jscomp$180$$] = $arr$jscomp$61$$[2 * $i$jscomp$180$$ + 1] << 16 | $arr$jscomp$61$$[2 * $i$jscomp$180$$];
  }
  for ($i$jscomp$180$$ = $len$jscomp$6$$; $i$jscomp$180$$ < 2 * $len$jscomp$6$$; $i$jscomp$180$$++) {
    $arr$jscomp$61$$[$i$jscomp$180$$] = 0;
  }
  return new $goog$math$Integer$$($arr$jscomp$61$$, 0);
};
function $goog$math$Integer$carry16_$$($bits$jscomp$4$$, $index$jscomp$126$$) {
  for (; ($bits$jscomp$4$$[$index$jscomp$126$$] & 65535) != $bits$jscomp$4$$[$index$jscomp$126$$];) {
    $bits$jscomp$4$$[$index$jscomp$126$$ + 1] += $bits$jscomp$4$$[$index$jscomp$126$$] >>> 16, $bits$jscomp$4$$[$index$jscomp$126$$] &= 65535, $index$jscomp$126$$++;
  }
}
function $goog$math$Integer$DivisionResult$$($quotient$$, $remainder$jscomp$1$$) {
  this.$g$ = $quotient$$;
  this.$h$ = $remainder$jscomp$1$$;
}
function $JSCompiler_StaticMethods_divideAndRemainder$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$, $other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$) {
  if ($JSCompiler_StaticMethods_isZero$$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$)) {
    throw Error("division by zero");
  }
  if ($JSCompiler_StaticMethods_isZero$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$)) {
    return new $goog$math$Integer$DivisionResult$$($goog$math$Integer$ZERO$$, $goog$math$Integer$ZERO$$);
  }
  if ($JSCompiler_StaticMethods_isNegative$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$)) {
    return $other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$ = $JSCompiler_StaticMethods_divideAndRemainder$$($JSCompiler_StaticMethods_negate$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$), $other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$), new $goog$math$Integer$DivisionResult$$($JSCompiler_StaticMethods_negate$$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$.$g$), $JSCompiler_StaticMethods_negate$$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$.$h$));
  }
  if ($JSCompiler_StaticMethods_isNegative$$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$)) {
    return $other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$ = $JSCompiler_StaticMethods_divideAndRemainder$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$, $JSCompiler_StaticMethods_negate$$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$)), new $goog$math$Integer$DivisionResult$$($JSCompiler_StaticMethods_negate$$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$.$g$), $other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$.$h$);
  }
  if (30 < $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$.$g$.length) {
    if ($JSCompiler_StaticMethods_isNegative$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$) || $JSCompiler_StaticMethods_isNegative$$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$)) {
      throw Error("slowDivide_ only works with positive integers.");
    }
    for (var $approx_twoPower$jscomp$inline_528$$ = $goog$math$Integer$ONE$$, $delta$jscomp$3_log2_multiple$jscomp$inline_529$$ = $other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$; 0 >= $delta$jscomp$3_log2_multiple$jscomp$inline_529$$.$JSC$2483_compare$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$);) {
      $approx_twoPower$jscomp$inline_528$$ = $JSCompiler_StaticMethods_JSC$2483_shiftLeft$$($approx_twoPower$jscomp$inline_528$$), $delta$jscomp$3_log2_multiple$jscomp$inline_529$$ = $JSCompiler_StaticMethods_JSC$2483_shiftLeft$$($delta$jscomp$3_log2_multiple$jscomp$inline_529$$);
    }
    var $res$jscomp$8_res$jscomp$inline_530$$ = $JSCompiler_StaticMethods_shiftRight$$($approx_twoPower$jscomp$inline_528$$, 1), $approxRes_total$jscomp$inline_531$$ = $JSCompiler_StaticMethods_shiftRight$$($delta$jscomp$3_log2_multiple$jscomp$inline_529$$, 1);
    $delta$jscomp$3_log2_multiple$jscomp$inline_529$$ = $JSCompiler_StaticMethods_shiftRight$$($delta$jscomp$3_log2_multiple$jscomp$inline_529$$, 2);
    for ($approx_twoPower$jscomp$inline_528$$ = $JSCompiler_StaticMethods_shiftRight$$($approx_twoPower$jscomp$inline_528$$, 2); !$JSCompiler_StaticMethods_isZero$$($delta$jscomp$3_log2_multiple$jscomp$inline_529$$);) {
      var $approxRem_total2$jscomp$inline_532$$ = $approxRes_total$jscomp$inline_531$$.add($delta$jscomp$3_log2_multiple$jscomp$inline_529$$);
      0 >= $approxRem_total2$jscomp$inline_532$$.$JSC$2483_compare$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$) && ($res$jscomp$8_res$jscomp$inline_530$$ = $res$jscomp$8_res$jscomp$inline_530$$.add($approx_twoPower$jscomp$inline_528$$), $approxRes_total$jscomp$inline_531$$ = $approxRem_total2$jscomp$inline_532$$);
      $delta$jscomp$3_log2_multiple$jscomp$inline_529$$ = $JSCompiler_StaticMethods_shiftRight$$($delta$jscomp$3_log2_multiple$jscomp$inline_529$$, 1);
      $approx_twoPower$jscomp$inline_528$$ = $JSCompiler_StaticMethods_shiftRight$$($approx_twoPower$jscomp$inline_528$$, 1);
    }
    $other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$, $res$jscomp$8_res$jscomp$inline_530$$.$JSC$2483_multiply$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$));
    return new $goog$math$Integer$DivisionResult$$($res$jscomp$8_res$jscomp$inline_530$$, $other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$);
  }
  for ($res$jscomp$8_res$jscomp$inline_530$$ = $goog$math$Integer$ZERO$$; 0 <= $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$.$JSC$2483_compare$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$);) {
    $approx_twoPower$jscomp$inline_528$$ = Math.max(1, Math.floor($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$.$toNumber$() / $other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$.$toNumber$()));
    $delta$jscomp$3_log2_multiple$jscomp$inline_529$$ = Math.ceil(Math.log($approx_twoPower$jscomp$inline_528$$) / Math.LN2);
    $delta$jscomp$3_log2_multiple$jscomp$inline_529$$ = 48 >= $delta$jscomp$3_log2_multiple$jscomp$inline_529$$ ? 1 : Math.pow(2, $delta$jscomp$3_log2_multiple$jscomp$inline_529$$ - 48);
    $approxRes_total$jscomp$inline_531$$ = $goog$math$Integer$fromNumber$$($approx_twoPower$jscomp$inline_528$$);
    for ($approxRem_total2$jscomp$inline_532$$ = $approxRes_total$jscomp$inline_531$$.$JSC$2483_multiply$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$); $JSCompiler_StaticMethods_isNegative$$($approxRem_total2$jscomp$inline_532$$) || 0 < $approxRem_total2$jscomp$inline_532$$.$JSC$2483_compare$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$);) {
      $approx_twoPower$jscomp$inline_528$$ -= $delta$jscomp$3_log2_multiple$jscomp$inline_529$$, $approxRes_total$jscomp$inline_531$$ = $goog$math$Integer$fromNumber$$($approx_twoPower$jscomp$inline_528$$), $approxRem_total2$jscomp$inline_532$$ = $approxRes_total$jscomp$inline_531$$.$JSC$2483_multiply$($other$jscomp$25_remainder$jscomp$inline_533_result$jscomp$42$$);
    }
    $JSCompiler_StaticMethods_isZero$$($approxRes_total$jscomp$inline_531$$) && ($approxRes_total$jscomp$inline_531$$ = $goog$math$Integer$ONE$$);
    $res$jscomp$8_res$jscomp$inline_530$$ = $res$jscomp$8_res$jscomp$inline_530$$.add($approxRes_total$jscomp$inline_531$$);
    $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$ = $JSCompiler_StaticMethods_subtract$$($JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$, $approxRem_total2$jscomp$inline_532$$);
  }
  return new $goog$math$Integer$DivisionResult$$($res$jscomp$8_res$jscomp$inline_530$$, $JSCompiler_StaticMethods_divideAndRemainder$self_rem$jscomp$1$$);
}
$JSCompiler_prototypeAlias$$.$modulo$ = function($other$jscomp$26$$) {
  return $JSCompiler_StaticMethods_divideAndRemainder$$(this, $other$jscomp$26$$).$h$;
};
$JSCompiler_prototypeAlias$$.and = function($other$jscomp$27$$) {
  for (var $len$jscomp$8$$ = Math.max(this.$g$.length, $other$jscomp$27$$.$g$.length), $arr$jscomp$63$$ = [], $i$jscomp$182$$ = 0; $i$jscomp$182$$ < $len$jscomp$8$$; $i$jscomp$182$$++) {
    $arr$jscomp$63$$[$i$jscomp$182$$] = this.$getBits$($i$jscomp$182$$) & $other$jscomp$27$$.$getBits$($i$jscomp$182$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$63$$, this.$h$ & $other$jscomp$27$$.$h$);
};
$JSCompiler_prototypeAlias$$.or = function($other$jscomp$28$$) {
  for (var $len$jscomp$9$$ = Math.max(this.$g$.length, $other$jscomp$28$$.$g$.length), $arr$jscomp$64$$ = [], $i$jscomp$183$$ = 0; $i$jscomp$183$$ < $len$jscomp$9$$; $i$jscomp$183$$++) {
    $arr$jscomp$64$$[$i$jscomp$183$$] = this.$getBits$($i$jscomp$183$$) | $other$jscomp$28$$.$getBits$($i$jscomp$183$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$64$$, this.$h$ | $other$jscomp$28$$.$h$);
};
$JSCompiler_prototypeAlias$$.xor = function($other$jscomp$29$$) {
  for (var $len$jscomp$10$$ = Math.max(this.$g$.length, $other$jscomp$29$$.$g$.length), $arr$jscomp$65$$ = [], $i$jscomp$184$$ = 0; $i$jscomp$184$$ < $len$jscomp$10$$; $i$jscomp$184$$++) {
    $arr$jscomp$65$$[$i$jscomp$184$$] = this.$getBits$($i$jscomp$184$$) ^ $other$jscomp$29$$.$getBits$($i$jscomp$184$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$65$$, this.$h$ ^ $other$jscomp$29$$.$h$);
};
function $JSCompiler_StaticMethods_JSC$2483_shiftLeft$$($JSCompiler_StaticMethods_JSC$2483_shiftLeft$self$$) {
  for (var $len$jscomp$11$$ = $JSCompiler_StaticMethods_JSC$2483_shiftLeft$self$$.$g$.length + 1, $arr$jscomp$66$$ = [], $i$jscomp$185$$ = 0; $i$jscomp$185$$ < $len$jscomp$11$$; $i$jscomp$185$$++) {
    $arr$jscomp$66$$[$i$jscomp$185$$] = $JSCompiler_StaticMethods_JSC$2483_shiftLeft$self$$.$getBits$($i$jscomp$185$$) << 1 | $JSCompiler_StaticMethods_JSC$2483_shiftLeft$self$$.$getBits$($i$jscomp$185$$ - 1) >>> 31;
  }
  return new $goog$math$Integer$$($arr$jscomp$66$$, $JSCompiler_StaticMethods_JSC$2483_shiftLeft$self$$.$h$);
}
function $JSCompiler_StaticMethods_shiftRight$$($JSCompiler_StaticMethods_shiftRight$self$$, $bit_delta$jscomp$1_numBits$jscomp$2$$) {
  var $arr_delta$jscomp$1$$ = $bit_delta$jscomp$1_numBits$jscomp$2$$ >> 5;
  $bit_delta$jscomp$1_numBits$jscomp$2$$ %= 32;
  for (var $len$jscomp$12$$ = $JSCompiler_StaticMethods_shiftRight$self$$.$g$.length - $arr_delta$jscomp$1$$, $arr$jscomp$67$$ = [], $i$jscomp$186$$ = 0; $i$jscomp$186$$ < $len$jscomp$12$$; $i$jscomp$186$$++) {
    $arr$jscomp$67$$[$i$jscomp$186$$] = 0 < $bit_delta$jscomp$1_numBits$jscomp$2$$ ? $JSCompiler_StaticMethods_shiftRight$self$$.$getBits$($i$jscomp$186$$ + $arr_delta$jscomp$1$$) >>> $bit_delta$jscomp$1_numBits$jscomp$2$$ | $JSCompiler_StaticMethods_shiftRight$self$$.$getBits$($i$jscomp$186$$ + $arr_delta$jscomp$1$$ + 1) << 32 - $bit_delta$jscomp$1_numBits$jscomp$2$$ : $JSCompiler_StaticMethods_shiftRight$self$$.$getBits$($i$jscomp$186$$ + $arr_delta$jscomp$1$$);
  }
  return new $goog$math$Integer$$($arr$jscomp$67$$, $JSCompiler_StaticMethods_shiftRight$self$$.$h$);
}
;/*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
$goog$labs$net$webChannel$WebChannelBaseTransport$$.prototype.createWebChannel = $goog$labs$net$webChannel$WebChannelBaseTransport$$.prototype.$g$;
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.send = $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.$s$;
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.open = $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.$m$;
$goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.close = $goog$labs$net$webChannel$WebChannelBaseTransport$Channel$$.prototype.close;
$goog$net$ErrorCode$$.NO_ERROR = 0;
$goog$net$ErrorCode$$.TIMEOUT = 8;
$goog$net$ErrorCode$$.HTTP_ERROR = 6;
$goog$net$EventType$$.COMPLETE = "complete";
$goog$net$WebChannel$$.EventType = $goog$net$WebChannel$EventType$$;
$goog$net$WebChannel$EventType$$.OPEN = "open$0";
$goog$net$WebChannel$EventType$$.CLOSE = "close$1";
$goog$net$WebChannel$EventType$$.ERROR = "error$2";
$goog$net$WebChannel$EventType$$.MESSAGE = "message$3";
$goog$events$EventTarget$$.prototype.listen = $goog$events$EventTarget$$.prototype.$L$;
$goog$net$XhrIo$$.prototype.listenOnce = $goog$net$XhrIo$$.prototype.$M$;
$goog$net$XhrIo$$.prototype.getLastError = $goog$net$XhrIo$$.prototype.$JSC$2457_getLastError$;
$goog$net$XhrIo$$.prototype.getLastErrorCode = $goog$net$XhrIo$$.prototype.$getLastErrorCode$;
$goog$net$XhrIo$$.prototype.getStatus = $goog$net$XhrIo$$.prototype.$getStatus$;
$goog$net$XhrIo$$.prototype.getResponseJson = $goog$net$XhrIo$$.prototype.$getResponseJson$;
$goog$net$XhrIo$$.prototype.getResponseText = $goog$net$XhrIo$$.prototype.$getResponseText$;
$goog$net$XhrIo$$.prototype.send = $goog$net$XhrIo$$.prototype.$JSC$2457_send$;
$goog$net$XhrIo$$.prototype.setWithCredentials = $goog$net$XhrIo$$.prototype.$setWithCredentials$;
$goog$crypt$Md5$$.prototype.digest = $goog$crypt$Md5$$.prototype.$l$;
$goog$crypt$Md5$$.prototype.reset = $goog$crypt$Md5$$.prototype.reset;
$goog$crypt$Md5$$.prototype.update = $goog$crypt$Md5$$.prototype.$j$;
$goog$math$Integer$$.prototype.add = $goog$math$Integer$$.prototype.add;
$goog$math$Integer$$.prototype.multiply = $goog$math$Integer$$.prototype.$JSC$2483_multiply$;
$goog$math$Integer$$.prototype.modulo = $goog$math$Integer$$.prototype.$modulo$;
$goog$math$Integer$$.prototype.compare = $goog$math$Integer$$.prototype.$JSC$2483_compare$;
$goog$math$Integer$$.prototype.toNumber = $goog$math$Integer$$.prototype.$toNumber$;
$goog$math$Integer$$.prototype.toString = $goog$math$Integer$$.prototype.toString;
$goog$math$Integer$$.prototype.getBits = $goog$math$Integer$$.prototype.$getBits$;
$goog$math$Integer$$.fromNumber = $goog$math$Integer$fromNumber$$;
$goog$math$Integer$$.fromString = $goog$math$Integer$fromString$$;
module.exports.createWebChannelTransport = function() {
  return new $goog$labs$net$webChannel$WebChannelBaseTransport$$();
};
module.exports.getStatEventTarget = function() {
  return $goog$labs$net$webChannel$requestStats$getStatEventTarget_$$();
};
module.exports.ErrorCode = $goog$net$ErrorCode$$;
module.exports.EventType = $goog$net$EventType$$;
module.exports.Event = $goog$labs$net$webChannel$requestStats$Event$$;
module.exports.Stat = {$CONNECT_ATTEMPT$:0, $ERROR_NETWORK$:1, $ERROR_OTHER$:2, $TEST_STAGE_ONE_START$:3, $TEST_STAGE_TWO_START$:4, $TEST_STAGE_TWO_DATA_ONE$:5, $TEST_STAGE_TWO_DATA_TWO$:6, $TEST_STAGE_TWO_DATA_BOTH$:7, $TEST_STAGE_ONE_FAILED$:8, $TEST_STAGE_TWO_FAILED$:9, $PROXY$:10, $NOPROXY$:11, $REQUEST_UNKNOWN_SESSION_ID$:12, $REQUEST_BAD_STATUS$:13, $REQUEST_INCOMPLETE_DATA$:14, $REQUEST_BAD_DATA$:15, $REQUEST_NO_DATA$:16, $REQUEST_TIMEOUT$:17, $BACKCHANNEL_MISSING$:18, $BACKCHANNEL_DEAD$:19, 
$BROWSER_OFFLINE$:20};
module.exports.FetchXmlHttpFactory = $goog$net$FetchXmlHttpFactory$$;
module.exports.WebChannel = $goog$net$WebChannel$$;
module.exports.XhrIo = $goog$net$XhrIo$$;
module.exports.Md5 = $goog$crypt$Md5$$;
module.exports.Integer = $goog$math$Integer$$;

