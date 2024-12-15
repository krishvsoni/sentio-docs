# State Reset Misuse


### Risks:

A poorly secured ResetState flag could be exploited to reset balances and other critical state variables.

### Recommendation:

Restrict ResetState access to trusted entities only.

Ensure the flag cannot be arbitrarily toggled.

```lua
function resetState()
    assert(msg.sender == ao.id, "Unauthorized access to ResetState")
    Balances = {}
    TotalSupply = 0
end
```
