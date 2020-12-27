import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Exchange, Token, Tokens,GlobalConfig, loadExchange, loadTokens} from 'api/loopringAPI'
import { AppThunk } from 'app/store'


type GlobalConfigState = GlobalConfig & {
	loading: boolean
	error: string | null
}

const initialState: GlobalConfigState = {
	version: null,
	addressToTokenMap: null,
	idToTokenMap: null,
	loading: false,
	error: null
}

const globalConfigSlice = createSlice({
	name: 'globalConfig',
	initialState,
	reducers: {
		loadingGlobalConfigStart(state, {payload}: PayloadAction<undefined>) {
			state.error = null
			state.loading = true
		},
		loadingGlobalConfigFailure(state, {payload}: PayloadAction<string>) {
			state.error = payload
			state.loading = false
		}
		,
		loadingGlobalConfigSuccess (state, {payload}: PayloadAction<GlobalConfig>)  {
			state.error = null
			state.loading = false
			const {version, addressToTokenMap, idToTokenMap} = payload
			state.version = version
			state.addressToTokenMap = addressToTokenMap
			state.idToTokenMap = idToTokenMap
		}
	}
})

export const {loadingGlobalConfigStart, loadingGlobalConfigFailure, loadingGlobalConfigSuccess} = globalConfigSlice.actions
export default globalConfigSlice.reducer

export const fetchGlobalConfig = ():AppThunk =>async dispatch => {
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
			idToTokenMap
		}
		dispatch(loadingGlobalConfigSuccess(config))
	} catch(err) {
		dispatch(loadingGlobalConfigFailure(err.toString()))
	}
}