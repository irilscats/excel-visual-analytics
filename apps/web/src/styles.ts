import type { CSSProperties } from 'react';

export const layoutStyles: Record<string, CSSProperties> = {
  shell: {
    minHeight: '100vh',
    display: 'grid',
    gridTemplateColumns: '176px minmax(760px, 1fr) 300px',
    background: 'rgb(7, 20, 38)',
    color: 'rgb(234, 244, 255)',
    fontFamily: 'Inter, system-ui, sans-serif'
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px 14px',
    borderRight: '1px solid rgb(23, 59, 98)',
    background: 'rgb(6, 18, 34)'
  },
  workspace: {
    padding: '20px',
    minWidth: 0
  },
  designer: {
    padding: '20px 14px',
    borderLeft: '1px solid rgb(23, 59, 98)',
    background: 'rgb(9, 25, 45)'
  }
};
