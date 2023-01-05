class ReactiveEffect {
  private _fn: any;
  constructor(fn: any) {
    this._fn = fn;
  }
  run() {
    // effect 执行 run 方法 就是执行里面的函数，所以在执行之前 先把函数 保存起来，进行依赖收集
    activeEffect = this;
    this._fn();
  }
}

// 依赖追踪 根据 target 和 key 可以找到唯一的一个dep
const targetMap = new WeakMap();
export function track(target, key) {
  // 首先根据target 获取map
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    depsMap = new Map();
    targetMap.set(target, depsMap);
  }

  // 根据 key 获取set
  let dep = depsMap.get(key);
  if (!dep) {
    dep = new Set();
    depsMap.set(key, dep);
  }

  // 拿到set后，将引用到响应式对象的外层函数 保存起来  为后面的更新依赖做准备
  dep.add(activeEffect);
  console.log("依赖追踪", activeEffect);
}
let activeEffect;
export function trigger(target, key) {
  let depsMap = targetMap.get(target);
  // if (!depsMap) {
  //   depsMap = new Map();
  //   targetMap.set(target, depsMap);
  // }

  // 根据 key 获取set
  let dep = depsMap.get(key);
  // if (!dep) {
  //   dep = new Set();
  //   depsMap.set(key, dep);
  // }

  // 依赖更新
  for (const effect of dep) {
    effect.run();
  }
}

// 调用effect 时，会执行 传入的函数 进而会访问到 函数中引用的响应式对象
export function effect(fn) {
  // 构造一个抽象类  将effect 副作用封装
  const _effect = new ReactiveEffect(fn);
  _effect.run();
  // activeEffect = null;
}
