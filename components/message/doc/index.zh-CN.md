---
category: Components
subtitle: 全局提示
type: 反馈
noinstant: true
title: Message
---

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 如何使用

如果要修改全局默认配置，你可以设置提供商 `NZ_MESSAGE_CONFIG` 的值来修改。
（如：在你的模块的`providers`中加入 `{ provide: NZ_MESSAGE_CONFIG, useValue: { nzDuration: 3000 }}`，`NZ_MESSAGE_CONFIG` 可以从 `ng-zorro-antd` 中导入）

默认全局配置为：
```js
{
  nzDuration: 3000,
  nzMaxStack: 7,
  nzPauseOnHover: true,
  nzAnimate: true
}
```

## API

### 单独引入此组件

[说明](/docs/getting-started/zh#单独引入某个组件)。

```ts
import { NzMessageModule } from 'ng-zorro-antd';
```

### NzMessageService

组件提供了一些服务方法，使用方式和参数如下：

- `NzMessageService.success(content, [options])`
- `NzMessageService.error(content, [options])`
- `NzMessageService.info(content, [options])`
- `NzMessageService.warning(content, [options])`
- `NzMessageService.loading(content, [options])`

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 提示内容 | `string｜TemplateRef<void>` | - |
| options | 支持设置针对当前提示框的参数，见下方表格 | `object` | - |

`options` 支持设置的参数如下：

| 参数 | 说明 | 类型 |
| --- | --- | --- |
| nzDuration | 持续时间(毫秒)，当设置为0时不消失 | `number` |
| nzPauseOnHover | 鼠标移上时禁止自动移除 | `boolean` |
| nzAnimate | 开关动画效果 | `boolean` |

还提供了全局销毁方法：

- `NzMessageService.remove(id)` // 移除特定id的消息，当id为空时，移除所有消息（该消息id通过上述方法返回值中得到）

### 全局配置（NZ_MESSAGE_CONFIG）

| 参数 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| nzDuration | 持续时间(毫秒)，当设置为0时不消失 | `number` | `3000` |
| nzMaxStack | 同一时间可展示的最大提示数量 | `number` | `8` |
| nzPauseOnHover | 鼠标移上时禁止自动移除 | `boolean` | `true` |
| nzAnimate | 开关动画效果 | `boolean` | `true` |
| nzTop | 消息距离顶部的位置 | `number｜string` | `24` |

### NzMessageDataFilled

当你调用 `NzMessageService.success` 或其他方法时会返回该对象。

```ts
export interface NzMessageDataFilled {
  onClose: Subject<false>; // 当 message 关闭时它会派发一个事件
}
```
