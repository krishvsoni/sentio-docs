---
sidebar_position: 6
---
# Denial of Service (DoS)
Denial of Service due to excessive gas consumption
## Description
A Denial of Service (DoS) attack occurs when a contract contains functions or operations that consume excessive gas or resources, blocking legitimate users from interacting with the contract. These attacks can be intentional or unintentional, often arising from unbounded loops, recursive calls, or overly complex functions.

## Impact on Smart Contracts
DoS vulnerabilities can render contracts inaccessible, leading to a loss of usability and funds. Attackers may exploit these vulnerabilities to freeze assets or prevent critical contract operations, effectively denying service to authorized users.

## Lua Code Example
```lua
-- Lua example demonstrating a potential Denial of Service vulnerability
function processRequests(requests)
    for i = 1, #requests do
        -- Heavy computation or gas-intensive operation
        print("Processing request: " .. requests[i])
    end
end

-- Example usage
local requests = {"Request1", "Request2", "Request3"}
processRequests(requests)  -- Can cause DoS if requests is too large
