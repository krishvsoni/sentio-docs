---
sidebar_position: 7
---
# Floating Pragma

## Description
A floating pragma in a smart contract allows the contract to be compiled with any version of the compiler that meets the specified version range. For example, a pragma like `pragma solidity ^0.8.0;` indicates compatibility with any version from `0.8.0` up to, but not including, `0.9.0`. While this can provide flexibility, it may also introduce compatibility issues with future versions of the compiler.

## Impact on Smart Contracts
Using a floating pragma can lead to unexpected behavior if a newer compiler introduces breaking changes or modifies existing functionalities. This can result in contract malfunctions, loss of funds, or unexpected vulnerabilities that were not present during the initial deployment.

## Lua Code Example
```lua
-- Lua example demonstrating a floating pragma vulnerability
-- Assume this is part of a larger Lua script that specifies compatibility with a range of Lua versions
function checkCompatibility(version)
    if version >= 5.1 and version < 5.4 then
        print("Compatible version")
    else
        print("Incompatible version")
    end
end

-- Example usage
checkCompatibility(5.3)  -- Output: Compatible version
checkCompatibility(5.4)  -- Output: Incompatible version
