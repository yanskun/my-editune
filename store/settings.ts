import { reactive } from "@vue/composition-api"

export type Payload = {
  newValue: string | number | boolean
  key: string
}

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

export default function settingsStore() {
  const state = reactive<State>({
    settings: {
      trimWhiteSpace: {
        label: "有効にすると、ファイルの保存時に末尾の空白をトリミングします。",
        value: true,
        key: "files.trimTrailingWhitespace"
      },
      tabSize: {
        label: "1 つのタブに相当するスペースの数。",
        value: 2,
        key: "editor.tabSize"
      },
      DnD: {
        label:
          "ドラッグ アンド ドロップによる選択範囲の移動をエディターが許可するかどうかを制御します。",
        value: false,
        key: "editor.dragAndDrop"
      },
      minimap: {
        label: "ミニマップを表示するかどうかを制御します。",
        value: false,
        key: "editor.minimap.enabled"
      },
      insertNewLine: {
        label: "有効にすると、ファイルの保存時に最新の行を末尾に挿入します。",
        value: true,
        key: "files.insertFinalNewline"
      },
      trimFinalLines: {
        label:
          "有効にすると、ファイルの保存時に最終行以降の新しい行をトリミングします。",
        value: true,
        key: "files.trimFinalNewlines"
      },
      explorerConfirm: {
        label:
          "ごみ箱を経由したファイル削除時にエクスプローラーが確認を求めるかどうかを制御します。",
        value: true,
        key: "explorer.confirmDelete"
      }
    }
  })

  return {
    get settings() {
      return state.settings
    },

    changeSettings(state: State, payload: Payload) {
      if (payload.key in state.settings) {
        state.settings[payload.key].value = payload.newValue
      } else {
        // error handle
      }
    }
  }
}

export type SettingsStore = ReturnType<typeof settingsStore>
