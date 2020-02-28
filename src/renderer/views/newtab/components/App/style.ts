import styled, { css } from 'styled-components';
import { centerIcon } from '~/renderer/mixins';

import { ContextMenuRow } from '~/renderer/components/ContextMenu';
import { ITheme } from '~/interfaces';

export const Image = styled.div`
  position: absolute;
  z-index: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s opacity, 1s transform;

  ${({ src }: { src?: string }) => css`
    opacity: ${src === '' ? 0 : 1};
    transform: ${src === '' ? 'scale(1.05)' : 'scale(1)'};
    background-image: url(${src});
  `};
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 2;
    background-attachment: fixed;
    background-image: radial-gradient(
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.5) 100%
      ),
      radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, 0.3) 166%);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column;
  width: calc(100% - 64px);
  margin: 0 auto;
  max-width: 1366px;
  position: relative;
  z-index: 3;
`;

export const RightBar = styled.div`
  position: absolute;
  display: flex;
  right: 32px;
  flex-flow: column;
  height: 100%;
  padding-top: 32px;
`;

export const Menu = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
  justify-content: center;
`;

export const IconItem = styled.div`
  width: 34px;
  height: 34px;
  margin-top: 8px;
  opacity: 0.8;
  z-index: 3;
  cursor: pointer;
  border-radius: 4px;
  position: relative;

  &:first-child {
    margin-top: 0;
  }

  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(2.5px);
  }

  ${({ icon }: { icon?: string }) => css`
    &:after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      ${centerIcon(20)};
      background-image: url(${icon});
      filter: invert(100%);
    }
  `};
`;

export const Refresh = styled(IconItem)`
  position: absolute;
  top: 32px;
  right: 32px;
  margin-top: 0;
`;
