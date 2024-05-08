import React from 'react';
import { Col, Row, Button } from "react-bootstrap";

const MainToolbar = () => {
  const handleShowDialogNewVacncy = (e) => {
    console.log(e);
  }
  return (
    <Row className="fixed-top mt-0 md-1 pd-1 pl-0 ml-0 bg-light table-bordered">
    {/* className="fixed-top" - row fixed on TOP PAGE  */}
    {/* "mt-0 md-1 ml-0" - margin top, margin bottom, margin left */}
    {/* "pd-1 pl-0" - padding down, padding left */}
      {/* xs={12} одна колонка во всю ширину экрана(12). */}
      {/* Отступ элементов внутри колонки сверху(mt-2) и снизу (mb-2) = 8px */}
      <Col xs={12} className="mt-2 mb-2">
        {/* col-md-1 col-sm-2 все кнопки имеют одинаковую ширину */}
        {/* col-md-1 width on middle device = 1 column,*/}
        {/* col-sm-2 width on small device = 2 columns*/}
        {/* mr-1 отступ справа внутри колонки margin right = 1 (1 char 'x') */}
        <Button className="mr-1 col-md-1 col-sm-2">Все</Button>
        <Button className="mr-1 col-md-1 col-sm-2">Текущие</Button>
        <Button className="mr-1 col-md-1 col-sm-2" onClick={handleShowDialogNewVacncy}>Новая</Button>
        <Button className="mr-1 col-md-1 col-sm-2">Фильтр</Button>
      </Col>
    </Row>
  )
}

export default MainToolbar;