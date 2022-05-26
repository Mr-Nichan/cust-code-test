import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AddFilterButton } from "../components";

export default {
  title: 'Button',
  component: AddFilterButton
} as ComponentMeta<typeof AddFilterButton>

export const FilterButton: ComponentStory<typeof AddFilterButton> = () => <AddFilterButton name='Add Filter' />