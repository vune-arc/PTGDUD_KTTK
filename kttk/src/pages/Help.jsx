import React from 'react';

export default function Help() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Trợ giúp</h1>
      <p className="text-gray-600 mb-2">
        Chào mừng bạn đến với trung tâm trợ giúp. Dưới đây là một số câu hỏi thường gặp:
      </p>
      <ul className="list-disc pl-6 text-gray-700">
        <li>Làm sao để đổi mật khẩu?</li>
        <li>Làm sao để liên hệ với bộ phận hỗ trợ?</li>
        <li>Cách sử dụng hệ thống Dashboard?</li>
      </ul>
    </div>
  );
}
