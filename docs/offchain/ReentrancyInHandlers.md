# Reentrancy in Handlers

### Risks:

Malicious actions could exploit asynchronous calls (e.g., msg.reply, ao.send) to re-enter the contract and manipulate state variables such as Balances or TotalSupply.

### Recommendation:

Update state variables before making external calls.

**Use a reentrancy lock to prevent multiple entries into sensitive functions.**

```lua
local lock = false

function transfer(from, to, amount)
    assert(not lock, "Reentrancy detected")
    lock = true

    assert(Balances[from] >= amount, "Insufficient balance")
    Balances[from] = Balances[from] - amount
    Balances[to] = Balances[to] + amount

    msg.reply("Transfer successful")
    lock = false
end
```