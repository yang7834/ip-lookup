# 🌐 ip-lookup

一个轻量级的 IP 地址分类工具，可以判断 IPv4 地址的网络类别（A/B/C/D/E），以及是否属于私有地址。

## 安装

```bash
git clone https://github.com/yang7834/ip-lookup.git
cd ip-lookup
```

零依赖，直接 `require` 即可使用。

## 使用方法

```js
const lookup = require('./index.js');

// 公网地址 — C 类
lookup('192.168.1.1');
// { ip: '192.168.1.1', class: 'C', isPrivate: true }

// 公网 DNS — A 类
lookup('8.8.8.8');
// { ip: '8.8.8.8', class: 'A', isPrivate: false }

// 172.16.x.x 段私有地址 — B 类
lookup('172.16.0.1');
// { ip: '172.16.0.1', class: 'B', isPrivate: true }

// D 类（组播地址）
lookup('224.0.0.1');
// { ip: '224.0.0.1', class: 'D', isPrivate: false }

// E 类（保留地址）
lookup('240.0.0.1');
// { ip: '240.0.0.1', class: 'E', isPrivate: false }
```

## API

### `lookup(ip)`

| 参数 | 类型 | 说明 |
|------|------|------|
| `ip` | `string` | 点分十进制的 IPv4 地址，如 `"8.8.8.8"` |

**返回值：**

| 字段 | 类型 | 说明 |
|------|------|------|
| `ip` | `string` | 原始 IP 地址 |
| `class` | `string` | 网络类别，取值 `'A'` / `'B'` / `'C'` / `'D'` / `'E'` |
| `isPrivate` | `boolean` | 是否为私有地址 |

**网络分类规则：**

| 首字节范围 | 类别 | 说明 |
|-----------|------|------|
| 1–127 | A | 大型网络，默认掩码 255.0.0.0 |
| 128–191 | B | 中型网络，默认掩码 255.255.0.0 |
| 192–223 | C | 小型网络，默认掩码 255.255.255.0 |
| 224–239 | D | 组播地址 |
| 240–255 | E | 保留地址 |

**私有地址判断：**

- `10.0.0.0/8` — A 类私有段
- `172.16.0.0/12` — B 类私有段（172.16.x.x ~ 172.31.x.x）
- `192.168.0.0/16` — C 类私有段

## 项目结构

```
ip-lookup/
├── index.js      # 主模块，导出 lookup 函数
├── package.json  # 项目元信息
└── README.md     # 本文件
```

## 技术细节

- 纯 Node.js，零依赖
- 通过首字节范围判断网络类别
- 私有地址判断覆盖 RFC 1918 规定的三个保留段

## 许可证

MIT
