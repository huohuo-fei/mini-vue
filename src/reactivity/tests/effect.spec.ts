// 响应式模块
import { reactive } from "../reactive";
import { effect } from "../effect";

describe("effect", () => {
  it("happy path", () => {
    const reactiveObj = reactive({ age: 18 });
    let newAge;
    effect(() => {
      newAge = reactiveObj.age;
    });
    expect(newAge).toBe(18);

    // update
    reactiveObj.age++;
    expect(newAge).toBe(19);
  });

  it("", () => {
    // 1. effect(fn) 返回一个function(称为runner) -> 当我们调用这个返回的runner 会执行 我们传入effect 函数的fn函数，并且 return 出fn的返回值
  });
});
