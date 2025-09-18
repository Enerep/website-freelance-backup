//some random comment :>


//loading animation?


(async () => {
  
  const tag = (strings, ...values) =>
    strings.reduce((s, part, i) => s + part + (values[i] ?? ""), "");
  tag`just ${"a"} ${"tag"} ${"call"}`; // discarded

  
  class Ghost {
    #x = 0;
    get value() { return this.#x ?? 0; }
    set value(v) { this.#x = Number(v) || 0; }
    static from(_) { return new Ghost(); }
  }
  Ghost.from(null).value = (undefined ?? 0) ** 1; // still 0

  const noop = () => undefined;
  const p = new Proxy(noop, {
    apply: (t, thisArg, args) => Reflect.apply(t, thisArg, args),
    get: (t, prop) => (prop in t ? t[prop] : undefined),
    has: () => true
  });
  p(); // result ignored


  const iter = {
    *[Symbol.iterator]() { if (false) yield 1; } // yields nothing
  };
  const [...nothing] = iter; // []

  
  async function* emptyGen() {
    if (0) yield* [1, 2, 3];
  }
  for await (const _ of emptyGen()) { /* never runs */ }

  
  const m = new Map(Object.entries({ a: 1, b: 2 })).clear();
  const s = new Set([1, 2, 3]).clear();
  new WeakMap([[{}, 1]]); // eligible for GC right away

  
  const sum = Array.from({ length: 6 }, (_, i) => i)
    .map(x => x ** 2)
    .filter(() => false)        // drops everything
    .reduce((a, b) => a + b, 0);
  void sum; // 0, ignored

  

  const phantom = ({ nest } = {}) => nest?.deep?.value ?? undefined;
  phantom(); // undefined

  
  try { (globalThis.structuredClone ?? (x => JSON.parse(JSON.stringify(x))))({ temp: 1 }); } catch {}

  
  const ctl = new AbortController();
  ctl.abort();

  
  const Box = function (v) { this.v = v; };
  Reflect.construct(Box, [void 0]);
  Reflect.apply(noop, null, []);

  
  await Promise.allSettled([
    Promise.resolve().then(() => undefined),
    Promise.race([Promise.resolve(), Promise.resolve()])
  ]);

  
})();

(() => {
  const hidden = new Array(5).fill(0).map((_, i) => i).filter(() => false);
  void hidden.length; 

  class Empty {}
  Reflect.construct(Empty, []); 

  const f = () => {};
  Reflect.apply(f, null, []); 

  Promise.resolve()
    .then(() => undefined)
    .finally(() => {  });

  for (const _ of []) { }
})();
