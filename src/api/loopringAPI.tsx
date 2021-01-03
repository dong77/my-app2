import axios from 'axios'
import parseLink, { Links } from 'parse-link-header'

export interface Exchange {
  version: string | null
}

export interface Token {
  address: string
  id: number
  decimals: number
  symbol: string
  name: string
}

export interface Tokens {
  addressToTokenMap: Record<string, Token> | null
  idToTokenMap: Record<number, Token> | null
}

export type GlobalConfig = Exchange & Tokens

//------------- example api

export async function loadExchange(): Promise<Exchange> {
  const url =
    'https://raw.githubusercontent.com/dong77/api-mock/main/exchange.json'
  const resp = await axios.get<Exchange>(url)
  return resp.data
}

export async function loadTokens(): Promise<Token[]> {
  const url =
    'https://raw.githubusercontent.com/dong77/api-mock/main/tokens.json'
  const resp = await axios.get<Token[]>(url)
  return resp.data
}

//---------------api for the demo feature

export interface DemoDataItem {
  label: string
  value: string
  timestamp: number
}

export interface DemoData {
  items: DemoDataItem[]
}

export async function loadDemoData(): Promise<DemoData> {
  const url =
    'https://raw.githubusercontent.com/dong77/api-mock/main/demo_data.json'
  const resp = await axios.get<DemoData>(url)
  return resp.data
}
