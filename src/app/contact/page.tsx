import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50"> 
        
           <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold flex items-center">
          <Phone className="w-6 h-6 mr-2" />
          Ph no: 1234567890
        </h2>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-medium flex items-center">
          <Mail className="w-6 h-6 mr-2" />
          Email: unhinged@gmail.com
        </h3>
      </div>

      <div className="flex mb-6">
        <MapPin className="w-7 h-7 text-indigo-600 mr-4" />
        <div className="text-base leading-relaxed whitespace-pre-line text-gray-800">
          Address: street1233
          {"\n"}City: Cincinnati
          {"\n"}State/province/area: Ohio
          {"\n"}Zip code: 45214
          {"\n"}Country calling code: +1
          {"\n"}Country: United States
        </div>
      </div>
    </div>
    </div>

  );
}
