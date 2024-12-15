# Tag Handling Security

### Risks:

Tags starting with "X-" could be used to overwrite critical keys or inject malicious actions.

### Recommendation:

Sanitize tags and ensure critical keys are protected.

```lua
function processTags(tags)
    for key, value in pairs(tags) do
        assert(not key:match("^X-"), "Unsafe tag detected")
        -- Process safe tags
    end
end
```