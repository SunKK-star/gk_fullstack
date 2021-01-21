# Remote Procedure Call （远程过程调用）

和 Ajax 有什么相同点？
1. 都是两个计算机之间的通信
2. 都需要双方约定数据格式

和 Ajax 的不同点
1. 不一定使用DNS作寻址服务
2. 应用层协议一般不使用HTTP
3. 基于TCP或UDP协议

- 寻址/负载均衡
  Ajax：使用DNS作寻址服务（DNS根据域名解析IP地址）
  RPC： 使用特有服务服务器进行寻址（特有的寻址服务器）

- TCP 通信方式
  Ajax： 单工通信
  RPC： 多种形式

- 二进制协议
Ajax： HTTP(html,json)
RPC: 二进制协议(更小的数据包体积，更快的编码速率)

# RPC 调用：Buffer编码二进制数据包