import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  Exchange,
  Token,
  Tokens,
  RelayerConfig,
  loadExchange,
  loadTokens,
} from 'api/loopringAPI'
import { AppThunk } from 'app/store'

type RelayerConfigState = RelayerConfig & {
  loadedAt: number | null
  error: string | null
}

const initialState: RelayerConfigState = {
  loadedAt: null,
  version: null,
  addressToTokenMap: null,
  idToTokenMap: null,
  error: null,
}

const RelayerConfigSlice = createSlice({
  name: 'RelayerConfig',
  initialState,
  reducers: {
    loadingRelayerConfigStart(state, action: PayloadAction<undefined>) {
      state.error = null
    },
    loadingRelayerConfigFailure(state, { payload }: PayloadAction<string>) {
      state.error = payload
    },
    loadingRelayerConfigSuccess(
      state,
      { payload }: PayloadAction<RelayerConfig>
    ) {
      state.error = null
      const { version, addressToTokenMap, idToTokenMap } = payload
      state.version = version
      state.addressToTokenMap = addressToTokenMap
      state.idToTokenMap = idToTokenMap
    },
  },
})

const {
  loadingRelayerConfigStart,
  loadingRelayerConfigFailure,
  loadingRelayerConfigSuccess,
} = RelayerConfigSlice.actions
export default RelayerConfigSlice.reducer

export const isRelayerConfigLoaded = (state: RelayerConfigState) => {
  return state.version && state.addressToTokenMap && state.idToTokenMap
}

export const fetchRelayerConfig = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loadingRelayerConfigStart())

    const [exchange, tokens] = await Promise.all([loadExchange(), loadTokens()])

    let addressToTokenMap: Record<string, Token> = {}
    let idToTokenMap: Record<number, Token> = {}
    for (let token of tokens) {
      addressToTokenMap[token.address] = token
      idToTokenMap[token.id] = token
    }

    const config = {
      loadedAt: new Date().getTime(),
      version: exchange.version,
      addressToTokenMap,
      idToTokenMap,
    }
    console.log('config loaded: ', config)
    dispatch(loadingRelayerConfigSuccess(config))
  } catch (err) {
    dispatch(loadingRelayerConfigFailure(err.toString()))
  }
}
