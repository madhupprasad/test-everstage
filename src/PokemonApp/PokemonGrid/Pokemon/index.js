import React from 'react'
import PropTypes from 'prop-types'
import { Card, Col, Row } from 'antd'

function Pokemon({datum}) {
    return (
          <Card title={datum.name} bordered={true} style={{ width: 300 }} key={datum.id}>
            <p>height : {datum.height}</p>
            <p>weight : {datum.weight}</p>
            <p>XP : {datum.base_experience}</p>
          </Card>
    )
}

export default Pokemon

