type State = {
  settingsJson: {
    [key: string]: string | number | boolean
  }
}

type Payload = {
  key: string
  value: string | number | boolean
}

const settingsList: string[] = [
  "trimWhiteSpace",
  "tabSize",
  "DnD",
  "minimap",
  "insertNewLine",
  "trimFinalLines"
]

export const state: State = {
  settingsJson: {
    "files.trimTrailingWhitespace": true,
    "editor.tabSize": 2,
    "editor.dragAndDrop": false,
    "editor.minimap.enabled": false,
    "files.insertFinalNewline": true,
    "files.trimFinalNewlines": true
  }
}

export const mutations = {
  changeSetting(state: State, payload: Payload) {
    const index = settingsList.indexOf(payload.key)
    state.settingsJson[Object.keys(state.settingsJson)[index]] = payload.value
  }
}
