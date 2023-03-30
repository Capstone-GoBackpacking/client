import { Equipment } from "src/components"

const MyEquipments = () => {
  const data = [
    {
      id: 1,
      name: 'Item 1',
      tags: ['tag1', 'tag2'],
      price: '20000',
      thumbnail: 'https://sbiker.vn/Upload/Images/Blog/do-bao-ho-di-phuot--.png'
    },
    {
      id: 1,
      name: 'Item 1',
      tags: ['tag1', 'tag2'],
      price: '20000',
      thumbnail: 'https://sbiker.vn/Upload/Images/Blog/do-bao-ho-di-phuot--.png'
    },
    {
      id: 1,
      name: 'Item 1 Item Item Item',
      tags: ['tag1', 'tag2'],
      price: '20000',
      thumbnail: 'https://sbiker.vn/Upload/Images/Blog/do-bao-ho-di-phuot--.png'
    },
    {
      id: 1,
      name: 'Item 1',
      tags: ['tag1', 'tag2', 'tag3', 'tag4'],
      price: '20000',
      thumbnail: 'https://sbiker.vn/Upload/Images/Blog/do-bao-ho-di-phuot--.png'
    },
    {
      id: 1,
      name: 'Item 1',
      tags: ['tag1', 'tag2'],
      price: '20000',
      thumbnail: 'https://sbiker.vn/Upload/Images/Blog/do-bao-ho-di-phuot--.png'
    },
    {
      id: 1,
      name: 'Item 1',
      tags: ['tag1', 'tag2'],
      price: '20000',
      thumbnail: 'https://sbiker.vn/Upload/Images/Blog/do-bao-ho-di-phuot--.png'
    },
    {
      id: 1,
      name: 'Item 1',
      tags: ['tag1', 'tag2'],
      price: '20000',
      thumbnail: 'https://sbiker.vn/Upload/Images/Blog/do-bao-ho-di-phuot--.png'
    }
  ]
  return (
    <div id="equipment-images" className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10">
      {data.map(item => <Equipment key={item.id} id={item.id} name={item.name} tags={item.tags} thumbnail={item.thumbnail} price={item.price} />)}
    </div>
  )
}

export default MyEquipments
