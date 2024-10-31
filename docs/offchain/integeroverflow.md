---
sidebar_position: 2
---
# Integer Overflow and Underflow
This page explains the integer overflow and underflow vulnerabilities in smart contracts.
## Description
Integer overflow and underflow occur when an arithmetic operation exceeds the maximum or minimum value a variable can hold. Overflow happens when a value wraps around beyond the maximum, and underflow when it drops below the minimum, resulting in unexpected values.

## Impact on Smart Contracts
In smart contracts, integer overflow and underflow can lead to severe financial vulnerabilities. For example, attackers may manipulate balances, counters, or other critical variables, leading to incorrect calculations, bypassed security checks, or drained funds.

## Lua Code Example
```lua
-- Example of overflow in Lua
balance = 0

function addFunds(amount)
    -- Potential overflow if `balance` exceeds max integer
    balance = balance + amount
end

function withdrawFunds(amount)
    -- Potential underflow if `balance` is less than `amount`
    if balance >= amount then
        balance = balance - amount
    else
        print("Insufficient funds")
    end
end
