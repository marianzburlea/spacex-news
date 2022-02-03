import styled from 'styled-components'
import { ModalUnstyled } from '@mui/base'
import { Box as MuiBox } from '@mui/material'

import * as T from './list.type'

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Modal = styled(ModalUnstyled)`
  border: 5px solid red;
`

export const Box = styled(MuiBox)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: fit-content;
  height: fit-content;
  background-color: white;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 50vw;
`

export const List = styled.div<T.StyledList>`
  padding: 1rem;
  border: 1px solid blue;
  height: 100%;
`
