import React from 'react';

export default function Notifications() {
  const notifications = [
    'Bạn có 1 thông báo mới từ quản trị viên.',
    'Hệ thống sẽ bảo trì lúc 22:00 hôm nay.',
    'Cập nhật mới cho ứng dụng đã sẵn sàng.',
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Thông báo</h1>
      {notifications.length > 0 ? (
        <ul className="space-y-2">
          {notifications.map((msg, index) => (
            <li key={index} className="bg-pink-50 text-pink-700 p-3 rounded shadow-sm">
              {msg}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">Không có thông báo nào.</p>
      )}
    </div>
  );
}
