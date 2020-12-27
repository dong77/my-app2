import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Exchange,
  Token,
  Tokens,
  GlobalConfig,
  loadExchange,
  loadTokens,
} from 'api/loopringAPI'
import { AppThunk } from 'app/store'

type GlobalConfigState = GlobalConfig & {
  error: string | null
}

const initialState: GlobalConfigState = {
  version: null,
  addressToTokenMap: null,
  idToTokenMap: null,
  error: null,
}

const globalConfigSlice = createSlice({
  name: 'globalConfig',
  initialState,
  reducers: {
    loadingGlobalConfigStart(state, action: PayloadAction<undefined>) {
      state.error = null
    },
    loadingGlobalConfigFailure(state, { payload }: PayloadAction<string>) {
      state.error = payload
    },
    loadingGlobalConfigSuccess(
      state,
      { payload }: PayloadAction<GlobalConfig>
    ) {
      state.error = null
      const { version, addressToTokenMap, idToTokenMap } = payload
      state.version = version
      state.addressToTokenMap = addressToTokenMap
      state.idToTokenMap = idToTokenMap
    },
  },
})

export const {
  loadingGlobalConfigStart,
  loadingGlobalConfigFailure,
  loadingGlobalConfigSuccess,
} = globalConfigSlice.actions
export default globalConfigSlice.reducer

export const isGlobalConfigLoaded = (state: GlobalConfigState) => {
  return state.version && state.addressToTokenMap && state.idToTokenMap
}

export const fetchGlobalConfig = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loadingGlobalConfigStart())
    const [exchange, tokens] = await Promise.all([loadExchange(), loadTokens()])

    let addressToTokenMap: Record<string, Token> = {}
    let idToTokenMap: Record<number, Token> = {}
    for (let token of tokens) {
      addressToTokenMap[token.address] = token
      idToTokenMap[token.id] = token
    }

    const config = {
      version: exchange.version,
      addressToTokenMap,
      idToTokenMap,
    }
    console.log('config: ', config)
    dispatch(loadingGlobalConfigSuccess(config))
  } catch (err) {
    dispatch(loadingGlobalConfigFailure(err.toString()))
  }
}
