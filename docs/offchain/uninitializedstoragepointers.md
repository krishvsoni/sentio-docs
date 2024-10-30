---
sidebar_position: 3
---
# Uninitialized Storage Pointers

## Description
Uninitialized storage pointers refer to variables that are declared but not initialized before use. In certain languages, this can cause unintentional data corruption by inadvertently referencing unexpected storage locations, leading to unpredictable behavior in the contract.

## Impact on Smart Contracts
In a smart contract context, using uninitialized storage pointers can overwrite existing data, potentially leading to lost or altered critical information. Attackers could exploit this to corrupt the contract’s state or execute unintended functionality.

## Lua Code Example
```lua
-- Uninitialized storage pointer example in Lua
local dataStorage = {}

function writeData(index, value)
    -- Uninitialized storage could lead to accidental data overwrite
    dataStorage[index] = value
end

print("Data at index 1:", dataStorage[1])
writeData(1, "Critical Data")
print("Data at index 1 after overwrite:", dataStorage[1])
