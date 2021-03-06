import BigNumber from 'bignumber.js'
import { BSC_BLOCK_TIME } from 'config'
import { Ifo, IfoStatus, PoolIds } from 'config/constants/types'
import { useBlock, useLpTokenPrice } from 'state/hooks'
import { useIfoV1Contract } from 'hooks/useContract'
import { useEffect, useState } from 'react'
import makeBatchRequest from 'utils/makeBatchRequest'
import { PublicIfoData } from '../types'
import { getStatus } from '../helpers'

/**
 * Gets all public data of an IFO
 */
const useGetPublicIfoData = (ifo: Ifo): PublicIfoData => {
  const { address, releaseBlockNumber } = ifo
  const lpTokenPriceInUsd = useLpTokenPrice(ifo.currency.symbol)
  const [state, setState] = useState({
    status: 'idle' as IfoStatus,
    blocksRemaining: 0,
    secondsUntilStart: 0,
    progress: 5,
    secondsUntilEnd: 0,
    startBlockNum: 0,
    endBlockNum: 0,
    numberPoints: null,
    [PoolIds.poolUnlimited]: {
      raisingAmountPool: new BigNumber(0),
      totalAmountPool: new BigNumber(0),
      offeringAmountPool: new BigNumber(0), // Not know
      limitPerUserInLP: new BigNumber(0), //  Not used
      taxRate: 0, //  Not used
      sumTaxesOverflow: new BigNumber(0), //  Not used
    },
  })
  const { currentBlock } = useBlock()
  const contract = useIfoV1Contract(address)

  useEffect(() => {
    const fetchProgress = async () => {
      const [startBlock, endBlock, raisingAmount, totalAmount] = (await makeBatchRequest([
        contract.methods.startBlock().call,
        contract.methods.endBlock().call,
        contract.methods.raisingAmount().call,
        contract.methods.totalAmount().call,
      ])) as [string, string, string, string]

      const startBlockNum = parseInt(startBlock, 10)
      const endBlockNum = parseInt(endBlock, 10)

      const status = getStatus(currentBlock, startBlockNum, endBlockNum)
      const totalBlocks = endBlockNum - startBlockNum
      const blocksRemaining = endBlockNum - currentBlock

      // Calculate the total progress until finished or until start
      const progress =
        currentBlock > startBlockNum
          ? ((currentBlock - startBlockNum) / totalBlocks) * 100
          : ((currentBlock - releaseBlockNumber) / (startBlockNum - releaseBlockNumber)) * 100

      setState((prev) => ({
        status,
        blocksRemaining,
        secondsUntilStart: (startBlockNum - currentBlock) * BSC_BLOCK_TIME,
        progress,
        secondsUntilEnd: blocksRemaining * BSC_BLOCK_TIME,
        startBlockNum,
        endBlockNum,
        currencyPriceInUSD: null,
        numberPoints: null,
        [PoolIds.poolUnlimited]: {
          ...prev.poolUnlimited,
          raisingAmountPool: new BigNumber(raisingAmount),
          totalAmountPool: new BigNumber(totalAmount),
        },
      }))
    }

    fetchProgress()
  }, [address, currentBlock, contract, releaseBlockNumber, setState])

  return { ...state, currencyPriceInUSD: lpTokenPriceInUsd }
}

export default useGetPublicIfoData
