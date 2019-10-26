import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

export const ButtonStyles = styled.button`
  cursor: pointer;
  background-color: ${props => props.theme.white};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  color: ${props => props.theme.primaryColor};
  font-size: 1.2rem;
  transition: ${props => props.theme.defaultTransition};
  padding: 0.75rem 1.5rem;

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`

export const Button = ({
  loading = false,
  size = 'large',
  children,
  ...rest
}) => {
  return (
    <ButtonStyles size={size} {...rest}>
      {/* {loading ? <Loading size={size} /> : children} */}
      {loading ? '' : children}
    </ButtonStyles>
  )
}

export const LinkButton = ({ to, children, buttonProps = {} }) => (
  <Link to={to}>
    <Button {...buttonProps}>{children}</Button>
  </Link>
)
