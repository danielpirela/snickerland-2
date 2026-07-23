import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RankingRow } from '#/components/RankingRow'
import type { RankingEntry } from '#/components/RankingRow'

describe('RankingRow', () => {
  const baseEntry: RankingEntry = {
    username: 'Steve',
    completedDays: 5,
    totalDays: 30,
    completedTasks: 35,
    totalTasks: 150,
  }

  it('renders username and stats', () => {
    render(<RankingRow entry={baseEntry} rank={4} currentUsername={null} />)
    expect(screen.getByText('Steve')).toBeTruthy()
    expect(screen.getByText('5/30')).toBeTruthy()
    expect(screen.getByText('35/150')).toBeTruthy()
  })

  it('shows "TÚ" badge for current user', () => {
    render(<RankingRow entry={baseEntry} rank={4} currentUsername="Steve" />)
    expect(screen.getByText('TÚ')).toBeTruthy()
  })

  it('shows rank number for position 4+', () => {
    render(<RankingRow entry={baseEntry} rank={4} currentUsername={null} />)
    expect(screen.getByTitle('Puesto 4')).toBeTruthy()
  })

  it('shows crown for rank 1', () => {
    render(<RankingRow entry={baseEntry} rank={1} currentUsername={null} />)
    expect(screen.getByTitle('Primer puesto')).toBeTruthy()
  })

  it('shows medal for rank 2', () => {
    render(<RankingRow entry={baseEntry} rank={2} currentUsername={null} />)
    expect(screen.getByTitle('Segundo puesto')).toBeTruthy()
  })

  it('shows medal for rank 3', () => {
    render(<RankingRow entry={baseEntry} rank={3} currentUsername={null} />)
    expect(screen.getByTitle('Tercer puesto')).toBeTruthy()
  })

  it('shows progress bar with correct aria', () => {
    render(<RankingRow entry={baseEntry} rank={1} currentUsername={null} />)
    const bar = screen.getByRole('progressbar')
    expect(bar.getAttribute('aria-valuemax')).toBe('30')
    expect(bar.getAttribute('aria-valuenow')).toBe('5')
  })

  it('handles zero totalDays gracefully', () => {
    const entry: RankingEntry = {
      username: 'NewPlayer',
      completedDays: 0,
      totalDays: 0,
      completedTasks: 0,
      totalTasks: 0,
    }
    render(<RankingRow entry={entry} rank={5} currentUsername={null} />)
    expect(screen.getByText('NewPlayer')).toBeTruthy()
    // Should not crash
  })

  it('highlights current user with special border', () => {
    const { container } = render(
      <RankingRow entry={baseEntry} rank={4} currentUsername="Steve" />
    )
    // The article should have style with var(--gold-bright) border
    const article = container.querySelector('article')
    expect(article?.getAttribute('style')).toContain('var(--gold-bright)')
  })

  it('shows featured adventurer label for top 3', () => {
    render(<RankingRow entry={baseEntry} rank={1} currentUsername={null} />)
    expect(screen.getByText('Aventurero destacado')).toBeTruthy()
  })

  it('shows server adventurer label for rank 4+', () => {
    render(<RankingRow entry={baseEntry} rank={4} currentUsername={null} />)
    expect(screen.getByText('Aventurero del servidor')).toBeTruthy()
  })
})
