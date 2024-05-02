import React from 'react';
import { Col, Row, Button } from "react-bootstrap";

const MainToolbar = () => {
    return (
      <Row className="fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered">
      {/* Toolbar (comment INside Component)*/}
      {/* Row fixed on TOP PAGE (fixed-top) */}
        {/* Одна колонка во всю ширину экрана (xs=12).*/}
        {/* Отступ элементов внутри колонки сверху(mt-2) и снизу (mb-2) = 8px */}
        <Col xs={12} className="mt-2 mb-2">
            {/* все кнопки имеют одинаковую ширину "col-md-1 col-sm-2" */}
            {/* on middle device 1 column(col-md-1),*/}
            {/* on small device 2 columns(col-sm-2)*/}
            {/* отступ элементов внутри колонки mr-1. margin right = 1 (1 char 'x') */}
            <Button className="mr-1 col-md-1 col-sm-2">Все</Button>
            <Button className="mr-1 col-md-1 col-sm-2">Текущие</Button>
            <Button className="mr-1 col-md-1 col-sm-2">Новая</Button>
            <Button className="mr-1 col-md-1 col-sm-2">Фильтр</Button>
        </Col>
      </Row>
      )
}

export default MainToolbar;