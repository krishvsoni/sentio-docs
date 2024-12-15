# Replay Attacks

### Risks:

Valid msg.Tags.Action requests could be replayed, leading to duplicate processing of critical actions.

### Recommendation:

Use unique identifiers (e.g., msg.Id) and maintain a history of processed messages.

```lua
local processedMessages = {}

function processAction(msg)
    assert(not processedMessages[msg.Id], "Replay attack detected")
    processedMessages[msg.Id] = true

    -- Handle the action here
end
```