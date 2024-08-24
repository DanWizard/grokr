# Example content for config.py
config.load_autoconfig()
c.tabs.position = "left"
for i in range(1, 10):
    config.bind(f"<Windows-{i}>", f":tab-select {i}")

c.url.searchengines = {
    "DEFAULT": "https://duckduckgo.com/?kam=google-maps&kp=-2&q={}",
    "am": "https://smile.amazon.com/s?k={}",
    "camel": "https://camelcamelcamel.com/search?sq={}",
    "d": "https://duckduckgo.com/?kam=google-maps&kp=-2&q={}",
    "gh": "https://github.com/search?q={}",
    "r": "https://www.reddit.com/r/{}/",
    "s": "https://searx.be/?q={}",
    # other useful yub nub commands: cnv, gim, tiny, ddg, torf, etc.
    # useful mostly for stuff that combines things like mash, split, weird
    # piping stuff, etc.
    "yub": "https://yubnub.org/parser/parse?command={}",
    "y": "https://www.youtube.com/results?search_query={}",
    "xg": "https://www.x.com/i/grok?p={}",
    "xg": "https://www.x.com/i/grok?p={}",
    "x": "https://www.x.com/search?q={}",
    "c": "https://www.chatgpt.com/?p={}",
}
