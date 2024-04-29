'use client';

import Link from 'next/link';
import { XocDiaSlider } from './components/DiceSlider';
import { XocDiaItem } from './components/DiceItemV1';

const XOC_DIA_LISTS = [
  {
    nameGame: 'Xóc đĩa A',
    image:
      'https://storage.googleapis.com/nhattm-chat.appspot.com/image/image/1713058629382-80094.jpg?GoogleAccessId=firebase-adminsdk-4m6nl%40nhattm-chat.iam.gserviceaccount.com&Expires=16446992400&Signature=njQ0gq%2F2UNKRWqij9vqZTai1PyLcDgVCyVa68LQxbexOOx7BUJgCl7mtiINewIKhQfvyWdVbgaQ%2Fv5ZES0LNq23Eh2uvq3OumT5YeTdGZ7anWKbbzaKfW4bWvULQ64yGk7q%2FG4zhShE8D3DbjPvyE7ki%2BFaJyRftRxNlEwOstZek%2FgGeNrqF%2FdmgZFRjnQI5SL%2BIE0lkHmPs4wKJhuGBcSKoXOn%2BSoh4OOqBjL8Cnk7iWeFbRDPnfFCZf9L%2Fbyu7jM3hoIZ8sWWQcdFcZKrXQPYODdlqnMg%2B8oVtlp8bTBd6v%2FwjPGag6WrQrqb3oPNSPv8Cl7qQ6lzuiGM7gsuUFA%3D%3D',
    nameAuthor: 'Emi',
    valueStatus: '9',
    nation: 'VN',
    valueL: 900,
    valueC: 976,
  },
  {
    nameGame: 'Xóc đĩa B',
    image:
      'https://storage.googleapis.com/nhattm-chat.appspot.com/image/image/1713058629382-80094.jpg?GoogleAccessId=firebase-adminsdk-4m6nl%40nhattm-chat.iam.gserviceaccount.com&Expires=16446992400&Signature=njQ0gq%2F2UNKRWqij9vqZTai1PyLcDgVCyVa68LQxbexOOx7BUJgCl7mtiINewIKhQfvyWdVbgaQ%2Fv5ZES0LNq23Eh2uvq3OumT5YeTdGZ7anWKbbzaKfW4bWvULQ64yGk7q%2FG4zhShE8D3DbjPvyE7ki%2BFaJyRftRxNlEwOstZek%2FgGeNrqF%2FdmgZFRjnQI5SL%2BIE0lkHmPs4wKJhuGBcSKoXOn%2BSoh4OOqBjL8Cnk7iWeFbRDPnfFCZf9L%2Fbyu7jM3hoIZ8sWWQcdFcZKrXQPYODdlqnMg%2B8oVtlp8bTBd6v%2FwjPGag6WrQrqb3oPNSPv8Cl7qQ6lzuiGM7gsuUFA%3D%3D',
    nameAuthor: 'Emi',
    valueStatus: '9',
    nation: 'VN',
    valueL: 900,
    valueC: 976,
  },
  {
    nameGame: 'Xóc đĩa C',
    image:
      'https://storage.googleapis.com/nhattm-chat.appspot.com/image/image/1713058629382-80094.jpg?GoogleAccessId=firebase-adminsdk-4m6nl%40nhattm-chat.iam.gserviceaccount.com&Expires=16446992400&Signature=njQ0gq%2F2UNKRWqij9vqZTai1PyLcDgVCyVa68LQxbexOOx7BUJgCl7mtiINewIKhQfvyWdVbgaQ%2Fv5ZES0LNq23Eh2uvq3OumT5YeTdGZ7anWKbbzaKfW4bWvULQ64yGk7q%2FG4zhShE8D3DbjPvyE7ki%2BFaJyRftRxNlEwOstZek%2FgGeNrqF%2FdmgZFRjnQI5SL%2BIE0lkHmPs4wKJhuGBcSKoXOn%2BSoh4OOqBjL8Cnk7iWeFbRDPnfFCZf9L%2Fbyu7jM3hoIZ8sWWQcdFcZKrXQPYODdlqnMg%2B8oVtlp8bTBd6v%2FwjPGag6WrQrqb3oPNSPv8Cl7qQ6lzuiGM7gsuUFA%3D%3D',
    nameAuthor: 'Emi',
    valueStatus: '9',
    nation: 'VN',
    valueL: 900,
    valueC: 976,
  },
  {
    nameGame: 'Xóc đĩa E',
    image:
      'https://storage.googleapis.com/nhattm-chat.appspot.com/image/image/1713058629382-80094.jpg?GoogleAccessId=firebase-adminsdk-4m6nl%40nhattm-chat.iam.gserviceaccount.com&Expires=16446992400&Signature=njQ0gq%2F2UNKRWqij9vqZTai1PyLcDgVCyVa68LQxbexOOx7BUJgCl7mtiINewIKhQfvyWdVbgaQ%2Fv5ZES0LNq23Eh2uvq3OumT5YeTdGZ7anWKbbzaKfW4bWvULQ64yGk7q%2FG4zhShE8D3DbjPvyE7ki%2BFaJyRftRxNlEwOstZek%2FgGeNrqF%2FdmgZFRjnQI5SL%2BIE0lkHmPs4wKJhuGBcSKoXOn%2BSoh4OOqBjL8Cnk7iWeFbRDPnfFCZf9L%2Fbyu7jM3hoIZ8sWWQcdFcZKrXQPYODdlqnMg%2B8oVtlp8bTBd6v%2FwjPGag6WrQrqb3oPNSPv8Cl7qQ6lzuiGM7gsuUFA%3D%3D',
    nameAuthor: 'Emi',
    valueStatus: '9',
    nation: 'VN',
    valueL: 900,
    valueC: 976,
  },
  {
    nameGame: 'Xóc đĩa F',
    image:
      'https://storage.googleapis.com/nhattm-chat.appspot.com/image/image/1713058629382-80094.jpg?GoogleAccessId=firebase-adminsdk-4m6nl%40nhattm-chat.iam.gserviceaccount.com&Expires=16446992400&Signature=njQ0gq%2F2UNKRWqij9vqZTai1PyLcDgVCyVa68LQxbexOOx7BUJgCl7mtiINewIKhQfvyWdVbgaQ%2Fv5ZES0LNq23Eh2uvq3OumT5YeTdGZ7anWKbbzaKfW4bWvULQ64yGk7q%2FG4zhShE8D3DbjPvyE7ki%2BFaJyRftRxNlEwOstZek%2FgGeNrqF%2FdmgZFRjnQI5SL%2BIE0lkHmPs4wKJhuGBcSKoXOn%2BSoh4OOqBjL8Cnk7iWeFbRDPnfFCZf9L%2Fbyu7jM3hoIZ8sWWQcdFcZKrXQPYODdlqnMg%2B8oVtlp8bTBd6v%2FwjPGag6WrQrqb3oPNSPv8Cl7qQ6lzuiGM7gsuUFA%3D%3D',
    nameAuthor: 'Emi',
    valueStatus: '9',
    nation: 'VN',
    valueL: 900,
    valueC: 976,
  },
  {
    nameGame: 'Xóc đĩa G',
    image:
      'https://storage.googleapis.com/nhattm-chat.appspot.com/image/image/1713058629382-80094.jpg?GoogleAccessId=firebase-adminsdk-4m6nl%40nhattm-chat.iam.gserviceaccount.com&Expires=16446992400&Signature=njQ0gq%2F2UNKRWqij9vqZTai1PyLcDgVCyVa68LQxbexOOx7BUJgCl7mtiINewIKhQfvyWdVbgaQ%2Fv5ZES0LNq23Eh2uvq3OumT5YeTdGZ7anWKbbzaKfW4bWvULQ64yGk7q%2FG4zhShE8D3DbjPvyE7ki%2BFaJyRftRxNlEwOstZek%2FgGeNrqF%2FdmgZFRjnQI5SL%2BIE0lkHmPs4wKJhuGBcSKoXOn%2BSoh4OOqBjL8Cnk7iWeFbRDPnfFCZf9L%2Fbyu7jM3hoIZ8sWWQcdFcZKrXQPYODdlqnMg%2B8oVtlp8bTBd6v%2FwjPGag6WrQrqb3oPNSPv8Cl7qQ6lzuiGM7gsuUFA%3D%3D',
    nameAuthor: 'Emi',
    valueStatus: '9',
    nation: 'PHL',
    valueL: 900,
    valueC: 976,
  },
];

export default function GamePage(): JSX.Element {
  return (
    <div className="w-full">
      <XocDiaSlider />
      <div
        className="wrapper-games"
        style={{
          paddingTop: 10,
          paddingRight: 44,
          paddingLeft: 8,
        }}>
        <div className="grid grid-cols-3 gap-4">
          {XOC_DIA_LISTS.map((item, index) => (
            <Link href={`${'/'}/${index + 1}/detail`}>
              <XocDiaItem key={index} {...item} onClick={() => {}} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
