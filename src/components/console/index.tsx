import React, { ReactElement } from 'react'
import { Window, Header, Button, Body, Dollar, Command, Blinker } from './console.styles'
import { theme } from '../../styles/theme'

export const Console = (): ReactElement => {
  return (
    <Window>
      <Header>
        <Button color={theme.palette.danger.light} />
        <Button color={theme.palette.warning.light} />
        <Button color={theme.palette.success.dark} />
      </Header>
      <Body>
        <Dollar>$</Dollar>
        <Command>npx arsam</Command>
        <Blinker />
      </Body>
    </Window>
  )
}
