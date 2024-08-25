
import React, { useState } from 'react';
import { FaMoneyBillWave, FaUniversity, FaCopy } from 'react-icons/fa';

const circleImageUrl = 'https://scontent.flhe4-2.fna.fbcdn.net/v/t39.30808-6/456611137_122193437618024161_8809048862155745905_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFw8IJDLJyvKQUnuMt4Ke3dMVGufQv8NmQxUa59C_w2ZAULRpCbJzaB5dclGwlB5XZ7HvViHBdBh2Wsk299VWIy&_nc_ohc=e4h7n33Y1BEQ7kNvgFEKWmw&_nc_zt=23&_nc_ht=scontent.flhe4-2.fna&oh=00_AYBv3ziJlJH3zpZT3xfBHZiQrku-_coB2dBF95KU4hMdeQ&oe=66D0E1D2';

const accounts = [
  { type: 'EasyPaisa', number: '03207725050', icon: <FaMoneyBillWave className="text-green-500 text-2xl" />, owner: 'Tahir Raza Sabri' },
  { type: 'JazzCash', number: '03207725050', icon: <FaMoneyBillWave className="text-blue-700 text-2xl" />, owner: 'Tahir Raza Sabri' },
  { type: 'Bank Account', number: '0546257272182', icon: <FaUniversity className="text-blue-500 text-2xl" />, owner: 'Tahir Raza Sabri' },
];

const Links: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8">
      <header className="flex flex-col items-center text-center mb-8">
        <img 
          src={circleImageUrl} 
          alt="Profile" 
          className="w-34 h-32 rounded-full shadow-lg mb-4"
        />
        <h1 className="text-4xl font-bold">LifeCare Medicose</h1>
      <h2 className="text-xl font-bold. mt-4">For Online Payment</h2>
      </header>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center">
            <div className="flex items-center mb-2">
              {account.icon}
              <span className="ml-2 text-2xl font-medium">{account.type}</span>
            </div>
            <div className="text-red-500 text-lg mb-2 font-bold">Name: {account.owner}</div>
            {account.number && (
              <div className="flex items-center justify-center w-full my-2">
                <span className="text-gray-600 dark:text-gray-400 mr-2 text-sm">{account.number}</span>
                <button
                  className="p-1 rounded-full bg-gray-200 hover:bg-gray-300"
                  onClick={() => copyToClipboard(account.number, index)}
                >
                  <FaCopy className="text-gray-500 text-sm" />
                </button>
                {copiedIndex === index && <span className="ml-2 text-green-500 text-sm">Copied!</span>}
              </div>
            )}
            
          </div>
        ))}
      </div>
       <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          If you want to build similar software, contact us.
        </p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FaWhatsapp className="text-green-500" size={24} />
            <span>+92 300 1234567</span>
          </a>
          <a
            href="https://www.yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-blue-400 hover:text-blue-600"
          >
            www.yourwebsite.com
          </a>
        </div>
      </div>
    </footer>
    </div>


   

    
  );
};

export default Links;





