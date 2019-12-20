import React, { ReactElement } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../../../../stores'
import { config } from '../data'
import { BubbleWrapper } from './bubble.styles'

interface Bubble {
  id: string
  children: ReactElement
  isHovering: boolean
}

export const Bubble = observer(
  ({ id, children, isHovering }: Bubble): ReactElement => {
    const _config: CvConfig = config.find(c => c.id === id)
    if (!_config) {
      return null
    }

    const { CvStore } = useStores()

    return (
      <BubbleWrapper
        config={_config}
        isOpen={CvStore.isOpen}
        pose={CvStore.isOpen || isHovering ? 'visible' : 'hidden'}
      >
        {children}
      </BubbleWrapper>
    )
  },
)
