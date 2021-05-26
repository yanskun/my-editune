import { createStore } from "vuex"

type State = {
  settingsJson: {
    [key: string]: boolean | number
  }
}

type Payload = {
  key: string
  value: boolean | number
}

const settingsList = [
  "trimWhiteSpace",
  "tabSize",
  "DnD",
  "minimap",
  "insertNewLine",
  "trimFinalLines"
]

export const store = createStore<State>({
  state: {
    settingsJson: {
      "files.trimTrailingWhitespace": true,
      "editor.tabSize": 2,
      "editor.dragAndDrop": false,
      "editor.minimap.enabled": false,
      "files.insertFinalNewline": true,
      "files.trimFinalNewlines": true
    }
  },
  mutations: {
    changeSetting(state: State, payload: Payload) {
      const index = settingsList.indexOf(payload.key)
      state.settingsJson[Object.keys(state.settingsJson)[index]] = payload.value
    }
  }
})

export default store
