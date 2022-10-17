import React from 'react';
import EditableTable from "./components/EditableTable";

function App() {
  const columns = [
    { field: 'component', fieldName: 'Компонент' },
    { field: 'result', fieldName: 'Результат' },
    { field: 'normalValue', fieldName: 'Норма' },
    { field: 'comment', fieldName: 'Комментарий' },
  ];

  const data = [
    {
      id: "ТТГ",
      result: '3,82',
      normalValue: '0,40 - 3,77',
      comment: 'Выше нормы',
      unit: "мкМЕ/мл",
      smallestNormalValue: "0,40",
      biggestNormalValue: "3,77"
    },
    {
      id: "Свободный Т3",
      result: '3,12',
      normalValue: '2,00 - 4,40',
      comment: 'В норме',
      unit: "пг/мл",
      smallestNormalValue: "2.00",
      biggestNormalValue: "4.40"
    },
    {
      id: "Свободный Т4",
      result: '0,92',
      normalValue: '1,00 - 1,70',
      comment: 'Ниже нормы',
      unit: "нг/дл",
      smallestNormalValue: "1.00",
      biggestNormalValue: "1.70"
    },
    {
      id: "Анти ТПО",
      result: '16',
      normalValue: '0 - 34',
      comment: 'В норме',
      unit: "МЕ/мл",
      smallestNormalValue: "0",
      biggestNormalValue: "34"
    },
    {
      id: "Анти ТГ",
      result: '10',
      normalValue: '0 - 115',
      comment: 'В норме',
      unit: "МЕ/мл",
      smallestNormalValue: "0",
      biggestNormalValue: "115"
    },
    {
      id: "ПСА общий",
      result: '1,060',
      normalValue: '0,000 - 2,000',
      comment: 'В норме',
      unit: "нг/мл",
      smallestNormalValue: "0",
      biggestNormalValue: "2"
    },
    {
      id: "Индекс свободного ПСА",
      result: '47,17',
      normalValue: 'Выше 15%',
      comment: 'В норме',
      unit: "%",
      smallestNormalValue: "16",
      biggestNormalValue: "100"
    },
  ];

  return (
    <>
      <EditableTable columns={columns} rows={data} actions />
    </>
  );
}

export default App;