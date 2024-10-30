---
sidebar_position: 8
---
# Self-Destruct Function
This page explains the self-destruct function vulnerability in smart contracts.
## Description
The self-destruct function in smart contracts allows the contract to destroy itself, removing its code and freeing up the storage. This function can be called by anyone or restricted to the contract owner, depending on the implementation. If not properly controlled, it can lead to unauthorized access and malicious destruction of the contract.

## Impact on Smart Contracts
If a self-destruct function can be called by unauthorized users, it may lead to a complete loss of contract functionality, loss of funds, and potentially disrupt the services relying on the contract. This vulnerability can be exploited to prevent legitimate users from accessing or interacting with the contract.

## Lua Code Example
```lua
-- Lua example demonstrating a self-destruct vulnerability
local contract = {
    owner = "authorized_user",
    destroyed = false
}

function selfDestruct(caller)
    if caller == contract.owner then
        contract.destroyed = true
        print("Contract destroyed")
    else
        print("Unauthorized access: Cannot destroy contract")
    end
end

-- Example usage
selfDestruct("unauthorized_user")  -- Output: Unauthorized access: Cannot destroy contract
selfDestruct("authorized_user")     -- Output: Contract destroyed
