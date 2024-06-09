'use client';

import { useAppDispatch } from '@/lib';
import { BaccaratItem } from '../BaccaratItem';

const dataDemo = [
  {
    name: 'A',
    status: 'active',
    type: '0',
    typeText: 'MC Baccarat',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
  {
    name: 'A',
    status: 'active',
    type: '0',
    typeText: 'MC Baccarat',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
  {
    name: 'A',
    status: 'active',
    type: '0',
    typeText: 'MC Baccarat',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
  {
    name: 'A',
    status: 'active',
    type: '0',
    typeText: 'MC Baccarat',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
  {
    name: 'A',
    status: 'active',
    type: '0',
    typeText: 'MC Baccarat',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
  {
    name: 'A',
    status: 'active',
    type: '0',
    typeText: 'MC Baccarat',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
  {
    name: 'A',
    status: 'active',
    type: '1',
    typeText: 'Baccarat tốc độ',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
  {
    name: 'A',
    status: 'active',
    type: '1',
    typeText: 'Baccarat tốc độ',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
  {
    name: 'A',
    status: 'active',
    type: '0',
    typeText: 'MC Baccarat',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
  {
    name: 'A',
    status: 'active',
    type: '0',
    typeText: 'MC Baccarat',
    image: 'https://multimedia.vb3539d.net/OutputIOContext/Dealer/80044.jpg',
    national: 'vn',
    nameAuthor: 'Liz',
    valueN: 111,
    valueP: 12,
    valueT: 12,
    id: 1,
  },
];

export function BaccaratHome(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      {dataDemo.map((item, index) => (
        <div
          onClick={() =>
            // dispatch(setGameDiceId({ id: index < 2 ? item.id : data[index % 2 == 0 ? 0 : 1].id }))
            console.log('aaaaa')
          }
          key={index}>
          <BaccaratItem key={index} {...item} />
        </div>
      ))}
    </>
  );
}
