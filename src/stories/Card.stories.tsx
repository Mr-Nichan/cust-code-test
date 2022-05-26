import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FilterCard } from "../components";

export default {
  title: 'Card',
  component: FilterCard
} as ComponentMeta<typeof FilterCard>

export const FilterButton: ComponentStory<typeof FilterCard> = () => <FilterCard />