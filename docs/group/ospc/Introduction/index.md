# 简介

## 开放自由安全
区块链核心(BlockChainCore)
- 1. 存储（Storage）
- 2. 用户（User）
- 3. 区块链虚拟机（BlockChainVM）
- 4. 区块升级（BlockUpgrade）
- 5. 交易（Transaction）
- 6. 交易实施（TransactionPool）
- 7. 区块（Block）
- 8. 区块链（BlockChain）
- 9. 区块链核心（BlockChainCore）
- 10. 区块链核心API（BlockChainCoreAPI）
- 11. 区块链核心API实施（BlockChainCoreAPIImpl）


## 区块链存储系统（BlockChainStorageSystem）
- 2 存储（Storage）
>- 2.1 区块链磁盘(BlockChainDisk)
>- 2.2 区块链缓存(BlockChainCache)
>- 2.3 区块链索引(BlockChainIndex)
>- 2.4 区块链索引缓存(BlockChainIndexCache)
>- 2.5 区块链索引磁盘(BlockChainIndexDisk)
>- 2.6 区块链索引系统(BlockChainIndexSystem)
>- 2.7 区块链索引系统API(BlockChainIndexSystemAPI)
>- 2.8 区块链索引系统API实现(BlockChainIndexSystemAPIImpl)


## 区块链用户系统（BlockChainUserSystem）
- 3 用户（User）
>- 初始用户为64个0
>- 新建用户 = 初始用户哈希+用户自己定义字符串+随机生成字符串+时间戳+区块高度
>- 用户数据信息 = 

## 区块链虚拟机(BlockChainVM)
- 4 虚拟机（VM）
>- 4.1 区块链虚拟机(BlockChainVM)
>- 4.2 区块链虚拟机状态(BlockChainVMState)
>- 4.3 区块链虚拟机指令(BlockChainVMInstruction)
>- 4.4 区块链虚拟机指令执行结果(BlockChainVMInstructionResult)
>- 4.5 区块链虚拟机指令执行结果状态(BlockChainVMInstructionResultState)


## 区块链升级系统(BlockChainUpdateSystem)
- 5 区块升级（BlockUpgrade）
>- 5.1 区块链升级系统(BlockChainUpdateSystem)
>- 5.2 区块链升级系统API(BlockChainUpdateSystemAPI)
>- 5.3 区块链升级系统API实现(BlockChainUpdateSystemAPIImpl)
>- 5.4 区块升级操作(BlockUpgradeOperation)
>- 5.5 区块升级操作状态(BlockUpgradeOperationState)
>- 5.6 区块升级操作状态码(BlockUpgradeOperationStateCode)
>- 5.7 区块升级操作状态描述(BlockUpgradeOperationStateDesc)
>- 5.8 区块升级操作状态码描述(BlockUpgradeOperationStateCodeDesc)
>- 5.9 区块禁止升级操作(BlockProhibitUpgradeOperation)
>- 5.10 区块禁止升级操作状态(BlockProhibitUpgradeOperationState)
>- 5.11 区块禁止升级操作状态码(BlockProhibitUpgradeOperationStateCode)
>- 5.12 区块禁止升级操作状态描述(BlockProhibitUpgradeOperationStateDesc)
>- 5.13 区块禁止升级操作状态码描述(BlockProhibitUpgradeOperationStateCodeDesc)
>- 5.14 区块链升级操作状态码描述(BlockUpgradeOperationStateCodeDesc)
