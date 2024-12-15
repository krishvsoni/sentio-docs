# Improper Balance Check

### Risks:

**Negative Balances:** Failure to validate operations can lead to accounts having negative balances.

**Overflow/Underflow:** Lack of proper checks can cause integer overflow or underflow.

### Recommendation:

Use utility functions for addition and subtraction that include checks for edge cases.

```lua
function transfer(from, to, amount)
    assert(Balances[from] >= amount, "Insufficient balance")
    Balances[from] = utils.subtract(Balances[from], amount)
    Balances[to] = utils.add(Balances[to], amount)
end
```