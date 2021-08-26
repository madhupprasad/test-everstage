import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Row } from 'antd'
import Pokemon from './Pokemon'

function PokemonGrid({ data, minWeight }) {
    return (
        <Row gutter={[16, 24]}>
            {data.map(datum => {
                if (datum.weight >= minWeight) {
                    return (
                        <Col className="gutter-row" span={6} key={datum.id}>
                            <Pokemon datum={datum} />
                        </Col>
                    )
                }
            })}
        </Row>
    )
}

export default PokemonGrid

