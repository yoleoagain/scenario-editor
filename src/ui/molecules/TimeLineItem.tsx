import React from 'react'
import styled from 'styled-components'
import { Timing } from 'ui/utils/time-line'

type Props = { item: Timing }

const TimingItem = styled.div`
  color: #000;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.mainColor};
  background: ${({ theme }) => theme.palette.mainLighter};
  text-align: center;
`

export const TimeLineItem: React.FC<Props> = ({ item }) => {
  let style = {};

  if (item?.rowNode && 'getComputedStyle' in window){
    const { rowNode } = item
    const { paddingTop, paddingBottom, marginBottom, marginTop } = getComputedStyle(rowNode)
        
    style = {
      height: `calc(${paddingTop} + ${paddingBottom} + ${marginTop} + ${marginBottom} + ${rowNode.offsetHeight}px)`,
    }
  }

  return (
    <TimingItem style={style}>
      {item.isEmptyRow ? '' : item.timeLabel}
    </TimingItem>
  )
}