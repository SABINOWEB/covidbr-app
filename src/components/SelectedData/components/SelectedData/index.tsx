import React, { useRef } from 'react'
import QueueAnim from 'rc-queue-anim'
import { formatToNumber } from 'brazilian-values'
import { colors } from 'css/theme'

import { CityData, StateData } from 'pages/home/types'
import { OptionType } from 'components/Autocomplete/hooks/types'
import { CardTitle } from 'components/CardTitle/components/CardTitle'
import { Number } from 'components/Number/components/Number'
import { CardSubtitle } from 'components/CardSubtitle/components/CardSubtitle'
import { Legend } from 'components/Legend/components/Legends'
import { BarChart } from 'components/BarChart/components/BarChart'

import Styled from './styles'

interface SelectedDataProps {
  data: CityData | StateData
}

export const SelectedData = ({ data }: SelectedDataProps) => (
  <QueueAnim
    type='bottom'
    delay={500}
    duration={800}
  >
    <CardTitle key={1}>
      {data.name}
    </CardTitle>

    <CardSubtitle key={2}>
      <Number>{formatToNumber(data.cases)}</Number> casos
    </CardSubtitle>

    <Styled.ChartContainer key={3}>
      <BarChart
        data={[
          {
            color: colors.blue,
            value: data.casesMS
          },
          {
            color: colors.red,
            value: data.deaths
          }
        ]}
      />
    </Styled.ChartContainer>

    <QueueAnim
      component={Styled.MetricsContainer}
      type='bottom'
      delay={800}
      duration={600}
    >
      <Legend
        key={1}
        color={colors.blue}
        label='Ativos'
        value={data.casesMS}
      />
      <Legend
        key={2}
        color={colors.red}
        label='Óbitos'
        value={data.deaths}
      />
    </QueueAnim>
  </QueueAnim>
)
