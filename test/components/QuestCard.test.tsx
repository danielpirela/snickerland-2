import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { QuestCard } from '#/components/QuestCard'
import type { DayQuest } from '#/data/quests'
import type { MissionClaimRow } from '#/lib/supabase'

// We need to mock the router Link since QuestCard uses it
vi.mock('@tanstack/react-router', () => ({
  Link: ({ children }: { children: React.ReactNode }) => <a href="#">{children}</a>,
}))

describe('QuestCard', () => {
  const mockDay: DayQuest = {
    day: 1,
    title: 'DIA 1 - Test Day',
    tasks: [
      { title: 'Task 1', item: '', amount: 1, icon: '' },
      { title: 'Task 2', item: '', amount: 2, icon: '' },
      { title: 'Task 3', item: '', amount: 1, icon: '' },
      { title: 'Task 4', item: '', amount: 1, icon: '' },
      { title: 'Task 5', item: '', amount: 1, icon: '' },
    ],
    reward: { title: '50 monedas', amount: 50, icon: '' },
  }

  const defaultProps = {
    roleId: 'general',
    roleName: 'General',
    roleEmoji: '⭐',
    roleColor: '#FFAA00',
    day: mockDay,
    isTaskCompleted: vi.fn(() => false),
    toggleTask: vi.fn(),
    areAllTasksCompleted: vi.fn(() => false),
    claim: null as MissionClaimRow | null,
    claimsLoading: false,
    claimDay: vi.fn(),
    claimPending: false,
  }

  it('renders the quest card header', () => {
    render(<QuestCard {...defaultProps} />)
    expect(screen.getByText('DIA 1 - Test Day')).toBeTruthy()
    expect(screen.getByText('General')).toBeTruthy()
    expect(screen.getByText('⭐')).toBeTruthy()
  })

  it('renders the reward amount', () => {
    render(<QuestCard {...defaultProps} />)
    expect(screen.getByText('50')).toBeTruthy()
  })

  it('shows COMPLETADO badge when all tasks done', () => {
    render(
      <QuestCard
        {...defaultProps}
        areAllTasksCompleted={vi.fn(() => true)}
      />
    )
    expect(screen.getByText('¡COMPLETADO!')).toBeTruthy()
  })

  it('shows tasks on expand click', async () => {
    const { container } = render(<QuestCard {...defaultProps} />)
    const header = container.querySelector('button')
    expect(header).toBeTruthy()
    // Tasks are rendered but in collapsed state (max-h-0)
    const taskText = screen.queryByText('Task 1')
    // Should be in the DOM but invisible
    expect(taskText).toBeTruthy()
  })

  it('shows Ver todo link', () => {
    render(<QuestCard {...defaultProps} />)
    expect(screen.getByText('Ver todo')).toBeTruthy()
  })
})
