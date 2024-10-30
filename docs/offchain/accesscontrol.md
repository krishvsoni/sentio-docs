---
sidebar_position: 2
---
# Access Control Issues

## Description
Access control issues occur when functions or variables are accessible to unauthorized users. This lack of restriction may allow attackers to execute functions, view sensitive data, or modify critical contract state without permission.

## Impact on Smart Contracts
Without proper access control, anyone can invoke critical functions, potentially leading to unauthorized fund transfers, data manipulation, or bypassing of contract logic. This can undermine contract security and lead to financial and data loss.

## Lua Code Example
```lua
-- Access control issue in Lua
local owner = "authorized_user"

function sensitiveAction(user)
    -- No access control check here
    print("Sensitive action executed by", user)
end
