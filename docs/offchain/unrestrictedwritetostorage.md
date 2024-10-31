---
sidebar_position: 5
---
# Unrestricted Write to Storage
This page explains the unrestricted write to storage vulnerability in smart contracts.
## Description
Unrestricted write to storage occurs when a smart contract allows data to be written to storage without sufficient checks. This lack of restriction can permit unauthorized users or operations to alter critical contract data, resulting in unintended or malicious changes.

## Impact on Smart Contracts
If a function permits unrestricted storage writes, attackers can exploit it to change key values, which may lead to financial losses, denial of service, or manipulation of the contract's behavior. This vulnerability is especially critical for contracts managing user balances, ownership details, or other sensitive information.

## Lua Code Example
```lua
-- Lua example demonstrating unrestricted write to storage
local contractStorage = {}

function setData(key, value)
    -- Lack of authorization check permits anyone to write to storage
    contractStorage[key] = value
end

-- Example usage
setData("balance", 1000)
print("Balance:", contractStorage["balance"])  -- Prints: Balance: 1000
