
import React, { useState } from 'react';
import { FaMoneyBillWave, FaUniversity, FaFacebook, FaCopy } from 'react-icons/fa';

const circleImageUrl = 'https://scontent.flhe2-2.fna.fbcdn.net/v/t39.30808-6/441958913_1101763441590078_1661499849292250127_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEqz4HZ7nrq4MO2GjZCmLWyUndePhGGPOBSd14-EYY84JemmkpgXJmIqmnc_8aoftf9HiR5g4Rm9ZJA5Kr-jTUi&_nc_ohc=ONFacCVgrrgQ7kNvgHn1PwH&_nc_ht=scontent.flhe2-2.fna&oh=00_AYD3WF_F6YCEjg0wXiGSIsjXAgkt8OX2h51_V9npKfo_RA&oe=66854222';

const accounts = [
  { type: 'EasyPaisa', number: '03207725050', icon: <FaMoneyBillWave className="text-green-500 text-2xl" />, Name: 'Tahir Sabri' },
  { type: 'JazzCash', number: '03207725050', icon: <FaMoneyBillWave className="text-blue-700 text-2xl" />, Name: 'Tahir Sabri' },
  { type: 'Bank Account', number: '0546257272182', icon: <FaUniversity className="text-blue-500 text-2xl" />, Name: 'Tahir Sabri' },
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
        <h1 className="text-2xl font-bold">LifeCare Medicose</h1>
      <h2 className="text-xl font-bold. mt-4">For Online Payment</h2>
      </header>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 flex flex-col items-center justify-center text-center">
            <div className="flex items-center mb-2">
              {account.icon}
              <span className="ml-2 text-2xl font-medium">{account.type}</span>
            </div>
            <div className="text-red-500 text-lg mb-2 font-bold">Name: {account.Name}</div>
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
            {account.url && (
              <a href={account.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 text-sm">
                Visit Profile
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;





