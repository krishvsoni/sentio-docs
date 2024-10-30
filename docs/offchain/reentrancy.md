# Reentrancy

## Description
Reentrancy occurs when a function makes an external call to another contract before it has updated its own state. This allows the external contract to call back into the original function and potentially modify the state in an unexpected way, leading to unexpected behavior or loss of funds.

## Impact on Smart Contracts
In smart contracts, reentrancy can lead to serious vulnerabilities, such as allowing attackers to repeatedly withdraw funds or access restricted functionality. If a function that manages assets does not correctly handle state updates and external calls, it opens the door to recursive calls that can drain funds or manipulate contract behavior.

## Lua Code Example
```lua
-- Example of reentrancy in Lua
Contract = {
    balance = 1000
}

function withdraw(amount)
    if Contract.balance >= amount then
        -- External call that could trigger a recursive call to `withdraw`
        call_external_contract("withdraw", amount)
        -- Update balance only after the external call
        Contract.balance = Contract.balance - amount
    end
end
```