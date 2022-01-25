import React from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'>{
  active?: boolean
  label: string
}
const ButtonToogleStyled = styled.button<{ active?: boolean }>`
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.paddings.quarter};
  background: ${({ theme, active }) => active ? theme.palette.main : theme.palette.mainLighter};
  color: ${({ theme }) => theme.palette.mainColor};
  cursor: pointer;
`

export const ButtonToogle: React.FC<ButtonProps> = ({
  label,
  active,
  ...rest
}) => {
  return (
    <ButtonToogleStyled active={active} {...rest}>
      {label}
    </ButtonToogleStyled>
  )
}