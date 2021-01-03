import { ethers } from 'ethers'

export function formatUnit(
  amount: string,
  decimals: number,
  precision: number
) {
  const a = ethers.BigNumber.from(amount)
  return ethers.utils.formatUnits(a, decimals)
}
