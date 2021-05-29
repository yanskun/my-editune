export type Setting = {
  [key: string]: {
    key: string
    value: string | number | boolean
    label: string
  }
}

export type State = {
  settings: Setting
}

type Payload = {
  key: string
  value: string | number | boolean
}

export const state: State = {
  settings: {
    trimWhiteSpace: {
      label: "保存時に、文末の無駄なスペースを削除する",
      value: true,
      key: "files.trimTrailingWhitespace"
    },
    tabSize: {
      label: "タブスペースのサイズ",
      value: 2,
      key: "editor.tabSize"
    },
    DnD: {
      label: "選択範囲のドラックアンドドロップを有効にする",
      value: false,
      key: "editor.dragAndDrop"
    },
    minimap: {
      label: "ミニマップを表示",
      value: false,
      key: "editor.minimap.enabled"
    },
    insertNewLine: {
      label: "保存時に、最終行に空行を入れる",
      value: true,
      key: "files.insertFinalNewline"
    },
    trimFinalLines: {
      label: "保存時に、最終行以外の空行を削除する",
      value: true,
      key: "files.trimFinalNewlines"
    }
  }
}

export const mutations = {
  changeSetting(state: State, payload: Payload) {
    if (payload.key in state.settings) {
      state.settings[payload.key].value = payload.value
    } else {
      // error handle
    }
  }
}
