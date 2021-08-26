import React from 'react'
import { Card, Col, Row } from 'antd'
import { Slider, Switch } from 'antd';

function SearchPanel({data, handleWeight}) {


    return (
        <Slider min={0} max={1000} onChange={handleWeight} defaultValue={0} disabled={false} />
    )
}

export default SearchPanel

