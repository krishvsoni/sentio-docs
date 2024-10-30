---
sidebar_position: 1
---

# Sentinel Package

Sentinel Package in-built package of Sentio which deploys sentinals to Spawn your AO process. 


## Start Spawning

- Create a process on [AOS web](https://aosweb.arweave.net/) or [setup AOS locally](https://cookbook_ao.g8way.io/welcome/getting-started.html)
- Copy your Sentinel ID and load to Sentinal Package

```lua
local SENTIO = {}

local index = 1;
function SENTIO.setup(watcher)
    Handlers.add("W1", {
        Action = "RequestMessages"
    }, function(msg)
        print("SETUP WATCHER " .. watcher)
        local messages = {}
        for i = index, #Inbox, 1 do
            table.insert(messages, Inbox[i])
        end
        print(messages)
        print("messages sent")
        Send({
            Target = watcher,
            Action = "Analyze",
            Data = messages
        })
        index = #Inbox;
        print("MSG SENT" .. index)
        print("SENDING TO WATCHER")

    end)
    return "FUNC RAN " .. watcher
end
_G.package.loaded["Sentinel"] = SENTIO

```

- This package will be soon avaliable on [APM](https://apm.betteridea.dev/) .