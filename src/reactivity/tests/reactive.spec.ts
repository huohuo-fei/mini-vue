// 测试  reactive 模块
import { reactive } from "../reactive";
describe("reactive", () => {
  it("happy path", () => {
    const original = { count: 0 };
    const observe = reactive(original);
    expect(observe).not.toBe(original);
    expect(observe.count).toBe(0);
    // observe.count++;
    // expect(nextCount).toBe(1);
  });
});
