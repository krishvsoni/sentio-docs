---
sidebar_position: 9
---
# Unchecked External Call
This page explains the risks associated with unchecked external calls in smart contracts and provides an example in Lua.
## Description
An unchecked external call occurs when a smart contract calls another contract without verifying the success of that call. This can lead to unexpected behavior if the called contract fails or behaves maliciously, as the calling contract may proceed as if the call was successful.

## Impact on Smart Contracts
Failure to check the outcome of external calls can result in unexpected state changes or the loss of funds. For instance, if a contract sends Ether to another contract but doesn't verify whether the transaction succeeded, it may assume that the funds were successfully transferred, leading to logical errors in subsequent operations.

## Lua Code Example
```lua
-- Lua example demonstrating an unchecked external call vulnerability
local contractA = {
    balance = 100,
}

local contractB = {
    functionThatFails = function()
        -- Simulate a failure
        return false
    end
}

function externalCall()
    local success = contractB:functionThatFails()  -- Unchecked call
    if success then
        contractA.balance = contractA.balance - 50
        print("Funds transferred successfully")
    else
        print("Failed to transfer funds")
    end
end

-- Example usage
externalCall()  -- Output: Failed to transfer funds
