import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { DemoData, DemoDataItem, loadDemoData } from 'api/loopringAPI'
import { AppThunk } from 'app/store'

type DemoFeatureState = DemoData & {
  error: string | null
  status: string | null
}

const initialState: DemoFeatureState = {
  items: null,
  error: null,
  status: null,
}

const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    loadingDemoDataStart(state, action: PayloadAction<undefined>) {
      state.error = null
      state.status = 'loading'
    },
    loadingDemoDataFailure(state, { payload }: PayloadAction<string>) {
      state.error = payload
      state.status = null
    },
    loadingDemoDataSuccess(state, { payload }: PayloadAction<DemoData>) {
      state.error = null
      state.status = null
      state.items = payload.items
    },
    addingDemoDataStart(state, action: PayloadAction<undefined>) {
      state.error = null
      state.status = 'adding'
    },
    addingDemoDataFailure(state, { payload }: PayloadAction<string>) {
      state.error = payload
      state.status = null
    },
    addingDemoDataSuccess(state, { payload }: PayloadAction<DemoDataItem>) {
      state.error = null
      state.status = null
      // TODO
    },
  },
})

const {
  loadingDemoDataStart,
  loadingDemoDataFailure,
  loadingDemoDataSuccess,
  addingDemoDataStart,
  addingDemoDataFailure,
  addingDemoDataSuccess,
} = demoSlice.actions

export default demoSlice.reducer

export const fetchDemoData = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loadingDemoDataStart())

    const [demoData] = await Promise.all([loadDemoData()])
    dispatch(loadingDemoDataSuccess(demoData))
  } catch (err) {
    dispatch(loadingDemoDataFailure(err.toString()))
  }
}

export const addDemoData = (item: DemoDataItem): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(addingDemoDataStart())

    // simulate a remote add API call
    setTimeout(function () {
      dispatch(addingDemoDataSuccess(item))
    }, 1000)
  } catch (err) {
    dispatch(addingDemoDataFailure(err.toString()))
  }
}
