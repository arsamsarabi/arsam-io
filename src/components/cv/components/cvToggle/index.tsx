import React, { ReactElement } from 'react'
import { observer } from 'mobx-react'
import { useStores } from '../../../../stores'
import { Toggle } from './toggle'

export const CvToggle = observer(
  (): ReactElement => {
    const { CvStore } = useStores()
    return (
      <Toggle onClick={(): void => CvStore.setIsOpen(!CvStore.isOpen)} checked={CvStore.isOpen} />
    )
  },
)
