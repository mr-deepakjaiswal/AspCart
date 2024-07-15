import React, { useState } from 'react';

const EmailSettingPage = () => {
  const [settings, setSettings] = useState({
    ratingReminders: false,
    itemUpdateNotifications: false,
    itemCommentNotifications: false,
    teamCommentNotifications: false,
    itemReviewNotifications: false,
    buyerReviewNotifications: false,
    expiringSupportNotifications: false,
    dailySummaryEmails: false,
  });

  const handleChange = (event) => {
    setSettings({
      ...settings,
      [event.target.name]: event.target.checked,
    });
  };

  const handleSave = () => {
    // Implement logic to save settings
    console.log('Saving settings:', settings);
  };

  const handleClose = () => {
    // Implement logic to close the settings modal
    console.log('Closing settings');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Notification Settings</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="ratingReminders"
            checked={settings.ratingReminders}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="ratingReminders" className="ml-2 text-gray-700">
            Rating reminders
          </label>
          <p className="ml-4 text-gray-500 text-sm">
            Send an email reminding me to rate an item a week after purchase
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="itemUpdateNotifications"
            checked={settings.itemUpdateNotifications}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="itemUpdateNotifications" className="ml-2 text-gray-700">
            Item update notifications
          </label>
          <p className="ml-4 text-gray-500 text-sm">
            Send an email when an item I've purchased is updated
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="itemCommentNotifications"
            checked={settings.itemCommentNotifications}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="itemCommentNotifications" className="ml-2 text-gray-700">
            Item comment notifications
          </label>
          <p className="ml-4 text-gray-500 text-sm">
            Send me an email when someone comments on one of my items
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="teamCommentNotifications"
            checked={settings.teamCommentNotifications}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="teamCommentNotifications" className="ml-2 text-gray-700">
            Team comment notifications
          </label>
          <p className="ml-4 text-gray-500 text-sm">
            Send me an email when someone comments on one of my team items
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="itemReviewNotifications"
            checked={settings.itemReviewNotifications}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="itemReviewNotifications" className="ml-2 text-gray-700">
            Item review notifications
          </label>
          <p className="ml-4 text-gray-500 text-sm">
            Send me an email when my items are approved or rejected
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="buyerReviewNotifications"
            checked={settings.buyerReviewNotifications}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="buyerReviewNotifications" className="ml-2 text-gray-700">
            Buyer review notifications
          </label>
          <p className="ml-4 text-gray-500 text-sm">
            Send me an email when someone leaves a review with their rating
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="expiringSupportNotifications"
            checked={settings.expiringSupportNotifications}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="expiringSupportNotifications" className="ml-2 text-gray-700">
            Expiring support notifications
          </label>
          <p className="ml-4 text-gray-500 text-sm">
            Send me emails showing my soon to expire support entitlements
          </p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="dailySummaryEmails"
            checked={settings.dailySummaryEmails}
            onChange={handleChange}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="dailySummaryEmails" className="ml-2 text-gray-700">
            Daily summary emails
          </label>
          <p className="ml-4 text-gray-500 text-sm">
            Send me a daily summary of all items approved or rejected
          </p>
        </div>
      </div>
      <div className="mt-6 flex justify-start">
        <button onClick={handleSave} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Save
        </button>
        <button onClick={handleClose} className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default EmailSettingPage;